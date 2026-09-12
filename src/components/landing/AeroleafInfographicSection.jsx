import React, { useState } from "react";
import {
  Wind,
  Cpu,
  Zap,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Maximize2,
  Compass,
  RotateCw,
  Gauge,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function AeroleafInfographicSection() {
  const [activeView, setActiveView] = useState("exploded"); // exploded, generator, crossSection, components
  const [activeComponentIdx, setActiveComponentIdx] = useState(0);

  const CORE_COMPONENTS = [
    {
      id: "blades",
      title: "Aerodynamic Blades / Shell",
      tag: "Composite / FRP",
      image: "/images/component_blades.jpg",
      desc: "Double-blade biomimetic aerofoil geometry designed for laminar airflow induction and turbulent 360° omnidirectional capture without yaw mechanisms.",
      specs: ["Starts from 2–3 m/s", "Composite / FRP material", "Whisper-quiet <25 dB(A)"],
    },
    {
      id: "bearings",
      title: "High-Performance Bearings",
      tag: "Dual Top & Bottom",
      image: "/images/component_bearings.jpg",
      desc: "Precision flanged top bearing and heavy-duty bottom load bearing ensure friction-free rotational symmetry under severe storm thrust loads.",
      specs: ["Supports vertical axial load", "Sealed lubrication", "Rated up to 50 m/s gusts"],
    },
    {
      id: "generator",
      title: "Direct-Drive Micro Generator",
      tag: "Permanent Magnet (PMG)",
      image: "/images/component_generator.jpg",
      desc: "Synchronous permanent magnet generator (NdFeB magnets + laminated copper stator stack) directly converts rotational energy without gearboxes or drive belts.",
      specs: ["Direct drive (Zero gears)", "48V AC rectified output", "5+ years R&D validation"],
    },
    {
      id: "controller",
      title: "Smart Control System",
      tag: "10ms Microcontroller Loop",
      image: "/images/component_pcb_controller.jpg",
      desc: "Embedded microprocessor electronic regulation card continuously monitors and optimizes voltage, current, and rotational efficiency every 10 milliseconds.",
      specs: ["10ms edge compute cycle", "Active MPPT tracking", "IoT cloud telemetry ready"],
    },
    {
      id: "weather",
      title: "Weatherproof Enclosure",
      tag: "IP67 Ingress Protection",
      image: "/images/component_weather_seal.jpg",
      desc: "Double-sealed casing with a transparent polycarbonate protective dome shields sensitive micro-electronics against driving rain, sand, snow, and coastal salt spray.",
      specs: ["Double-sealed casing", "Polycarbonate dome", "-25°C to +50°C rating"],
    },
    {
      id: "mount",
      title: "Heavy-Duty Mounting System",
      tag: "Structural Flange Collar",
      image: "/images/component_mounting_base.jpg",
      desc: "Precision green cast alloy base housing with structural mounting flange collar allows rock-solid installation across poles, parapets, and WindTree branches.",
      specs: ["Heavy metal alloy collar", "Integrated wire pass-through", "Vibration dampening base"],
    },
  ];

  return (
    <div className="aeroleaf-infographic-container" id="aeroleaf-engineering">
      <div className="section-heading center">
        <span className="eyebrow">Interactive Engineering Anatomy</span>
        <h2>AERIS Vertical Wind Turbine &amp; Micro-Generator</h2>
        <p className="customizer-subhead">
          Explore the internal electromechanical architecture, sealed weatherproofing, and smart microcontroller systems
          engineered into every individual Aeroleaf® module.
        </p>
      </div>

      {/* Main View Selector Tabs */}
      <div className="infographic-view-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeView === "exploded"}
          className={`infographic-tab-btn ${activeView === "exploded" ? "active" : ""}`}
          onClick={() => setActiveView("exploded")}
        >
          <Layers size={16} />
          <span>3D Exploded View</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeView === "generator"}
          className={`infographic-tab-btn ${activeView === "generator" ? "active" : ""}`}
          onClick={() => setActiveView("generator")}
        >
          <Zap size={16} />
          <span>Micro Generator &amp; PCB</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeView === "crossSection"}
          className={`infographic-tab-btn ${activeView === "crossSection" ? "active" : ""}`}
          onClick={() => setActiveView("crossSection")}
        >
          <Cpu size={16} />
          <span>Cross Section &amp; Shaft</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeView === "components"}
          className={`infographic-tab-btn ${activeView === "components" ? "active" : ""}`}
          onClick={() => setActiveView("components")}
        >
          <CheckCircle2 size={16} />
          <span>6 Subsystem Modules</span>
        </button>
      </div>

      {/* Active Interactive Stage Display */}
      <div className="infographic-stage-card">
        {activeView === "exploded" && (
          <div className="stage-split-grid">
            <div className="stage-visual-box">
              <img
                src="/images/aeroleaf_3d_exploded_render.jpg"
                alt="3D Exploded Diagram of Aeroleaf Vertical-Axis Wind Turbine"
                className="stage-main-img"
              />
              <span className="stage-visual-badge">
                <Sparkles size={13} color="#4ab97e" /> 3D Exploded Assembly
              </span>
            </div>

            <div className="stage-copy-box">
              <div className="stage-header-chip">
                <span className="live-dot-pulse" /> Complete Electromechanical Assembly
              </div>
              <h3>Biomimetic Double-Blade Turbine Architecture</h3>
              <p>
                Every Aeroleaf operates as an autonomous, vertically integrated micro-power station. Airflow exerts rotational torque on the aerodynamic composite blades, directly turning the central precision steel shaft without any friction-heavy gearbox.
              </p>

              <div className="stage-parts-callout-grid">
                <div className="part-callout">
                  <strong>1. Outer Shell Blades</strong>
                  <span>Aerodynamic composite FRP geometry for 360° laminar wind capture.</span>
                </div>
                <div className="part-callout">
                  <strong>2. Top &amp; Bottom Bearings</strong>
                  <span>Precision dual flanged bearings supporting vertical thrust &amp; smooth rotation.</span>
                </div>
                <div className="part-callout">
                  <strong>3. Micro-Controller Board</strong>
                  <span>Microprocessor computing optimal voltage instructions every 10ms.</span>
                </div>
                <div className="part-callout">
                  <strong>4. Direct-Drive PMSG</strong>
                  <span>Permanent magnet synchronous generator delivering rectified 48V DC power.</span>
                </div>
              </div>

              <div className="stage-footer-specs">
                <div>
                  <small>Starting Wind Speed</small>
                  <strong>2.0 – 3.0 m/s</strong>
                </div>
                <div>
                  <small>Operating Noise</small>
                  <strong>&lt; 25 dB(A) Whisper-Quiet</strong>
                </div>
                <div>
                  <small>Design Lifespan</small>
                  <strong>25+ Years Marine Steel</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === "generator" && (
          <div className="stage-split-grid">
            <div className="stage-visual-box">
              <img
                src="/images/aeroleaf_cutaway_generator.jpg"
                alt="Micro Generator Detailed 3D Cutaway with PCB Controller"
                className="stage-main-img"
              />
              <span className="stage-visual-badge">
                <Zap size={13} color="#4ab97e" /> Micro Generator Cutaway
              </span>
            </div>

            <div className="stage-copy-box">
              <div className="stage-header-chip">
                <ShieldCheck size={14} color="#4ab97e" /> Doubly Protected Sub-Generator
              </div>
              <h3>Synchronous PMG &amp; Embedded 10ms Regulation Loop</h3>
              <p>
                The micro-generator is doubly protected by a cast alloy housing and an airtight polycarbonate bulb dome, shielding internal copper stator coils and electronic microprocessor circuitry against rain, dust, sand, snow, and corrosive coastal salt mist.
              </p>

              <ul className="check-list" style={{ marginTop: "14px" }}>
                <li>Permanent-magnet synchronous direct drive eliminates gearbox whine and mechanical degradation</li>
                <li>Embedded microcontroller runs an active 10 millisecond loop to dynamically govern power curve output</li>
                <li>Integrated eddy-current electromagnetic braking for automatic high-wind storm protection</li>
                <li>Sealed waterproof wire conduit routing electricity downward into central MPPT bus</li>
              </ul>

              <div className="stage-footer-specs" style={{ marginTop: "20px" }}>
                <div>
                  <small>Peak Inversion Efficiency</small>
                  <strong>98.4% Sine Wave</strong>
                </div>
                <div>
                  <small>Encapsulation</small>
                  <strong>IP67 Waterproof Dome</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === "crossSection" && (
          <div className="stage-split-grid">
            <div className="stage-visual-box">
              <img
                src="/images/aeroleaf_technical_infographic.jpg"
                alt="Aeris Vertical Wind Turbine Full Engineering Infographic"
                className="stage-main-img contain"
              />
              <span className="stage-visual-badge">
                <Maximize2 size={13} color="#4ab97e" /> Complete Technical Blueprint
              </span>
            </div>

            <div className="stage-copy-box">
              <div className="stage-header-chip">
                <Gauge size={14} color="#4ab97e" /> Structural Cross Section Specifications
              </div>
              <h3>Internal Transmission &amp; Mounting Collar</h3>
              <p>
                A continuous stainless steel central shaft passes directly through the aerodynamic blade core into the lower generator stator, eliminating bending moments and dynamic vibration harmonics.
              </p>

              <div className="technical-specs-table-card">
                <div className="tech-spec-row">
                  <span>System Power Output</span>
                  <strong>10 kW – 36 kW (Modular Unit Scalability)</strong>
                </div>
                <div className="tech-spec-row">
                  <span>Per-Aeroleaf Rating</span>
                  <strong>300 W (48V PMG) / Optional 336 W Hybrid Solar</strong>
                </div>
                <div className="tech-spec-row">
                  <span>Rotational Speed</span>
                  <strong>50 – 200 RPM Nominal (850 RPM Governed Max)</strong>
                </div>
                <div className="tech-spec-row">
                  <span>Starting Wind Speed</span>
                  <strong>2.5 m/s (9 km/h · Gentle Breeze)</strong>
                </div>
                <div className="tech-spec-row">
                  <span>Continuous Wind Rating</span>
                  <strong>43.0 m/s (155 km/h Typhoon Resistance)</strong>
                </div>
                <div className="tech-spec-row">
                  <span>Generator Architecture</span>
                  <strong>Permanent Magnet Synchronous (Direct Drive)</strong>
                </div>
                <div className="tech-spec-row">
                  <span>Material Composition</span>
                  <strong>Composite FRP / Aluminum / C5 Marine Steel</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeView === "components" && (
          <div className="stage-components-suite">
            <div className="components-tiles-grid">
              {CORE_COMPONENTS.map((item, idx) => {
                const isSelected = activeComponentIdx === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`component-tile-card ${isSelected ? "selected" : ""}`}
                    onClick={() => setActiveComponentIdx(idx)}
                  >
                    <div className="tile-thumb-wrap">
                      <img src={item.image} alt={item.title} />
                      <span className="tile-num">0{idx + 1}</span>
                    </div>
                    <strong>{item.title}</strong>
                    <span className="tile-tag">{item.tag}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Component Spotlight */}
            <div className="component-spotlight-panel">
              <div className="spotlight-header">
                <div>
                  <span className="eyebrow">{CORE_COMPONENTS[activeComponentIdx].tag}</span>
                  <h3>{CORE_COMPONENTS[activeComponentIdx].title}</h3>
                </div>
                <img
                  src={CORE_COMPONENTS[activeComponentIdx].image}
                  alt={CORE_COMPONENTS[activeComponentIdx].title}
                  className="spotlight-thumb-large"
                />
              </div>

              <p className="spotlight-desc">{CORE_COMPONENTS[activeComponentIdx].desc}</p>

              <div className="spotlight-specs-row">
                {CORE_COMPONENTS[activeComponentIdx].specs.map((s, i) => (
                  <div key={i} className="spotlight-spec-pill">
                    <CheckCircle2 size={13} color="#2d6a4d" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Skyline Banner Strip */}
      <div className="infographic-skyline-card">
        <div className="skyline-copy">
          <span className="skyline-tag">A Cleaner · Greener · Smarter Planet</span>
          <h3>Small Footprint. Iconic Clean Impact.</h3>
          <p>
            Deploy scalable Aeroleaf micro-turbines across municipal parks, corporate headquarters,
            building rooftops, and civic waterfront promenades.
          </p>
        </div>
        <div className="skyline-visual">
          <img
            src="/images/windtree_skyline_banner.jpg"
            alt="Aeris WindTree in Urban Skyline"
            className="skyline-img"
          />
        </div>
      </div>
    </div>
  );
}
