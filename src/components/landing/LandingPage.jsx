import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { VideoShowcase } from "./VideoShowcase";
import { TreeFeatureExplorer } from "./TreeFeatureExplorer";
import { TreeCustomizer } from "./TreeCustomizer";
import { WindTreeCalculator } from "./WindTreeCalculator";
import { TechArchitectureDiagram } from "./TechArchitectureDiagram";
import { SpecTabsSection } from "./SpecTabsSection";
import { WindSpeedGauge } from "./WindSpeedGauge";
import { ApplicationsGrid } from "./ApplicationsGrid";
import { clientLogos, projectCards, testimonials } from "./site-data";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Check,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Activity,
  Zap,
  Wind,
  Compass,
  Layers,
  Cpu,
  CheckCircle2,
  Building2,
  TreePine,
  Sun,
} from "lucide-react";

export default function LandingPage() {
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(true);
  const [heroVideoMuted, setHeroVideoMuted] = useState(true);
  const heroVideoRef = useRef(null);

  const toggleHeroVideoPlay = () => {
    if (!heroVideoRef.current) return;
    if (heroVideoPlaying) {
      heroVideoRef.current.pause();
      setHeroVideoPlaying(false);
    } else {
      heroVideoRef.current.play();
      setHeroVideoPlaying(true);
    }
  };

  const toggleHeroVideoMute = () => {
    if (!heroVideoRef.current) return;
    const nextMute = !heroVideoMuted;
    heroVideoRef.current.muted = nextMute;
    setHeroVideoMuted(nextMute);
  };

  return (
    <div className="page-shell">
      <SiteHeader isOverlay />

      <main>
        {/* 1. HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-video-bg-wrap">
            <video
              ref={heroVideoRef}
              className="hero-video-bg"
              src="/videos/202609102204.mp4"
              poster="/images/hero-wind-tree.jpg"
              autoPlay
              loop
              muted={heroVideoMuted}
              playsInline
              preload="auto"
            />
            <div className="hero-video-overlay" />
          </div>

          <div className="hero-copy">
            <div className="hero-badge-tag">
              <span className="live-dot" /> 10.8–36 kW System Configurations
            </div>
            <span className="eyebrow" style={{ color: "#b8e39c", marginBottom: 6 }}>
              AERIS WINDTREE
            </span>
            <h1>Energy, shaped by nature.</h1>
            <p>
              Biomimetic vertical-axis wind technology designed for clean energy generation in urban
              and architectural environments.
            </p>

            <div className="cta-row">
              <a className="primary-button hero-cta-btn" href="#technology">
                Explore Technology <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </a>
              <a className="secondary-button hero-secondary-btn" href="#specifications">
                View Specifications <ChevronDown size={16} style={{ marginLeft: 4 }} />
              </a>
            </div>

            <div className="stats-row">
              <div>
                <strong>2.5 m/s</strong>
                <span>Starting Cut-in</span>
              </div>
              <div>
                <strong>360°</strong>
                <span>Omni-Directional</span>
              </div>
              <div>
                <strong>Direct Drive</strong>
                <span>Low-Noise PMG</span>
              </div>
              <div>
                <strong>10.8–36 kW</strong>
                <span>Modular Scalability</span>
              </div>
            </div>
          </div>

          {/* Hero Video Controls */}
          <div className="hero-video-controls-badge">
            <button
              type="button"
              className="hero-video-toggle-btn"
              onClick={toggleHeroVideoPlay}
              aria-label={heroVideoPlaying ? "Pause video" : "Play video"}
            >
              {heroVideoPlaying ? (
                <>
                  <Pause size={13} style={{ marginRight: 5, verticalAlign: "middle" }} />
                  Pause
                </>
              ) : (
                <>
                  <Play size={13} style={{ marginRight: 5, verticalAlign: "middle" }} />
                  Play Motion
                </>
              )}
            </button>
            <button
              type="button"
              className="hero-video-toggle-btn"
              onClick={toggleHeroVideoMute}
              aria-label={heroVideoMuted ? "Unmute audio" : "Mute audio"}
            >
              {heroVideoMuted ? (
                <>
                  <VolumeX size={13} style={{ marginRight: 5, verticalAlign: "middle" }} />
                  Unmute
                </>
              ) : (
                <>
                  <Volume2 size={13} style={{ marginRight: 5, verticalAlign: "middle" }} />
                  Sound ON
                </>
              )}
            </button>
          </div>
        </section>

        {/* Client Logos Strip */}
        <section className="logo-strip" aria-label="Project partners">
          {clientLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </section>

        {/* 2. TECHNOLOGY SECTION: "A NEW FORM OF WIND ENERGY" */}
        <Reveal className="section" id="technology">
          <div className="section-heading center">
            <span className="eyebrow">A New Form of Wind Energy</span>
            <h2>Compact vertical-axis micro-turbines integrated into a sculptural tree.</h2>
            <p className="customizer-subhead">
              Aeris WindTree uses a collection of compact vertical-axis micro-wind turbines integrated into a
              tree-inspired structural system designed for the built environment.
            </p>
          </div>

          {/* Flow Banner */}
          <div className="tech-pipeline-strip">
            <div className="pipeline-item">
              <Wind size={15} />
              <span>Wind</span>
            </div>
            <ArrowRight size={14} className="pipeline-arrow" />
            <div className="pipeline-item">
              <Zap size={15} />
              <span>Aeroleaf Turbine</span>
            </div>
            <ArrowRight size={14} className="pipeline-arrow" />
            <div className="pipeline-item">
              <Cpu size={15} />
              <span>Permanent-Magnet Generator</span>
            </div>
            <ArrowRight size={14} className="pipeline-arrow" />
            <div className="pipeline-item">
              <Layers size={15} />
              <span>DC Collection &amp; Regulation</span>
            </div>
            <ArrowRight size={14} className="pipeline-arrow" />
            <div className="pipeline-item">
              <Zap size={15} />
              <span>Inverter</span>
            </div>
            <ArrowRight size={14} className="pipeline-arrow" />
            <div className="pipeline-item highlight">
              <Building2 size={15} />
              <span>Usable Electricity</span>
            </div>
          </div>

          {/* 6 Technology Cards */}
          <div className="tech-cards-grid" style={{ marginTop: 32 }}>
            <article className="tech-feature-card">
              <div className="tech-card-icon">
                <Wind size={22} color="#2d6a4d" />
              </div>
              <h3>Vertical Axis</h3>
              <p>Captures wind from multiple directions without requiring a conventional yaw mechanism.</p>
            </article>

            <article className="tech-feature-card">
              <div className="tech-card-icon">
                <Compass size={22} color="#2d6a4d" />
              </div>
              <h3>360° Wind Capture</h3>
              <p>Designed to receive turbulent, multi-directional airflow common in dense urban streets and squares.</p>
            </article>

            <article className="tech-feature-card">
              <div className="tech-card-icon">
                <Zap size={22} color="#2d6a4d" />
              </div>
              <h3>Direct Drive</h3>
              <p>No conventional gearbox or belt transmission, eliminating mechanical wear and gear whine.</p>
            </article>

            <article className="tech-feature-card">
              <div className="tech-card-icon">
                <Cpu size={22} color="#2d6a4d" />
              </div>
              <h3>Permanent-Magnet Generator</h3>
              <p>Synchronous micro-generator directly coupled to the rotor converting kinetic spin to 48V electricity.</p>
            </article>

            <article className="tech-feature-card">
              <div className="tech-card-icon">
                <Layers size={22} color="#2d6a4d" />
              </div>
              <h3>Intelligent Regulation</h3>
              <p>Integrated electronic card calculates optimal voltage and current instructions every 10 milliseconds.</p>
            </article>

            <article className="tech-feature-card">
              <div className="tech-card-icon">
                <TrendingUp size={22} color="#2d6a4d" />
              </div>
              <h3>Modular Architecture</h3>
              <p>Multiple turbine modules can be scaled from single leaves (300 W) up to multi-tree civic arrays.</p>
            </article>
          </div>
        </Reveal>

        {/* 3. ELECTRICAL & MECHANICAL ARCHITECTURE DIAGRAM */}
        <Reveal className="section">
          <TechArchitectureDiagram />
        </Reveal>

        {/* 4. AEROLEAF ANATOMY & FEATURE EXPLORER */}
        <Reveal className="section" id="aeroleaf">
          <TreeFeatureExplorer />
        </Reveal>

        {/* 5. POWER SECTION & PRODUCT LINEUP */}
        <Reveal className="section" id="models">
          <TreeCustomizer />

          {/* Important Engineering Capacity Disclaimer */}
          <div className="power-disclaimer-card" style={{ marginTop: 24 }}>
            <ShieldCheck size={20} color="#2d6a4d" style={{ flexShrink: 0 }} />
            <span>
              <strong>System Capacity & Output Note:</strong> System capacity varies by configuration (from 10.8 kW up to 36 kW).
              Actual annual energy production depends on site-specific wind velocity distributions, terrain roughness, and local building aerodynamic interference.
            </span>
          </div>
        </Reveal>

        {/* 6. WIND PERFORMANCE GAUGE & OPERATING LIMITS */}
        <Reveal className="section">
          <WindSpeedGauge />
        </Reveal>

        {/* 7. LIVE VIDEO SHOWCASE */}
        <Reveal className="section video-section-wrapper" id="video-demo">
          <VideoShowcase />
        </Reveal>

        {/* 8. INTERACTIVE ENERGY & SAVINGS CALCULATOR */}
        <Reveal className="section" id="calculator">
          <WindTreeCalculator />
        </Reveal>

        {/* 9. TABBED TECHNICAL SPECIFICATIONS */}
        <Reveal className="section" id="specifications">
          <SpecTabsSection />
        </Reveal>

        {/* 10. BUILT ENVIRONMENT APPLICATIONS */}
        <Reveal className="section" id="applications">
          <ApplicationsGrid />
        </Reveal>

        {/* 11. GLOBAL PROJECTS SHOWCASE */}
        <Reveal className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="eyebrow">Project Deployments</span>
            <h2>Architectural landmarks producing clean local energy.</h2>
          </div>

          <div className="project-grid">
            {projectCards.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>{project.subtitle}</span>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* 12. SUSTAINABILITY & LIFESPAN SECTION */}
        <Reveal className="section sustainability-section">
          <div className="benefit-layout">
            <div className="benefit-copy">
              <span className="eyebrow">Engineered for Longevity</span>
              <h2>Built for long-term outdoor operation.</h2>
              <p>
                Every Aeris WindTree is manufactured from high-tensile marine steel with C5 anti-corrosive
                powder coating and sealed, weatherproof generator encapsulation to resist rain, snow, sand, and coastal salt air.
              </p>

              <ul className="check-list">
                <li>Direct-drive architecture eliminates high-wear mechanical gearboxes and drive belts</li>
                <li>Operates at low-noise decibel levels suited for urban pedestrian squares and hospitality</li>
                <li>Parallel electrical architecture ensures redundant, independent leaf generation</li>
                <li>Optional Hybrid Photovoltaic Solar Petals for combined 24/7 breeze + daytime solar power</li>
              </ul>

              <div className="benefit-cta-box">
                <Link to="/order" className="primary-button">
                  Configure Your Installation <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </Link>
              </div>
            </div>

            <div className="benefit-visual">
              <img src="/images/windtree_dubai.jpg" alt="Wind tree in architectural setting" />
            </div>
          </div>
        </Reveal>

        {/* 13. TESTIMONIALS */}
        <Reveal className="section testimonials-section">
          <div className="section-heading center">
            <span className="eyebrow">Trusted by Design & Sustainability Leaders</span>
            <h2>Renewable infrastructure communities take pride in.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <span className="quote-mark">“</span>
                <p>{item.quote}</p>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </article>
            ))}
          </div>
        </Reveal>

        {/* 14. CALL TO ACTION BANNER */}
        <Reveal className="section quote-banner">
          <div>
            <span className="eyebrow">Begin Your Project Feasibility</span>
            <h2>Bring iconic renewable energy to your next development.</h2>
          </div>
          <Link className="primary-button" to="/order">
            Request Engineering Proposal <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </Reveal>

        {/* 15. CONTACT FORM */}
        <Reveal className="section contact-section" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">Let&apos;s collaborate</span>
            <h2>Request a custom proposal for your site.</h2>
            <p>
              Tell us about your location, wind conditions, and energy targets. Our engineering team
              will prepare a comprehensive site feasibility assessment and 3D CFD airflow simulation.
            </p>
          </div>

          <ContactForm />
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
