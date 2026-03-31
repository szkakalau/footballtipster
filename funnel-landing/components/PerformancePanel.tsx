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
            <div className="kpiHint">Across the tracked sample. Updated weekly.</div>
          </div>
          <div className="kpi" role="listitem">
            <div className="kpiLabel">Closing Line Value</div>
            <div className="kpiValue">{clv}</div>
            <div className="kpiHint">How often we beat the closing line.</div>
          </div>
          <div className="kpi" role="listitem">
            <div className="kpiLabel">Historical record</div>
            <div className="kpiValue">{sample}</div>
            <div className="kpiHint">{period} · full log in the newsletter</div>
          </div>
        </div>
      </div>
    </div>
  );
}

