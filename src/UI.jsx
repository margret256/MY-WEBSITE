import { useEffect } from "react";
import layout from "./layout";
import voxelPreview from "./assets/images/Voxel-ui.png";
import agromarketPreview from "./assets/images/marketplace-ui.png";
import dccPreview from "./assets/images/resturant-ui.png";
import beyondsportsPreview from "./assets/images/beyondsports.png";

const uiuxProjects = [
  {
    category: "Accessibility / Assistive Tech",
    title: "Voxel",
    description:
      "A voice-first assistant designed for people with speech and hearing impairments. It combines natural voice and text input, live sign-language translation, text-to-speech, multi-language support, and an SOS/emergency flow — all wrapped in a calm, high-contrast interface built for accessibility.",
    image: voxelPreview,
    focal: "0% top",
    link: "https://www.figma.com/design/6TKTSsVeDkC48G0cmfN4Xo/voxel?t=tpEldjumLYgrOd97-0",
    linkLabel: "View Design",
  },
  {
    category: "Mobile App / Agriculture",
    title: "AgroMarket",
    description:
      "The shopping experience for the AgroConnect farm input marketplace — product browsing, cart, PIN-secured mobile money checkout, order tracking, notifications, and side-by-side product comparison, designed to feel as simple as any consumer shopping app.",
    image: agromarketPreview,
    focal: "0% top",
    link: "https://www.figma.com/design/jJf2fEssv0SZdBjYJQM9zU/FERMINPUT-MARKETPLACE?t=tpEldjumLYgrOd97-0",
    linkLabel: "View Design",
  },
  {
    category: "Web Dashboard / Restaurant Management",
    title: "D.CC — Restaurant & Table Management",
    description:
      "A back-office dashboard for restaurant staff to manage the menu, track pending and in-progress orders, and monitor daily revenue and top dishes at a glance — built for speed during a busy service.",
    image: dccPreview,
    focal: "0% top",
    link: "https://www.figma.com/design/29NYsMPkB8SXSMm25LGofP/Caf%C3%A9-Restaurant-Order---Table-Management-System?node-id=0-1&p=f&t=tpEldjumLYgrOd97-0",
    linkLabel: "View Design",
  },
  {
    category: "Mobile App / Corporate Wellness",
    title: "Beyond Sports",
    description:
      "The mobile companion for the Beyond Sports corporate wellness platform. Employees and individuals sign up, join step and hydration challenges, and compete on a live leaderboard — encouraging daily activity through friendly competition.",
    image: beyondsportsPreview,
    focal: "0% top",
    link: "https://app.visily.ai/projects/82ce56ff-33a0-4da6-b4f0-88fbe2c34d30/boards/2495204",
    linkLabel: "Visit Live Site",
  },
];

export default function UI() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Layout>
      <section className="pf-uiux-hero">
        <div className="container">
          <div className="pf-open-badge">Design Work</div>
          <div className="pf-hero-eyebrow">UI/UX Design</div>
          <h1>Designing interfaces <br /><span className="highlight">people actually enjoy using</span></h1>
          <p className="pf-hero-sub">
            A look at how I approach product and interface design — from research and wireframes
            to polished, responsive UI.
          </p>
        </div>
      </section>

      <section className="pf-uiux">
        <div className="container">
          {uiuxProjects.map((p, i) => (
            <div className={`pf-uiux-item ${i % 2 === 1 ? "reverse" : ""}`} key={p.title}>
              <div className="pf-uiux-visual">
                <div className="pf-uiux-frame" style={{ "--focal": p.focal }}>
                  <img src={p.image} alt={p.title} />
                </div>
              </div>
              <div className="pf-uiux-content">
                <div className="pf-uiux-eyebrow">{p.category}</div>
                <h3 className="pf-uiux-title">{p.title}</h3>
                <p className="pf-uiux-desc">{p.description}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="pf-uiux-link-btn">
                  {p.linkLabel}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}