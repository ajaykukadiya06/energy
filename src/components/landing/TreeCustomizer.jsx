import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wind,
  Zap,
  Lightbulb,
  ArrowRight,
  Ruler,
  Layers,
  Sparkles,
  Check,
  ShieldCheck,
} from "lucide-react";

const MODELS = [
  {
    id: "leaf-1",
    name: "Single Aeroleaf® Module",
    tag: "Modular Starter / Post Mount",
    height: "1.2 meters (4 ft)",
    leafCount: 1,
    peakPower: "300 W (0.3 kW)",
    annualYield: "300 - 450 kWh",
    footprint: "0.2 m² mount",
    image: "/images/aeroleaf_single.png",
    description:
      "Ultra-compact vertical micro-turbine designed for rooftop railings, balconies, fence posts, and modular scalability.",
  },
  {
    id: "leaf-3",
    name: "Aeroleaf® Branch Cluster (3x)",
    tag: "Triple Micro-Turbine Array",
    height: "2.1 meters (7 ft)",
    leafCount: 3,
    peakPower: "900 W (0.9 kW)",
    annualYield: "900 - 1,400 kWh",
    footprint: "0.6 m² base",
    image: "/images/aeroleaf_dual.png",
    description:
      "Wall and pole mountable 3-leaf branch cluster for boutique commercial balconies, telecom towers, and boundary perimeters.",
  },
  {
    id: "bush-12",
    name: "Wind Bush 12 (Micro Tree)",
    tag: "Compact Ground & Rooftop",
    height: "3.2 meters (10.5 ft)",
    leafCount: 12,
    peakPower: "3.6 kW Wind",
    annualYield: "3,200 - 4,200 kWh",
    footprint: "1.5 m² base",
    image: "/images/windtree_campus.jpg",
    description:
      "Designed for rooftop terraces, luxury residential gardens, and low-clearance pedestrian plazas.",
  },
  {
    id: "tree-18",
    name: "Wind Tree 18 (Modular)",
    tag: "Mid-Scale Urban Architecture",
    height: "5.6 meters (18 ft)",
    leafCount: 18,
    peakPower: "5.4 kW Wind",
    annualYield: "5,000 - 6,800 kWh",
    footprint: "2.2 m² base",
    image: "/images/windtree_park.jpg",
    description:
      "A compact profile ideal for boutique commercial developments, hotel courtyards, and pedestrian streetscapes.",
  },
  {
    id: "tree-36",
    name: "Wind Tree 36 (Flagship)",
    tag: "Full-Scale Iconic Landmark",
    height: "9.8 meters (32 ft)",
    leafCount: 36,
    peakPower: "10.8 kW Wind",
    annualYield: "10,000 - 13,500 kWh",
    footprint: "3.8 m² base",
    image: "/images/hero-wind-tree.jpg",
    description:
      "Our full-scale iconic installation designed for civic squares, city parks, universities, and commercial headquarters.",
  },
];

const FINISHES = [
  {
    id: "forest-green",
    name: "Forest Green & Natural Bark",
    colorCode: "#2d6a4d",
    bgCode: "#dfeee3",
  },
  {
    id: "metallic-silver",
    name: "Aerospace Metallic Silver",
    colorCode: "#718096",
    bgCode: "#e2e8f0",
  },
  {
    id: "midnight-charcoal",
    name: "Midnight Charcoal Matte",
    colorCode: "#1a202c",
    bgCode: "#edf2f7",
  },
  {
    id: "pure-white",
    name: "Architectural Alpine White",
    colorCode: "#d4dfd7",
    bgCode: "#f7fafc",
  },
];

