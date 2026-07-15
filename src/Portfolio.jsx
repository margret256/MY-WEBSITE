import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./layout";
import profileImage from "./assets/images/maggie.jpeg";

const skillCategories = [
  { label: "Frontend", skills: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ]},
  { label: "Backend", skills: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  ]},
  { label: "Databases", skills: [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ]},
  { label: "Tools", skills: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Visily", icon: "https://www.visily.ai/favicon.ico" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
  ]},
];

const projects = [
  { title: "Beyond Sports Unified Corporate Sports Platform", description: "A platform for unified corporate sports management and engagement. Improving employee and individual wellness and team building through sports.", link: "https://beyondsports.fitness/", tag: "Sports Platform" },
  { title: "Grocery Buddy", description: "Add, edit, and delete grocery items, track amounts spent, and manage your list any time.", link: "https://github.com/margret256/GRORECYBUDDY", tag: "E-Commerce" },
  { title: "Farm Input Marketplace", description: "A marketplace for farmers to buy and sell agricultural inputs, bringing farmers and suppliers together.", link: "https://github.com/margret256/FARM-INPUT-MARKETPLACE", tag: "Mobile App" },
  { title: "My Portfolio", description: "My personal portfolio website showcasing my projects, skills, and experience as a Frontend and Full Stack Developer.", link: "https://my-website-margret.vercel.app/", tag: "Portfolio" },
  { title: "Mayondo Wood & Furniture", description: "A system that tracks all company activities to make work easier.", link: "https://github.com/margret256/MAYONDOPROGECT", tag: "Management System" },
];

