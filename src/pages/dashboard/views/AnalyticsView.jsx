export function AnalyticsView() {
  return (
    <div className="tab-pane-fade">
      <section className="dashboard-panel">
        <div className="dashboard-panel-heading">
          <div>
            <span className="eyebrow">Performance Trends</span>
            <h2>Historical Generation & Yield Forecast</h2>
          </div>
          <span className="period-select">Monthly Projection: 1,284 kWh</span>
        </div>

        <div className="energy-chart tall" aria-label="Energy output chart">
          {[48, 62, 54, 82, 70, 94, 86].map((height, index) => (
            <div className="chart-column" key={index}>
              <span style={{ height: `${height}%` }} />
              <small>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}</small>
              <strong style={{ fontSize: "0.75rem", marginTop: 4 }}>
                {Math.round(height * 0.75)} kWh
              </strong>
            </div>
          ))}
        </div>

        <div className="analytics-summary-strip">
          <div>
            <span>Total Lifetime Yield</span>
            <strong>18.4 MWh</strong>
          </div>
          <div>
            <span>Annual Projected Offset</span>
            <strong>15.2 Tons CO₂</strong>
          </div>
          <div>
            <span>Equivalent Grid Cost Savings</span>
            <strong>€4,780 / year</strong>
          </div>
          <div>
            <span>System Availability</span>
            <strong>99.8% Uptime</strong>
          </div>
        </div>
      </section>
    </div>
  );
}
