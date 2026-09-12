import { useState } from "react";
import { Link } from "react-router-dom";
import { Brand } from "./Brand";
import { MainNav } from "./MainNav";
import { useScrolled } from "../useScrolled";
import { Menu, X, LogIn, ArrowRight } from "lucide-react";

export function SiteHeader({ isOverlay = false }) {
  const scrolled = useScrolled(12);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`topbar ${isOverlay ? "topbar-overlay" : "topbar-fixed"} ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <Link to="/" aria-label="AERIS home">
          <Brand />
        </Link>

        {/* Desktop Navigation */}
        <MainNav className="desktop-only-nav" />

        <div className="header-actions">
          <Link className="nav-cta topbar-cta-btn" to="/dashboard">
            <LogIn size={15} style={{ marginRight: 6 }} />
            <span className="nav-cta-text">Dashboard Login</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`mobile-menu-toggle ${mobileMenuOpen ? "is-open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} color="#142b22" /> : <Menu size={20} color="#142b22" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <Brand />
              <button
                type="button"
                className="drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <MainNav
              className="mobile-nav-links"
              onNavigate={() => setMobileMenuOpen(false)}
            />
            <div className="mobile-drawer-footer">
              <Link
                className="primary-button full-width"
                to="/order"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request a quote <ArrowRight size={15} style={{ marginLeft: 6 }} />
              </Link>
              <Link
                className="secondary-button full-width"
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogIn size={15} style={{ marginRight: 6 }} />
                Customer Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
