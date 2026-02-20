import http from "node:http";
import { answerProfileQuestion } from "../shared/profileBrain.mjs";

const PORT = Number(process.env.API_PORT || 8787);

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 30;
const requestsByIp = new Map();

function json(res, status, data) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json");
  res.setHeader("access-control-allow-origin", "*");
  res.end(JSON.stringify(data));
}

function getIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length) return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress ?? "unknown";
}

function rateLimitOk(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const list = requestsByIp.get(ip) ?? [];
  const recent = list.filter((t) => t > windowStart);
  recent.push(now);
  requestsByIp.set(ip, recent);
  return recent.length <= RATE_LIMIT_MAX;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 20_000) reject(new Error("payload_too_large"));
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (!req.url) return json(res, 404, { error: "not_found" });

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("access-control-allow-methods", "GET, POST, OPTIONS");
    res.setHeader("access-control-allow-headers", "content-type");
    res.end();
    return;
  }

  if (!req.url.startsWith("/api/chat")) return json(res, 404, { error: "not_found" });

  const ip = getIp(req);
  if (!rateLimitOk(ip)) return json(res, 429, { error: "rate_limited" });

  try {
    const payload =
      req.method === "POST"
        ? JSON.parse((await readBody(req)) || "{}")
        : {};
    const message = payload?.message || "";
    const { reply, intent } = answerProfileQuestion(message);
    return json(res, 200, { reply, intent });
  } catch {
    return json(res, 400, { error: "bad_request" });
  }
});

server.listen(PORT, () => {
  console.log(`[dev-api] listening on http://localhost:${PORT}`);
});
