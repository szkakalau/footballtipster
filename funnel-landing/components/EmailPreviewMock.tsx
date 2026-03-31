export default function EmailPreviewMock() {
  return (
    <div className="emailMock">
      <div className="emailMockChrome">
        <div className="emailMockDots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="emailMockTitle">Field Notes — Inbox preview</span>
      </div>
      <div className="emailMockPaper">
        <header className="emailMockHeader">
          <p className="emailMockSubject">Week 08 · 5 picks · EPL + UCL</p>
          <p className="emailMockMeta">
            Model notes · CLV snapshot · Settled results
          </p>
        </header>
        <div className="emailMockBody">
          <section className="emailMockSection">
            <h3 className="emailMockH">This week&apos;s card</h3>
            <ul className="emailMockList">
              <li>Liverpool ML @ 1.83 (vs Brighton) — Win</li>
              <li>Under 2.5 @ 1.91 (Serie A) — Win</li>
              <li>BTTS Yes @ 1.76 (Bundesliga) — Loss</li>
            </ul>
          </section>
          <section className="emailMockSection">
            <h3 className="emailMockH">Why the model leaned in</h3>
            <p className="emailMockP">
              Short paragraph on line movement, closing vs open, and what the
              model disagreed with vs market consensus. No cheerleading — just
              the reasoning trail.
            </p>
          </section>
          <section className="emailMockSection emailMockSectionAccent">
            <h3 className="emailMockH">Rolling performance</h3>
            <p className="emailMockP">
              Win rate, CLV, sample size — same definitions every week so you can
              compare this send to the last one.
            </p>
          </section>
        </div>
        <footer className="emailMockFooter">
          One email per week · Unsubscribe any time · Optional member link at
          the bottom (never required to read the letter)
        </footer>
      </div>
    </div>
  );
}
