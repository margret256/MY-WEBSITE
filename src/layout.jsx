import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { key: "home", label: "Home", to: "/" },
  { key: "about", label: "About", to: "/#about" },
  { key: "skills", label: "Skills", to: "/#skills" },
  { key: "uiux", label: "UI/UX", to: "/ui-ux" },
  { key: "projects", label: "Projects", to: "/#projects" },
  { key: "contact", label: "Contact", to: "/#contact" },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (item) => {
    if (item.key === "uiux") return location.pathname === "/ui-ux";
    if (item.key === "home") return location.pathname === "/" && !location.hash;
    return location.pathname === "/" && location.hash === `#${item.key}`;
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />

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
        .pf-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          background: rgba(10,10,10,0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--dark-border);
          padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between;
          height: 68px;
        }
        .pf-brand { font-size: 1.4rem; font-weight: 800; color: var(--text-primary); letter-spacing: -0.5px; text-decoration: none; }
        .pf-brand span { color: var(--gold); }
        .pf-nav-links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; }
        .pf-nav-links a { color: var(--text-muted); text-decoration: none; font-size: 0.95rem; font-weight: 500; letter-spacing: 0.3px; transition: color 0.2s; }
        .pf-nav-links a:hover, .pf-nav-links a.active { color: var(--gold); }
        .pf-cta-btn { background: var(--gold); color: #111; font-weight: 700; border: none; padding: 0.5rem 1.4rem; font-size: 0.9rem; cursor: pointer; letter-spacing: 0.3px; box-shadow: 3px 3px 0 #7a5200; transition: transform 0.15s, box-shadow 0.15s; text-decoration:none; display:inline-block; }
        .pf-cta-btn:hover { transform: translate(-1px,-1px); box-shadow: 4px 4px 0 #7a5200; color:#111; }
        .pf-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .pf-hamburger span { display: block; width: 24px; height: 2px; background: var(--text-primary); transition: 0.3s; }
        .pf-mobile-menu { display: none; position: fixed; top: 68px; left: 0; right: 0; background: #0f0f0f; border-bottom: 1px solid var(--dark-border); padding: 1.5rem 2rem; z-index: 998; flex-direction: column; gap: 1.2rem; }
        .pf-mobile-menu.open { display: flex; }
        .pf-mobile-menu a { color: var(--text-muted); text-decoration: none; font-size: 1rem; }
        .pf-mobile-menu a:hover { color: var(--gold); }
        @media (max-width: 768px) { .pf-nav-links, .pf-cta-btn { display: none; } .pf-hamburger { display: flex; } }
        .pf-hero { min-height: 100vh; padding-top: 68px; display: flex; align-items: center; background: var(--dark-bg); position: relative; overflow: hidden; }
        .pf-hero::before { content: ''; position: absolute; top: -120px; right: -80px; width: 480px; height: 480px; border-radius: 50%; background: radial-gradient(circle, rgba(240,165,0,0.12) 0%, transparent 70%); pointer-events: none; }
        .pf-hero-eyebrow { display: flex; align-items: center; gap: 0.8rem; color: var(--text-muted); font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1.2rem; }
        .pf-hero-eyebrow::before { content: ''; display: block; width: 40px; height: 2px; background: var(--gold); }
        .pf-hero h1 { font-size: clamp(2.6rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; color: var(--text-primary); margin: 0 0 1rem; }
        .pf-hero h1 .highlight { color: var(--gold); }
        .pf-hero-sub { color: var(--text-muted); font-size: 1rem; max-width: 480px; line-height: 1.7; margin-bottom: 1.5rem; }
        .pf-hero-actions { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .pf-btn-primary { background: var(--gold); color: #111; font-weight: 700; border: none; padding: 0.75rem 1.8rem; font-size: 0.95rem; cursor: pointer; box-shadow: 4px 4px 0 #7a5200; transition: transform 0.15s, box-shadow 0.15s; text-decoration: none; display: inline-block; }
        .pf-btn-primary:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #7a5200; color: #111; }
        .pf-btn-outline { background: transparent; color: var(--text-primary); border: 1px solid var(--dark-border); font-weight: 600; font-size: 0.9rem; cursor: pointer; padding: 0.72rem 1.4rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; transition: border-color 0.2s, color 0.2s; }
        .pf-btn-outline:hover { border-color: var(--gold); color: var(--gold); }
        .pf-btn-ghost { background: transparent; color: var(--text-primary); border: none; font-weight: 600; font-size: 0.95rem; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem; transition: color 0.2s; }
        .pf-btn-ghost:hover { color: var(--gold); }
        .pf-social-icons { display: flex; gap: 0.6rem; margin-bottom: 1.8rem; }
        .pf-social-btn { width: 40px; height: 40px; background: var(--dark-card); border: 1px solid var(--dark-border); color: var(--text-muted); display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 1rem; transition: border-color 0.2s, color 0.2s, background 0.2s; }
        .pf-social-btn:hover { border-color: var(--gold); color: var(--gold); background: rgba(240,165,0,0.08); }
        .pf-seeking-panel { border: 1px solid rgba(240,165,0,0.3); background: rgba(240,165,0,0.06); padding: 1.2rem 1.5rem; max-width: 480px; }
        .pf-seeking-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: var(--gold); margin-bottom: 0.8rem; }
        .pf-seeking-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem 1rem; }
        .pf-seeking-item { display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-size: 0.88rem; }
        .pf-seeking-item::before { content: '✓'; color: var(--gold); font-weight: 700; font-size: 0.85rem; flex-shrink: 0; }
        .pf-open-badge { display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(240,165,0,0.1); border: 1px solid rgba(240,165,0,0.3); color: var(--gold); font-size: 0.8rem; font-weight: 600; padding: 0.3rem 0.75rem; margin-bottom: 1rem; }
        .pf-open-badge::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--gold); display: block; }
        .pf-hero-image-col { display: flex; justify-content: center; align-items: flex-end; }
        .pf-hero-img-placeholder { width: 320px; height: 420px; background: linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 100%); border: 2px solid var(--dark-border); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-muted); font-size: 0.85rem; text-align: center; gap: 0.5rem; position: relative; overflow: hidden; }
        .pf-hero-img-placeholder::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 60px; background: var(--gold); opacity: 0.15; pointer-events: none; }
        .pf-profile-image { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pf-section-title { font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 800; color: var(--text-primary); margin-bottom: 0.4rem; }
        .pf-section-title span { color: var(--gold); }
        .pf-section-sub { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 3rem; }
        .pf-divider { width: 48px; height: 3px; background: var(--gold); margin-bottom: 1rem; }
        .pf-about { background: var(--dark-bg); padding: 6rem 0; }
        .pf-about-card { background: var(--dark-card); border: 1px solid var(--dark-border); padding: 2.5rem; }
        .pf-about-card h4 { color: var(--gold); font-weight: 800; font-size: 1.4rem; margin-bottom: 1rem; }
        .pf-about-card p { color: var(--text-muted); line-height: 1.8; font-size: 0.95rem; }
        .pf-about-card strong { color: var(--text-primary); }
        .pf-img-placeholder { width: 100%; aspect-ratio: 4/5; max-width: 320px; background: linear-gradient(160deg, #222 0%, #181818 100%); border: 1px solid var(--dark-border); display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-muted); gap: 0.5rem; margin: auto; overflow: hidden; }
        .pf-tag { display: inline-block; background: rgba(240,165,0,0.15); color: var(--gold); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; padding: 0.25rem 0.7rem; text-transform: uppercase; margin-bottom: 1rem; }
        .pf-skills-section { background: #0d0d0d; padding: 6rem 0; }
        .pf-skill-tabs { display: flex; gap: 0.4rem; flex-wrap: wrap; background: #1a1a1a; border: 1px solid var(--dark-border); padding: 0.4rem; width: fit-content; margin: 0 auto 2.5rem; }
        .pf-skill-tab { background: transparent; border: none; color: var(--text-muted); font-size: 0.88rem; font-weight: 600; padding: 0.55rem 1.4rem; cursor: pointer; transition: color 0.2s, background 0.2s; letter-spacing: 0.3px; }
        .pf-skill-tab.active { background: var(--gold); color: #111; }
        .pf-skill-tab:not(.active):hover { color: var(--gold); }
        .pf-skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem; }
        .pf-skill-card { background: var(--dark-card); border: 1px solid var(--dark-border); padding: 2rem 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.85rem; transition: border-color 0.25s, transform 0.25s, background 0.25s; cursor: default; }
        .pf-skill-card:hover { border-color: var(--gold); background: rgba(240,165,0,0.05); transform: translateY(-4px); }
        .pf-skill-icon-wrap { width: 56px; height: 56px; background: rgba(240,165,0,0.08); border: 1px solid rgba(240,165,0,0.2); display: flex; align-items: center; justify-content: center; transition: background 0.25s, border-color 0.25s; }
        .pf-skill-card:hover .pf-skill-icon-wrap { background: rgba(240,165,0,0.15); border-color: rgba(240,165,0,0.5); }
        .pf-skill-icon-wrap img { width: 32px; height: 32px; object-fit: contain; }
        .pf-skill-name { font-size: 0.82rem; font-weight: 600; color: var(--text-muted); text-align: center; transition: color 0.25s; }
        .pf-skill-card:hover .pf-skill-name { color: var(--text-primary); }
        .pf-uiux-hero { min-height: 40vh; padding: 68px 0 3rem; display: flex; align-items: center; background: var(--dark-bg); }
        .pf-uiux { background: var(--dark-bg); padding: 3rem 0 6rem; }
        .pf-uiux-item { display: flex; align-items: center; gap: 4rem; margin-bottom: 5.5rem; }
        .pf-uiux-item:last-child { margin-bottom: 0; }
        .pf-uiux-item.reverse { flex-direction: row-reverse; }
        .pf-uiux-visual, .pf-uiux-content { flex: 1 1 50%; min-width: 0; }
        @media (max-width: 900px) {
          .pf-uiux-item, .pf-uiux-item.reverse { flex-direction: column; gap: 2rem; }
        }
        .pf-uiux-frame { border-radius: 14px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.45); border: 1px solid var(--dark-border); aspect-ratio: 4 / 3; background: #f4f4f4; }
        .pf-uiux-frame img { width: 100%; height: 100%; object-fit: cover; object-position: var(--focal, top center); display: block; }
        .pf-uiux-eyebrow { color: var(--gold); font-weight: 800; font-size: 0.78rem; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 0.9rem; }
        .pf-uiux-title { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; color: var(--text-primary); margin-bottom: 1rem; }
        .pf-uiux-desc { color: var(--text-muted); line-height: 1.8; font-size: 0.95rem; margin-bottom: 1.6rem; max-width: 460px; }
        .pf-uiux-arrow-btn { width: 52px; height: 52px; border-radius: 50%; border: 1px solid var(--gold); color: var(--gold); display: inline-flex; align-items: center; justify-content: center; text-decoration: none; transition: background 0.2s, transform 0.2s; }
        .pf-uiux-arrow-btn:hover { background: rgba(240,165,0,0.1); transform: translate(2px, -2px); color: var(--gold); }
        .pf-projects { background: var(--dark-bg); padding: 6rem 0; }
        .pf-project-card { background: var(--dark-card); border: 1px solid var(--dark-border); padding: 1.8rem; height: 100%; transition: border-color 0.2s, transform 0.2s; text-decoration: none; display: block; position: relative; overflow: hidden; }
        .pf-project-card::before { content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%; background: var(--gold); transform: scaleY(0); transform-origin: bottom; transition: transform 0.3s ease; }
        .pf-project-card:hover { border-color: var(--gold); transform: translateY(-4px); }
        .pf-project-card:hover::before { transform: scaleY(1); }
        .pf-project-tag { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; color: var(--gold); margin-bottom: 0.8rem; display: block; }
        .pf-project-card h5 { color: var(--text-primary); font-weight: 700; font-size: 1.1rem; margin-bottom: 0.7rem; }
        .pf-project-card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.7; margin: 0; }
        .pf-project-card .arrow { display: inline-block; color: var(--gold); margin-top: 1rem; font-size: 1.1rem; transition: transform 0.2s; }
        .pf-project-card:hover .arrow { transform: translateX(4px); }
        .pf-contact { background: #0d0d0d; padding: 6rem 0; }
        .pf-contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        @media (max-width: 768px) { .pf-contact-layout { grid-template-columns: 1fr; gap: 2.5rem; } }
        .pf-contact-left h3 { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem; }
        .pf-contact-left p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.7; margin-bottom: 2rem; }
        .pf-contact-item { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.4rem; }
        .pf-contact-icon { width: 44px; height: 44px; flex-shrink: 0; background: var(--dark-card); border: 1px solid var(--dark-border); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }
        .pf-contact-item-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.2rem; }
        .pf-contact-item-value { color: var(--text-primary); font-size: 0.9rem; font-weight: 500; }
        .pf-contact-item-value a { color: var(--text-primary); text-decoration: none; transition: color 0.2s; }
        .pf-contact-item-value a:hover { color: var(--gold); }
        .pf-whatsapp-btn { display: inline-flex; align-items: center; gap: 0.6rem; background: transparent; border: 1px solid rgba(240,165,0,0.4); color: var(--gold); font-weight: 700; font-size: 0.88rem; padding: 0.65rem 1.3rem; text-decoration: none; transition: background 0.2s, border-color 0.2s; margin-top: 0.5rem; }
        .pf-whatsapp-btn:hover { background: rgba(240,165,0,0.08); border-color: var(--gold); color: var(--gold); }
        .pf-contact-form-col { display: flex; flex-direction: column; gap: 0; }
        .pf-input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        @media (max-width: 500px) { .pf-input-row { grid-template-columns: 1fr; } }
        .pf-input-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 0.4rem; }
        .pf-input-wrap { margin-bottom: 1rem; }
        .pf-input { width: 100%; background: var(--dark-card); border: 1px solid var(--dark-border); color: var(--text-primary); padding: 0.85rem 1rem; font-size: 0.95rem; outline: none; transition: border-color 0.2s; }
        .pf-input:focus { border-color: var(--gold); }
        .pf-input::placeholder { color: #555; }
        .pf-form-note { color: var(--gold); font-size: 0.85rem; margin-top: 0.9rem; text-align: center; }
        .pf-footer { background: #0a0a0a; border-top: 1px solid var(--dark-border); text-align: center; padding: 1.5rem; color: var(--text-muted); font-size: 0.85rem; }
        .pf-footer span { color: var(--gold); }
      `}</style>

      <div id="portfolio-root">
        <nav className="pf-nav">
          <Link className="pf-brand" to="/">My<span>Portfolio</span></Link>
          <ul className="pf-nav-links">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link to={item.to} className={isActive(item) ? "active" : ""}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="pf-cta-btn d-none d-md-block" to="/#contact">Let's Talk</Link>
          <button className="pf-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </nav>

        <div className={`pf-mobile-menu ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link key={item.key} to={item.to} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>

        {children}

        <footer className="pf-footer">
          <p className="mb-0">&#169; 2025 <span>Margret Nanyonga</span>. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}