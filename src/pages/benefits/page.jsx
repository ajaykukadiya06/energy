import { Link } from "react-router-dom";
import { SiteFooter } from "../../components/landing/SiteFooter";
import { SiteHeader } from "../../components/landing/SiteHeader";
import { TreeFeatureExplorer } from "../../components/landing/TreeFeatureExplorer";
import { WindTreeCalculator } from "../../components/landing/WindTreeCalculator";
import {
  Leaf,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Volume2,
  TreePine,
  Zap,
} from "lucide-react";

export default function BenefitsPage() {
  return (
    <div className="page-shell route-page">
      <SiteHeader />

      <main className="route-main">
        <section className="route-hero compact">
          <span className="eyebrow">Environmental & Aesthetic Benefits</span>
          <h1>Power that looks as good as it performs.</h1>
          <p>
            Aeris Wind Tree technology integrates clean energy into public life without sacrificing design,
            pedestrian safety, acoustic comfort, or landscape beauty.
          </p>
        </section>

        <section className="route-grid">
          <article className="route-card">
            <h3>
              <Zap size={20} color="#2d6a4d" style={{ marginRight: 8, verticalAlign: "middle" }} />
              Clean 24/7 Generation
            </h3>
            <p>
              Generates clean power around the clock from gentle micro-breezes, providing continuous day and night energy
              without the intermittent drops of other renewables.
            </p>
          </article>
          <article className="route-card">
            <h3>
              <TreePine size={20} color="#2d6a4d" style={{ marginRight: 8, verticalAlign: "middle" }} />
              Sculptural Urban Design
            </h3>
            <p>
              A biomimetic form that transforms utility into an iconic architectural landmark in parks,
              corporate headquarters, and smart-city corridors.
            </p>
          </article>
          <article className="route-card">
            <h3>
              <Volume2 size={20} color="#2d6a4d" style={{ marginRight: 8, verticalAlign: "middle" }} />
              Low-Noise Urban Direct-Drive
            </h3>
            <p>
              Direct-drive permanent magnet synchronous generators eliminate gearbox friction and mechanical whine,
              ensuring an acoustically benign presence suited for pedestrian plazas, campuses, and parks.
            </p>
          </article>
        </section>

        {/* Anatomy & Feature Explorer */}
        <section className="route-section-block">
          <TreeFeatureExplorer />
        </section>

        {/* Interactive Calculator */}
        <section className="route-section-block">
          <WindTreeCalculator />
        </section>

        <section className="route-feature">
          <div>
            <span className="eyebrow">Designed for impact</span>
            <h2>More than an energy source — a visible symbol of sustainable innovation.</h2>
          </div>
          <ul className="check-list route-list">
            <li>Reduces visual and acoustic disruption compared with industrial turbine towers</li>
            <li>Creates high-profile, public-facing ESG and sustainability showcases</li>
            <li>Powers on-site EV chargers, smart LED lighting, and emergency microgrid resilience</li>
            <li>Supports LEED Platinum, BREEAM Outstanding, and WELL building certifications</li>
          </ul>
        </section>

        <section className="route-cta">
          <div>
            <h3>Explore real-world project deployments across the globe.</h3>
          </div>
          <Link to="/projects" className="primary-button">
            View Project Case Studies <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
