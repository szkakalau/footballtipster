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
            <p className="hSub">Get our weekly picks &amp; research free.</p>

            <div className="ctaRow">
              <a className="btn btnPrimary" href="#free" aria-label="Get Free Picks">
                <span className="btnIcon" aria-hidden="true" />
                <span>Get Free Picks</span>
              </a>
              <a className="btn" href="#performance" aria-label="View model performance">
                <span>Model Performance</span>
              </a>
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

