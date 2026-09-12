import { Link } from "react-router-dom";
import { SiteFooter } from "../../components/landing/SiteFooter";
import { SiteHeader } from "../../components/landing/SiteHeader";
import { projectCards } from "../../components/landing/site-data";
import {
  MapPin,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Wind,
  Layers,
  Compass,
} from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="page-shell route-page">
      <SiteHeader />

      <main className="route-main">
        <section className="route-hero compact">
          <span className="eyebrow">Projects & Innovation</span>
          <h1>Building the next generation of urban wind energy.</h1>
          <p>
            Explore our worldwide installations across commercial plazas, civic squares, university campuses,
            and sustainable residential communities.
          </p>
        </section>

        {/* Global Installations Grid */}
        <section className="projects-section" style={{ paddingTop: "20px" }}>
          <div className="section-heading">
            <span className="eyebrow">Global Deployments</span>
            <h2>Connected live installations.</h2>
          </div>

          <div className="project-grid">
            {projectCards.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>
                    <MapPin size={12} style={{ marginRight: 4, verticalAlign: "middle" }} />
                    {project.subtitle}
                  </span>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* R&D Highlights */}
        <section className="route-section-block">
          <div className="section-heading">
            <span className="eyebrow">Innovation Lab</span>
            <h2>Advanced materials & fluid dynamic engineering.</h2>
          </div>

          <div className="route-grid innovation-grid">
            <article className="route-card">
              <span className="innovation-tag">R&amp;D / 01</span>
              <h3>
                <Wind size={18} color="#2d6a4d" style={{ marginRight: 6, verticalAlign: "middle" }} />
                Adaptive Aeroleaf Modules
              </h3>
              <p>
                Testing lightweight aerodynamic biomimetic forms that capture multi-directional
                turbulent airflow at ultra-low speeds.
              </p>
            </article>
            <article className="route-card">
              <span className="innovation-tag">DATA / 02</span>
              <h3>
                <Cpu size={18} color="#2d6a4d" style={{ marginRight: 6, verticalAlign: "middle" }} />
                Intelligent Edge Telemetry
              </h3>
              <p>
                Using live microsecond sensor data and predictive AI models to maximize MPPT inverter
                efficiency and grid reliability.
              </p>
            </article>
            <article className="route-card">
              <span className="innovation-tag">MATERIALS / 03</span>
              <h3>
                <ShieldCheck size={18} color="#2d6a4d" style={{ marginRight: 6, verticalAlign: "middle" }} />
                Storm-Resistant Marine Steel
              </h3>
              <p>
                Engineered with anti-corrosive electrostatic coatings rated for Class 3 typhoons,
                coastal saltwater, and desert climates.
              </p>
            </article>
          </div>
        </section>

        <section className="innovation-roadmap">
          <div>
            <span className="eyebrow">Deployment Roadmap</span>
            <h2>From site assessment to seamless commissioning.</h2>
          </div>
          <div className="roadmap-list">
            <div>
              <strong>01</strong>
              <span>
                <b>CFD Wind Modeling:</b> High-resolution 3D simulation of local urban airflow and terrain
                micro-currents.
              </span>
            </div>
            <div>
              <strong>02</strong>
              <span>
                <b>Modular Pre-Assembly:</b> Plug-and-play tree assembly with integrated cabling and
                foundation anchor plates.
              </span>
            </div>
            <div>
              <strong>03</strong>
              <span>
                <b>Telemetry & Microgrid:</b> Instant cloud synchronization with local energy management
                and EV charging hubs.
              </span>
            </div>
          </div>
        </section>

        <section className="route-cta">
          <div>
            <span className="eyebrow" style={{ color: "#b8e39c" }}>
              Initiate a project
            </span>
            <h3>Want to bring an Aeris Wind Tree to your development?</h3>
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
            Request Site Proposal <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
