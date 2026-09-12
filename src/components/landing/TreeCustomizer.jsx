import React from "react";
import { Link } from "react-router-dom";
import { Zap, Ruler, ArrowRight, Sun, ShieldCheck } from "lucide-react";

const MODELS = [
  {
    id: "leaf-1",
    name: "Single Aeroleaf®",
    tag: "Modular Starter / Post Mount",
    height: "1.2m (0.97m rotor)",
    leafCount: 1,
    peakPower: "300 W (48V PMG)",
    nominalPower: "160 W",
    footprint: "0.2 m²",
    image: "/images/aeroleaf_micro_generator.jpg",
    description:
      "Ultra-compact vertical-axis micro-turbine with 360° wind capture. Mounts to rooftop railings, balconies, fence posts, and telecom masts.",
  },
  {
    id: "leaf-3",
    name: "Aeroleaf® Branch Cluster",
    tag: "Triple Micro-Turbine Array",
    height: "2.1m",
    leafCount: 3,
    peakPower: "900 W (0.9 kW)",
    nominalPower: "490 W",
    footprint: "0.6 m²",
    image: "/images/aeroleaf_canopy_close.jpg",
    description:
      "Wall and pole-mountable 3-leaf branch cluster for boutique commercial balconies, perimeter security lighting, and corporate terraces.",
  },
  {
    id: "bush-12",
    name: "Wind Bush 12",
    tag: "Compact Ground & Rooftop",
    height: "3.2m",
    leafCount: 12,
    peakPower: "3.6 - 4.2 kW",
    nominalPower: "1.95 kW",
    footprint: "1.5 m² base",
    image: "/images/windtree_campus.jpg",
    description:
      "Engineered for luxury residential gardens, pedestrian plazas, and low-clearance rooftop decks with minimal structural footprint.",
  },
  {
    id: "tree-18",
    name: "Wind Tree 18",
    tag: "Mid-Scale Urban Architecture",
    height: "5.6m",
    leafCount: 18,
    peakPower: "5.4 kW Installed",
    nominalPower: "2.93 kW",
    footprint: "2.2 m² base",
    image: "/images/windtree_park.jpg",
    description:
      "A balanced mid-scale profile ideal for hotel courtyards, commercial office entrances, educational facilities, and streetscapes.",
  },
  {
    id: "tree-36",
    name: "Wind Tree 36A (Flagship)",
    tag: "Full-Scale Iconic Landmark",
    height: "9.8m (8.0m diameter)",
    leafCount: 36,
    peakPower: "10.8 kW Installed",
    nominalPower: "5.868 kW Nominal",
    footprint: "3.8 m² base (3,590 kg)",
    image: "/images/hero-wind-tree.jpg",
    description:
      "Documented flagship civic installation with 36 Aeroleafs across 6 branches, 5.868 kW nominal power, and storm resistance up to 50 m/s gusts.",
  },
];

export function TreeCustomizer() {
  return (
    <div className="models-showcase-wrap">
      <div className="section-heading center">
        <span className="eyebrow">Product Lineup</span>
        <h2>Explore our Aeroleaf® models.</h2>
        <p className="customizer-subhead">
          From individual modular leaves to flagship 36A Wind Trees and custom multi-tree arrays up to 36+ kW.
        </p>
      </div>

      <div className="models-showcase-grid">
        {MODELS.map((model) => (
          <div key={model.id} className="model-showcase-card">
            <div className="model-image-wrap">
              <img src={model.image} alt={model.name} />
              <div className="model-leaf-badge">
                {model.leafCount} {model.leafCount === 1 ? "Leaf" : "Leaves"}
              </div>
            </div>
            <div className="model-card-content">
              <h3>{model.name}</h3>
              <span className="model-tag">{model.tag}</span>
              <p className="model-desc">{model.description}</p>

              <div className="model-metrics">
                <div className="metric">
                  <Zap size={14} />
                  <span>{model.peakPower}</span>
                </div>
                <div className="metric">
                  <Ruler size={14} />
                  <span>{model.height}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="models-showcase-action">
        <Link to="/order" className="primary-button">
          Order Your Aeroleaf System <ArrowRight size={16} style={{ marginLeft: 6 }} />
        </Link>
      </div>
    </div>
  );
}
