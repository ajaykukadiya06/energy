import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brand } from "./Brand";
import {
  Wind,
  Zap,
  Leaf,
  ShieldCheck,
  Send,
  CheckCircle2,
  ArrowRight,
  Mail,
  MapPin,
  FileText,
  Layers,
  Sparkles,
} from "lucide-react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="site-footer-clean">
      {/* Top Simple & Clean Hero Banner with Wind Tree Graphic */}
      <div className="footer-hero-strip">
        <div className="footer-hero-box">
          <div className="footer-hero-copy">
            <div className="footer-clean-tag">
              <span className="clean-dot" />
              <span>Clean Urban Wind Power</span>
            </div>
            <h2>Bring quiet, sculptural wind energy to your project.</h2>
            <p>
              Aeris turns gentle urban airflow into continuous clean power with silent Aeroleaf® micro-turbines.
            </p>
            <div className="footer-hero-btn-row">
              <Link to="/order" className="primary-button footer-clean-btn">
                Configure Wind Tree <ArrowRight size={15} style={{ marginLeft: 6 }} />
              </Link>
              <Link to="/calculator" className="secondary-button footer-clean-sec-btn">
                Yield Calculator
              </Link>
            </div>
          </div>

          <div className="footer-hero-visual">
            <div className="footer-visual-frame">
              <img
                src="/images/footer_wind_tree.jpg"
                alt="Illuminated Aeris Wind Tree"
                className="footer-clean-img"
              />
              <div className="footer-visual-badge">
                <Wind size={14} color="#4ab97e" />
                <span>10.8 kW · 36 Aeroleafs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean 4-Column Directory Grid */}
      <div className="footer-clean-grid">
        {/* Col 1: Brand & Mission */}
        <div className="footer-grid-col brand-col">
          <Link to="/" className="footer-brand-wrap" aria-label="AERIS Home">
            <Brand />
          </Link>
          <p className="brand-clean-desc">
            Biomimetic vertical-axis wind turbine architecture designed for urban spaces, corporate parks, and smart cities.
          </p>
          <div className="clean-status-pill">
            <span className="live-status-dot" />
            <span>Grid Connected · 99.98% Uptime</span>
          </div>
        </div>

        {/* Col 2: Models & Hardware */}
        <div className="footer-grid-col">
          <h4 className="footer-col-title">Systems</h4>
          <ul className="footer-clean-links">
            <li><Link to="/product">Wind Tree 36 (Flagship)</Link></li>
            <li><Link to="/order">Wind Tree 18 (Modular)</Link></li>
            <li><Link to="/dashboard/matrix">Aeroleaf® Matrix (36-Ch)</Link></li>
            <li><Link to="/dashboard/microgrid">BESS &amp; EV Microgrid</Link></li>
            <li><Link to="/dashboard/weather">Atmospheric Telemetry</Link></li>
          </ul>
        </div>

        {/* Col 3: Engineering & Planning */}
        <div className="footer-grid-col">
          <h4 className="footer-col-title">Engineering</h4>
          <ul className="footer-clean-links">
            <li><Link to="/dashboard">SCADA Digital Twin</Link></li>
            <li><Link to="/dashboard/analytics">Yield &amp; ESG Analytics</Link></li>
            <li><Link to="/dashboard/controls">Governor Storm Brake</Link></li>
            <li><Link to="/calculator">3D CFD Yield Estimator</Link></li>
            <li><Link to="/order">Turnkey Configurator</Link></li>
          </ul>
        </div>

        {/* Col 4: Feasibility & Contact */}
        <div className="footer-grid-col newsletter-col">
          <h4 className="footer-col-title">Updates & Feasibility</h4>
          <p className="clean-news-text">
            Get quarterly airflow CFD studies and technical deployment whitepapers.
          </p>

          {subscribed ? (
            <div className="clean-subscribed-box">
              <CheckCircle2 size={16} color="#4ab97e" />
              <span>Subscribed to Aeris engineering updates.</span>
            </div>
          ) : (
            <form className="clean-subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter work email..."
                required
                aria-label="Work email"
              />
              <button type="submit" aria-label="Subscribe">
                <Send size={14} />
              </button>
            </form>
          )}

          <div className="clean-contact-links">
            <span><Mail size={13} color="#4ab97e" style={{ marginRight: 6 }} /> projects@aeris-energy.com</span>
          </div>
        </div>
      </div>

      {/* Clean Bottom Bar */}
      <div className="footer-clean-bottom">
        <div className="bottom-meta">
          <span>© {new Date().getFullYear()} AERIS WIND TREE ENERGY INC.</span>
          <span className="bottom-divider">•</span>
          <span>CE Certified</span>
          <span className="bottom-divider">•</span>
          <span>UL 1741 Compliant</span>
        </div>

        <div className="bottom-legal-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/sitemap">Sitemap</Link>
          <Link to="/order">Procurement</Link>
        </div>
      </div>
    </footer>
  );
}
