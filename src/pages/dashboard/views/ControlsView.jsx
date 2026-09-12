import { useOutletContext } from "react-router-dom";
import { ShieldCheck, Cpu, Power } from "lucide-react";

export function ControlsView() {
  const context = useOutletContext();
  const { stormBrakeActive, setStormBrakeActive } = context;

  return (
    <div className="tab-pane-fade">
      <div className="controls-grid">
        <div className="control-action-card">
          <div className="control-head">
            <ShieldCheck size={24} color={stormBrakeActive ? "#c53929" : "#2d6a4d"} />
            <div>
              <h3>Aerodynamic Storm Braking Governor</h3>
              <p>
                Remotely command electromagnetic eddy-current braking across all 36 Aeroleaf
                modules for severe weather typhoons or maintenance procedures.
              </p>
            </div>
          </div>

          <div className="control-btn-box">
            <button
              type="button"
              className={`master-brake-btn ${stormBrakeActive ? "engaged" : ""}`}
              onClick={() => setStormBrakeActive(!stormBrakeActive)}
            >
              <Power size={18} style={{ marginRight: 8 }} />
              {stormBrakeActive
                ? "DISENGAGE STORM BRAKE (RESUME SPIN)"
                : "ENGAGE EMERGENCY STORM BRAKE"}
            </button>
            <small>
              Status: {stormBrakeActive ? "Rotors locked under eddy-current braking" : "Turbines rotating freely in auto MPPT mode"}
            </small>
          </div>
        </div>

        <div className="control-action-card">
          <div className="control-head">
            <Cpu size={24} color="#2d6a4d" />
            <div>
              <h3>Automated Self-Diagnostics Test</h3>
              <p>
                Executes calibration test sequence across all sensor telemetry nodes, bearing
                thermocouples, and MPPT inverters.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="secondary-button"
            onClick={() => {
              alert("Diagnostic sequence complete: All 36 Aeroleafs report 100% operational integrity.");
            }}
          >
            Run Full System Diagnostic
          </button>
        </div>
      </div>
    </div>
  );
}
