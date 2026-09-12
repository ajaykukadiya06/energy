import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  FileSpreadsheet,
  Menu,
  LayoutDashboard,
  Grid3X3,
  BatteryCharging,
  Wind,
  BarChart3,
} from "lucide-react";

export function DashboardTopbar({
  windSpeed,
  totalLiveKw,
  stormBrakeActive,
  onToggleStormBrake,
  onOpenCertificate,
  onToggleMobileMenu,
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
      <div className="scada-topbar-row">
        <div className="topbar-left">
          {onToggleMobileMenu && (
            <button
              type="button"
              className="scada-mobile-menu-btn"
              onClick={onToggleMobileMenu}
              aria-label="Open SCADA menu"
            >
              <Menu size={18} />
            </button>
          )}
          <div>
            <div className="breadcrumb-strip">
              <Link to="/">Aeris Portal</Link>
              <ChevronRight size={13} />
              <Link to="/dashboard">SCADA Digital Twin</Link>
              <ChevronRight size={13} />
              <strong>{activeTabName}</strong>
            </div>
            <h2>{activeTitle}</h2>
          </div>
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
            title={stormBrakeActive ? "Disengage storm brake" : "Engage emergency storm brake"}
          >
            <ShieldCheck size={14} />
            <span className="brake-btn-label">
              {stormBrakeActive ? "Storm Brake ENGAGED" : "Storm Brake Ready"}
            </span>
          </button>

          {/* ESG Modal Launch */}
          <button
            type="button"
            className="topbar-action-btn"
            onClick={onOpenCertificate}
            title="View & Export Certified ESG Clean Energy Certificate"
          >
            <FileSpreadsheet size={15} />
            <span className="topbar-action-label">ESG Certificate</span>
          </button>
        </div>
      </div>

      {/* Mobile Horizontal Sub-Tabs Bar */}
      <nav className="scada-mobile-tabs-bar" aria-label="SCADA Views Navigation">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) => `mobile-tab-pill ${isActive ? "active" : ""}`}
        >
          <LayoutDashboard size={14} />
          <span>Cockpit</span>
        </NavLink>
        <NavLink
          to="/dashboard/matrix"
          className={({ isActive }) => `mobile-tab-pill ${isActive ? "active" : ""}`}
        >
          <Grid3X3 size={14} />
          <span>36-Leaf</span>
        </NavLink>
        <NavLink
          to="/dashboard/microgrid"
          className={({ isActive }) => `mobile-tab-pill ${isActive ? "active" : ""}`}
        >
          <BatteryCharging size={14} />
          <span>BESS / EV</span>
        </NavLink>
        <NavLink
          to="/dashboard/weather"
          className={({ isActive }) => `mobile-tab-pill ${isActive ? "active" : ""}`}
        >
          <Wind size={14} />
          <span>Weather</span>
        </NavLink>
        <NavLink
          to="/dashboard/analytics"
          className={({ isActive }) => `mobile-tab-pill ${isActive ? "active" : ""}`}
        >
          <BarChart3 size={14} />
          <span>Yield</span>
        </NavLink>
        <NavLink
          to="/dashboard/controls"
          className={({ isActive }) => `mobile-tab-pill ${isActive ? "active" : ""}`}
        >
          <ShieldCheck size={14} />
          <span>Safety</span>
        </NavLink>
      </nav>
    </header>
  );
}
