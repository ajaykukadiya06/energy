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
            Our patented technology pairs bio-inspired architectural form with whisper-quiet micro-turbine
            performance, turning turbulent city airflow into clean, reliable power.
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
              Each installation combines aerodynamic Aeroleaf modules, a direct-drive generator,
              power electronics, and cloud telemetry so teams can track performance 24/7.
            </p>
          </div>

          <div className="technology-grid">
            <article className="technology-card">
              <span className="technology-number">01</span>
              <h3>Capture</h3>
              <p>
                Leaf-shaped vertical-axis modules respond to changing wind directions without needing
                yaw motors or turning mechanisms.
              </p>
            </article>
            <article className="technology-card">
              <span className="technology-number">02</span>
              <h3>Convert</h3>
              <p>
                A direct-drive permanent magnet generator and MPPT inverter convert variable micro-drafts
                into stable, usable electricity.
              </p>
            </article>
            <article className="technology-card">
              <span className="technology-number">03</span>
              <h3>Connect</h3>
              <p>
                Telemetry tracks output, wind speed, system health, and carbon offsets through the
                Aeris cloud dashboard.
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
            <span className="eyebrow">Indicative Specifications</span>
            <h2>Designed for projects where performance and place matter equally.</h2>
            <p>
              Use these indicative parameters to begin your feasibility study. Final output,
              foundation engineering, and grid interface are customized for your specific terrain.
            </p>
            <Link to="/order" className="primary-button">
              Request Site Audit <ArrowRight size={16} style={{ marginLeft: 6 }} />
            </Link>
          </div>
          <div className="spec-table">
            <div>
              <span>System type</span>
              <strong>Distributed Biomimetic Vertical-Axis Wind</strong>
            </div>
            <div>
              <span>Startup Cut-in Speed</span>
              <strong>2.0 m/s (4.4 mph)</strong>
            </div>
            <div>
              <span>Rated Nominal Wind</span>
              <strong>10 m/s (22.3 mph)</strong>
            </div>
            <div>
              <span>Survival Wind Speed</span>
              <strong>Class 3 (up to 180 km/h / 112 mph)</strong>
            </div>
            <div>
              <span>Acoustic Signature</span>
              <strong>&lt; 28 dB(A) at 5 meters</strong>
            </div>
            <div>
              <span>Grid Integration</span>
              <strong>Single/Three Phase 230/400V or Microgrid</strong>
            </div>
            <div>
              <span>Modular Unit Scalability</span>
              <strong>From 1 Aeroleaf ($850) to 36+ Tree Arrays</strong>
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
