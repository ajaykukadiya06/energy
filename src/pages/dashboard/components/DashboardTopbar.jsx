import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ShieldCheck, FileSpreadsheet } from "lucide-react";

export function DashboardTopbar({
  windSpeed,
  totalLiveKw,
  stormBrakeActive,
  onToggleStormBrake,
  onOpenCertificate,
}) {
  const location = useLocation();
  const path = location.pathname;

  let activeTitle = "Wind Tree Cockpit · Live Telemetry";
  let activeTabName = "OVERVIEW";

  if (path.includes("/matrix")) {
    activeTitle = "36-Aeroleaf® Individual Matrix Inspector";
    activeTabName = "MATRIX";
  } else if (path.includes("/microgrid")) {
    activeTitle = "Smart Microgrid, BESS Battery & EV Telemetry";
    activeTabName = "MICROGRID";
  } else if (path.includes("/weather")) {
    activeTitle = "Atmospheric & Acoustic Sensor Stream";
    activeTabName = "WEATHER";
  } else if (path.includes("/analytics")) {
    activeTitle = "Yield History, Peak Curves & Efficiency";
    activeTabName = "ANALYTICS";
  } else if (path.includes("/controls")) {
    activeTitle = "Emergency Storm Braking & Remote Governors";
    activeTabName = "CONTROLS";
  }

  return (
    <header className="scada-topbar">
      <div className="topbar-left">
        <div className="breadcrumb-strip">
          <Link to="/">Aeris Portal</Link>
          <ChevronRight size={13} />
          <Link to="/dashboard">SCADA Digital Twin</Link>
          <ChevronRight size={13} />
          <strong>{activeTabName}</strong>
        </div>
        <h2>{activeTitle}</h2>
      </div>

      <div className="topbar-actions">
        {/* Live Feed Status Pill */}
        <div className="topbar-telemetry-pill">
          <span className="live-dot-pulse" />
          <span>{windSpeed.toFixed(1)} m/s Wind</span>
          <span className="sep-divider">|</span>
          <strong style={{ color: "#2d6a4d" }}>{totalLiveKw} kW</strong>
        </div>

        {/* Storm Brake Toggle */}
        <button
          type="button"
          className={`topbar-brake-btn ${stormBrakeActive ? "is-braked" : ""}`}
          onClick={onToggleStormBrake}
        >
          <ShieldCheck size={14} />
          {stormBrakeActive ? "Storm Brake ENGAGED" : "Storm Brake Ready"}
        </button>

        {/* ESG Modal Launch */}
        <button
          type="button"
          className="topbar-action-btn"
          onClick={onOpenCertificate}
          title="View & Export Certified ESG Clean Energy Certificate"
        >
          <FileSpreadsheet size={15} />
          <span>ESG Certificate</span>
        </button>
      </div>
    </header>
  );
}
