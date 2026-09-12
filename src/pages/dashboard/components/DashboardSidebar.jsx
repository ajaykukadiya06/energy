import {
  Zap,
  LayoutDashboard,
  Grid3X3,
  BatteryCharging,
  Wind,
  BarChart3,
  ShieldCheck,
  FileSpreadsheet,
  LogOut,
  ArrowLeft,
  X,
} from "lucide-react";

export function DashboardSidebar({
  totalLiveKw,
  stormBrakeActive,
  onOpenCertificate,
  onLogout,
  isOpenMobile = false,
  onCloseMobile,
}) {
  const handleNavClick = () => {
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isOpenMobile && (
        <div
          className="scada-sidebar-backdrop"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside className={`scada-sidebar ${isOpenMobile ? "is-mobile-open" : ""}`}>
        {/* Sidebar Header / Brand */}
        <div className="scada-sidebar-header">
          <Link
            to="/dashboard"
            className="sidebar-brand-box"
            style={{ textDecoration: "none" }}
            onClick={handleNavClick}
          >
            <div className="sidebar-brand-mark">
              <Zap size={18} color="#ffffff" />
            </div>
            <div className="sidebar-brand-text">
              <strong>AERIS SCADA</strong>
              <span>OS v4.8 · IoT Gateway</span>
            </div>
          </Link>

          {onCloseMobile && (
            <button
              type="button"
              className="scada-mobile-close-btn"
              onClick={onCloseMobile}
              aria-label="Close SCADA Menu"
            >
              <X size={18} />
            </button>
          )}
        </div>

      {/* Node Selector / Status Card */}
      <div className="sidebar-node-card">
        <div className="node-status-row">
          <span className={stormBrakeActive ? "node-dot-warning" : "node-dot-active"} />
          <strong>WT-042 (Munich Hub)</strong>
        </div>
        <div className="node-meta-grid">
          <div>
            <small>Power</small>
            <span>{totalLiveKw} kW</span>
          </div>
          <div>
            <small>Grid State</small>
            <span>{stormBrakeActive ? "Braked" : "Optimal"}</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu with Proper URL Routes */}
      <nav className="scada-nav-menu">
        <span className="nav-menu-label">MONITORING & MATRIX</span>

        <NavLink
          to="/dashboard"
          end
          onClick={handleNavClick}
          className={({ isActive }) => `scada-nav-btn ${isActive ? "active" : ""}`}
        >
          <LayoutDashboard size={17} />
          <span>SCADA Cockpit</span>
        </NavLink>

        <NavLink
          to="/dashboard/matrix"
          onClick={handleNavClick}
          className={({ isActive }) => `scada-nav-btn ${isActive ? "active" : ""}`}
        >
          <Grid3X3 size={17} />
          <span>36-Aeroleaf Matrix</span>
          <span className="nav-badge-pill">36</span>
        </NavLink>

        <NavLink
          to="/dashboard/microgrid"
          onClick={handleNavClick}
          className={({ isActive }) => `scada-nav-btn ${isActive ? "active" : ""}`}
        >
          <BatteryCharging size={17} />
          <span>BESS & Microgrid</span>
        </NavLink>

        <NavLink
          to="/dashboard/weather"
          onClick={handleNavClick}
          className={({ isActive }) => `scada-nav-btn ${isActive ? "active" : ""}`}
        >
          <Wind size={17} />
          <span>Atmospheric Telemetry</span>
        </NavLink>

        <span className="nav-menu-label" style={{ marginTop: 14 }}>ANALYTICS & ESG</span>

        <NavLink
          to="/dashboard/analytics"
          onClick={handleNavClick}
          className={({ isActive }) => `scada-nav-btn ${isActive ? "active" : ""}`}
        >
          <BarChart3 size={17} />
          <span>Generation Analytics</span>
        </NavLink>

        <NavLink
          to="/dashboard/controls"
          onClick={handleNavClick}
          className={({ isActive }) => `scada-nav-btn ${isActive ? "active" : ""}`}
        >
          <ShieldCheck size={17} />
          <span>Safety & Storm Brake</span>
        </NavLink>
      </nav>

      {/* Sidebar Footer Actions */}
      <div className="scada-sidebar-footer">
        <button
          type="button"
          className="sidebar-esg-btn"
          onClick={() => {
            if (onCloseMobile) onCloseMobile();
            onOpenCertificate();
          }}
        >
          <FileSpreadsheet size={15} />
          <span>ESG Certificate</span>
        </button>

        <div className="sidebar-user-row">
          <div className="user-avatar">
            <span>DE</span>
          </div>
          <div className="user-info">
            <strong>demo@aeris.com</strong>
            <small>System Engineer</small>
          </div>
          <button
            type="button"
            className="user-logout-btn"
            onClick={onLogout}
            title="Sign out of SCADA"
          >
            <LogOut size={16} />
          </button>
        </div>

        <Link to="/" className="sidebar-back-home" onClick={handleNavClick}>
          <ArrowLeft size={13} /> Exit to Aeris Portal
        </Link>
      </div>
    </aside>
    </>
  );
}
