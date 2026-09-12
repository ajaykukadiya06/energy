import React, { useState } from "react";
import {
  Wind,
  Cpu,
  Zap,
  Battery,
  Building2,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function TechArchitectureDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "wind",
      title: "1. 360° Wind Capture",
      icon: Wind,
      badge: "Aerodynamic Rotor",
      summary: "Double-blade vertical-axis Aeroleafs capture airflow from any direction without yaw motors.",
      techSpec: "Starts at 2.5 m/s (9 km/h) · Operates in turbulent urban micro-drafts",
    },
    {
      id: "pmg",
      title: "2. Direct-Drive PMG",
      icon: Zap,
      badge: "Synchronous Generator",
      summary: "Mechanical rotation directly drives a permanent-magnet synchronous micro-generator.",
      techSpec: "No gearbox · No drive belts · 48V low-voltage AC generation",
    },
    {
      id: "rectifier",
      title: "3. Micro-Regulation & DC Bus",
      icon: Cpu,
      badge: "10ms Edge Loop",
      summary: "Each leaf's embedded microprocessor computes voltage/current instructions every 10 milliseconds.",
      techSpec: "AC rectified immediately to 48V DC · Combined parallel collection bus",
    },
    {
      id: "inverter",
      title: "4. Central MPPT Inversion",
      icon: Layers,
      badge: "Clean Sine Wave",
      summary: "Central power electronics convert DC current into grid-synchronized AC power.",
      techSpec: "110V / 230V Single-Phase or 400V 3-Phase output · 98.4% peak efficiency",
    },
    {
      id: "grid",
      title: "5. Building & Microgrid Dispatch",
      icon: Building2,
      badge: "Clean Consumption",
      summary: "Direct self-consumption for buildings, EV fast-chargers, or 15 kWh BESS storage buffers.",
      techSpec: "Net-metered grid feed or autonomous microgrid islanding capability",
    },
  ];

  return (
    <div className="tech-arch-container">
      <div className="section-heading center">
        <span className="eyebrow">Electrical & Mechanical Architecture</span>
        <h2>How the WindTree turns urban breeze into usable power.</h2>
        <p className="customizer-subhead">
          A direct, high-efficiency conversion pipeline from kinetic airflow to grid-synchronized AC electricity.
        </p>
      </div>

      {/* Interactive Pipeline Stepper */}
      <div className="arch-pipeline-stepper">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isSelected = activeStep === idx;
          return (
            <button
              key={s.id}
              type="button"
              className={`arch-step-node ${isSelected ? "is-active" : ""}`}
              onClick={() => setActiveStep(idx)}
            >
              <div className="arch-node-icon">
                <Icon size={20} />
              </div>
              <span className="arch-node-title">{s.title.split(". ")[1]}</span>
              <span className="arch-node-badge">{s.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Highlight Card */}
      <div className="arch-detail-card">
        <div className="arch-detail-header">
          <div className="arch-header-left">
            <span className="eyebrow">{steps[activeStep].badge}</span>
            <h3>{steps[activeStep].title}</h3>
          </div>
          <div className="arch-step-pill">Stage 0{activeStep + 1} of 05</div>
        </div>

        <p className="arch-detail-summary">{steps[activeStep].summary}</p>

        <div className="arch-detail-footer">
          <div className="arch-spec-tag">
            <CheckCircle2 size={15} color="#2d6a4d" style={{ marginRight: 6, flexShrink: 0 }} />
            <span><strong>Technical detail:</strong> {steps[activeStep].techSpec}</span>
          </div>
          <div className="arch-nav-buttons">
            <button
              type="button"
              className="secondary-button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              style={{ padding: "6px 14px", fontSize: "0.82rem" }}
            >
              Previous
            </button>
            <button
              type="button"
              className="primary-button"
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              style={{ padding: "6px 16px", fontSize: "0.82rem" }}
            >
              Next Stage <ArrowRight size={13} style={{ marginLeft: 4 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
