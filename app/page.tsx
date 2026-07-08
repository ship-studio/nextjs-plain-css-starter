import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Just React",
    text: "Plain JSX and CSS, served fast by Next.js. No styling framework to learn before you ship.",
  },
  {
    icon: "🎨",
    title: "Class-based styling",
    text: "Every element has one semantic class with one CSS rule — clean, predictable, editable.",
  },
  {
    icon: "🧩",
    title: "Visual editing ready",
    text: "Built to the convention the in-app visual editor expects, so you can style by clicking.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero-eyebrow">Plain-CSS starter</span>
        <h1 className="hero-title">Build a fast site, style it by clicking.</h1>
        <p className="hero-subtitle">
          A Next.js starter with plain, class-based CSS — the perfect canvas
          for editing styles visually, no Tailwind required.
        </p>
        <div className="hero-actions">
          <Link className="btn-primary" href="/about">
            Get started
          </Link>
          <a className="btn-secondary" href="https://nextjs.org/docs">
            Read the docs
          </a>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Everything you need, nothing you don&apos;t</h2>
        <div className="feature-grid">
          {features.map((f) => (
            <article className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to make it yours?</h2>
          <p className="cta-text">
            Click any element in the preview to edit its CSS, or open the code
            and make it your own.
          </p>
          <Link className="cta-button" href="/about">
            Start editing
          </Link>
        </div>
      </section>
    </>
  );
}
