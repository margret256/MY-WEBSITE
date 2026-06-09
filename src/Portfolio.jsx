import { useState } from "react";

const skills = [
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "React.js", level: 85 },
  { name: "Vue.js", level: 80 },
  { name: "HTML5 / CSS3 / SCSS", level: 92 },
  { name: "Node.js / Express.js", level: 78 },
  { name: "PostgreSQL / MongoDB", level: 75 },
  { name: "REST API Integration", level: 82 },
  { name: "Git & GitHub", level: 85 },
  { name: "Figma / UI Design", level: 75 },
  { name: "Responsive Design", level: 90 },
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
    title: "To-Do List",
    description:
      "A clean task management app that helps users organise and track tasks efficiently.",
    link: "https://github.com/margret256/TO-DO-LIST",
    tag: "Productivity",
  },
  {
    title: "Form Data Project",
    description:
      "A project that collects and manages user input with validation and persistence.",
    link: "https://github.com/margret256/FORMDATAPROJECT",
    tag: "Web Forms",
  },
  {
    title: "Grocery Buddy",
    description:
      "Add, edit, and delete grocery items, track amounts spent, and manage your list any time.",
    link: "https://github.com/margret256/GRORECYBUDDY",
    tag: "E-Commerce",
  },
];

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.id]: e.target.value });

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
          line-height: 1.7; margin-bottom: 2rem;
        }
        .pf-hero-actions {
          display: flex; align-items: center; gap: 1.5rem;
          flex-wrap: wrap; margin-bottom: 1rem;
        }
        .pf-btn-primary {
          background: var(--gold); color: #111; font-weight: 700;
          border: none; padding: 0.75rem 1.8rem; font-size: 0.95rem;
          cursor: pointer; box-shadow: 4px 4px 0 #7a5200;
          transition: transform 0.15s, box-shadow 0.15s; text-decoration: none;
          display: inline-block;
        }
        .pf-btn-primary:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #7a5200; color: #111; }
        .pf-btn-ghost {
          background: transparent; color: var(--text-primary); border: none;
          font-weight: 600; font-size: 0.95rem; cursor: pointer;
          text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem;
          transition: color 0.2s;
        }
        .pf-btn-ghost:hover { color: var(--gold); }
        .pf-hero-image-col {
          display: flex; justify-content: center; align-items: flex-end;
        }
        .pf-hero-img-placeholder {
          width: 320px; height: 420px;
          background: linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 100%);
          border: 2px solid var(--dark-border);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          color: var(--text-muted); font-size: 0.85rem; text-align: center; gap: 0.5rem;
          position: relative;
        }
        .pf-hero-img-placeholder::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 60px; background: var(--gold); opacity: 0.15;
        }
        .pf-avatar-icon { font-size: 4rem; }

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
        .pf-contact-form { max-width: 560px; margin: auto; }
        .pf-input {
          width: 100%; background: var(--dark-card);
          border: 1px solid var(--dark-border);
          color: var(--text-primary); padding: 0.85rem 1rem;
          font-size: 0.95rem; margin-bottom: 1rem; outline: none;
          transition: border-color 0.2s;
        }
        .pf-input:focus { border-color: var(--gold); }
        .pf-input::placeholder { color: #555; }
        .pf-contact-info { color: var(--text-muted); font-size: 0.9rem; margin-top: 2rem; }
        .pf-contact-info a { color: var(--gold); text-decoration: none; }
        .pf-contact-info a:hover { text-decoration: underline; }

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
                    Hire Me Now
                  </a>
                  <a href="#projects" className="pf-btn-ghost">
                    Portfolio &#8594;
                  </a>
                </div>
              </div>
              <div className="col-lg-6 pf-hero-image-col">
                <div className="pf-hero-img-placeholder">
                  <div className="pf-avatar-icon">&#128105;&#8205;&#128187;</div>
                  <span>Replace with your photo</span>
                  <span style={{ fontSize: "0.75rem" }}>src="images/maggie.jpg"</span>
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
            <p className="pf-section-sub">A little bit about who I am and what I do</p>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="pf-about-card">
                  <div className="row align-items-center g-4">
                    <div className="col-md-5 text-center">
                      <div className="pf-img-placeholder">
                        <div style={{ fontSize: "3rem" }}>&#128444;&#65039;</div>
                        <span style={{ fontSize: "0.8rem" }}>images/maggie.jpg</span>
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
            <div className="pf-contact-form">
              <input
                type="text"
                id="name"
                className="pf-input"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                id="email"
                className="pf-input"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                id="message"
                className="pf-input"
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
              />
              <button className="pf-btn-primary w-100">Send Message</button>
              <div className="pf-contact-info text-center">
                <p className="mb-1">
                  Email:{" "}
                  <a href="mailto:lwangamargret68@gmail.com">lwangamargret68@gmail.com</a>
                </p>
                <p>
                  Phone: <a href="tel:+256773815442">+256 773 815 442</a>
                </p>
                <p>
                  GitHub:{" "}
                  <a href="https://github.com/margret256" target="_blank" rel="noreferrer">
                    github.com/margret256
                  </a>
                </p>
              </div>
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