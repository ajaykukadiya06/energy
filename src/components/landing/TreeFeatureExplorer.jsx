import React, { useState } from "react";
import {
  Wind,
  TreePine,
  Zap,
  Sun,
  VolumeX,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";

const TREE_FEATURES = [
  {
    id: "aeroleaf",
    title: "Aeroleaf® Micro-Turbines",
    short: "Omni-directional micro-generators",
    badge: "Patented Core",
    icon: Wind,
    specs: [
      { label: "Cut-in Wind Speed", value: "2.0 m/s (4.4 mph)" },
      { label: "Per Leaf Output", value: "300 W Peak" },
      { label: "Acoustic Noise", value: "< 28 dB (Whisper)" },
      { label: "Lifespan Rating", value: "25+ Years" },
    ],
    description:
      "Vertical-axis mini turbines molded into biological leaf shapes. Unlike traditional horizontal turbines that must rotate into the wind, Aeroleafs spin instantly from any direction—even from turbulent ground micro-drafts created by surrounding buildings.",
    benefits: [
      "No gearboxes or mechanical friction losses",
      "Direct-drive synchronous permanent magnet generators",
      "Bird and bat safe with full visual profile",
      "Silent rotation with zero low-frequency infrasound",
    ],
  },
  {
    id: "trunk",
    title: "Biomimetic Steel Trunk & Branches",
    short: "Sculptural, storm-rated structure",
    badge: "Engineered Architecture",
    icon: TreePine,
    specs: [
      { label: "Max Storm Resistance", value: "Class 3 (up to 180 km/h)" },
      { label: "Structural Material", value: "High-Tensile Marine Steel" },
      { label: "Coating", value: "Anti-Corrosive Electrostatic RAL" },
      { label: "Footprint Area", value: "3.5 m² Foundation Base" },
    ],
    description:
      "Engineered to blend naturally with urban forestry and architectural landmarks. Built with aerospace-grade steel geometry that absorbs wind vibrations while routing internal electrical wiring invisibly down through the trunk core.",
    benefits: [
      "Resistant to high coastal humidity and sandstorms",
      "Customizable RAL colors to match campus or city aesthetic",
      "Modular branch sections for straightforward crane-free assembly",
      "Integrated grounding and lightning protection systems",
    ],
  },
  {
    id: "inverter",
    title: "Smart Micro-Inverter & IoT Grid Hub",
    short: "Edge computing & power electronics",
    badge: "Smart Power",
    icon: Zap,
    specs: [
      { label: "Inversion Efficiency", value: "98.4% Peak" },
      { label: "Grid Connection", value: "Single or 3-Phase 230V/400V" },
      { label: "Telemetry Interval", value: "Real-time (500ms Edge)" },
      { label: "Microgrid Mode", value: "Battery & Microgrid Ready" },
    ],
    description:
      "Each branch cluster is managed by an independent Maximum Power Point Tracking (MPPT) circuit that balances variable wind output into ultra-clean sine wave AC power directly usable by nearby buildings, EV chargers, or public lighting.",
    benefits: [
      "Over-the-air firmware updates and self-diagnostics",
      "Instant synchronization with grid or battery storage banks",
      "Autonomous safety braking during extreme typhoons/hurricanes",
      "Live API telemetry for smart-city SCADA systems",
    ],
  },
  {
    id: "branch-cluster",
    title: "Modular Aeroleaf® Branch Clusters",
    short: "Scalable micro-turbine arrays",
    badge: "Plug & Play",
    icon: Layers,
    specs: [
      { label: "Leaf Scalability", value: "1 to 36+ Aeroleafs" },
      { label: "Unit Mounts", value: "Rooftop, Wall, Pole, Tree" },
      { label: "Dual Turbine Flow", value: "Synchronized Aerodynamics" },
      { label: "Maintenance", value: "Hot-Swappable Module" },
    ],
    description:
      "Deploy individual Aeroleaf micro-turbines on balcony rails, cluster 3 leaves onto wall mounts, or assemble 36 units on full Wind Trees. Each Aeroleaf acts as an independent generator, ensuring the entire system keeps producing power even if a single leaf undergoes maintenance.",
    benefits: [
      "Individual unit pricing starting from $850 per Aeroleaf",
      "Hot-swappable micro-turbines without crane or heavy machinery",
      "Fluid dual-rotor vortex capture maximizes low-altitude turbulence",
      "Modular expansion as clean energy needs grow over time",
    ],
  },
  {
    id: "acoustic",
    title: "Whisper-Quiet Urban Acoustics",
    short: "Decibel levels lower than rainfall",
    badge: "Eco Acoustic",
    icon: VolumeX,
    specs: [
      { label: "Operational Sound", value: "24 - 28 dB at 5m" },
      { label: "Compare to Leaves", value: "Rustling Leaves = 30 dB" },
      { label: "Vibration Index", value: "Zero Foundation Resonance" },
      { label: "Proximity Distance", value: "Install 1m from Benches" },
    ],
    description:
      "Traditional wind turbines suffer from blade swish and mechanical hum. Aeris uses vertical-axis fluid-flow Aeroleafs with custom magnetic bearings that operate so quietly you can install them next to outdoor restaurant seating, hospital gardens, or library courtyards.",
    benefits: [
      "Zero infrasound interference with residential communities",
      "Approved for strict European & North American urban noise zones",
      "Can be placed directly in pedestrian pathways and park squares",
      "Supports integrated public USB / EV charging stations",
    ],
  },
];

export function TreeFeatureExplorer() {
  const [selectedFeatureId, setSelectedFeatureId] = useState(TREE_FEATURES[0].id);
  const activeFeature = TREE_FEATURES.find((f) => f.id === selectedFeatureId) || TREE_FEATURES[0];
  const ActiveIcon = activeFeature.icon;

  return (
    <div className="tree-feature-explorer">
      <div className="section-heading center">
        <span className="eyebrow">Anatomy of Innovation</span>
        <h2>Inside the Aeris Wind Tree architecture.</h2>
        <p className="explorer-subhead">
          Explore the biomimetic technology, materials science, and intelligent power electronics
          that make distributed wind possible in urban settings.
        </p>
      </div>

      <div className="explorer-layout">
        {/* Navigation Tabs */}
        <div className="explorer-nav-list" role="tablist">
          {TREE_FEATURES.map((item) => {
            const isSelected = item.id === selectedFeatureId;
            const ItemIcon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`explorer-tab-card ${isSelected ? "is-selected" : ""}`}
                onClick={() => setSelectedFeatureId(item.id)}
              >
                <div className="tab-card-icon">
                  <ItemIcon size={22} color={isSelected ? "#ffffff" : "#2d6a4d"} />
                </div>
                <div className="tab-card-text">
                  <div className="tab-card-header">
                    <span className="tab-card-title">{item.title}</span>
                    <span className="tab-card-badge">{item.badge}</span>
                  </div>
                  <span className="tab-card-desc">{item.short}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Feature Showcase Panel */}
        <div className="explorer-detail-display" role="tabpanel">
          <div className="explorer-detail-head">
            <div className="explorer-detail-title-group">
              <span className="eyebrow">{activeFeature.badge}</span>
              <h3>{activeFeature.title}</h3>
            </div>
            <div className="explorer-large-icon">
              <ActiveIcon size={36} color="#2d6a4d" />
            </div>
          </div>

          <p className="explorer-long-desc">{activeFeature.description}</p>

          <div className="explorer-specs-grid">
            {activeFeature.specs.map((spec) => (
              <div key={spec.label} className="explorer-spec-card">
                <span className="spec-label">{spec.label}</span>
                <strong className="spec-val">{spec.value}</strong>
              </div>
            ))}
          </div>

          <div className="explorer-benefits-box">
            <h4>Key Architectural Advantages</h4>
            <ul className="explorer-check-list">
              {activeFeature.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
