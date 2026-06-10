import { useState } from "react";
import profileImage from "./assets/images/maggie.jpeg";

const skills = [
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "React.js", level: 85 },
  { name: "Vue.js", level: 80 },
  { name: "HTML5 / CSS3 / SCSS", level: 100 },
  { name: "Node.js / Express.js", level: 78 },
  { name: "PostgreSQL / MongoDB", level: 75 },
  { name: "REST API Integration", level: 82 },
  { name: "Git & GitHub", level: 85 },
  { name: "Figma / UI Design", level: 75 },
  { name: "Responsive Design", level: 90 },
  { name: "Agile & Scrum", level: 95 },
  { name: "User Experience (UX)", level: 95 },
  { name: "NestJS", level: 80 },
];

const projects = [
  {
    title: "Mayondo Wood & Furniture",
    description:
      "A system that tracks all company activities to make work easier.",
    link: "https://github.com/margret256/MAYONDOPROGECT",
    tag: "Management System",
  },
  {
    title: "Beyond Sports Unified Corporate Sports Platform",
    description:
      "A platform for unified corporate sports management and engagement. Improving employee and individual wellness and team building through sports.",
    link: "https://github.com/BEYOND-SPORTS-UNIFIED-CORPORATE",
    tag: "Sports Platform",
  },
  {
    title: "Farm Input Marketplace",
    description:
      "A marketplace for farmers to buy and sell agricultural inputs, bringing farmers and suppliers together.",
    link: "https://github.com/margret256/FARM-INPUT-MARKETPLACE",
    tag: "Mobile App",
  },
  {
    title: "Grocery Buddy",
    description:
      "Add, edit, and delete grocery items, track amounts spent, and manage your list any time.",
    link: "https://github.com/margret256/GRORECYBUDDY",
    tag: "E-Commerce",
  },
];

