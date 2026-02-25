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
          <a className="menu-item" href="#leetcode">LeetCode</a>
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

        <section className="section" id="leetcode">
          <div className="section-head">
            <h2 className="section-title">LeetCode Stats</h2>
            <p className="section-kicker">Problem solving journey</p>
          </div>
          <LeetCodeStats />
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
            <a href="#leetcode">LeetCode</a>
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

function LeetCodeStats() {
  const [stats, setStats] = useState(null);
  const [contestData, setContestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('LeetCodeStats: Fetching data...');
    
    const fetchStats = fetch("https://leetcode-stats.tashif.codes/DivSar_15")
      .then(res => res.json())
      .catch(err => {
        console.error('Stats API error:', err);
        return null;
      });

    const fetchContest = fetch("/api/leetcode/contest")
      .then(res => res.json())
      .catch(err => {
        console.error('Contest API error:', err);
        return null;
      });

    Promise.all([fetchStats, fetchContest])
      .then(([statsData, contestResponse]) => {
        console.log('LeetCodeStats: Data received', statsData, contestResponse);
        
        if (statsData && statsData.status === "success") {
          setStats(statsData);
        } else {
          setError('Failed to load stats');
        }
        
        if (contestResponse && contestResponse.data) {
          setContestData(contestResponse.data);
        }
        
        setLoading(false);
      })
      .catch((error) => {
        console.error('LeetCodeStats: Fetch error', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  console.log('LeetCodeStats: Rendering, loading=', loading, 'stats=', stats, 'error=', error);

  if (loading) {
    return (
      <div className="leetcode-container">
        <div className="leetcode-card">Loading stats...</div>
      </div>
    );
  }

  if (!stats || stats.status !== "success") {
    return (
      <div className="leetcode-container">
        <div className="leetcode-card">
          <p>Unable to load LeetCode stats. {error && `Error: ${error}`}</p>
          <p>Visit my profile at{" "}
            <a href="https://leetcode.com/u/DivSar_15/" target="_blank" rel="noreferrer">
              leetcode.com/u/DivSar_15
            </a>
          </p>
        </div>
      </div>
    );
  }

  const solvedPercentage = ((stats.totalSolved / stats.totalQuestions) * 100).toFixed(1);
  const easyPercentage = ((stats.easySolved / stats.totalEasy) * 100).toFixed(1);
  const mediumPercentage = ((stats.mediumSolved / stats.totalMedium) * 100).toFixed(1);
  const hardPercentage = ((stats.hardSolved / stats.totalHard) * 100).toFixed(1);

  return (
    <div className="leetcode-container">
      {contestData?.userContestRanking && (
        <ContestRatingGraph 
          contestRanking={contestData.userContestRanking}
          contestHistory={contestData.userContestRankingHistory}
        />
      )}
      
      <div className="leetcode-grid">
        <div className="leetcode-card leetcode-overview">
          <div className="leetcode-stat-main">
            <div className="leetcode-number">{stats.totalSolved}</div>
            <div className="leetcode-label">Problems Solved</div>
          </div>
          <div className="leetcode-progress-ring">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--color-border)" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="8"
                strokeDasharray={`${solvedPercentage * 2.827} 282.7`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="leetcode-progress-text">{solvedPercentage}%</div>
          </div>
          <div className="leetcode-meta">
            <div>Ranking: <strong>#{stats.ranking.toLocaleString()}</strong></div>
            <div>Acceptance: <strong>{stats.acceptanceRate}%</strong></div>
          </div>
        </div>

        <div className="leetcode-card leetcode-difficulty">
          <h3 className="leetcode-title">Easy</h3>
          <div className="leetcode-stat">
            <span className="leetcode-count">{stats.easySolved}</span>
            <span className="leetcode-total">/ {stats.totalEasy}</span>
          </div>
          <div className="leetcode-bar">
            <div className="leetcode-bar-fill easy" style={{ width: `${easyPercentage}%` }} />
          </div>
          <div className="leetcode-percentage">{easyPercentage}%</div>
        </div>

        <div className="leetcode-card leetcode-difficulty">
          <h3 className="leetcode-title">Medium</h3>
          <div className="leetcode-stat">
            <span className="leetcode-count">{stats.mediumSolved}</span>
            <span className="leetcode-total">/ {stats.totalMedium}</span>
          </div>
          <div className="leetcode-bar">
            <div className="leetcode-bar-fill medium" style={{ width: `${mediumPercentage}%` }} />
          </div>
          <div className="leetcode-percentage">{mediumPercentage}%</div>
        </div>

        <div className="leetcode-card leetcode-difficulty">
          <h3 className="leetcode-title">Hard</h3>
          <div className="leetcode-stat">
            <span className="leetcode-count">{stats.hardSolved}</span>
            <span className="leetcode-total">/ {stats.totalHard}</span>
          </div>
          <div className="leetcode-bar">
            <div className="leetcode-bar-fill hard" style={{ width: `${hardPercentage}%` }} />
          </div>
          <div className="leetcode-percentage">{hardPercentage}%</div>
        </div>
      </div>

      <SubmissionHeatmap calendar={stats.submissionCalendar} />

      <div className="leetcode-card leetcode-link">
        <p>View full profile and submission history</p>
        <a
          className="btn cta"
          href="https://leetcode.com/u/DivSar_15/"
          target="_blank"
          rel="noreferrer"
        >
          Visit LeetCode Profile
        </a>
      </div>
    </div>
  );
}

function ContestRatingGraph({ contestRanking, contestHistory }) {
  if (!contestRanking || !contestHistory) return null;

  const history = [...contestHistory]
    .filter(c => c.attended)
    .sort((a, b) => a.contest.startTime - b.contest.startTime);

  if (history.length === 0) return null;

  const ratings = history.map(c => c.rating);
  const minRating = Math.min(...ratings);
  const maxRating = Math.max(...ratings);
  const ratingRange = maxRating - minRating;
  const padding = ratingRange * 0.1;

  const chartMin = Math.floor((minRating - padding) / 100) * 100;
  const chartMax = Math.ceil((maxRating + padding) / 100) * 100;
  const chartRange = chartMax - chartMin;

  const points = history.map((contest, index) => {
    const x = (index / (history.length - 1)) * 100;
    const y = 100 - ((contest.rating - chartMin) / chartRange) * 100;
    return { x, y, rating: contest.rating, contest };
  });

  const pathData = points.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ');

  const getBadgeColor = (badgeName) => {
    const colors = {
      'Knight': '#5bff89',
      'Guardian': '#4d8aff',
      'Master': '#ff6d1b',
      'Legend': '#ff6565'
    };
    return colors[badgeName] || '#ffab40';
  };

  const badgeColor = getBadgeColor(contestRanking.badge?.name);

  // Calculate bar chart data (contests per month for last 12 months)
  const now = Date.now() / 1000;
  const oneYearAgo = now - (365 * 24 * 60 * 60);
  const recentContests = history.filter(c => c.contest.startTime >= oneYearAgo);
  
  const monthlyContests = {};
  recentContests.forEach(contest => {
    const date = new Date(contest.contest.startTime * 1000);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    monthlyContests[monthKey] = (monthlyContests[monthKey] || 0) + 1;
  });

  const months = [];
  for (let i = 11; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    months.push({
      key: monthKey,
      count: monthlyContests[monthKey] || 0
    });
  }

  const maxMonthlyCount = Math.max(...months.map(m => m.count), 1);

  return (
    <div className="leetcode-card contest-card">
      <div className="contest-layout">
        <div className="contest-left">
          <div className="contest-stats-row">
            <div className="contest-stat-item">
              <div className="stat-label">Contest Rating</div>
              <div className="stat-value-large">{Math.round(contestRanking.rating)}</div>
            </div>
            
            <div className="contest-badge-inline" style={{ '--badge-color': badgeColor }}>
              <div className="badge-icon-inline">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="badge-info-inline">
                <div className="badge-label-inline">Level</div>
                <div className="badge-name-inline">{contestRanking.badge?.name || 'Unranked'}</div>
              </div>
            </div>

            <div className="contest-stat-item">
              <div className="stat-label">Global Ranking</div>
              <div className="stat-value-medium">
                {contestRanking.globalRanking.toLocaleString()}
                <span className="stat-total">/{(contestRanking.globalRanking / (contestRanking.topPercentage / 100)).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
              </div>
            </div>

            <div className="contest-stat-item">
              <div className="stat-label">Attended</div>
              <div className="stat-value-medium">{contestRanking.attendedContestsCount}</div>
            </div>

            <div className="contest-stat-item">
              <div className="stat-label">Top</div>
              <div className="stat-value-medium">{contestRanking.topPercentage}%</div>
            </div>
          </div>

          <div className="contest-graph-container">
            <svg className="contest-graph-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="ratingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--orange)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--orange)" stopOpacity="1" />
                </linearGradient>
              </defs>
              
              <path
                d={pathData}
                fill="none"
                stroke="url(#ratingGradient)"
                strokeWidth="0.8"
                vectorEffect="non-scaling-stroke"
              />
              
              {points.map((point, i) => (
                <circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="1.2"
                  fill="var(--orange)"
                  className="rating-point"
                >
                  <title>{`${point.contest.contest.title}: ${Math.round(point.rating)}`}</title>
                </circle>
              ))}
            </svg>
            
            <div className="graph-year-labels">
              <span>{new Date(history[0].contest.startTime * 1000).getFullYear()}</span>
              <span>{new Date(history[history.length - 1].contest.startTime * 1000).getFullYear()}</span>
            </div>
          </div>
        </div>

        <div className="contest-right">
          <div className="bar-chart">
            {months.map((month, i) => {
              const height = (month.count / maxMonthlyCount) * 100;
              const isHighlighted = i === months.length - 1 && month.count > 0;
              const date = new Date();
              date.setMonth(date.getMonth() - (11 - i));
              const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
              const percentage = maxMonthlyCount > 0 ? ((month.count / contestRanking.attendedContestsCount) * 100).toFixed(1) : 0;
              
              return (
                <div key={month.key} className="bar-wrapper">
                  <div 
                    className={`bar ${isHighlighted ? 'bar-highlighted' : ''}`}
                    style={{ height: `${height}%` }}
                  />
                  <div className="bar-tooltip">
                    {monthName}: {month.count} contest{month.count !== 1 ? 's' : ''} ({percentage}%)
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmissionHeatmap({ calendar }) {
  if (!calendar) return null;

  try {
    const now = Date.now();
    const oneYear = 365 * 24 * 60 * 60 * 1000;
    const startDate = now - oneYear;

    const weeks = [];
    const currentDate = new Date(startDate);
    currentDate.setHours(0, 0, 0, 0);
    
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0) {
      currentDate.setDate(currentDate.getDate() - dayOfWeek);
    }

    const submissions = Object.entries(calendar).map(([timestamp, count]) => ({
      date: parseInt(timestamp) * 1000,
      count: count,
    }));

    const maxCount = Math.max(...submissions.map(s => s.count), 1);

    let iterations = 0;
    const maxIterations = 400;
    
    while (currentDate.getTime() <= now && iterations < maxIterations) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const dateTimestamp = currentDate.getTime();
        const dayData = submissions.find(s => {
          const sDate = new Date(s.date);
          sDate.setHours(0, 0, 0, 0);
          return sDate.getTime() === dateTimestamp;
        });
        
        week.push({
          date: new Date(dateTimestamp),
          count: dayData ? dayData.count : 0,
        });
        
        currentDate.setDate(currentDate.getDate() + 1);
      }
      weeks.push(week);
      iterations++;
    }

    const getIntensity = (count) => {
      if (count === 0) return 0;
      if (count <= maxCount * 0.25) return 1;
      if (count <= maxCount * 0.5) return 2;
      if (count <= maxCount * 0.75) return 3;
      return 4;
    };

    const months = [];
    let currentMonth = null;
    weeks.forEach((week, weekIndex) => {
      if (week[0]) {
        const monthName = week[0].date.toLocaleDateString('en-US', { month: 'short' });
        if (monthName !== currentMonth) {
          months.push({ name: monthName, weekIndex });
          currentMonth = monthName;
        }
      }
    });

    const totalSubmissions = submissions.reduce((sum, s) => sum + s.count, 0);
    const activeDays = submissions.filter(s => s.count > 0).length;
    
    let maxStreak = 0;
    let currentStreak = 0;
    const sortedDates = [...submissions].sort((a, b) => a.date - b.date);
    
    for (let i = 0; i < sortedDates.length; i++) {
      if (sortedDates[i].count > 0) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    }

    return (
      <div className="leetcode-card heatmap-card">
        <div className="heatmap-header">
          <h3 className="heatmap-title">
            <strong>{totalSubmissions}</strong> submissions in the past year
          </h3>
          <div className="heatmap-stats">
            <span>Total active days: <strong>{activeDays}</strong></span>
            <span>Max streak: <strong>{maxStreak}</strong></span>
          </div>
        </div>
        
        <div className="heatmap-container">
          <div className="heatmap-months">
            {months.map((month, i) => (
              <div
                key={i}
                className="heatmap-month"
                style={{ gridColumn: month.weekIndex + 1 }}
              >
                {month.name}
              </div>
            ))}
          </div>
          
          <div className="heatmap-grid">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="heatmap-week">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`heatmap-day intensity-${getIntensity(day.count)}`}
                  >
                    <div className="heatmap-day-tooltip">
                      {day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}: {day.count} submission{day.count !== 1 ? 's' : ''}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="heatmap-legend">
            <span>Less</span>
            <div className="heatmap-day intensity-0" />
            <div className="heatmap-day intensity-1" />
            <div className="heatmap-day intensity-2" />
            <div className="heatmap-day intensity-3" />
            <div className="heatmap-day intensity-4" />
            <span>More</span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Heatmap error:', error);
    return (
      <div className="leetcode-card">
        <p>Unable to render submission heatmap</p>
      </div>
    );
  }
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
