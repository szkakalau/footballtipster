import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Sports data analysts and ML researchers building a transparent football odds experiment.",
  openGraph: {
    title: "About us",
    description:
      "Sports data analysts and ML researchers building a transparent football odds experiment.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="section sectionTightTop">
        <div className="container">
          <div className="sEyebrow">Who we are</div>
          <h1 className="sTitle">People behind the experiment</h1>
          <p className="membershipLead">
            We&apos;re a small team of <strong>sports data analysts</strong> and{" "}
            <strong>machine-learning researchers</strong> who got tired of
            black-box tipsters. No cast of fake “expert” personas — just
            disciplined tracking, published odds, and results you can verify.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card">
            <div className="cardInner twoCol">
              <div>
                <p className="listLead">What we actually do</p>
                <ul className="bullets bulletsConcrete">
                  <li>Ingest historical and live odds from major football markets</li>
                  <li>Train and stress-test models on out-of-sample seasons</li>
                  <li>Log every published pick with price and settlement</li>
                  <li>Report CLV-style metrics — not “units won” theatre</li>
                </ul>
              </div>
              <div className="prose">
                <p>
                  Anonymous tipster brands rank lowest on trust. We put
                  methodology and a public pick history first so you can decide if
                  the edge is real — before you ever pay.
                </p>
                <p>
                  We&apos;re not a bookmaker. We don&apos;t take bets on this
                  site. We publish research and picks for information only.
                </p>
                <div className="ctaRow" style={{ marginTop: 8 }}>
                  <Link href="/picks-history" className="btn btnPrimary">
                    See pick history
                  </Link>
                  <Link href="/#free" className="btn">
                    Free newsletter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
