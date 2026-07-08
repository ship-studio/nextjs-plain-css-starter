import Link from "next/link";

// Site header / navigation. Every element carries a semantic class defined in
// styles/main.css — click any of them in the visual editor to edit its rule.
export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link className="nav-logo" href="/">
          Northwind
        </Link>
        <div className="nav-links">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <Link className="nav-link" href="/about">
            About
          </Link>
          <Link className="nav-cta" href="/about">
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
