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
    short: "Omnidirectional 360° micro-generators",
    badge: "Patented Core",
    icon: Wind,
    specs: [
      { label: "Starting Wind Speed", value: "2.5 m/s (9 km/h)" },
      { label: "Per Leaf Rating", value: "300 W (48V PMG)" },
      { label: "Max Speed Limit", value: "850 RPM Governed" },
      { label: "Continuous Wind", value: "43 m/s (155 km/h)" },
    ],
    description:
      "Patented double-blade vertical-axis micro-turbines directly coupled to permanent-magnet synchronous micro-generators. Aeroleafs capture airflow from 360° without mechanical yaw mechanisms, making them exceptionally responsive in weak and turbulent urban micro-climates.",
    benefits: [
      "Direct-drive PMG with zero gearboxes or drive belts",
      "Embedded electronic regulation card with 10ms micro-controller loop",
      "Low-voltage 48V AC generation rectified immediately to DC",
      "Sealed encapsulation against rain, sand, snow, and coastal air",
    ],
  },
  {
    id: "trunk",
    title: "Biomimetic Steel Trunk & Branches",
    short: "36A architectural steel architecture",
    badge: "Engineered Architecture",
    icon: TreePine,
    specs: [
      { label: "Survival Gust Limit", value: "50 m/s (180 km/h)" },
      { label: "Structural Weight", value: "3,590 kg (36A Tree)" },
      { label: "Height & Diameter", value: "9.8 m H × 8.0 m Ø" },
      { label: "Coating Grade", value: "Marine C5 Electrostatic RAL" },
    ],
    description:
      "Designed as a sculptural urban landmark that integrates seamlessly into city parks, civic squares, and corporate headquarters. Engineered from high-tensile steel to dampen dynamic vibration harmonics while routing power wiring invisibly down through the trunk core.",
    benefits: [
      "Modular branch sections for swift 2–4 day on-site assembly",
      "Certified for severe weather (up to 43 m/s continuous, 50 m/s gusts)",
      "Custom RAL powder-coating to match municipal or corporate branding",
      "Integrated grounding, lightning surge protection, and safety anchorage",
    ],
  },
  {
    id: "inverter",
    title: "Intelligent Power Regulation & Inversion",
    short: "Sub-second multi-channel regulation",
    badge: "Smart Power",
    icon: Zap,
    specs: [
      { label: "Conversion Flow", value: "AC → DC Rectified → AC" },
      { label: "Grid Interface", value: "110V / 230V / 400V 3-Phase" },
      { label: "Microprocessor Cycle", value: "10 ms Voltage/Current Loop" },
      { label: "Microgrid Mode", value: "BESS Battery & Grid-Tied" },
    ],
    description:
      "Each Aeroleaf unit features an integrated microprocessor that computes optimal voltage and current instructions every 10 milliseconds relative to rotor speed. Rectified DC feeds into central smart MPPT inverters for clean sine wave export directly to building panels, EV chargers, or battery banks.",
    benefits: [
      "Sub-second micro-turbine power optimization across turbulent drafts",
      "Instant synchronization with local grid or 15 kWh BESS storage buffers",
      "Autonomous eddy-current safety braking during severe storm events",
      "SCADA Digital Twin telemetry for real-time monitoring and diagnostics",
    ],
  },
  {
    id: "branch-cluster",
    title: "Modular Scaling & Hybrid Solar Petals",
    short: "1 Leaf to 36A Trees and Solar Petals",
    badge: "Modular & Hybrid",
    icon: Layers,
    specs: [
      { label: "36A Installed Rating", value: "10.8 kW (5.87 kW Nominal)" },
      { label: "Hybrid Solar Petal", value: "+36 Wp per Aeroleaf" },
      { label: "Total Hybrid Leaf", value: "336 W (Wind + Solar)" },
      { label: "Scalability Options", value: "1, 3, 12, 18, 36+ Leaves" },
    ],
    description:
      "Deploy individual Aeroleafs on rooftop parapets, 3-leaf clusters on wall brackets, Wind Bush 12 systems, or 36-leaf flagship Wind Trees. Optional Hybrid Aeroleaf technology adds a 36 Wp photovoltaic solar petal to create a combined 336 W wind-solar micro-generator.",
    benefits: [
      "Parallel electrical architecture ensures redundant, independent generation",
      "Hybrid Wind + Solar captures daytime sun and 24/7 breeze profiles",
      "Hot-swappable modular turbine components for streamlined servicing",
      "Customizable configurations from 300 W modules to 36+ kW civic arrays",
    ],
  },
  {
    id: "acoustic",
    title: "Low-Noise Urban Direct-Drive",
    short: "Acoustically benign urban integration",
    badge: "Urban Acoustic",
    icon: VolumeX,
    specs: [
      { label: "Operating Noise", value: "Whisper-Quiet Profile" },
      { label: "Drive Mechanism", value: "Direct Drive (No Gears)" },
      { label: "Infrasound Level", value: "Zero Low-Frequency Hum" },
      { label: "Building Clearance", value: "Min. 6 m Separation" },
    ],
    description:
      "By eliminating mechanical gearboxes and drive belts, the direct-drive permanent magnet generators eliminate mechanical friction noise and whine. Aeroleafs operate with low rotational inertia, blending silently into urban ambient soundscapes.",
    benefits: [
      "Approved for stringent urban plazas, university campuses, and residential zones",
      "Low mechanical vibration with balanced double-blade vertical symmetry",
      "Pedestrian-safe low-voltage operation suitable for parks and public paths",
      "Compatible with integrated base amenities such as EV charging and public seating",
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
          that make distributed urban wind generation feasible and reliable.
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
