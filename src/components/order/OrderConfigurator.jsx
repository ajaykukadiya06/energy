import React, { useState } from "react";
import {
  Wind,
  Zap,
  Battery,
  Lightbulb,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building,
  User,
  Mail,
  MapPin,
  FileCheck,
  ShieldCheck,
  TrendingUp,
  Leaf,
  DollarSign,
  Calendar,
  Layers,
  Ruler,
  Cpu,
  Check,
  Sun,
} from "lucide-react";

const WIND_TREE_SPEC = {
  id: "wind-tree-36a",
  name: "Aeris Wind Tree 36A",
  subtitle: "Documented 36-Aeroleaf Biomimetic Clean Energy System",
  leafCount: 36,
  height: "9.8 m H × 8.0 m Ø",
  footprint: "3.8 m² base (3,590 kg Marine Steel)",
  peakOutputKw: 10.8,
  nominalPowerKw: 5.868,
  annualKwhBase: 11500,
  basePrice: 36000,
  image: "/images/hero-wind-tree.jpg",
  noiseLevel: "Low-Noise Direct Drive",
  windRating: "43 m/s Cont. / 50 m/s Gust (180 km/h)",
  warranty: "High-Tensile C5 Marine Steel Structure",
};

const FINISHES = [
  {
    id: "forest-green",
    name: "Forest Green & Natural Bark",
    ral: "RAL 6005",
    colorCode: "#2d6a4d",
    price: 0,
    desc: "Blends seamlessly with urban greenery, parks, and botanical gardens",
  },
  {
    id: "metallic-silver",
    name: "Aerospace Metallic Silver",
    ral: "RAL 9006",
    colorCode: "#718096",
    price: 800,
    desc: "Modern architectural steel aesthetic for tech campuses and smart cities",
  },
  {
    id: "midnight-charcoal",
    name: "Midnight Charcoal Matte",
    ral: "RAL 7021",
    colorCode: "#1a202c",
    price: 800,
    desc: "Sophisticated dark contemporary finish for civic plazas and corporate HQs",
  },
  {
    id: "pure-white",
    name: "Architectural Alpine White",
    ral: "RAL 9010",
    colorCode: "#d4dfd7",
    price: 600,
    desc: "Clean high-contrast minimalism suited for coastal and modern developments",
  },
];

const INFRASTRUCTURE_ADDONS = [
  {
    id: "solar-petals",
    name: "Hybrid Photovoltaic Solar Petals (36x)",
    desc: "Adds 36 Wp bifacial solar petals per leaf (+1,296 Wp total tree capacity, +1,600 kWh/yr)",
    icon: Sun,
    price: 4200,
    kwhBoost: 1600,
  },
  {
    id: "smart-mppt",
    name: "MPPT Micro-Inverter Direct Grid Hub",
    desc: "Per-leaf Maximum Power Point Tracking with 10ms micro-regulation & sine wave conversion (+450 kWh/yr)",
    icon: Zap,
    price: 1800,
    kwhBoost: 450,
  },
  {
    id: "storm-brake",
    name: "Active Eddy-Current Storm-Braking Pack",
    desc: "Automated electromagnetic overspeed governor for extreme typhoon gusts up to 180 km/h",
    icon: Wind,
    price: 1200,
    kwhBoost: 0,
  },
  {
    id: "ev-charger",
    name: "Integrated 22kW Dual EV Fast Charger",
    desc: "Base-mounted Level 2 smart EV charging pedestal with RFID, credit card, & app billing",
    icon: Zap,
    price: 3800,
    kwhBoost: 0,
  },
  {
    id: "battery-storage",
    name: "15 kWh Modular Lithium Battery Bank (BESS)",
    desc: "Provides 24/7 autonomous microgrid backup power and peak shaving for building loads",
    icon: Battery,
    price: 7200,
    kwhBoost: 0,
  },
  {
    id: "led-lighting",
    name: "Smart Architectural LED Canopy Illumination",
    desc: "Dusk-to-dawn ambient pathway lighting with programmable color temperatures and sensor control",
    icon: Lightbulb,
    price: 1500,
    kwhBoost: 0,
  },
  {
    id: "smart-bench",
    name: "Public Wireless Qi & USB-C Station",
    desc: "Weatherproof fast charging pads & public Wi-Fi hotspot integrated at base seating area",
    icon: Smartphone,
    price: 1200,
    kwhBoost: 0,
  },
];

