import { EXAMPLE_PICKS } from "@/data/examplePicks";

function ResultTag({ r }: { r: "Win" | "Loss" | "Push" }) {
  const cls =
    r === "Win"
      ? "proofOutcome proofOutcomeWin"
      : r === "Loss"
        ? "proofOutcome proofOutcomeLoss"
        : "proofOutcome proofOutcomePush";
  return <span className={cls}>{r}</span>;
}

export default function ExamplePicks() {
  return (
    <div className="examplePicks">
      <p className="examplePicksLead">
        This is the kind of line-item you get in the letter — not vibes, not
        screenshots of a “hot streak.” Same structure as the{" "}
        <a href="/picks-history">public pick log</a>.
      </p>
      <div className="examplePicksGrid">
        {EXAMPLE_PICKS.map((row) => (
          <article key={row.fixture} className="examplePickCard">
            <div className="examplePickTop">
              <span className="examplePickFixture">{row.fixture}</span>
              <span className="examplePickEdge">Model edge {row.modelEdge}</span>
            </div>
            <dl className="examplePickDl">
              <div>
                <dt>Pick</dt>
                <dd>
                  {row.pick} @ {row.price}
                </dd>
              </div>
              <div>
                <dt>Closing</dt>
                <dd>{row.closing}</dd>
              </div>
              <div>
                <dt>Result</dt>
                <dd>
                  <ResultTag r={row.result} />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
