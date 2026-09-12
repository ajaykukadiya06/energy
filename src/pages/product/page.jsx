import { Link } from "react-router-dom";
import { SiteFooter } from "../../components/landing/SiteFooter";
import { SiteHeader } from "../../components/landing/SiteHeader";
import { VideoShowcase } from "../../components/landing/VideoShowcase";
import { TreeFeatureExplorer } from "../../components/landing/TreeFeatureExplorer";
import { TreeCustomizer } from "../../components/landing/TreeCustomizer";
import { WindTreeCalculator } from "../../components/landing/WindTreeCalculator";
import {
  Wind,
  Zap,
  Radio,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sparkles,
  FileCheck,
} from "lucide-react";

export default function ProductPage() {
  return (
    <div className="page-shell route-page">
      <SiteHeader />

      <main className="route-main">
        <section className="route-hero compact">
          <span className="eyebrow">Product & Engineering</span>
          <h1>Wind trees designed to feel natural in every landscape.</h1>
          <p>
            Our technology pairs biomimetic architectural form with low-noise vertical-axis micro-turbines,
            capturing 360° airflow and turning turbulent city micro-drafts into clean power.
          </p>
        </section>

        {/* Live Video Showcase */}
        <section className="route-section-block">
          <VideoShowcase />
        </section>

        {/* Anatomy & Feature Explorer */}
        <section className="route-section-block">
          <TreeFeatureExplorer />
        </section>

        {/* 3D / Architectural Customizer */}
        <section className="route-section-block">
          <TreeCustomizer />
        </section>

        <section className="technology-section">
          <div className="section-heading">
            <span className="eyebrow">Wind Tree technology</span>
            <h2>Small-scale generation, engineered as one connected system.</h2>
            <p className="technology-intro">
              Each installation combines aerodynamic Aeroleaf modules, a direct-drive synchronous permanent-magnet generator,
              power electronics with 10ms micro-regulation, and cloud telemetry.
            </p>
          </div>

          <div className="technology-grid">
            <article className="technology-card">
              <span className="technology-number">01</span>
              <h3>Capture (360° Omnidirectional)</h3>
              <p>
                Double-blade vertical-axis Aeroleaf modules respond to changing wind directions from any angle
                without yaw motors or turning mechanisms, starting at just 2.5 m/s (9 km/h).
              </p>
            </article>
            <article className="technology-card">
              <span className="technology-number">02</span>
              <h3>Convert (Direct Drive 48V PMG)</h3>
              <p>
                Direct-drive synchronous permanent magnet generators produce AC electricity, rectified to 48V DC
                and regulated with sub-second microcontroller instructions before final inversion.
              </p>
            </article>
            <article className="technology-card">
              <span className="technology-number">03</span>
              <h3>Connect (Grid & BESS Microgrid)</h3>
              <p>
                Central inverters export clean sine wave power (110V / 230V / 400V) to local buildings, EV charging
                pedestals, or 15 kWh battery buffers, tracked 24/7 via the SCADA digital twin.
              </p>
            </article>
          </div>
        </section>

        {/* Interactive Energy Yield Calculator */}
        <section className="route-section-block">
          <WindTreeCalculator />
        </section>

        <section className="spec-section">
          <div className="spec-copy">
            <span className="eyebrow">Verified Technical Specifications</span>
            <h2>Documented engineering metrics for feasibility and procurement studies.</h2>
            <p>
              Based on published WindTree 36A and Aeroleaf datasheets. Final annual generation depends on site wind speed
              distribution, surface roughness, and installation topography.
            </p>
            <Link to="/order" className="primary-button">
              Request Site Audit & CFD Simulation <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </Link>
          </div>
          <div className="spec-table">
            <div>
              <span>System Architecture</span>
              <strong>Vertical-Axis Direct-Drive PMG Micro-Turbines</strong>
            </div>
            <div>
              <span>Starting Cut-In Speed</span>
              <strong>2.5 m/s (9 km/h / 5.6 mph)</strong>
            </div>
            <div>
              <span>Continuous Wind Limit</span>
              <strong>43 m/s (155 km/h / 96 mph)</strong>
            </div>
            <div>
              <span>Survival Gust Rating</span>
              <strong>50 m/s (180 km/h / 112 mph)</strong>
            </div>
            <div>
              <span>WindTree 36A Capacity</span>
              <strong>10.8 kW Installed / 5.868 kW Nominal Power</strong>
            </div>
            <div>
              <span>36A Dimensions & Weight</span>
              <strong>9.8 m H × 8.0 m Ø · 3,590 kg Marine Steel</strong>
            </div>
            <div>
              <span>Per-Aeroleaf Rating</span>
              <strong>300 W (48V DC) · Max 850 RPM</strong>
            </div>
            <div>
              <span>Hybrid Solar Petal Option</span>
              <strong>+36 Wp Photovoltaic (336 W Hybrid Module)</strong>
            </div>
            <div>
              <span>Acoustic Signature</span>
              <strong>Low-Noise Urban Direct-Drive (No Gears/Belts)</strong>
            </div>
            <div>
              <span>Installation & Clearances</span>
              <strong>2–4 Days · Min 6m Building Clearance</strong>
            </div>
          </div>
        </section>

        <section className="route-cta">
          <div>
            <span className="eyebrow" style={{ color: "#b8e39c" }}>
              Ready to order
            </span>
            <h3>Need a custom proposal or CAD drawing for your site?</h3>
          </div>
          <Link
            to="/order"
            className="secondary-button"
            style={{
              color: "#fff",
              background: "rgba(255,255,255,0.15)",
              borderColor: "rgba(255,255,255,0.3)",
            }}
          >
            Request Project Proposal <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