const GRID_MODES = [
  {
    id: "grid-tied",
    name: "Grid-Tied (Net Metering)",
    desc: "Feeds excess power directly into utility grid with bi-directional net billing",
  },
  {
    id: "microgrid",
    name: "Hybrid Microgrid + Battery (BESS)",
    desc: "Direct building self-consumption with battery storage and emergency islanding",
  },
  {
    id: "offgrid",
    name: "Autonomous Off-Grid Island",
    desc: "100% self-sufficient remote power generation with integrated energy storage",
  },
];

const FINANCING_MODES = [
  {
    id: "purchase",
    name: "Direct Capital Purchase",
    desc: "Full ownership, eligible for 30-40% clean energy tax credits and accelerated depreciation",
  },
  {
    id: "ppa",
    name: "Power Purchase Agreement (PPA)",
    desc: "$0 down upfront, pay only for generated clean kWh monthly at guaranteed lower rate",
  },
  {
    id: "lease",
    name: "Green Infrastructure Lease",
    desc: "Low fixed monthly payments with full ongoing maintenance and remote monitoring included",
  },
];

export function OrderConfigurator() {
  const [step, setStep] = useState(1);
  const [treeQuantity, setTreeQuantity] = useState(1);
  const [selectedFinishId, setSelectedFinishId] = useState("forest-green");
  const [selectedAddons, setSelectedAddons] = useState(["smart-mppt", "ev-charger"]);
  const [gridMode, setGridMode] = useState("grid-tied");
  const [financingMode, setFinancingMode] = useState("purchase");

  // Contact form details
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    projectTimeline: "3-6 months",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeFinish = FINISHES.find((f) => f.id === selectedFinishId) || FINISHES[0];

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Pricing calculations
  const addonsTotalPerTree = selectedAddons.reduce((sum, id) => {
    const item = INFRASTRUCTURE_ADDONS.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const pricePerTree = WIND_TREE_SPEC.basePrice + activeFinish.price + addonsTotalPerTree;
  const totalPrice = pricePerTree * treeQuantity;

  // Energy output calculation
  const addonKwhBoost = selectedAddons.reduce((sum, id) => {
    const item = INFRASTRUCTURE_ADDONS.find((a) => a.id === id);
    return sum + (item ? item.kwhBoost : 0);
  }, 0);

  const totalAnnualKwh = (WIND_TREE_SPEC.annualKwhBase + addonKwhBoost) * treeQuantity;
  const totalPeakKw = (WIND_TREE_SPEC.peakOutputKw * treeQuantity).toFixed(1);
  const totalAeroleafs = WIND_TREE_SPEC.leafCount * treeQuantity;
  const co2OffsetTons = ((totalAnnualKwh * 0.42) / 1000).toFixed(1);
  const annualBillSavings = Math.round(totalAnnualKwh * 0.18);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="order-configurator-container">
      {/* Step Navigation Progress Bar */}
      <div className="order-steps-progress">
        {[
          { num: 1, label: "Wind Tree Scale" },
          { num: 2, label: "Marine Finish" },
          { num: 3, label: "Smart Amenities" },
          { num: 4, label: "Grid & Proposal" },
        ].map((s) => (
          <button
            key={s.num}
            type="button"
            className={`step-nav-item ${step === s.num ? "active" : ""} ${step > s.num ? "completed" : ""}`}
            onClick={() => setStep(s.num)}
          >
            <span className="step-circle">{step > s.num ? "✓" : `0${s.num}`}</span>
            <span className="step-label">{s.label}</span>
          </button>
        ))}
      </div>

      <div className="configurator-main-grid">
        {/* Left Column: Interactive Configuration Steps */}
        <div className="configurator-steps-panel">
          {/* STEP 1: Wind Tree Specification & Quantity */}
          {step === 1 && (
            <div className="config-step-card">
              <span className="eyebrow">Step 01 of 04</span>
              <h2>Wind Tree Infrastructure Specification</h2>
              <p className="step-subhead">
                Configure the turnkey Aeris Wind Tree engineered for civic squares, corporate campuses, city parks, and commercial developments.
              </p>

              {/* Master System Card */}
              <div className="system-feature-card">
                <div className="system-feature-hero">
                  <img
                    src={WIND_TREE_SPEC.image}
                    alt={WIND_TREE_SPEC.name}
                    className="system-hero-img"
                  />
                  <div className="system-hero-overlay">
                    <div>
                      <span className="system-badge">Official Clean Tech Infrastructure</span>
                      <h3>{WIND_TREE_SPEC.name}</h3>
                      <p>{WIND_TREE_SPEC.subtitle}</p>
                    </div>
                    <div className="system-hero-price">
                      <small>Turnkey Base</small>
                      <strong>${WIND_TREE_SPEC.basePrice.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                <div className="system-specs-grid">
                  <div className="system-spec-box">
                    <span>🍃 Micro-Turbines</span>
                    <strong>{WIND_TREE_SPEC.leafCount} Aeroleafs</strong>
                  </div>
                  <div className="system-spec-box">
                    <span>⚡ Peak Capacity</span>
                    <strong>{WIND_TREE_SPEC.peakOutputKw} kW Peak</strong>
                  </div>
                  <div className="system-spec-box">
                    <span>🌱 Annual Generation</span>
                    <strong>{WIND_TREE_SPEC.annualKwhBase.toLocaleString()} kWh/yr</strong>
                  </div>
                  <div className="system-spec-box">
                    <span>📏 Structural Height</span>
                    <strong>{WIND_TREE_SPEC.height}</strong>
                  </div>
                  <div className="system-spec-box">
                    <span>🔇 Acoustic Profile</span>
                    <strong>{WIND_TREE_SPEC.noiseLevel}</strong>
                  </div>
                  <div className="system-spec-box">
                    <span>🛡️ Wind Resistance</span>
                    <strong>{WIND_TREE_SPEC.windRating}</strong>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="quantity-selector-box">
                <div>
                  <strong style={{ fontSize: "1rem" }}>Number of Wind Trees in Array:</strong>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: "0.85rem", marginTop: 2 }}>
                    Each Wind Tree adds 36 Aeroleafs ({WIND_TREE_SPEC.peakOutputKw} kW) to your clean energy microgrid
                  </span>
                </div>
                <div className="quantity-stepper">
                  <button
                    type="button"
                    onClick={() => setTreeQuantity((q) => Math.max(1, q - 1))}
                    disabled={treeQuantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="quantity-val">{treeQuantity}</span>
                  <button
                    type="button"
                    onClick={() => setTreeQuantity((q) => Math.min(25, q + 1))}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="step-btn-row">
                <div />
                <button type="button" className="primary-button next-btn" onClick={() => setStep(2)}>
                  Continue to Finish & Color <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Architectural Marine Finish */}
          {step === 2 && (
            <div className="config-step-card">
              <span className="eyebrow">Step 02 of 04</span>
              <h2>Architectural Finish & Protective Coating</h2>
              <p className="step-subhead">
                All steel trunks and branches are electrostatically powder-coated with marine-grade C5 anti-corrosion protection.
              </p>

              <div className="config-finishes-grid">
                {FINISHES.map((finish) => {
                  const isSelected = finish.id === selectedFinishId;
                  return (
                    <div
                      key={finish.id}
                      className={`config-finish-card ${isSelected ? "selected" : ""}`}
                      onClick={() => setSelectedFinishId(finish.id)}
                    >
                      <span className="finish-large-swatch" style={{ backgroundColor: finish.colorCode }} />
                      <div className="finish-text">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <strong>{finish.name}</strong>
                          <span style={{ fontSize: "0.75rem", background: "var(--bg-soft)", padding: "2px 6px", borderRadius: 4 }}>
                            {finish.ral}
                          </span>
                        </div>
                        <p style={{ margin: "4px 0 0", fontSize: "0.8rem", color: "var(--muted)" }}>{finish.desc}</p>
                        <span style={{ marginTop: 4, color: isSelected ? "var(--green-deep)" : "var(--ink)", fontWeight: 700 }}>
                          {finish.price === 0 ? "Standard Finish (Included)" : `+$${finish.price} Premium / Tree`}
                        </span>
                      </div>
                      <span className={`radio-dot ${isSelected ? "active" : ""}`} />
                    </div>
                  );
                })}
              </div>

              <div className="custom-ral-note">
                <ShieldCheck size={20} color="#2d6a4d" style={{ flexShrink: 0 }} />
                <span>
                  <strong>Custom Corporate / Municipal RAL:</strong> Bespoke color-matching to civic guidelines or corporate identity is available upon engineering review.
                </span>
              </div>

              <div className="step-btn-row">
                <button type="button" className="secondary-button" onClick={() => setStep(1)}>
                  <ArrowLeft size={16} style={{ marginRight: 6 }} /> Back
                </button>
                <button type="button" className="primary-button next-btn" onClick={() => setStep(3)}>
                  Continue to Smart Amenities <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Smart Infrastructure Add-ons */}
          {step === 3 && (
            <div className="config-step-card">
              <span className="eyebrow">Step 03 of 04</span>
              <h2>Smart Wind & Urban Infrastructure Add-ons</h2>
              <p className="step-subhead">
                Enhance your Wind Tree installation with direct-drive MPPT inversion, high-wind storm braking, EV charging pedestals, and public amenities.
              </p>

              <div className="config-addons-list">
                {INFRASTRUCTURE_ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  const Icon = addon.icon;
                  return (
                    <div
                      key={addon.id}
                      className={`config-addon-card ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleAddon(addon.id)}
                    >
                      <div className="addon-icon-box">
                        <Icon size={22} color={isSelected ? "#2d6a4d" : "#5a6e60"} />
                      </div>
                      <div className="addon-body">
                        <div className="addon-title-row">
                          <strong>{addon.name}</strong>
                          <span className="addon-price">+${addon.price.toLocaleString()}</span>
                        </div>
                        <p>{addon.desc}</p>
                        {addon.kwhBoost > 0 && (
                          <span className="addon-boost-pill">
                            +{addon.kwhBoost} kWh/yr Direct Generation Boost
                          </span>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleAddon(addon.id)}
                        className="addon-checkbox"
                        aria-label={addon.name}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="step-btn-row">
                <button type="button" className="secondary-button" onClick={() => setStep(2)}>
                  <ArrowLeft size={16} style={{ marginRight: 6 }} /> Back
                </button>
                <button type="button" className="primary-button next-btn" onClick={() => setStep(4)}>
                  Continue to Grid & Proposal <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Grid, Financing & Proposal Submission */}
          {step === 4 && (
            <div className="config-step-card">
              <span className="eyebrow">Step 04 of 04</span>
              <h2>Grid Topology & Turnkey Proposal Request</h2>
              <p className="step-subhead">
                Select your electrical integration topology and submit site details for a complete 3D CFD wind study and formal commercial contract.
              </p>

              <div className="config-section-group">
                <h3>Electrical Grid Connection Mode</h3>
                <div className="config-option-cards">
                  {GRID_MODES.map((grid) => {
                    const isSelected = grid.id === gridMode;
                    return (
                      <div
                        key={grid.id}
                        className={`config-grid-card ${isSelected ? "selected" : ""}`}
                        onClick={() => setGridMode(grid.id)}
                      >
                        <div>
                          <strong>{grid.name}</strong>
                          <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "var(--muted)" }}>{grid.desc}</p>
                        </div>
                        <span className={`radio-dot ${isSelected ? "active" : ""}`} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="config-section-group" style={{ marginTop: 24 }}>
                <h3>Financing & Procurement Model</h3>
                <div className="config-option-cards">
                  {FINANCING_MODES.map((opt) => {
                    const isSelected = opt.id === financingMode;
                    return (
                      <div
                        key={opt.id}
                        className={`config-grid-card ${isSelected ? "selected" : ""}`}
                        onClick={() => setFinancingMode(opt.id)}
                      >
                        <div>
                          <strong>{opt.name}</strong>
                          <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "var(--muted)" }}>{opt.desc}</p>
                        </div>
                        <span className={`radio-dot ${isSelected ? "active" : ""}`} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ marginTop: 28 }}>
                <h3 style={{ margin: "0 0 14px", fontFamily: "Manrope, sans-serif", fontSize: "1.15rem", color: "var(--ink)" }}>
                  Project Contact & Site Information
                </h3>

                {isSubmitted ? (
                  <div className="proposal-submitted-card">
                    <div className="submitted-icon">
                      <CheckCircle2 size={48} color="#2d6a4d" />
                    </div>
                    <h3>Engineering Proposal Request Received!</h3>
                    <p>
                      Thank you, <strong>{formData.name || "Client"}</strong>. Your custom Aeris Wind Tree configuration
                      has been assigned project reference <strong>#WT-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                    </p>
                    <div className="submitted-summary-box">
                      <div>
                        <span>Configuration:</span>
                        <strong>{treeQuantity}x {WIND_TREE_SPEC.name} ({totalAeroleafs} Aeroleafs)</strong>
                      </div>
                      <div>
                        <span>Peak Output:</span>
                        <strong>{totalPeakKw} kW Peak</strong>
                      </div>
                      <div>
                        <span>Annual Yield:</span>
                        <strong>{totalAnnualKwh.toLocaleString()} kWh/yr</strong>
                      </div>
                      <div>
                        <span>CO₂ Avoided:</span>
                        <strong>{co2OffsetTons} Metric Tons/yr</strong>
                      </div>
                      <div>
                        <span>Estimated Budget:</span>
                        <strong>${totalPrice.toLocaleString()}</strong>
                      </div>
                    </div>
                    <p className="submitted-footer-note">
                      An Aeris infrastructure engineer will contact you within 24 business hours at <strong>{formData.email}</strong> with your stamped CAD foundation specifications and 3D CFD airflow report.
                    </p>
                    <button
                      type="button"
                      className="primary-button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setStep(1);
                      }}
                    >
                      Configure Another Installation
                    </button>
                  </div>
                ) : (
                  <form className="proposal-contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <label>
                        <User size={14} style={{ marginRight: 5, verticalAlign: "middle" }} />
                        Full Name
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Maya Chen"
                          required
                        />
                      </label>
                      <label>
                        <Mail size={14} style={{ marginRight: 5, verticalAlign: "middle" }} />
                        Business Email
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@organization.com"
                          required
                        />
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        <Building size={14} style={{ marginRight: 5, verticalAlign: "middle" }} />
                        Organization / Municipality / Enterprise
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. City Planning Bureau or CivicGrid"
                          required
                        />
                      </label>
                      <label>
                        <MapPin size={14} style={{ marginRight: 5, verticalAlign: "middle" }} />
                        Installation City & Country
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="e.g. Austin, TX, USA or Munich, Germany"
                          required
                        />
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        <Calendar size={14} style={{ marginRight: 5, verticalAlign: "middle" }} />
                        Target Deployment Timeline
                        <select
                          name="projectTimeline"
                          value={formData.projectTimeline}
                          onChange={handleInputChange}
                        >
                          <option>Immediate (1-3 months)</option>
                          <option>3-6 months</option>
                          <option>6-12 months</option>
                          <option>Masterplan / Feasibility Study</option>
                        </select>
                      </label>
                      <label>
                        <FileCheck size={14} style={{ marginRight: 5, verticalAlign: "middle" }} />
                        Requested Deliverables
                        <select defaultValue="full-turnkey">
                          <option value="full-turnkey">Complete Turnkey (Supply + Civil Installation)</option>
                          <option value="equipment-only">Equipment Supply & Engineering Supervision</option>
                          <option value="feasibility">Pre-Project 3D CFD Airflow Simulation</option>
                        </select>
                      </label>
                    </div>

                    <label>
                      Site Description & Notes
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Provide details on terrain, surrounding building heights, foundation surface, or specific microgrid connections..."
                      />
                    </label>

                    <div className="step-btn-row">
                      <button type="button" className="secondary-button" onClick={() => setStep(3)}>
                        <ArrowLeft size={16} style={{ marginRight: 6 }} /> Back
                      </button>
                      <button type="submit" className="primary-button next-btn">
                        <FileCheck size={18} style={{ marginRight: 8 }} /> Submit Engineering Proposal Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Live Configuration & Output Summary Card */}
        <div className="configurator-summary-sidebar">
          <div className="summary-sticky-card">
            <div className="summary-card-header">
              <span className="eyebrow">Real-Time Estimation</span>
              <h3>Project Summary</h3>
            </div>

            <div className="summary-preview-box">
              <img src={WIND_TREE_SPEC.image} alt={WIND_TREE_SPEC.name} />
              <div className="summary-preview-tag">
                <span>{treeQuantity}x {WIND_TREE_SPEC.name} ({totalAeroleafs} Aeroleafs)</span>
              </div>
            </div>

            {/* Key Impact Metrics */}
            <div className="summary-metrics-grid">
              <div className="summary-metric-item">
                <span className="metric-lbl">
                  <Wind size={12} style={{ marginRight: 4 }} /> Annual Yield
                </span>
                <strong className="metric-val">{totalAnnualKwh.toLocaleString()} <small>kWh</small></strong>
              </div>
              <div className="summary-metric-item">
                <span className="metric-lbl">
                  <Leaf size={12} style={{ marginRight: 4 }} /> CO₂ Offset
                </span>
                <strong className="metric-val">{co2OffsetTons} <small>Tons/yr</small></strong>
              </div>
              <div className="summary-metric-item">
                <span className="metric-lbl">
                  <DollarSign size={12} style={{ marginRight: 4 }} /> Annual Savings
                </span>
                <strong className="metric-val">${annualBillSavings.toLocaleString()} <small>/yr</small></strong>
              </div>
              <div className="summary-metric-item">
                <span className="metric-lbl">
                  <Zap size={12} style={{ marginRight: 4 }} /> Total Peak Output
                </span>
                <strong className="metric-val">{totalPeakKw} <small>kW</small></strong>
              </div>
            </div>

            {/* Bill of Materials Breakdown */}
            <div className="summary-bom-list">
              <div className="bom-row">
                <span>{treeQuantity}x {WIND_TREE_SPEC.name}</span>
                <strong>${(WIND_TREE_SPEC.basePrice * treeQuantity).toLocaleString()}</strong>
              </div>
              <div className="bom-row">
                <span>Finish: {activeFinish.name}</span>
                <strong>{activeFinish.price === 0 ? "Included" : `+$${(activeFinish.price * treeQuantity).toLocaleString()}`}</strong>
              </div>
              {selectedAddons.map((id) => {
                const item = INFRASTRUCTURE_ADDONS.find((a) => a.id === id);
                if (!item) return null;
                return (
                  <div key={id} className="bom-row addon-row">
                    <span>+ {item.name.split("(")[0]}</span>
                    <strong>+${(item.price * treeQuantity).toLocaleString()}</strong>
                  </div>
                );
              })}
              <div className="bom-row">
                <span>Grid Topology</span>
                <strong>{gridMode === "grid-tied" ? "Grid-Tied" : gridMode === "microgrid" ? "Hybrid BESS" : "Off-Grid"}</strong>
              </div>
            </div>

            {/* Grand Total Bar */}
            <div className="summary-total-bar">
              <div>
                <span>Estimated Turnkey Budget</span>
                <strong>${totalPrice.toLocaleString()}</strong>
              </div>
              <small>Est. payback 4.2 - 5.5 yrs</small>
            </div>

            <div className="summary-guarantees">
              <span><ShieldCheck size={14} color="#2d6a4d" /> 25-Year Marine Steel Warranty</span>
              <span><TrendingUp size={14} color="#2d6a4d" /> 30% Federal ITC Tax Credit Eligible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
