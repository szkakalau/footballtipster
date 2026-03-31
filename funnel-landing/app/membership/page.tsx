import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Full daily picks, deeper notes, and member-only performance tools — beyond the free weekly email.",
  openGraph: {
    title: "Membership",
    description:
      "Full daily picks, deeper notes, and member-only performance tools — beyond the free weekly email.",
    type: "website",
  },
};

export default function MembershipPage() {
  return (
    <main>
      <div className="container">
        <div className="topline">
          <Link href="/" className="mark" style={{ textDecoration: "none" }}>
            <span className="markDot" />
            <span>← Back to home</span>
          </Link>
        </div>
      </div>

      <section className="sectionHeroMembership">
        <div className="container">
          <div className="sEyebrow">Membership</div>
          <h1 className="sTitle membershipPageTitle">
            The full experiment — not just the weekly digest
          </h1>
          <p className="membershipLead">
            The free newsletter is how we earn trust. Membership is for when you
            want the complete signal: every pick we publish, every day, plus the
            tooling we use to track the model.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card cardMember">
            <div className="cardInner">
              <p className="listLead">What members get</p>
              <ul className="bullets bulletsConcrete">
                <li>
                  <strong>Full daily picks</strong> — every pick, not only the
                  3–5 we highlight in the free email
                </li>
                <li>
                  <strong>Deeper breakdowns</strong> — edge cases, line moves,
                  and why the model leaned in or out
                </li>
                <li>
                  <strong>Performance tooling</strong> — rolling stats, sample
                  size, and how the model is doing over time
                </li>
              </ul>
              <p className="membershipFunnelNote">
                Start with the free weekly email. When you&apos;re ready, the
                membership link appears in the same newsletter — so you can
                upgrade without leaving the flow you already trust.
              </p>
              <div className="ctaRow" style={{ marginTop: 18 }}>
                <Link href="/#free" className="btn btnPrimary">
                  <span className="btnIcon" aria-hidden="true" />
                  <span>Get the free email first</span>
                </Link>
              </div>
              <p className="status" style={{ marginTop: 14, opacity: 0.85 }}>
                This site doesn&apos;t process payments. Checkout or billing
                happens through the secure link we send members — not on this
                page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="footer">
          <div>
            Independent research newsletter. For informational purposes only.
          </div>
        </div>
      </div>
    </main>
  );
}
