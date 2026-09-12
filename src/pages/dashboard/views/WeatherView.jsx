import { useOutletContext } from "react-router-dom";
import { Wind, Compass, Volume2, Thermometer } from "lucide-react";

export function WeatherView() {
  const context = useOutletContext();
  const { windSpeed } = context;

  return (
    <div className="tab-pane-fade">
      <div className="weather-telemetry-grid">
        <div className="weather-kpi-card">
          <div className="weather-kpi-head">
            <Wind size={22} color="#2d6a4d" />
            <div>
              <span>Instantaneous Wind Speed</span>
              <h2>{windSpeed.toFixed(1)} m/s</h2>
            </div>
          </div>
          <div className="wind-scale-bar">
            <div
              className="wind-scale-pin"
              style={{ left: `${Math.min(100, (windSpeed / 25) * 100)}%` }}
            />
          </div>
          <div className="wind-scale-labels">
            <span>2.5 m/s (Cut-in)</span>
            <span>10.0 m/s (Nominal)</span>
            <span>43.0 m/s (Continuous Limit)</span>
          </div>
        </div>

        <div className="weather-kpi-card">
          <div className="weather-kpi-head">
            <Compass size={22} color="#2d6a4d" />
            <div>
              <span>Omnidirectional Capture</span>
              <h2>360° Continuous</h2>
            </div>
          </div>
          <p style={{ margin: "10px 0 0", color: "var(--muted)", fontSize: "0.88rem" }}>
            Vertical-axis Aeroleafs require zero mechanical yaw adjustments, capturing turbulent
            urban wind from any azimuth angle instantly.
          </p>
        </div>

        <div className="weather-kpi-card">
          <div className="weather-kpi-head">
            <Volume2 size={22} color="#2d6a4d" />
            <div>
              <span>Acoustic Signature</span>
              <h2>&lt; 25 dB(A)</h2>
            </div>
          </div>
          <p style={{ margin: "10px 0 0", color: "var(--muted)", fontSize: "0.88rem" }}>
            Whisper-quiet direct-drive sub-generators remain below ambient urban background noise
            level (approx. 40 dB).
          </p>
        </div>

        <div className="weather-kpi-card">
          <div className="weather-kpi-head">
            <Thermometer size={22} color="#2d6a4d" />
            <div>
              <span>Ambient Temperature</span>
              <h2>19.2 °C</h2>
            </div>
          </div>
          <p style={{ margin: "10px 0 0", color: "var(--muted)", fontSize: "0.88rem" }}>
            All sealed generators rated for extreme ambient operating ranges from -25°C up to +50°C.
          </p>
        </div>
      </div>
    </div>
  );
}
