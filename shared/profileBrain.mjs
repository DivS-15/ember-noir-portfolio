const PROFILE = {
  name: "Divyansh Saraswat",
  role: "Software Development Engineer (SDE)",
  company: "Nielsen",
  education: {
    school: "BITS Pilani",
    graduation: "May 2025",
  },
  focus: ["ML engineering", "frontend engineering", "C++", "Windows programming"],
  links: {
    devLibrary: "https://devlibrary.withgoogle.com/authors/saraswatdivyansh",
    blogs: [
      "https://proandroiddev.com/upload-images-to-firebase-cloud-storage-workmanager-6586f1ea3f9d",
      "https://proandroiddev.com/google-news-clone-in-kotlin-using-paging-3-and-hilt-2127d19fe09d",
    ],
    github: "https://github.com/DivS-15",
    projects: {
      co2: "https://github.com/DivS-15/Carbon-dioxide_prediction_model",
      kanban: "https://github.com/DivS-15/kanban-board-react",
      kanbanLive: "https://divs-15.github.io/kanban-board-react/",
    },
  },
};

const INTENTS = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "sup"],
    respond: () =>
      `Hi! I’m ${PROFILE.name}. Ask about my work at ${PROFILE.company}, C++/Windows experience, ML interests, projects, or writing.`,
  },
  {
    id: "nielsen",
    keywords: ["nielsen", "sde", "job", "work", "role", "experience", "what do you do"],
    respond: () =>
      `${PROFILE.role} at ${PROFILE.company}. I work on production software with a focus on shipping reliable features, performance-minded C++ work, and frontend pieces when needed.`,
  },
  {
    id: "education",
    keywords: ["bits", "pilani", "college", "university", "graduate", "graduation", "degree", "education"],
    respond: () =>
      `${PROFILE.education.school} graduate (${PROFILE.education.graduation}). Strong CS fundamentals and projects across ML and frontend engineering.`,
  },
  {
    id: "cpp_windows",
    keywords: ["c++", "cpp", "windows", "win32", "visual studio", "msvc", "debug", "profil", "native"],
    respond: () =>
      `I use C++ for performance-critical components and tooling, and I’m comfortable with Windows development workflows (debugging, profiling, multithreading, and Win32-adjacent work).`,
  },
  {
    id: "ml",
    keywords: ["ml", "machine learning", "model", "training", "pytorch", "sklearn", "xgboost", "data", "features"],
    respond: () =>
      `I’m an ML engineering enthusiast: data prep → feature engineering → training/evaluation → iteration. I enjoy building reproducible pipelines and measuring improvements with the right metrics.`,
  },
  {
    id: "projects",
    keywords: ["project", "projects", "portfolio", "work sample", "repo", "github"],
    respond: () =>
      `Projects: CO₂ prediction model (${PROFILE.links.projects.co2}) and a React Kanban board (${PROFILE.links.projects.kanban}) with a live demo (${PROFILE.links.projects.kanbanLive}). GitHub: ${PROFILE.links.github}`,
  },
  {
    id: "writing",
    keywords: ["blog", "blogs", "writing", "article", "articles", "post", "posts", "dev library", "devlibrary"],
    respond: () =>
      `Writing: Google Dev Library author page (${PROFILE.links.devLibrary}). Recent posts: ${PROFILE.links.blogs.join(" · ")}`,
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "message", "connect", "linkedin"],
    respond: () =>
      `Best way is the Contact section on this site. You can also find me on GitHub (${PROFILE.links.github}) and on my Google Dev Library author page (${PROFILE.links.devLibrary}).`,
  },
];

function normalize(text) {
  return (text || "").toLowerCase().trim();
}

function scoreIntent(text, intent) {
  let score = 0;
  for (const keyword of intent.keywords) {
    if (text.includes(keyword)) score += keyword.length >= 5 ? 3 : 2;
  }
  return score;
}

export function answerProfileQuestion(message) {
  const text = normalize(message);
  if (!text) {
    return {
      reply:
        "Ask me about Nielsen, BITS Pilani (May 2025), C++/Windows work, ML interests, projects, or blogs.",
      intent: "empty",
    };
  }

  const ranked = INTENTS.map((intent) => ({ intent, score: scoreIntent(text, intent) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!ranked.length) {
    return {
      reply:
        "I can help with: Nielsen role, BITS Pilani (May 2025), C++/Windows, ML interests, projects, and blogs. What would you like to know?",
      intent: "fallback",
    };
  }

  const top = ranked[0].intent;
  return { reply: top.respond(), intent: top.id };
}

