import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="container">
      <div className="topline">
        <Link href="/" className="mark siteMarkLink">
          <span className="markDot" />
          <span>Independent research project</span>
        </Link>
        <nav className="siteNav" aria-label="Primary">
          <Link href="/#examples">Samples</Link>
          <Link href="/#email-preview">Email</Link>
          <Link href="/picks-history">Pick history</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/about">About</Link>
          <Link href="/membership">Membership</Link>
        </nav>
        <div className="pill sitePill">
          Weekly newsletter · experiments · tracking
        </div>
      </div>
    </header>
  );
}
