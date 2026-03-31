export default function PerformancePanel({
  winRate,
  clv,
  sample,
  period,
}: {
  winRate: string;
  clv: string;
  sample: string;
  period: string;
}) {
  return (
    <div className="card">
      <div className="cardInner">
        <div className="kpiGrid" role="list" aria-label="Model performance metrics">
          <div className="kpi" role="listitem">
            <div className="kpiLabel">Win rate</div>
            <div className="kpiValue">{winRate}</div>
            <div className="kpiHint">
              Above 50% = more wins than losses before odds. 54.8% is a modest
              edge stretched over a long sample — not a profit promise.
            </div>
          </div>
          <div className="kpi" role="listitem">
            <div className="kpiLabel">Closing Line Value</div>
            <div className="kpiValue">{clv}</div>
            <div className="kpiHint">
              +1.7% CLV means our recorded price often beats the closing number
              — a quality check, not a guarantee.
            </div>
          </div>
          <div className="kpi" role="listitem">
            <div className="kpiLabel">Historical record</div>
            <div className="kpiValue">{sample}</div>
            <div className="kpiHint">
              Settled picks in the public log · {period} · same definitions each
              week in email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

