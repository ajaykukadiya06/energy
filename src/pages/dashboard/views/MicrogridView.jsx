import { useOutletContext } from "react-router-dom";
import { BatteryCharging, Zap, Wind, Power } from "lucide-react";

export function MicrogridView() {
  const context = useOutletContext();
  const { totalLiveKw, batteryCharge } = context;

  return (
    <div className="tab-pane-fade">
      <div className="microgrid-overview-grid">
        {/* 15 kWh BESS Storage Card */}
        <article className="microgrid-card">
          <div className="microgrid-card-head">
            <div className="card-icon-wrap green">
              <BatteryCharging size={20} color="#ffffff" />
            </div>
            <div>
              <h3>15 kWh BESS Battery Storage</h3>
              <small>Lithium Iron Phosphate (LiFePO4)</small>
            </div>
          </div>

          <div className="bess-visual-meter">
            <div className="bess-level-track">
              <div className="bess-level-fill" style={{ width: `${batteryCharge}%` }} />
            </div>
            <div className="bess-level-data">
              <strong>{batteryCharge}% Charged</strong>
              <span>{((batteryCharge / 100) * 15).toFixed(1)} / 15.0 kWh</span>
            </div>
          </div>

          <div className="card-metrics-grid">
            <div>
              <span>Discharge Rate</span>
              <strong>3.2 kW Active</strong>
            </div>
            <div>
              <span>Battery Temp</span>
              <strong>21.4 °C (Optimal)</strong>
            </div>
            <div>
              <span>Cycle Count</span>
              <strong>342 / 6,000 Cycles</strong>
            </div>
            <div>
              <span>Health State (SoH)</span>
              <strong>99.4% Prime</strong>
            </div>
          </div>
        </article>

        {/* 22 kW EV Pedestal Charger */}
        <article className="microgrid-card">
          <div className="microgrid-card-head">
            <div className="card-icon-wrap blue">
              <Zap size={20} color="#ffffff" />
            </div>
            <div>
              <h3>22 kW Smart EV Pedestal</h3>
              <small>Dual Type-2 Fast Charger Ports</small>
            </div>
          </div>

          <div className="ev-ports-status-box">
            <div className="ev-port active">
              <span className="port-badge active">Port 1 · ACTIVE (11 kW)</span>
              <strong>Charging EV (Session #8214)</strong>
              <small>18.4 kWh Delivered</small>
            </div>
            <div className="ev-port free">
              <span className="port-badge free">Port 2 · READY</span>
              <strong>Available for Fast Charge</strong>
              <small>Auto-negotiate 22 kW</small>
            </div>
          </div>

          <div className="card-metrics-grid">
            <div>
              <span>Grid Tie Mode</span>
              <strong>Smart Microgrid</strong>
            </div>
            <div>
              <span>EV Green Offset</span>
              <strong>100% Wind-Direct</strong>
            </div>
          </div>
        </article>
      </div>

      {/* Power Flow Visual Diagram */}
      <div className="power-flow-diagram-card">
        <h3>Live Microgrid Power Dispatch Flow</h3>
        <div className="power-flow-nodes">
          <div className="flow-node">
            <Wind size={20} color="#2d6a4d" />
            <strong>Wind Tree Array</strong>
            <span>+{totalLiveKw} kW Gen</span>
          </div>
          <div className="flow-arrow">➔</div>
          <div className="flow-node highlight">
            <Zap size={20} color="#b37418" />
            <strong>Central MPPT Inverter</strong>
            <span>98.6% Conversion</span>
          </div>
          <div className="flow-arrow">➔</div>
          <div className="flow-node">
            <BatteryCharging size={20} color="#2d6a4d" />
            <strong>15 kWh BESS Buffer</strong>
            <span>{batteryCharge}% Buffer</span>
          </div>
          <div className="flow-arrow">➔</div>
          <div className="flow-node">
            <Power size={20} color="#2d6a4d" />
            <strong>Facility & EV Load</strong>
            <span>3.8 kW Consumed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