export function TreeCustomizer() {
  const [selectedModelId, setSelectedModelId] = useState(MODELS[0].id);
  const [selectedFinishId, setSelectedFinishId] = useState(FINISHES[0].id);
  const [addOnMppt, setAddOnMppt] = useState(true);
  const [addOnEvCharger, setAddOnEvCharger] = useState(true);
  const [addOnLedLighting, setAddOnLedLighting] = useState(false);

  const activeModel = MODELS.find((m) => m.id === selectedModelId) || MODELS[0];
  const activeFinish = FINISHES.find((f) => f.id === selectedFinishId) || FINISHES[0];

  return (
    <div className="tree-customizer-wrap">
      <div className="section-heading center">
        <span className="eyebrow">Design Studio</span>
        <h2>Configure your custom Aeroleaf® installation.</h2>
        <p className="customizer-subhead">
          Choose from individual Aeroleaf modules up to full-scale Wind Trees, with architectural finishes and smart urban amenities.
        </p>
      </div>

      <div className="customizer-studio-grid">
        {/* Visual Preview Column */}
        <div className="customizer-preview-panel">
          <div className="preview-image-box">
            <img
              src={activeModel.image}
              alt={`${activeModel.name} configuration`}
              className="model-preview-img"
            />
            <div className="preview-floating-badges">
              <span className="model-name-badge">{activeModel.name}</span>
              <span
                className="finish-color-badge"
                style={{ backgroundColor: activeFinish.colorCode }}
              >
                {activeFinish.name.split(" ")[0]}
              </span>
            </div>

            {/* Active Add-on Badges */}
            <div className="preview-addon-tags">
              {addOnMppt && (
                <span className="addon-tag">
                  <Zap size={12} style={{ marginRight: 4, verticalAlign: "middle" }} />
                  MPPT Inverter
                </span>
              )}
              {addOnEvCharger && (
                <span className="addon-tag">
                  <Zap size={12} style={{ marginRight: 4, verticalAlign: "middle" }} />
                  22kW EV Base
                </span>
              )}
              {addOnLedLighting && (
                <span className="addon-tag">
                  <Lightbulb size={12} style={{ marginRight: 4, verticalAlign: "middle" }} />
                  Night Ambient LED
                </span>
              )}
            </div>
          </div>

          <div className="preview-quick-specs">
            <div>
              <span>Height</span>
              <strong>{activeModel.height}</strong>
            </div>
            <div>
              <span>Aeroleafs</span>
              <strong>{activeModel.leafCount} Units</strong>
            </div>
            <div>
              <span>Peak Power</span>
              <strong>{activeModel.peakPower}</strong>
            </div>
            <div>
              <span>Base Area</span>
              <strong>{activeModel.footprint}</strong>
            </div>
          </div>
        </div>

        {/* Configuration Controls Column */}
        <div className="customizer-controls-panel">
          {/* Step 1: Select Model */}
          <div className="customizer-step-section">
            <span className="step-num">01</span>
            <label className="step-title">Select Scale & Model (Aeroleaf Based)</label>
            <div className="model-cards-group">
              {MODELS.map((model) => {
                const isSelected = model.id === selectedModelId;
                return (
                  <button
                    key={model.id}
                    type="button"
                    className={`model-select-card ${isSelected ? "is-selected" : ""}`}
                    onClick={() => setSelectedModelId(model.id)}
                  >
                    <div className="card-top-row">
                      <strong>{model.name}</strong>
                      <span className="model-leaves-badge">{model.leafCount} {model.leafCount === 1 ? "Leaf" : "Leaves"}</span>
                    </div>
                    <p className="model-card-tag">{model.tag}</p>
                    <div className="model-card-metrics">
                      <span>
                        <Zap size={12} style={{ marginRight: 3, verticalAlign: "middle" }} />
                        {model.peakPower}
                      </span>
                      <span>
                        <Ruler size={12} style={{ marginRight: 3, verticalAlign: "middle" }} />
                        {model.height.split(" ")[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Choose Architectural Finish */}
          <div className="customizer-step-section">
            <span className="step-num">02</span>
            <label className="step-title">Architectural Finish & Color</label>
            <div className="finish-swatches-grid">
              {FINISHES.map((finish) => {
                const isSelected = finish.id === selectedFinishId;
                return (
                  <button
                    key={finish.id}
                    type="button"
                    className={`finish-swatch-button ${isSelected ? "is-selected" : ""}`}
                    onClick={() => setSelectedFinishId(finish.id)}
                  >
                    <span
                      className="swatch-circle"
                      style={{ backgroundColor: finish.colorCode }}
                    />
                    <span className="swatch-name">{finish.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Add-on Accessories */}
          <div className="customizer-step-section">
            <span className="step-num">03</span>
            <label className="step-title">Smart Wind & Urban Add-ons</label>
            <div className="addons-checkbox-list">
              <label className="addon-checkbox-card">
                <input
                  type="checkbox"
                  checked={addOnMppt}
                  onChange={(e) => setAddOnMppt(e.target.checked)}
                />
                <div className="addon-text">
                  <strong>
                    <Zap size={14} style={{ marginRight: 5, verticalAlign: "middle" }} />
                    MPPT Micro-Inverter Grid Hub (+15% Efficiency)
                  </strong>
                  <p>Independent multi-channel power tracking with clean AC sine wave conversion.</p>
                </div>
              </label>

              <label className="addon-checkbox-card">
                <input
                  type="checkbox"
                  checked={addOnEvCharger}
                  onChange={(e) => setAddOnEvCharger(e.target.checked)}
                />
                <div className="addon-text">
                  <strong>
                    <Zap size={14} style={{ marginRight: 5, verticalAlign: "middle" }} />
                    Integrated 22kW Dual EV / E-Bike Charger
                  </strong>
                  <p>Base-mounted Level 2 charging stations powered directly by Aeroleaf micro-turbines.</p>
                </div>
              </label>

              <label className="addon-checkbox-card">
                <input
                  type="checkbox"
                  checked={addOnLedLighting}
                  onChange={(e) => setAddOnLedLighting(e.target.checked)}
                />
                <div className="addon-text">
                  <strong>
                    <Lightbulb size={14} style={{ marginRight: 5, verticalAlign: "middle" }} />
                    Smart Architectural LED Canopy Lighting
                  </strong>
                  <p>Programmable dusk-to-dawn ambient illumination for pathways, parks, and plazas.</p>
                </div>
              </label>
            </div>
          </div>

          <div className="customizer-action-bar">
            <Link to="/order" className="primary-button customizer-order-btn">
              Configure & Order Aeroleaf System <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
