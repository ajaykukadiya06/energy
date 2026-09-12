import { Link, useOutletContext } from "react-router-dom";
import {
  Zap,
  BatteryCharging,
  Wind,
  BarChart3,
  ShieldCheck,
  Grid3X3,
  ArrowRight,
  Activity,
  CheckCircle2,
  Clock,
} from "lucide-react";

export function OverviewView() {
  const context = useOutletContext();
  const {
    totalLiveKw,
    avgRpm,
    avgEfficiency,
    windSpeed,
    batteryCharge,
    stormBrakeActive,
    lastUpdated,
  } = context;

  const scadaEvents = [
    {
      time: "Just now",
      title: "Active MPPT Inverter Synchronized",
      desc: "Grid frequency 50.02 Hz · 98.6% conversion efficiency",
      type: "optimal",
    },
    {
      time: "2 mins ago",
      title: "15 kWh BESS Storage Discharging",
      desc: "Supplying 3.2 kW facility base load from stored clean wind",
      type: "optimal",
    },
    {
      time: "14 mins ago",
      title: "36-Aeroleaf Vibration Telemetry Nominal",
      desc: "All harmonic accelerometer sensors reporting <0.18 mm/s",
      type: "optimal",
    },
    {
      time: "1 hour ago",
      title: "Automated Self-Diagnostics Sequence Passed",
      desc: "Firmware v4.8.2 routine integrity check 100% verified",
      type: "optimal",
    },
  ];

  return (
    <div className="tab-pane-fade">
      {/* Primary KPI Generation & Yield Summary */}
      <section className="dashboard-overview">
        <div className="dashboard-production">
          <div className="dashboard-card-label">Real-Time Array Output</div>
          <strong>
            {totalLiveKw} <span>kW</span>
          </strong>
          <div className="production-bar">
            <span style={{ width: `${Math.min(100, (parseFloat(totalLiveKw) / 10.8) * 100)}%` }} />
          </div>
          <div className="production-meta">
            <span>{Math.round((parseFloat(totalLiveKw) / 10.8) * 100)}% of 10.8 kW Peak Rated</span>
            <span>Avg Rotor Speed: {avgRpm} RPM</span>
          </div>
        </div>

        <div className="dashboard-summary">
          <div>
            <span>Today&apos;s Yield</span>
            <strong>48.6 kWh</strong>
            <small>+12.4% vs baseline</small>
          </div>
          <div>
            <span>15 kWh BESS Storage</span>
            <strong>{batteryCharge}% Charged</strong>
            <small>Buffer: {((batteryCharge / 100) * 15).toFixed(1)} kWh</small>
          </div>
          <div>
            <span>Site Wind Velocity</span>
            <strong>{windSpeed.toFixed(1)} m/s</strong>
            <small>Active laminar draft</small>
          </div>
          <div>
            <span>CO₂ Avoided Today</span>
            <strong>20.4 kg CO₂</strong>
            <small>100% Wind-Direct</small>
          </div>
        </div>
      </section>

      {/* Feature Route Navigation Cards */}
      <section style={{ marginTop: 28 }}>
        <div className="section-heading" style={{ marginBottom: 18, textAlign: "left" }}>
          <span className="eyebrow">Dedicated SCADA Modules</span>
          <h2 style={{ fontSize: "1.4rem", margin: "4px 0 0" }}>
            Operational Subsystems & Telemetry Portals
          </h2>
        </div>

        <div className="overview-routes-grid">
          {/* Module 1: 36-Leaf Matrix */}
          <article className="overview-route-card">
            <div className="route-card-top">
              <div className="route-icon-box green">
                <Grid3X3 size={20} color="#ffffff" />
              </div>
              <span className="route-badge">36 Turbines</span>
            </div>
            <h3>36-Aeroleaf® Digital Twin Matrix</h3>
            <p>
              Inspect real-time RPM, individual Watt generation, bearing temperature,
              and vibration harmonics across Branches A to F.
            </p>
            <Link to="/dashboard/matrix" className="route-card-link">
              Open 36-Leaf Matrix <ArrowRight size={14} />
            </Link>
          </article>

          {/* Module 2: Microgrid & BESS */}
          <article className="overview-route-card">
            <div className="route-card-top">
              <div className="route-icon-box blue">
                <BatteryCharging size={20} color="#ffffff" />
              </div>
              <span className="route-badge">BESS & EV</span>
            </div>
            <h3>Smart Microgrid & Battery Storage</h3>
            <p>
              Monitor the 15 kWh LiFePO4 battery storage buffer, 22 kW dual-port EV pedestal,
              and live power dispatch flows.
            </p>
            <Link to="/dashboard/microgrid" className="route-card-link">
              View Microgrid Telemetry <ArrowRight size={14} />
            </Link>
          </article>

          {/* Module 3: Atmospheric Sensors */}
          <article className="overview-route-card">
            <div className="route-card-top">
              <div className="route-icon-box green">
                <Wind size={20} color="#ffffff" />
              </div>
              <span className="route-badge">Weather IoT</span>
            </div>
            <h3>Atmospheric & Acoustic Stream</h3>
            <p>
              Real-time wind cut-in/cut-out thresholds, 360° omnidirectional capture,
              and acoustic signature monitoring (&lt;25 dB).
            </p>
            <Link to="/dashboard/weather" className="route-card-link">
              View Weather Stream <ArrowRight size={14} />
            </Link>
          </article>

          {/* Module 4: Analytics */}
          <article className="overview-route-card">
            <div className="route-card-top">
              <div className="route-icon-box gold">
                <BarChart3 size={20} color="#ffffff" />
              </div>
              <span className="route-badge">Yield Curves</span>
            </div>
            <h3>Generation Yield & Analytics</h3>
            <p>
              Review weekly generation curves, monthly output projections,
              cumulative lifetime MWh, and financial grid savings.
            </p>
            <Link to="/dashboard/analytics" className="route-card-link">
              Open Analytics Reports <ArrowRight size={14} />
            </Link>
          </article>

          {/* Module 5: Storm Braking Controls */}
          <article className="overview-route-card">
            <div className="route-card-top">
              <div className="route-icon-box red">
                <ShieldCheck size={20} color="#ffffff" />
              </div>
              <span className={`route-badge ${stormBrakeActive ? "warning" : ""}`}>
                {stormBrakeActive ? "Braked" : "Active Ready"}
              </span>
            </div>
            <h3>Safety & Remote Storm Braking</h3>
            <p>
              Command electromagnetic eddy-current braking for severe typhoon weather
              and execute automated sensor diagnostics.
            </p>
            <Link to="/dashboard/controls" className="route-card-link">
              Manage Safety Governors <ArrowRight size={14} />
            </Link>
          </article>
        </div>
      </section>

      {/* Live SCADA Event Log */}
      <section className="dashboard-panel" style={{ marginTop: 28 }}>
        <div className="dashboard-panel-heading">
          <div>
            <span className="eyebrow">Real-Time Event Stream</span>
            <h2>SCADA System Audit Log</h2>
          </div>
          <span className="period-select">Node #WT-042 (Munich)</span>
        </div>

        <div className="scada-event-list">
          {scadaEvents.map((evt, idx) => (
            <div key={idx} className="scada-event-item">
              <div className="event-item-icon">
                <CheckCircle2 size={16} color="#2d6a4d" />
              </div>
              <div className="event-item-body">
                <strong>{evt.title}</strong>
                <p>{evt.desc}</p>
              </div>
              <span className="event-item-time">
                <Clock size={12} style={{ marginRight: 4 }} /> {evt.time}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
