import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Leaf,
  Home,
  Car,
  Wind,
  ArrowRight,
  Sparkles,
  Zap,
  Sun,
  Layers,
} from "lucide-react";

export function WindTreeCalculator() {
  const [aeroleafCount, setAeroleafCount] = useState(36); // Aeroleaf units
  const [avgWindSpeed, setAvgWindSpeed] = useState(5.5); // in m/s
  const [costPerKwh, setCostPerKwh] = useState(0.18); // in $ or €
  const [mpptBoost, setMpptBoost] = useState(true);
  const [hybridSolarPetals, setHybridSolarPetals] = useState(false); // +36 Wp per leaf

  // Calculations based on verified 300W Aeroleaf power curve & 2.5 m/s starting threshold:
  // Base single 300W Aeroleaf wind yield @ 5.5 m/s is ~320 kWh/year
  const windFactor = avgWindSpeed < 2.5 ? 0 : Math.pow(avgWindSpeed / 5.5, 2.2);
  const boostMultiplier = mpptBoost ? 1.15 : 1.0;
  const singleLeafWindKwh = 320 * windFactor * boostMultiplier;

  // Hybrid Solar Petal generation (~45 kWh/yr per 36 Wp petal based on 1250 peak sun hours):
  const singleLeafSolarKwh = hybridSolarPetals ? 45 : 0;

  const totalSingleLeafKwh = singleLeafWindKwh + singleLeafSolarKwh;
  const totalAnnualKwh = Math.round(totalSingleLeafKwh * aeroleafCount);

  // System Peak Capacity
  const leafWattage = hybridSolarPetals ? 336 : 300;
  const systemPeakKw = ((aeroleafCount * leafWattage) / 1000).toFixed(1);

  // Approximate modular equipment investment
  const baseCostPerLeaf = aeroleafCount === 1 ? 850 : aeroleafCount <= 3 ? 800 : 750;
  const solarAddonCost = hybridSolarPetals ? 120 : 0;
  const estimatedHardwareCost = aeroleafCount * (baseCostPerLeaf + solarAddonCost);

  // Carbon avoided: ~0.42 kg CO2 per kWh
  const co2AvoidedTons = ((totalAnnualKwh * 0.42) / 1000).toFixed(1);

  // Homes equivalent: ~4,000 kWh per urban home baseline
  const homesPowered = (totalAnnualKwh / 4000).toFixed(1);

  // EV miles driven: ~0.18 kWh per km
  const evMilesPowered = Math.round((totalAnnualKwh / 0.18) * 0.621371).toLocaleString();

  // Annual financial savings:
  const annualSavings = Math.round(totalAnnualKwh * costPerKwh);

  return (
    <div className="wind-tree-calculator-wrap">
      <div className="section-heading center">
        <span className="eyebrow">Interactive Aeroleaf® Yield Estimator</span>
        <h2>Calculate clean micro-wind generation potential.</h2>
        <p className="calculator-subhead">
          Estimate annual power yield, direct energy bill savings, and carbon reduction scaled from a single
          300 W Aeroleaf up to 36A flagship trees and civic multi-tree arrays.
        </p>
      </div>

      <div className="calculator-dashboard-card">
        {/* Controls Column */}
        <div className="calculator-controls-panel">
          <div className="calc-input-group">
            <div className="calc-input-header">
              <label htmlFor="leaf-slider">
                <Wind size={15} style={{ marginRight: 6, verticalAlign: "middle" }} />
                Number of Aeroleaf® Turbines
              </label>
              <span className="calc-value-pill">
                {aeroleafCount} {aeroleafCount === 1 ? "Aeroleaf" : "Aeroleafs"} ({systemPeakKw} kW Peak)
              </span>
            </div>
            <input
              id="leaf-slider"
              type="range"
              min="1"
              max="108"
              step="1"
              value={aeroleafCount}
              onChange={(e) => setAeroleafCount(parseInt(e.target.value, 10))}
              className="calc-range-slider"
            />
            <div className="calc-range-labels">
              <span>1 (Starter)</span>
              <span>12 (Bush)</span>
              <span>36 (36A Tree)</span>
              <span>72 (2 Trees)</span>
              <span>108 (3 Trees)</span>
            </div>

            {/* Quick Preset Buttons */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "10px" }}>
              {[
                { label: "1 Unit (0.3 kW)", count: 1 },
                { label: "3 Branch (0.9 kW)", count: 3 },
                { label: "12 Bush (3.6 kW)", count: 12 },
                { label: "18 Modular (5.4 kW)", count: 18 },
                { label: "36 Tree (10.8 kW)", count: 36 },
                { label: "72 Dual (21.6 kW)", count: 72 },
              ].map((p) => (
                <button
                  key={p.count}
                  type="button"
                  onClick={() => setAeroleafCount(p.count)}
                  style={{
                    padding: "4px 10px",
                    fontSize: "0.78rem",
                    borderRadius: "6px",
                    border: aeroleafCount === p.count ? "1px solid #2d6a4d" : "1px solid #e2e8f0",
                    backgroundColor: aeroleafCount === p.count ? "#eaf4ee" : "#f8fafc",
                    color: aeroleafCount === p.count ? "#2d6a4d" : "#4a5568",
                    fontWeight: aeroleafCount === p.count ? 600 : 500,
                    cursor: "pointer",
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="calc-input-group">
            <div className="calc-input-header">
              <label htmlFor="wind-slider">
                <Zap size={15} style={{ marginRight: 6, verticalAlign: "middle" }} />
                Average Site Wind Speed
              </label>
              <span className="calc-value-pill">{avgWindSpeed.toFixed(1)} m/s</span>
            </div>
            <input
              id="wind-slider"
              type="range"
              min="2.0"
              max="9.0"
              step="0.5"
              value={avgWindSpeed}
              onChange={(e) => setAvgWindSpeed(parseFloat(e.target.value))}
              className="calc-range-slider"
            />
            <div className="calc-range-labels">
              <span>2.5 m/s (Cut-In)</span>
              <span>5.5 m/s (Moderate)</span>
              <span>9.0 m/s (Breezy)</span>
            </div>
          </div>

          <div className="calc-input-group">
            <div className="calc-input-header">
              <label htmlFor="tariff-slider">
                <DollarSign size={15} style={{ marginRight: 6, verticalAlign: "middle" }} />
                Local Electricity Tariff
              </label>
              <span className="calc-value-pill">${costPerKwh.toFixed(2)} / kWh</span>
            </div>
            <input
              id="tariff-slider"
              type="range"
              min="0.10"
              max="0.45"
              step="0.01"
              value={costPerKwh}
              onChange={(e) => setCostPerKwh(parseFloat(e.target.value))}
              className="calc-range-slider"
            />
            <div className="calc-range-labels">
              <span>$0.10</span>
              <span>$0.25</span>
              <span>$0.45</span>
            </div>
          </div>

          <div className="calc-toggle-box">
            <div className="toggle-info">
              <strong>
                <Zap size={15} style={{ marginRight: 5, verticalAlign: "middle" }} />
                Direct-Drive MPPT Inversion Hub
              </strong>
              <small>Optimizes per-turbine micro-generation in light urban breezes (+15% gain)</small>
            </div>
            <button
              type="button"
              className={`toggle-switch-btn ${mpptBoost ? "active" : ""}`}
              onClick={() => setMpptBoost(!mpptBoost)}
              aria-pressed={mpptBoost}
              aria-label="Toggle MPPT Optimization"
            >
              <span className="toggle-thumb" />
            </button>
          </div>

          <div className="calc-toggle-box" style={{ marginTop: 10 }}>
            <div className="toggle-info">
              <strong>
                <Sun size={15} style={{ marginRight: 5, verticalAlign: "middle" }} />
                Hybrid Solar Petals (+36 Wp / Leaf)
              </strong>
              <small>Dual wind + solar generation (336 W combined nameplate per Aeroleaf)</small>
            </div>
            <button
              type="button"
              className={`toggle-switch-btn ${hybridSolarPetals ? "active" : ""}`}
              onClick={() => setHybridSolarPetals(!hybridSolarPetals)}
              aria-pressed={hybridSolarPetals}
              aria-label="Toggle Hybrid Solar Petals"
            >
              <span className="toggle-thumb" />
            </button>
          </div>
        </div>

        {/* Results Metrics Panel */}
        <div className="calculator-results-panel">
          <div className="calc-hero-stat">
            <span className="calc-stat-label">Estimated Annual Generation</span>
            <strong className="calc-main-num">
              {totalAnnualKwh.toLocaleString()} <span className="unit">kWh / yr</span>
            </strong>
            <span className="calc-est-badge">
              <Wind size={13} style={{ marginRight: 4, verticalAlign: "middle" }} />
              {hybridSolarPetals ? "Hybrid Wind (300W) + Solar Petals (36Wp)" : "100% Direct-Drive 48V Aeroleaf® Wind Power"}
            </span>
          </div>

          <div className="calc-metrics-grid">
            <div className="calc-metric-box">
              <div className="metric-icon">
                <DollarSign size={22} color="#2d6a4d" />
              </div>
              <div>
                <span className="metric-label">Annual Savings</span>
                <strong className="metric-val">${annualSavings.toLocaleString()}</strong>
                <small>Based on ${costPerKwh.toFixed(2)}/kWh</small>
              </div>
            </div>

            <div className="calc-metric-box">
              <div className="metric-icon">
                <Leaf size={22} color="#2d6a4d" />
              </div>
              <div>
                <span className="metric-label">CO₂ Offset</span>
                <strong className="metric-val">{co2AvoidedTons} Metric Tons</strong>
                <small>Greenhouse gases avoided</small>
              </div>
            </div>

            <div className="calc-metric-box">
              <div className="metric-icon">
                <Home size={22} color="#2d6a4d" />
              </div>
              <div>
                <span className="metric-label">Homes Equivalent</span>
                <strong className="metric-val">{homesPowered} Homes</strong>
                <small>Urban base load support</small>
              </div>
            </div>

            <div className="calc-metric-box">
              <div className="metric-icon">
                <Car size={22} color="#2d6a4d" />
              </div>
              <div>
                <span className="metric-label">Zero-Emission EV Miles</span>
                <strong className="metric-val">{evMilesPowered} Miles</strong>
                <small>Clean mobility equivalent</small>
              </div>
            </div>
          </div>

          <div className="calc-cta-footer">
            <div>
              <strong>Modular Unit Pricing from $850 / Leaf</strong>
              <p>
                Estimated hardware baseline: ~${estimatedHardwareCost.toLocaleString()} ({aeroleafCount} Units · {systemPeakKw} kW Peak)
              </p>
            </div>
            <Link to="/order" className="primary-button calc-cta-btn">
              Configure & Order <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