const contactEmail = "lwangamargret68@gmail.com";
const whatsappNumber = "256773815442";

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim() || "Portfolio contact message";
    const message = form.message.trim();
    const contactMessage = [
      "New portfolio contact message",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const encodedMessage = encodeURIComponent(contactMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    const emailUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.location.href = emailUrl;
    setSubmitStatus("WhatsApp and email drafts opened. Press send to deliver your message.");
  };

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --gold: #f0a500;
          --gold-light: #f5c842;
          --dark-bg: #111111;
          --dark-card: #1a1a1a;
          --dark-border: #2a2a2a;
          --text-primary: #f0ece3;
          --text-muted: #9a9a9a;
        }

        * { box-sizing: border-box; }

        body, #portfolio-root {
          background: var(--dark-bg);
          color: var(--text-primary);
          font-family: 'Segoe UI', sans-serif;
          margin: 0;
        }

        /* NAVBAR */
        .pf-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          background: rgba(10,10,10,0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--dark-border);
          padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px;
        }
        .pf-brand {
          font-size: 1.4rem; font-weight: 800; color: var(--text-primary);
          letter-spacing: -0.5px; text-decoration: none;
        }
        .pf-brand span { color: var(--gold); }
        .pf-nav-links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; }
        .pf-nav-links a {
          color: var(--text-muted); text-decoration: none; font-size: 0.95rem;
          font-weight: 500; letter-spacing: 0.3px; transition: color 0.2s;
        }
        .pf-nav-links a:hover, .pf-nav-links a.active { color: var(--gold); }
        .pf-cta-btn {
          background: var(--gold); color: #111; font-weight: 700;
          border: none; padding: 0.5rem 1.4rem; font-size: 0.9rem;
          cursor: pointer; letter-spacing: 0.3px;
          box-shadow: 3px 3px 0 #7a5200;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .pf-cta-btn:hover { transform: translate(-1px,-1px); box-shadow: 4px 4px 0 #7a5200; }
        .pf-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .pf-hamburger span {
          display: block; width: 24px; height: 2px; background: var(--text-primary);
          transition: 0.3s;
        }
        .pf-mobile-menu {
          display: none; position: fixed; top: 68px; left: 0; right: 0;
          background: #0f0f0f; border-bottom: 1px solid var(--dark-border);
          padding: 1.5rem 2rem; z-index: 998; flex-direction: column; gap: 1.2rem;
        }
        .pf-mobile-menu.open { display: flex; }
        .pf-mobile-menu a { color: var(--text-muted); text-decoration: none; font-size: 1rem; }
        .pf-mobile-menu a:hover { color: var(--gold); }
        @media (max-width: 768px) {
          .pf-nav-links, .pf-cta-btn { display: none; }
          .pf-hamburger { display: flex; }
        }

        /* HERO */
        .pf-hero {
          min-height: 100vh; padding-top: 68px;
          display: flex; align-items: center;
          background: var(--dark-bg);
          position: relative; overflow: hidden;
        }
        .pf-hero::before {
          content: ''; position: absolute; top: -120px; right: -80px;
          width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(240,165,0,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .pf-hero-eyebrow {
          display: flex; align-items: center; gap: 0.8rem;
          color: var(--text-muted); font-size: 0.9rem; letter-spacing: 1px;
          text-transform: uppercase; margin-bottom: 1.2rem;
        }
        .pf-hero-eyebrow::before {
          content: ''; display: block; width: 40px; height: 2px; background: var(--gold);
        }
        .pf-hero h1 {
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          font-weight: 800; line-height: 1.1;
          color: var(--text-primary); margin: 0 0 1rem;
        }
        .pf-hero h1 .highlight { color: var(--gold); }
        .pf-hero-sub {
          color: var(--text-muted); font-size: 1rem; max-width: 480px;
          line-height: 1.7; margin-bottom: 1.5rem;
        }
        .pf-hero-actions {
          display: flex; align-items: center; gap: 1rem;
          flex-wrap: wrap; margin-bottom: 1.5rem;
        }
        .pf-btn-primary {
          background: var(--gold); color: #111; font-weight: 700;
          border: none; padding: 0.75rem 1.8rem; font-size: 0.95rem;
          cursor: pointer; box-shadow: 4px 4px 0 #7a5200;
          transition: transform 0.15s, box-shadow 0.15s; text-decoration: none;
          display: inline-block;
        }
        .pf-btn-primary:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #7a5200; color: #111; }
        .pf-btn-outline {
          background: transparent; color: var(--text-primary);
          border: 1px solid var(--dark-border); font-weight: 600; font-size: 0.9rem;
          cursor: pointer; padding: 0.72rem 1.4rem;
          text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem;
          transition: border-color 0.2s, color 0.2s;
        }
        .pf-btn-outline:hover { border-color: var(--gold); color: var(--gold); }
        .pf-btn-ghost {
          background: transparent; color: var(--text-primary); border: none;
          font-weight: 600; font-size: 0.95rem; cursor: pointer;
          text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem;
          transition: color 0.2s;
        }
        .pf-btn-ghost:hover { color: var(--gold); }

        /* SOCIAL ICON BUTTONS */
        .pf-social-icons {
          display: flex; gap: 0.6rem; margin-bottom: 1.8rem;
        }
        .pf-social-btn {
          width: 40px; height: 40px;
          background: var(--dark-card);
          border: 1px solid var(--dark-border);
          color: var(--text-muted);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none; font-size: 1rem;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .pf-social-btn:hover {
          border-color: var(--gold); color: var(--gold); background: rgba(240,165,0,0.08);
        }

        /* CURRENTLY SEEKING PANEL */
        .pf-seeking-panel {
          border: 1px solid rgba(240,165,0,0.3);
          background: rgba(240,165,0,0.06);
          padding: 1.2rem 1.5rem;
          max-width: 480px;
        }
        .pf-seeking-label {
          font-size: 0.72rem; font-weight: 800; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--gold); margin-bottom: 0.8rem;
        }
        .pf-seeking-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem 1rem;
        }
        .pf-seeking-item {
          display: flex; align-items: center; gap: 0.5rem;
          color: var(--text-muted); font-size: 0.88rem;
        }
        .pf-seeking-item::before {
          content: '✓'; color: var(--gold); font-weight: 700; font-size: 0.85rem;
          flex-shrink: 0;
        }

        /* OPEN TO WORK BADGE */
        .pf-open-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(240,165,0,0.1); border: 1px solid rgba(240,165,0,0.3);
          color: var(--gold); font-size: 0.8rem; font-weight: 600;
          padding: 0.3rem 0.75rem; margin-bottom: 1rem;
        }
        .pf-open-badge::before {
          content: ''; width: 7px; height: 7px; border-radius: 50%;
          background: var(--gold); display: block;
        }

        .pf-hero-image-col {
          display: flex; justify-content: center; align-items: flex-end;
        }
        .pf-hero-img-placeholder {
          width: 320px; height: 420px;
          background: linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 100%);
          border: 2px solid var(--dark-border);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          color: var(--text-muted); font-size: 0.85rem; text-align: center; gap: 0.5rem;
          position: relative; overflow: hidden;
        }
        .pf-hero-img-placeholder::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 60px; background: var(--gold); opacity: 0.15;
          pointer-events: none;
        }
        .pf-avatar-icon { font-size: 4rem; }
        .pf-profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* SECTION SHARED */
        .pf-section-title {
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 800; color: var(--text-primary); margin-bottom: 0.4rem;
        }
        .pf-section-title span { color: var(--gold); }
        .pf-section-sub { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 3rem; }
        .pf-divider { width: 48px; height: 3px; background: var(--gold); margin-bottom: 1rem; }

        /* ABOUT */
        .pf-about { background: var(--dark-bg); padding: 6rem 0; }
        .pf-about-card {
          background: var(--dark-card);
          border: 1px solid var(--dark-border);
          padding: 2.5rem;
        }
        .pf-about-card h4 { color: var(--gold); font-weight: 800; font-size: 1.4rem; margin-bottom: 1rem; }
        .pf-about-card p { color: var(--text-muted); line-height: 1.8; font-size: 0.95rem; }
        .pf-about-card strong { color: var(--text-primary); }
        .pf-img-placeholder {
          width: 100%; aspect-ratio: 4/5; max-width: 320px;
          background: linear-gradient(160deg, #222 0%, #181818 100%);
          border: 1px solid var(--dark-border);
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; color: var(--text-muted); gap: 0.5rem; margin: auto;
          overflow: hidden;
        }
        .pf-tag {
          display: inline-block; background: rgba(240,165,0,0.15);
          color: var(--gold); font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.5px; padding: 0.25rem 0.7rem;
          text-transform: uppercase; margin-bottom: 1rem;
        }

        /* SKILLS SECTION */
        .pf-skills-section { background: #0d0d0d; padding: 6rem 0; }
        .pf-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }
        .pf-skill-item {
          background: var(--dark-card);
          border: 1px solid var(--dark-border);
          padding: 1.2rem 1.5rem;
        }
        .pf-skill-label {
          display: flex; justify-content: space-between;
          font-size: 0.88rem; color: var(--text-primary);
          font-weight: 600; margin-bottom: 0.6rem;
        }
        .pf-skill-label span:last-child { color: var(--gold); }
        .pf-bar-track {
          height: 5px; background: var(--dark-border);
          overflow: hidden;
        }
        .pf-bar-fill {
          height: 100%; background: var(--gold);
          transition: width 1s ease;
        }

        /* PROJECTS */
        .pf-projects { background: var(--dark-bg); padding: 6rem 0; }
        .pf-project-card {
          background: var(--dark-card);
          border: 1px solid var(--dark-border);
          padding: 1.8rem; height: 100%;
          transition: border-color 0.2s, transform 0.2s;
          text-decoration: none; display: block;
          position: relative; overflow: hidden;
        }
        .pf-project-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          width: 3px; height: 100%; background: var(--gold);
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.3s ease;
        }
        .pf-project-card:hover { border-color: var(--gold); transform: translateY(-4px); }
        .pf-project-card:hover::before { transform: scaleY(1); }
        .pf-project-tag {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.8px;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 0.8rem; display: block;
        }
        .pf-project-card h5 {
          color: var(--text-primary); font-weight: 700; font-size: 1.1rem; margin-bottom: 0.7rem;
        }
        .pf-project-card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.7; margin: 0; }
        .pf-project-card .arrow {
          display: inline-block; color: var(--gold); margin-top: 1rem; font-size: 1.1rem;
          transition: transform 0.2s;
        }
        .pf-project-card:hover .arrow { transform: translateX(4px); }

        /* CONTACT */
        .pf-contact { background: #0d0d0d; padding: 6rem 0; }

        .pf-contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .pf-contact-layout { grid-template-columns: 1fr; gap: 2.5rem; }
        }

        /* Contact info left side */
        .pf-contact-left h3 {
          font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;
        }
        .pf-contact-left p {
          color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; margin-bottom: 2rem;
        }
        .pf-contact-item {
          display: flex; align-items: flex-start; gap: 1rem;
          margin-bottom: 1.4rem;
        }
        .pf-contact-icon {
          width: 44px; height: 44px; flex-shrink: 0;
          background: var(--dark-card);
          border: 1px solid var(--dark-border);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem;
        }
        .pf-contact-item-label {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.2rem;
        }
        .pf-contact-item-value {
          color: var(--text-primary); font-size: 0.9rem; font-weight: 500;
        }
        .pf-contact-item-value a {
          color: var(--text-primary); text-decoration: none; transition: color 0.2s;
        }
        .pf-contact-item-value a:hover { color: var(--gold); }

        .pf-whatsapp-btn {
          display: inline-flex; align-items: center; gap: 0.6rem;
          background: transparent;
          border: 1px solid rgba(240,165,0,0.4);
          color: var(--gold); font-weight: 700; font-size: 0.88rem;
          padding: 0.65rem 1.3rem; text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
          margin-top: 0.5rem;
        }
        .pf-whatsapp-btn:hover { background: rgba(240,165,0,0.08); border-color: var(--gold); color: var(--gold); }

        /* Contact form right side */
        .pf-contact-form-col { display: flex; flex-direction: column; gap: 0; }
        .pf-input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        @media (max-width: 500px) { .pf-input-row { grid-template-columns: 1fr; } }
        .pf-input-label {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; color: var(--text-muted);
          display: block; margin-bottom: 0.4rem;
        }
        .pf-input-wrap { margin-bottom: 1rem; }
        .pf-input {
          width: 100%; background: var(--dark-card);
          border: 1px solid var(--dark-border);
          color: var(--text-primary); padding: 0.85rem 1rem;
          font-size: 0.95rem; outline: none;
          transition: border-color 0.2s;
        }
        .pf-input:focus { border-color: var(--gold); }
        .pf-input::placeholder { color: #555; }
        .pf-form-note {
          color: var(--gold);
          font-size: 0.85rem;
          margin-top: 0.9rem;
          text-align: center;
        }

        /* FOOTER */
        .pf-footer {
          background: #0a0a0a;
          border-top: 1px solid var(--dark-border);
          text-align: center; padding: 1.5rem;
          color: var(--text-muted); font-size: 0.85rem;
        }
        .pf-footer span { color: var(--gold); }
      `}</style>

      <div id="portfolio-root">

        {/* NAVBAR */}
        <nav className="pf-nav">
          <a className="pf-brand" href="#home">
            My<span>Portfolio</span>
          </a>
          <ul className="pf-nav-links">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className={activeNav === link ? "active" : ""}
                  onClick={() => setActiveNav(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button className="pf-cta-btn d-none d-md-block">Let's Talk</button>
          <button
            className="pf-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        <div className={`pf-mobile-menu ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        {/* HERO */}
        <section id="home" className="pf-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="pf-open-badge">Open to Work</div>
                <div className="pf-hero-eyebrow">Frontend Developer &amp; Full Stack Engineer</div>
                <h1>
                  Hello, I'm <br />
                  <span className="highlight">Margret Nanyonga</span>
                </h1>
                <p className="pf-hero-sub">
                  Motivated Frontend Developer with hands-on experience building
                  responsive, user-friendly web interfaces. Passionate about
                  community-driven, impact-focused technology.
                </p>
                <div className="pf-hero-actions">
                  <a href="#contact" className="pf-btn-primary">
                    Hire Me 
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/10g637D62ijbP5fezlCVrAzHxKGwNfDEV"
                    className="pf-btn-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="12" x2="12" y2="18"/><polyline points="9 15 12 18 15 15"/></svg>
                    View CV
                  </a>
                  <a href="#projects" className="pf-btn-ghost">
                    Projects &#8594;
                  </a>
                </div>

                {/* SOCIAL ICON BUTTONS */}
                <div className="pf-social-icons">
                  <a
                    href="https://github.com/margret256"
                    target="_blank"
                    rel="noreferrer"
                    className="pf-social-btn"
                    aria-label="GitHub"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/margret-nanyonga-97aa8b375"
                    target="_blank"
                    rel="noreferrer"
                    className="pf-social-btn"
                    aria-label="LinkedIn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a
                    href="https://wa.me/256773815442"
                    target="_blank"
                    rel="noreferrer"
                    className="pf-social-btn"
                    aria-label="WhatsApp"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  </a>
                  <a
                    href="mailto:lwangamargret68@gmail.com"
                    className="pf-social-btn"
                    aria-label="Email"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </a>
                </div>

                {/* CURRENTLY SEEKING PANEL */}
                <div className="pf-seeking-panel">
                  <div className="pf-seeking-label">Currently Seeking</div>
                  <div className="pf-seeking-grid">
                    <span className="pf-seeking-item">Frontend Developer</span>
                    <span className="pf-seeking-item">Backend Developer</span>
                    <span className="pf-seeking-item">Remote &amp; Hybrid Opportunities</span>
                  </div>
                </div>

              </div>
              <div className="col-lg-6 pf-hero-image-col">
                <div className="pf-hero-img-placeholder">
                  <img
                    src={profileImage}
                    alt="Margret Nanyonga"
                    className="pf-profile-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="pf-about">
          <div className="container">
            <div className="pf-divider" />
            <h2 className="pf-section-title">About <span>Me</span></h2>
            <p className="pf-section-sub">About who I am and what I do</p>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="pf-about-card">
                  <div className="row align-items-center g-4">
                    <div className="col-md-5 text-center">
                      <div className="pf-img-placeholder">
                        <img
                          src={profileImage}
                          alt="Margret Nanyonga"
                          className="pf-profile-image"
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <span className="pf-tag">Frontend Developer · Full Stack Engineer</span>
                      <h4>Margret Nanyonga</h4>
                      <p>
                        I'm a motivated <strong>Frontend Developer</strong> with hands-on experience
                        building responsive, user-friendly web interfaces using{" "}
                        <strong>JavaScript, React.js, Vue.js, HTML5, and CSS3</strong>. Currently
                        pursuing a Certificate of Apprenticeship in Software Engineering at{" "}
                        <strong>Refactory Academy, Kampala</strong>.
                      </p>
                      <p>
                        My <strong>mission</strong> is to deliver high-quality digital solutions that
                        help businesses and individuals grow online, with a strong focus on
                        community-driven and impact-focused technology.
                      </p>
                      <a href="#contact" className="pf-btn-primary mt-2">
                        Get In Touch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="pf-skills-section">
          <div className="container">
            <div className="pf-divider" />
            <h2 className="pf-section-title">My <span>Skills</span></h2>
            <p className="pf-section-sub">Technologies and tools I work with</p>
            <div className="pf-skills-grid">
              {skills.map((s) => (
                <div className="pf-skill-item" key={s.name}>
                  <div className="pf-skill-label">
                    <span>{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="pf-bar-track">
                    <div className="pf-bar-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="pf-projects">
          <div className="container">
            <div className="pf-divider" />
            <h2 className="pf-section-title">My <span>Projects</span></h2>
            <p className="pf-section-sub">A selection of things I've built</p>
            <div className="row g-4">
              {projects.map((p) => (
                <div className="col-md-6" key={p.title}>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="pf-project-card"
                  >
                    <span className="pf-project-tag">{p.tag}</span>
                    <h5>{p.title}</h5>
                    <p>{p.description}</p>
                    <span className="arrow">&#8594;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pf-contact">
          <div className="container">
            <div className="pf-divider" />
            <h2 className="pf-section-title">Contact <span>Me</span></h2>
            <p className="pf-section-sub">Have a project in mind? Let's talk.</p>

            <div className="pf-contact-layout">

              {/* LEFT — contact info */}
              <div className="pf-contact-left">
                <h3>Get In Touch</h3>
                <p>
                  I'm always open to discussing new opportunities, interesting projects,
                  or just connecting. Whether you have a project in mind or just want
                  to say hello — I'd love to hear from you.
                </p>

                <div className="pf-contact-item">
                  <div className="pf-contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="pf-contact-item-label">Email</div>
                    <div className="pf-contact-item-value">
                      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                    </div>
                  </div>
                </div>

                <div className="pf-contact-item">
                  <div className="pf-contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
                  </div>
                  <div>
                    <div className="pf-contact-item-label">GitHub</div>
                    <div className="pf-contact-item-value">
                      <a href="https://github.com/margret256" target="_blank" rel="noreferrer">github.com/margret256</a>
                    </div>
                  </div>
                </div>

                <div className="pf-contact-item">
                  <div className="pf-contact-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <div className="pf-contact-item-label">WhatsApp</div>
                    <div className="pf-contact-item-value">
                      <a href="tel:+256773815442">+256 773 815 442</a>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-whatsapp-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* RIGHT — contact form */}
              <form className="pf-contact-form-col" onSubmit={handleSubmit}>
                <div className="pf-input-row">
                  <div>
                    <label className="pf-input-label" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="pf-input"
                      placeholder="Margret Nanyonga"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="pf-input-label" htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="pf-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="pf-input-wrap">
                  <label className="pf-input-label" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="pf-input"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="pf-input-wrap">
                  <label className="pf-input-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="pf-input"
                    rows={7}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="pf-btn-primary w-100">Send Message &#8594;</button>
                {submitStatus && (
                  <p className="pf-form-note" role="status">
                    {submitStatus}
                  </p>
                )}
              </form>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pf-footer">
          <p className="mb-0">
            &#169; 2025 <span>Margret Nanyonga</span>. All Rights Reserved.
          </p>
        </footer>

      </div>
    </>
  );
}
