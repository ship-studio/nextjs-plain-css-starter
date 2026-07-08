import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Northwind",
};

export default function About() {
  return (
    <>
      <section className="hero">
        <span className="hero-eyebrow">About</span>
        <h1 className="hero-title">A starter that stays out of your way.</h1>
        <p className="hero-subtitle">
          Northwind is plain JSX and CSS on top of Next.js. No utility classes
          to memorize, no styling framework — just semantic markup and a single
          stylesheet you fully control.
        </p>
        <div className="hero-actions">
          <Link className="btn-primary" href="/">
            Back home
          </Link>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">How it&apos;s organized</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">📄</div>
            <h3 className="feature-title">Pages</h3>
            <p className="feature-text">
              Each route is a folder in <code>app</code> with a{" "}
              <code>page.tsx</code> inside. Plain JSX markup.
            </p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">🧱</div>
            <h3 className="feature-title">Components</h3>
            <p className="feature-text">
              Reusable pieces like the header and footer live in{" "}
              <code>components</code>.
            </p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3 className="feature-title">Styles</h3>
            <p className="feature-text">
              One stylesheet, <code>styles/main.css</code> — one semantic class
              per rule.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
