import React from "react";
import { Wind, ShieldAlert, Zap, Compass, CheckCircle2 } from "lucide-react";

export function WindSpeedGauge() {
  const milestones = [
    {
      speed: "2.5 m/s",
      kmh: "9 km/h",
      mph: "5.6 mph",
      label: "Cut-in Operating Threshold",
      desc: "Aeroleafs begin continuous rotation and power generation from gentle breezes.",
      badge: "Start Threshold",
      color: "#2d6a4d",
    },
    {
      speed: "10.0 m/s",
      kmh: "36 km/h",
      mph: "22.4 mph",
      label: "Nominal Rated Power",
      desc: "Optimal generation curve delivering full nominal array capacity.",
      badge: "Nominal Output",
      color: "#39a86f",
    },
    {
      speed: "43.0 m/s",
      kmh: "155 km/h",
      mph: "96.2 mph",
      label: "Continuous Wind Limit",
      desc: "Continuous operational threshold verified under severe storm airflow.",
      badge: "Continuous Limit",
      color: "#d7a35d",
    },
    {
      speed: "50.0 m/s",
      kmh: "180 km/h",
      mph: "112 mph",
      label: "Survival Gust Limit",
      desc: "Structural marine steel integrity against extreme typhoon / hurricane gusts.",
      badge: "Survival Gust",
      color: "#c2410c",
    },
  ];

  return (
    <div className="wind-performance-gauge-card">
      <div className="section-heading center">
        <span className="eyebrow">Wind Performance & Operating Thresholds</span>
        <h2>Designed to start from 2.5 m/s (9 km/h).</h2>
        <p className="customizer-subhead">
          Engineered for weak and turbulent urban micro-currents while surviving extreme storm winds up to 180 km/h.
        </p>
      </div>

      {/* Visual Timeline / Gauge Bar */}
      <div className="gauge-track-container">
        <div className="gauge-main-track">
          <div className="gauge-track-gradient" />
          <div className="gauge-pin" style={{ left: "10%" }}>
            <span className="gauge-pin-dot start" />
            <span className="gauge-pin-text">2.5 m/s</span>
          </div>
          <div className="gauge-pin" style={{ left: "35%" }}>
            <span className="gauge-pin-dot nominal" />
            <span className="gauge-pin-text">10.0 m/s</span>
          </div>
          <div className="gauge-pin" style={{ left: "75%" }}>
            <span className="gauge-pin-dot continuous" />
            <span className="gauge-pin-text">43.0 m/s</span>
          </div>
          <div className="gauge-pin" style={{ left: "95%" }}>
            <span className="gauge-pin-dot gust" />
            <span className="gauge-pin-text">50.0 m/s</span>
          </div>
        </div>
      </div>

      {/* 4 Milestones Cards Grid */}
      <div className="wind-milestones-grid">
        {milestones.map((m) => (
          <div key={m.speed} className="milestone-card">
            <div className="milestone-head">
              <span className="milestone-speed">{m.speed}</span>
              <span className="milestone-kmh">≈ {m.kmh}</span>
            </div>
            <span className="milestone-badge" style={{ color: m.color, borderColor: `${m.color}40`, backgroundColor: `${m.color}12` }}>
              {m.badge}
            </span>
            <h4>{m.label}</h4>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="gauge-disclaimer-box">
        <CheckCircle2 size={15} color="#2d6a4d" style={{ marginRight: 8, flexShrink: 0 }} />
        <span>
          <strong>Engineering Note:</strong> Starting and operational wind limits describe mechanical thresholds. Actual energy production over time depends on site-specific Weibull wind velocity distributions and local building aerodynamic interference.
        </span>
      </div>
    </div>
  );
}
