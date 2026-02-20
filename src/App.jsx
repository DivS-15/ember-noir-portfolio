import { useEffect, useMemo, useRef, useState } from "react";
import co2PredictionThumb from "./assets/portfolio/model_prediction_results.png";
import kanbanThumb from "./assets/portfolio/kanban-thumb.svg";
import writingThumb from "./assets/portfolio/writing-thumb.svg";

const strengths = [
  "SDE @ Nielsen",
  "ML Engineering",
  "Frontend (React)",
  "C++",
  "Windows / Win32",
  "System Design",
];

const skillsData = [
  {
    group: "Languages",
    items: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Vite", "HTML/CSS", "UI Engineering", "Accessibility"],
  },
  {
    group: "ML / Data",
    items: ["Pandas", "scikit-learn", "PyTorch", "Feature engineering", "Evaluation"],
  },
  {
    group: "Systems",
    items: ["Windows (Win32)", "Multithreading", "Debugging/Profiling", "Networking basics"],
  },
  {
    group: "Tooling",
    items: ["Git", "Docker", "CI/CD", "Linux", "Testing"],
  },
];

const experienceData = [
  {
    role: "Software Development Engineer (SDE)",
    team: "Nielsen",
    period: "",
    tags: ["C++", "Windows", "Frontend"],
    highlights: [
      "Build and maintain production systems for data-driven products",
      "Ship performance-focused C++ features and tooling on Windows",
    ],
  },
  {
    role: "ML Engineering (Projects)",
    team: "Personal + coursework",
    period: "2021 - 2023",
    tags: ["Python", "scikit-learn", "PyTorch"],
    highlights: ["End-to-end training + evaluation pipelines", "Experimentation, metrics, and iteration"],
  },
  {
    role: "B.Tech Graduate",
    team: "BITS Pilani",
    period: "2019 - May 2025",
    tags: ["DSA", "Operating Systems", "Software Engineering"],
    highlights: ["Graduated May 2025", "Projects across ML and frontend engineering"],
  },
];

const portfolioItems = [
  {
    id: "co2-prediction-model",
    title: "Carbon Dioxide Prediction Model",
    category: "ML Engineering",
    description:
      "Machine learning project to model and predict CO₂ levels using a data-to-evaluation workflow.",
    cta: "View on GitHub",
    href: "https://github.com/DivS-15/Carbon-dioxide_prediction_model",
    thumb: `linear-gradient(135deg, rgba(10, 10, 12, 0.25), rgba(10, 10, 12, 0.92)), url(${co2PredictionThumb})`,
  },
  {
    id: "kanban-board",
    title: "Kanban Board",
    category: "Frontend Engineering",
    description:
      "React-based Kanban board with a clean UX for organizing tasks across columns.",
    cta: "View on GitHub",
    href: "https://github.com/DivS-15/kanban-board-react",
    demoCta: "Live Demo",
    demoHref: "https://divs-15.github.io/kanban-board-react/",
    thumb: `linear-gradient(135deg, rgba(255, 122, 24, 0.18), rgba(10, 10, 12, 0.92)), url(${kanbanThumb})`,
  },
  {
    id: "ai-analytics",
    title: "AI Analytics Dashboard",
    category: "Data Platforms",
    description:
      "End-to-end design and implementation of a live operations dashboard with real-time insights.",
    cta: "View case study",
    thumb:
      "linear-gradient(135deg, rgba(255, 122, 24, 0.55), rgba(18, 12, 10, 0.95)), radial-gradient(circle at 20% 20%, rgba(255, 210, 160, 0.35), transparent 55%)",
  },
  {
    id: "blog-firebase-workmanager-images",
    title: "Upload Images to Firebase Cloud Storage (WorkManager)",
    category: "Blog · Android",
    description:
      "A practical guide to reliable background uploads using WorkManager + Firebase Cloud Storage.",
    cta: "Read blog",
    href: "https://proandroiddev.com/upload-images-to-firebase-cloud-storage-workmanager-6586f1ea3f9d",
    thumb: `linear-gradient(135deg, rgba(255, 122, 24, 0.18), rgba(10, 10, 12, 0.92)), url(${writingThumb})`,
  },
  {
    id: "blog-google-news-clone",
    title: "Google News Clone in Kotlin (Paging 3 + Hilt)",
    category: "Blog · Android",
    description:
      "Build a modern news app using Kotlin, Paging 3, and Hilt with a clean architecture approach.",
    cta: "Read blog",
    href: "https://proandroiddev.com/google-news-clone-in-kotlin-using-paging-3-and-hilt-2127d19fe09d",
    thumb: `linear-gradient(135deg, rgba(77, 138, 255, 0.18), rgba(10, 10, 12, 0.92)), url(${writingThumb})`,
  },
  {
    id: "google-dev-library-author",
    title: "Google Dev Library",
    category: "Writing",
    description:
      "More posts and developer content curated on my Google Dev Library author page.",
    cta: "View author page",
    href: "https://devlibrary.withgoogle.com/authors/saraswatdivyansh",
    thumb: `linear-gradient(135deg, rgba(91, 255, 137, 0.14), rgba(10, 10, 12, 0.92)), url(${writingThumb})`,
  },
];

