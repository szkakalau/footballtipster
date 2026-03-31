import { PICKS_HISTORY, type PickRecord } from "@/data/picksHistory";

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function OutcomeBadge({ o }: { o: PickRecord["outcome"] }) {
  const cls =
    o === "W"
      ? "proofOutcome proofOutcomeWin"
      : o === "L"
        ? "proofOutcome proofOutcomeLoss"
        : "proofOutcome proofOutcomePush";
  const label = o === "W" ? "Win" : o === "L" ? "Loss" : "Push";
  return <span className={cls}>{label}</span>;
}

export default function PicksHistoryTable() {
  return (
    <div className="proofTableWrap">
      <table className="proofTable">
        <caption className="srOnly">
          Published picks with decimal odds and settled results
        </caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">League</th>
            <th scope="col">Fixture</th>
            <th scope="col">Pick</th>
            <th scope="col">Odds (dec.)</th>
            <th scope="col">Result</th>
          </tr>
        </thead>
        <tbody>
          {PICKS_HISTORY.map((row, i) => (
            <tr key={`${row.date}-${row.fixture}-${i}`}>
              <td>{formatDate(row.date)}</td>
              <td>{row.league}</td>
              <td>{row.fixture}</td>
              <td>{row.pick}</td>
              <td className="proofTableNum">{row.price}</td>
              <td>
                <OutcomeBadge o={row.outcome} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
