import { answerProfileQuestion } from "../shared/profileBrain.mjs";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 12;
const requestsByIp = new Map();

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

async function readJson(req) {
  return await new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 20_000) reject(new Error("payload_too_large"));
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  const ip = getIp(req);
  if (!rateLimitOk(ip)) {
    res.statusCode = 429;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: "rate_limited" }));
    return;
  }

  if (req.method !== "POST" && req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("allow", "GET, POST");
    res.end();
    return;
  }

  const payload = req.method === "POST" ? await readJson(req) : {};
  const message = payload?.message ?? req.url?.split("?message=")?.[1] ?? "";
  const { reply, intent } = answerProfileQuestion(decodeURIComponent(message || ""));

  res.statusCode = 200;
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ reply, intent }));
}