const socialLinks = ["LinkedIn", "GitHub", "Medium", "Twitter"];

export default function App() {
  const [theme, setTheme] = useState("ember-noir");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".section"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;

        const mostVisible = visible.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max
        );

        sections.forEach((section) => {
          section.classList.toggle("is-active", section === mostVisible.target);
        });
      },
      { threshold: [0.35, 0.6, 0.85], rootMargin: "-20% 0px -20% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <header className="topnav">
        <div className="brand">
          <div className="avatar">{'</>'}</div>
          <span className="brand-title">Divyansh Saraswat</span>
        </div>

        <nav className="menu">
          <a className="menu-item is-active" href="#home">Home</a>
          <a className="menu-item" href="#about">About</a>
          <a className="menu-item" href="#skills">Skills</a>
          <a className="menu-item" href="#experience">Experience</a>
          <a className="menu-item" href="#portfolio">Portfolio</a>
          <a className="menu-item" href="#contact">Contact</a>
        </nav>

        <button
          className="btn chip"
          onClick={() => setTheme(t => (t === "ember-noir" ? "light" : "ember-noir"))}
          title="Toggle theme"
        >
          {theme === "ember-noir" ? "Light" : "Noir"}
        </button>
      </header>

      <main className="container">
        <section className="hero-grid" id="home">
          <div className="hero">
            <h1 className="hero-title">
              Who Am I ?
            </h1>
            <p className="hero-subtitle">
              I’m an SDE at Nielsen and a BITS Pilani graduate — an ML engineering enthusiast and frontend engineer.
              I enjoy performance-focused C++ and Windows programming, and shipping clean, user-friendly interfaces.
            </p>

            <div className="hero-actions">
              <a className="btn cta" href="#portfolio">View My Work</a>
              <a className="btn chip" href="#contact">Contact Me</a>
            </div>
          </div>

          <aside className="chat-card">
            <header className="chat-head">
              <span>🗓️ Ask about Divyansh</span>
              <small>Profile Q&A · Instant</small>
            </header>

            <Chat />
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-head">
            <h2 className="section-title">About</h2>
            <p className="section-kicker">A quick intro and what I build</p>
          </div>
          <div className="about-grid">
            <div className="about-photo">
              <div className="about-photo-frame">
                <img
                  className="about-photo-img"
                  src={`${import.meta.env.BASE_URL}about-graduation.png`}
                  alt="Graduation illustration"
                  loading="lazy"
                />
              </div>
              <div className="about-photo-caption">BITS Pilani · May 2025</div>
            </div>
            <div className="about-card">
              <p className="about-copy">
                I’m a Software Development Engineer at Nielsen and a BITS Pilani graduate (May 2025). I work across frontend
                engineering and system-oriented development, and I’m especially interested in ML engineering — from
                data preparation to training, evaluation, and deployment-ready workflows.
              </p>
              <div className="tag-row">
                {strengths.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <p className="muted">
                Based in New Delhi. Comfortable owning features end-to-end: requirements → implementation → testing → release.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-head">
            <h2 className="section-title">Skills</h2>
            <p className="section-kicker">Tools and technologies I use</p>
          </div>
          <div className="skills-grid">
            {skillsData.map((group) => (
              <article className="skill-card" key={group.group}>
                <h3 className="skill-title">{group.group}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span className="tag" key={`${group.group}-${item}`}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head">
            <h2 className="section-title">Experience</h2>
            <p className="section-kicker">Roles, impact, and domains</p>
          </div>
          <div className="experience-grid">
            {experienceData.map((role) => (
              <article className="exp-card" key={role.role}>
                <div className="exp-top">
                  <div>
                    <h3 className="exp-title">{role.role}</h3>
                    <p className="exp-meta">{role.team}</p>
                  </div>
                  {role.period ? <span className="exp-period">{role.period}</span> : null}
                </div>
                <div className="tag-row">
                  {role.tags.map((tag) => (
                    <span className="tag" key={`${role.role}-${tag}`}>{tag}</span>
                  ))}
                </div>
                <div className="exp-highlights">
                  {role.highlights.map((item) => (
                    <div className="exp-highlight" key={`${role.role}-${item}`}>{item}</div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="section-head">
            <h2 className="section-title">Portfolio</h2>
            <p className="section-kicker">Selected projects and case studies</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <article className="portfolio-card" key={item.id}>
                <div className="portfolio-thumb" style={{ "--thumb": item.thumb }} />
                <div className="portfolio-body">
                  <p className="portfolio-meta">{item.category}</p>
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-desc">{item.description}</p>
                  <div className="portfolio-actions">
                    {item.href ? (
                      <a
                        className="btn chip small"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.cta}
                      </a>
                    ) : (
                      <button className="btn chip small" type="button">{item.cta}</button>
                    )}
                    {item.demoHref && (
                      <a
                        className="btn cta small"
                        href={item.demoHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.demoCta ?? "Live Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-head">
            <h2 className="section-title">Contact</h2>
            <p className="section-kicker">Let's collaborate on your next project</p>
          </div>
          <div className="contact-grid">
            <form className="contact-card contact-form" onSubmit={(event) => event.preventDefault()}>
              <label className="field">
                <span>Name</span>
                <input className="input" placeholder="Enter your name" />
              </label>
              <label className="field">
                <span>Email</span>
                <input className="input" type="email" placeholder="name@company.com" />
              </label>
              <label className="field">
                <span>Message</span>
                <textarea className="input textarea" placeholder="Tell me about your project..." />
              </label>
              <button className="btn cta" type="submit">Send Message</button>
            </form>

            <div className="contact-card contact-side">
              <h3 className="contact-title">Prefer email?</h3>
              <p className="contact-email">divyansh.saraswat@example.com</p>
              <p className="muted">Profiles</p>
              <div className="tag-row">
                {socialLinks.map((item) => (
                  <button className="tag" type="button" key={item}>{item}</button>
                ))}
              </div>
              <p className="muted">Typical response time: 24-48 hours</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>(c) 2025 Divyansh Saraswat. All rights reserved.</span>
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Chat() {
  const [messages, setMessages] = useState(() => [
    {
      id: "m1",
      role: "assistant",
      text: "Hi! I can answer questions about Divyansh’s work at Nielsen, BITS Pilani background, ML interests, and C++/Windows + frontend experience. Try a suggested prompt below.",
    },
    { id: "m2", role: "user", text: "What’s your experience with C++ and Windows programming?" },
    {
      id: "m3",
      role: "assistant",
      text: "I use C++ for performance-critical components and tooling, and I’m comfortable with Windows development workflows (debugging, profiling, and Win32-adjacent work) alongside frontend React when the product needs it.",
    },
  ]);

  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, sending]);

  const chips = useMemo(
    () => [
      "Tell me about your Nielsen role",
      "What ML projects have you done?",
      "What’s your C++/Windows experience?",
      "Show recent projects",
    ],
    []
  );

  function addMessage(text) {
    if (!text.trim()) return;
    const userMsg = { id: crypto.randomUUID(), role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);

    fetch("/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ message: text }),
    })
      .then(async (res) => {
        if (res.status === 429) {
          return {
            reply: "Rate limit hit — please wait a bit and try again.",
          };
        }
        if (!res.ok) {
          return {
            reply: "Couldn’t reach the profile brain right now. Please try again in a moment.",
          };
        }
        return await res.json();
      })
      .then((data) => {
        const reply = {
          id: crypto.randomUUID(),
          role: "assistant",
          text: data?.reply || "I didn’t catch that — ask about Nielsen, BITS Pilani, projects, or blogs.",
        };
        setMessages((m) => [...m, reply]);
        setSending(false);
      })
      .catch(() => {
        const reply = {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "Couldn’t reach the profile brain right now. Please try again in a moment.",
        };
        setMessages((m) => [...m, reply]);
        setSending(false);
      });
  }

  function onSubmit(e) {
    e.preventDefault();
    addMessage(input);
  }

  return (
    <>
      <div ref={listRef} className="chat-list">
        {messages.map((m) => (
          <Bubble key={m.id} role={m.role} text={m.text} />
        ))}
        {sending && <TypingBubble />}
      </div>

      <div className="chip-row">
        {chips.map((c) => (
          <button key={c} className="btn chip" onClick={() => addMessage(c)}>
            {c}
          </button>
        ))}
      </div>

      <form className="chat-inputbar" onSubmit={onSubmit}>
        <input
          className="input"
          placeholder="Ask a question about my profile…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn cta" type="submit">Send</button>
      </form>
    </>
  );
}

function Bubble({ role, text }) {
  const isUser = role === "user";
  return (
    <div className={`bubble ${isUser ? "bubble-user" : "bubble-assistant"}`}>
      {text}
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="bubble bubble-assistant typing">
      <span className="dot">•</span>
      <span className="dot">•</span>
      <span className="dot">•</span>
    </div>
  );
}
