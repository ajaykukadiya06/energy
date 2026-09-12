import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, Lock, ArrowLeft } from "lucide-react";

export function DashboardLogin({ onLogin, demoEmail, demoPassword }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim().toLowerCase() !== demoEmail || password !== demoPassword) {
      setError("Please use the demo credentials provided below.");
      return;
    }
    onLogin();
  }

  function handleQuickDemoLogin() {
    setEmail(demoEmail);
    setPassword(demoPassword);
    onLogin();
  }

  return (
    <div className="dashboard-login-page">
      <div className="dashboard-login-container">
        {/* Left Side: Visual Hero Card */}
        <div className="login-visual-panel">
          <div className="login-visual-badge">
            <span className="live-dot-pulse" /> SCADA Gateway v4.8 · Live Telemetry
          </div>
          <div className="login-visual-content">
            <div className="login-visual-img-wrap">
              <img
                src="/images/footer_wind_tree.jpg"
                alt="Aeris Wind Tree SCADA Gateway"
                className="login-tree-img"
              />
            </div>
            <h2>Aeris SCADA IoT Cloud</h2>
            <p>
              Real-time digital twin monitoring for distributed Aeroleaf® micro-turbines,
              15 kWh BESS storage, and ESG clean energy reporting.
            </p>
            <div className="login-specs-mini">
              <div>
                <span>Active Installation</span>
                <strong>Munich Tech Hub #WT-042</strong>
              </div>
              <div>
                <span>Total Turbines</span>
                <strong>36 Aeroleaf® Units</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form Card */}
        <div className="dashboard-login-card">
          <div className="login-header-strip">
            <div className="dashboard-login-mark">
              <Zap size={22} color="#ffffff" />
            </div>
            <div>
              <span className="eyebrow" style={{ marginBottom: 2 }}>Secure Node Gateway</span>
              <h1 style={{ fontSize: "1.65rem", margin: 0 }}>Sign in to SCADA</h1>
            </div>
          </div>

          <p className="login-subtext">
            Enter credentials to access full turbine matrix telemetry, storm braking, and ESG reporting.
          </p>

          <form className="dashboard-login-form" onSubmit={handleSubmit}>
            <label>
              <Mail size={14} style={{ marginRight: 6, verticalAlign: "middle" }} />
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="demo@aeris.com"
                required
              />
            </label>
            <label>
              <Lock size={14} style={{ marginRight: 6, verticalAlign: "middle" }} />
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="aeris123"
                required
              />
            </label>
            {error && (
              <p className="dashboard-login-error" role="alert">
                {error}
              </p>
            )}
            <button className="primary-button submit-button" type="submit">
              Sign In to SCADA Cockpit
            </button>
          </form>

          <div className="demo-credentials-box">
            <div className="demo-box-top">
              <div>
                <strong>Demo Credentials</strong>
                <span>{demoEmail} · {demoPassword}</span>
              </div>
              <button
                type="button"
                className="quick-demo-btn"
                onClick={handleQuickDemoLogin}
              >
                1-Click Sign In
              </button>
            </div>
            <small>Pre-configured with Node #WT-042 (Munich Innovation Campus)</small>
          </div>

          <Link className="dashboard-back-link" to="/">
            <ArrowLeft size={14} style={{ marginRight: 4, verticalAlign: "middle" }} /> Back to Aeris Home
          </Link>
        </div>
      </div>
    </div>
  );
}
