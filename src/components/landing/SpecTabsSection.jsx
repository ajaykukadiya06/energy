import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wind,
  Layers,
  Sun,
  Zap,
  ShieldCheck,
  Ruler,
  CheckCircle2,
  ArrowRight,
  FileCheck,
} from "lucide-react";

export function SpecTabsSection() {
  const [activeTab, setActiveTab] = useState("aeroleaf");

  const TABS = [
    { id: "aeroleaf", label: "Aeroleaf® Module", icon: Wind },
    { id: "tree36a", label: "WindTree 36A", icon: Layers },
    { id: "hybrid", label: "Hybrid Solar Petal", icon: Sun },
    { id: "electrical", label: "Electrical & Control", icon: Zap },
    { id: "installation", label: "Site & Installation", icon: Ruler },
  ];

  const SPEC_DATA = {
    aeroleaf: {
      title: "Aeroleaf® Turbine Module Specifications",
      subtitle: "Verified reference specifications for the individual 300 W vertical-axis micro-turbine.",
      specs: [
        { label: "Turbine Type", value: "Vertical-axis micro wind turbine" },
        { label: "Blade Design", value: "Double-blade, biomimetic leaf-shaped" },
        { label: "Wind Direction Capture", value: "360° Omnidirectional (No yaw motor)" },
        { label: "Generator Technology", value: "Permanent-magnet synchronous (PMG)" },
        { label: "Drive System", value: "Direct drive (Zero gearbox, zero belts)" },
        { label: "Standard Module Rating", value: "300 W Peak" },
        { label: "Nominal Module Power", value: "~160 W Continuous" },
        { label: "Operating Terminal Voltage", value: "48 V DC (Rectified)" },
        { label: "Maximum Rotational Speed", value: "850 RPM Governed" },
        { label: "Starting Wind Speed", value: "2.5 m/s (9 km/h / 5.6 mph)" },
        { label: "Continuous Wind Resistance", value: "43 m/s (155 km/h / 96 mph)" },
        { label: "Survival Gust Limit", value: "50 m/s (180 km/h / 112 mph)" },
        { label: "Acoustic Noise", value: "Low-noise direct-drive operation" },
        { label: "Encapsulation Rating", value: "Weatherproof (Rain, snow, sand, salt spray)" },
      ],
      footnote: "Specifications reflect the documented 300 W Aeroleaf technical datasheet. Product range also supports models up to 1 kW.",
    },
    tree36a: {
      title: "WindTree 36A Reference Configuration",
      subtitle: "Full-scale documented flagship architectural clean energy installation.",
      specs: [
        { label: "Number of Aeroleafs", value: "36 Turbines (6 Branches × 6 Leaves)" },
        { label: "Installed Capacity", value: "10.8 kW Peak (36 × 300 W)" },
        { label: "Nominal System Power", value: "5.868 kW Nominal Power" },
        { label: "Total Structural Height", value: "9.8 meters (32 ft)" },
        { label: "Total Canopy Diameter", value: "8.0 meters (26.3 ft)" },
        { label: "Total System Weight", value: "3,590 kg (High-Tensile Steel)" },
        { label: "Individual Aeroleaf Height", value: "0.97 meters (3.2 ft)" },
        { label: "Foundation Footprint", value: "3.8 m² Base Plate Interface" },
        { label: "Coating Protection", value: "Marine-grade C5 Electrostatic RAL" },
        { label: "Survival Wind Limit", value: "50 m/s Gusts (180 km/h)" },
        { label: "System Inverter Output", value: "110V / 230V / 400V (Single / Three-Phase)" },
        { label: "Typical Installation Time", value: "2 – 4 Days on Prepared Foundation" },
      ],
      footnote: "Documented 36A configuration. Configurable WindTree family available from 10.8 kW up to 36 kW arrays.",
    },
    hybrid: {
      title: "Hybrid Aeroleaf® Wind + Solar Petal",
      subtitle: "Combined micro-wind turbine and integrated photovoltaic solar petal.",
      specs: [
        { label: "Wind Turbine Rating", value: "300 W (Vertical-Axis Micro-Turbine)" },
        { label: "Photovoltaic Solar Petal", value: "36 Wp Bifacial Solar Element" },
        { label: "Combined Nameplate Power", value: "336 W per Hybrid Aeroleaf" },
        { label: "Minimum Commercial Set", value: "12 Hybrid Units (Wind Bush Set)" },
        { label: "Minimum System Power", value: "4.032 kW Combined Generation" },
        { label: "Aeroleaf Center Spacing", value: "55 cm (21.6 in)" },
        { label: "Hybrid Leaf Assembly Height", value: "1.05 meters (3.4 ft)" },
        { label: "Day & Night Generation", value: "Continuous breeze + peak daylight sun" },
      ],
      footnote: "Photovoltaic petals also guide laminar airflow to optimize Aeroleaf rotational induction.",
    },
    electrical: {
      title: "Electrical Architecture & Regulation",
      subtitle: "Sub-second multi-channel regulation and smart grid integration.",
      specs: [
        { label: "Generator Architecture", value: "Permanent-Magnet Synchronous (PMG)" },
        { label: "Local Electronic Card", value: "Embedded Microprocessor Regulation" },
        { label: "Calculation Frequency", value: "Every 10 milliseconds (Voltage & Current)" },
        { label: "Conversion Flow", value: "AC Generated → DC Rectified → Central Inverter" },
        { label: "DC Bus Voltage", value: "48 V DC Low-Voltage Architecture" },
        { label: "Grid Inversion Efficiency", value: "98.4% Peak Efficiency Sine Wave" },
        { label: "Grid Support Modes", value: "Grid-Tied (Net Metering) / BESS Microgrid" },
        { label: "BESS Storage Compatibility", value: "15 kWh to 60 kWh LiFePO4 Battery Banks" },
      ],
      footnote: "Sub-second electronic regulation balances variable urban micro-drafts without mechanical throttling.",
    },
    installation: {
      title: "Site Engineering & Clearance Guidelines",
      subtitle: "Civil planning, clearance boundaries, and site integration.",
      specs: [
        { label: "Minimum Building Clearance", value: "6.0 meters (19.7 ft) from façade" },
        { label: "Max Cable Run to Cabinet", value: "20.0 meters (66 ft) low-loss conduit" },
        { label: "Installation Duration", value: "2 to 4 Days (Crane-assisted sectional)" },
        { label: "Foundation Base", value: "Reinforced Concrete Foundation Pad / Piles" },
        { label: "Structural Material", value: "High-Tensile Marine Steel Structure" },
        { label: "Grounding & Lightning", value: "Integrated Surge Suppression & Earth Ground" },
        { label: "Annual Maintenance", value: "Low-Maintenance Direct-Drive Inspection" },
        { label: "Feasibility Assessment", value: "Site-specific 3D CFD Airflow Simulation" },
      ],
      footnote: "Final civil engineering, soil bearing calculations, and foundation depth depend on site geotechnical study.",
    },
  };

  const current = SPEC_DATA[activeTab];

  return (
    <div className="spec-tabs-section" id="specifications">
      <div className="section-heading center">
        <span className="eyebrow">Verified Technical Datasheets</span>
        <h2>Comprehensive engineering specifications.</h2>
        <p className="customizer-subhead">
          Explore manufacturer-verified technical data across Aeroleaf modules, 36A tree systems, hybrid solar petals, and site clearances.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="spec-tab-buttons-wrap" role="tablist">
        {TABS.map((t) => {
          const Icon = t.icon;
          const isSelected = activeTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`spec-tab-btn ${isSelected ? "is-active" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              <Icon size={16} />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="spec-tab-card" role="tabpanel">
        <div className="spec-card-head">
          <div>
            <h3>{current.title}</h3>
            <p>{current.subtitle}</p>
          </div>
          <Link to="/order" className="primary-button" style={{ padding: "8px 18px", fontSize: "0.85rem" }}>
            Request Engineering Data Pack <ArrowRight size={14} style={{ marginLeft: 6 }} />
          </Link>
        </div>

        <div className="spec-details-grid">
          {current.specs.map((item, i) => (
            <div key={i} className="spec-detail-row">
              <span className="spec-row-label">{item.label}</span>
              <strong className="spec-row-val">{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="spec-card-footnote">
          <CheckCircle2 size={14} color="#2d6a4d" style={{ marginRight: 6, flexShrink: 0 }} />
          <span>{current.footnote}</span>
        </div>
      </div>
    </div>
  );
}
