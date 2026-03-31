import SubscribeForm from "@/components/SubscribeForm";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="heroCard">
          <div className="stamp">Field notes · public</div>
          <div className="heroInner">
            <h1 className="hTitle">
              Not a paid picks site.
              <br />
              A football data experiment.
            </h1>
            <p className="hSub">
              Get our weekly picks &amp; research free — we only use your email
              to send one weekly digest: picks, research, and model notes.
            </p>
            <p className="hProof">
              Join <span className="hProofNum">3,200</span> subscribers receiving
              weekly football picks.
            </p>
            <p className="hForever">
              The weekly digest is <strong>free forever</strong>. Paid membership
              is optional — we may mention it in the letter, but the newsletter
              itself is never paywalled.
            </p>

            <div className="heroCta">
              <SubscribeForm variant="hero" />
              <div className="heroCtaSecondary">
                <a className="btn btnGhost" href="#last-week" aria-label="See last week's email example">
                  <span>Example picks</span>
                </a>
                <a className="btn btnGhost" href="/picks-history" aria-label="View dated pick history">
                  <span>Pick history</span>
                </a>
                <a className="btn btnGhost" href="#performance" aria-label="View model performance">
                  <span>Model performance</span>
                </a>
              </div>
            </div>

            <div className="note">
              <span className="noteTag">Free forever</span>
              <span className="noteTag">Weekly email</span>
              <span className="noteTag">Sample picks below</span>
              <span className="noteTag">No hype</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

