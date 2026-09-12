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
import { benefitCards, clientLogos, projectCards, testimonials, useCases } from "./site-data";
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
        {/* Hero Section with Video Background */}
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
              <span className="live-dot" /> Next-Gen Urban Energy
            </div>
            <h1>Beautiful wind energy for modern cities.</h1>
            <p>
              Aeris Wind Trees transform urban airflow into silent, continuous clean power while blending
              sculpturally into parks, campuses, corporate plazas, and sustainable architectural developments.
            </p>

            <div className="cta-row">
              <Link className="primary-button hero-cta-btn" to="/order">
                Request a quote <ArrowRight size={16} style={{ marginLeft: 6 }} />
              </Link>
              <a className="secondary-button hero-secondary-btn" href="#video-demo">
                Watch in motion <ChevronDown size={16} style={{ marginLeft: 4 }} />
              </a>
            </div>

            <div className="stats-row">
              <div>
                <strong>2.0 m/s</strong>
                <span>Cut-in speed</span>
              </div>
              <div>
                <strong>&lt; 28 dB</strong>
                <span>Whisper quiet</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Clean generation</span>
              </div>
              <div>
                <strong>25+ Yrs</strong>
                <span>Design lifespan</span>
              </div>
            </div>
          </div>

          {/* Hero Video Controls Bar */}
          <div className="hero-video-controls-badge">
            <button
              type="button"
              className="hero-video-toggle-btn"
              onClick={toggleHeroVideoPlay}
              aria-label={heroVideoPlaying ? "Pause background video" : "Play background video"}
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
              aria-label={heroVideoMuted ? "Unmute video audio" : "Mute video audio"}
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
        <section className="logo-strip" aria-label="Trusted project partners">
          {clientLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </section>

        {/* Live Video Showcase Section */}
        <Reveal className="section video-section-wrapper" id="video-demo">
          <VideoShowcase />
        </Reveal>

        {/* Feature Explorer / Anatomy Section */}
        <Reveal className="section" id="product">
          <TreeFeatureExplorer />
        </Reveal>

        {/* Wind Tree Interactive Design Studio / Customizer */}
        <Reveal className="section" id="customizer">
          <TreeCustomizer />
        </Reveal>

        {/* Architecture & Benefits Section */}
        <Reveal className="section benefit-section" id="benefits">
          <div className="benefit-layout">
            <div className="benefit-copy">
              <span className="eyebrow">Architectural Integration</span>
              <h2>Designed to harmonize with nature while powering the future.</h2>
              <p>
                The Wind Tree concept delivers distributed renewable energy without the harsh visual
                intrusion or acoustic noise of traditional industrial turbines. It creates a landmark focal point
                for eco-conscious developers, campuses, and forward-thinking cities.
              </p>

              <ul className="check-list">
                <li>Omni-directional Aeroleafs capture 360° turbulence from ground micro-drafts</li>
                <li>Operates at whisper-quiet sound levels lower than ambient background conversation</li>
                <li>100% bird, bat, and urban wildlife safe with enclosed rotating profiles</li>
                <li>Modular scalability from individual Aeroleaf units to multi-tree smart microgrid arrays</li>
                <li>Full IoT edge telemetry with real-time cloud dashboard monitoring</li>
              </ul>

              <div className="benefit-cta-box">
                <Link to="/benefits" className="primary-button">
                  Explore full benefits <ArrowRight size={16} style={{ marginLeft: 6 }} />
                </Link>
              </div>
            </div>

            <div className="benefit-visual">
              <img src="/images/windtree_dubai.jpg" alt="Wind tree in modern architectural setting" />
            </div>
          </div>
        </Reveal>

        {/* Interactive Energy & Savings Calculator */}
        <Reveal className="section" id="calculator">
          <WindTreeCalculator />
        </Reveal>

        {/* Applications / Use Cases */}
        <Reveal className="section usecases-section">
          <div className="section-heading center">
            <span className="eyebrow">Versatile Applications</span>
            <h2>Engineered for every modern infrastructure environment.</h2>
          </div>

          <div className="usecase-grid">
            {useCases.map((item) => (
              <div className="usecase-pill" key={item}>
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Real Projects Showcase */}
        <Reveal className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="eyebrow">Global Deployments</span>
            <h2>Real installations, measurable clean energy impact.</h2>
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

        {/* Live Telemetry Metrics */}
        <Reveal className="section metrics-section">
          <div className="section-heading">
            <span className="eyebrow">Fleet Intelligence</span>
            <h2>Real-time performance across connected installations.</h2>
          </div>
          <div className="metrics-grid">
            <article>
              <strong>18.4 MWh</strong>
              <span>clean energy generated</span>
              <small>+12.8% this quarter</small>
            </article>
            <article>
              <strong>1,240 t</strong>
              <span>CO₂ avoided annually</span>
              <small>Across active projects</small>
            </article>
            <article>
              <strong>99.4%</strong>
              <span>system availability</span>
              <small>Last 12 months</small>
            </article>
            <article>
              <strong>42+</strong>
              <span>connected installations</span>
              <small>Across 8 countries</small>
            </article>
          </div>
        </Reveal>

        {/* Testimonials */}
        <Reveal className="section testimonials-section">
          <div className="section-heading center">
            <span className="eyebrow">Trusted by design leaders</span>
            <h2>Renewable infrastructure that communities love to share.</h2>
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

        {/* Quote Banner */}
        <Reveal className="section quote-banner">
          <div>
            <span className="eyebrow">Bring Clean Power to Life</span>
            <h2>Elevate your next development with iconic renewable energy.</h2>
          </div>
          <Link className="primary-button" to="/order">
            Request a Custom Proposal <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Link>
        </Reveal>

        {/* Contact Form Section */}
        <Reveal className="section contact-section" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">Let&apos;s collaborate</span>
            <h2>Request a custom proposal for your site.</h2>
            <p>
              Tell us about your location, wind conditions, and energy targets. Our engineering team
              will prepare a comprehensive site feasibility and 3D layout simulation.
            </p>
          </div>

          <ContactForm />
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  );
}