const contactEmail = "lwangamargret68@gmail.com";
const whatsappNumber = "256773815442";

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState("");
  const [activeSkillTab, setActiveSkillTab] = useState("Frontend");
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim() || "Portfolio contact message";
    const message = form.message.trim();
    const contactMessage = ["New portfolio contact message", "", `Name: ${name}`, `Email: ${email}`, `Subject: ${subject}`, "", "Message:", message].join("\n");
    const encodedMessage = encodeURIComponent(contactMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    const emailUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.location.href = emailUrl;
    setSubmitStatus("WhatsApp and email drafts opened. Press send to deliver your message.");
  };

  return (
    <Layout>
      <section id="home" className="pf-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="pf-open-badge">Open to Work</div>
              <div className="pf-hero-eyebrow">Frontend Developer &amp; Full Stack Engineer</div>
              <h1>Hello, I'm <br /><span className="highlight">Margret Nanyonga</span></h1>
              <p className="pf-hero-sub">
                Motivated Frontend Developer with hands-on experience building responsive,
                user-friendly web interfaces. Passionate about community-driven, impact-focused technology.
              </p>
              <div className="pf-hero-actions">
                <a href="#contact" className="pf-btn-primary">Hire Me</a>
                <a href="public/" download="Margret-Nanyonga-CV.pdf" className="pf-btn-outline">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="12" x2="12" y2="18"/><polyline points="9 15 12 18 15 15"/></svg>
                  Margret Nanyonga CV
                </a>
                <a href="#projects" className="pf-btn-ghost">Projects &#8594;</a>
              </div>
              <div className="pf-social-icons">
                <a href="https://github.com/margret256" target="_blank" rel="noreferrer" className="pf-social-btn" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/margret-nanyonga-97aa8b375" target="_blank" rel="noreferrer" className="pf-social-btn" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://wa.me/256773815442" target="_blank" rel="noreferrer" className="pf-social-btn" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </a>
                <a href="mailto:lwangamargret68@gmail.com" className="pf-social-btn" aria-label="Email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
              <div className="pf-seeking-panel">
                <div className="pf-seeking-label">Currently Seeking</div>
                <div className="pf-seeking-grid">
                  <span className="pf-seeking-item">Frontend Developer</span>
                  <span className="pf-seeking-item">Backend Developer</span>
                  <span className="pf-seeking-item">Full Stack Developer</span>
                  <span className="pf-seeking-item">UI/UX Designer</span>
                  <span className="pf-seeking-item">Remote &amp; Hybrid Opportunities</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pf-hero-image-col">
              <div className="pf-hero-img-placeholder">
                <img src={profileImage} alt="Margret Nanyonga" className="pf-profile-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <img src={profileImage} alt="Margret Nanyonga" className="pf-profile-image" />
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
                    <a href="#contact" className="pf-btn-primary mt-2">Get In Touch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="pf-skills-section">
        <div className="container">
          <div className="pf-divider" />
          <h2 className="pf-section-title">My <span>Skills</span></h2>
          <p className="pf-section-sub">Technologies and tools I work with</p>
          <div className="pf-skill-tabs">
            {skillCategories.map((cat) => (
              <button key={cat.label} className={`pf-skill-tab ${activeSkillTab === cat.label ? "active" : ""}`} onClick={() => setActiveSkillTab(cat.label)}>
                {cat.label}
              </button>
            ))}
          </div>
          <div className="pf-skills-grid">
            {skillCategories.find((cat) => cat.label === activeSkillTab)?.skills.map((s) => (
              <div className="pf-skill-card" key={s.name}>
                <div className="pf-skill-icon-wrap"><img src={s.icon} alt={s.name} /></div>
                <span className="pf-skill-name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="pf-projects">
        <div className="container">
          <div className="pf-divider" />
          <h2 className="pf-section-title">My <span>Projects</span></h2>
          <p className="pf-section-sub">A selection of things I've built</p>
          <div className="row g-4">
            {projects.map((p) => (
              <div className="col-md-6" key={p.title}>
                <a href={p.link} target="_blank" rel="noreferrer" className="pf-project-card">
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

      <section id="contact" className="pf-contact">
        <div className="container">
          <div className="pf-divider" />
          <h2 className="pf-section-title">Contact <span>Me</span></h2>
          <p className="pf-section-sub">Have a project in mind? Let's talk.</p>
          <div className="pf-contact-layout">
            <div className="pf-contact-left">
              <h3>Get In Touch</h3>
              <p>I'm always open to discussing new opportunities, interesting projects, or just connecting. Whether you have a project in mind or just want to say hello — I'd love to hear from you.</p>
              <div className="pf-contact-item">
                <div className="pf-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="pf-contact-item-label">Email</div>
                  <div className="pf-contact-item-value"><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div>
                </div>
              </div>
              <div className="pf-contact-item">
                <div className="pf-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
                </div>
                <div>
                  <div className="pf-contact-item-label">GitHub</div>
                  <div className="pf-contact-item-value"><a href="https://github.com/margret256" target="_blank" rel="noreferrer">github.com/margret256</a></div>
                </div>
              </div>
              <div className="pf-contact-item">
                <div className="pf-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </div>
                <div>
                  <div className="pf-contact-item-label">WhatsApp</div>
                  <div className="pf-contact-item-value"><a href="tel:+256773815442">+256 773 815 442</a></div>
                </div>
              </div>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="pf-whatsapp-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
            <form className="pf-contact-form-col" onSubmit={handleSubmit}>
              <div className="pf-input-row">
                <div>
                  <label className="pf-input-label" htmlFor="name">Your Name</label>
                  <input type="text" id="name" className="pf-input" placeholder="Margret Nanyonga" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                  <label className="pf-input-label" htmlFor="email">Your Email</label>
                  <input type="email" id="email" className="pf-input" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="pf-input-wrap">
                <label className="pf-input-label" htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="pf-input" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
              </div>
              <div className="pf-input-wrap">
                <label className="pf-input-label" htmlFor="message">Message</label>
                <textarea id="message" className="pf-input" rows={7} placeholder="Tell me about your project or idea..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="pf-btn-primary w-100">Send Message &#8594;</button>
              {submitStatus && <p className="pf-form-note" role="status">{submitStatus}</p>}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}