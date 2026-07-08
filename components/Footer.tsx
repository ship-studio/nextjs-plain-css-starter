import Link from "next/link";

// Site footer.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {year} Northwind. Built with Next.js + plain CSS.
        </p>
        <div className="footer-links">
          <Link className="footer-link" href="/">
            Home
          </Link>
          <Link className="footer-link" href="/about">
            About
          </Link>
          <a className="footer-link" href="https://nextjs.org">
            Next.js
          </a>
        </div>
      </div>
    </footer>
  );
}
