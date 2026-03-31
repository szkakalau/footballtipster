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

            <div className="heroCta">
              <SubscribeForm variant="hero" />
              <div className="heroCtaSecondary">
                <a className="btn btnGhost" href="/picks-history" aria-label="View dated pick history">
                  <span>Pick history</span>
                </a>
                <a className="btn btnGhost" href="#performance" aria-label="View model performance">
                  <span>Model performance</span>
                </a>
              </div>
            </div>

            <div className="note">
              <span className="noteTag">Weekly email</span>
              <span className="noteTag">Tracking-first</span>
              <span className="noteTag">Research tone</span>
              <span className="noteTag">No hype</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

