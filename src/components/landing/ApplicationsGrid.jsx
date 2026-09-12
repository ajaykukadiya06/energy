import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  GraduationCap,
  Hotel,
  TreePine,
  Zap,
  Landmark,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function ApplicationsGrid() {
  const applications = [
    {
      id: "smart-cities",
      title: "Smart Cities & Civic Plazas",
      icon: Landmark,
      image: "/images/hero-wind-tree.jpg",
      desc: "Iconic clean power sculptures for public squares, pedestrian corridors, and civic cultural centers.",
      metric: "Zero-Infrasound Pedestrian Safe",
    },
    {
      id: "commercial",
      title: "Commercial Headquarters",
      icon: Building2,
      image: "/images/windtree_park.jpg",
      desc: "Visible ESG statement for corporate campuses, reducing building base load and enhancing LEED scorecards.",
      metric: "Direct Building Microgrid Link",
    },
    {
      id: "universities",
      title: "Universities & Tech Campuses",
      icon: GraduationCap,
      image: "/images/windtree_campus.jpg",
      desc: "Interactive living sustainability labs for students, researchers, and campus clean power resilience.",
      metric: "Live SCADA Digital Twin API",
    },
    {
      id: "hospitality",
      title: "Hotels & Luxury Resorts",
      icon: Hotel,
      image: "/images/windtree_dubai.jpg",
      desc: "Whisper-quiet clean generation for waterfront promenades, outdoor dining patios, and private villas.",
      metric: "Low-Noise Direct-Drive",
    },
    {
      id: "public-parks",
      title: "Public Parks & Botanical Gardens",
      icon: TreePine,
      image: "/images/windtree_park.jpg",
      desc: "Blends seamlessly with natural flora while powering public lighting, Wi-Fi hubs, and park amenities.",
      metric: "Nature-Inspired Steel Canopy",
    },
    {
      id: "ev-charging",
      title: "EV & E-Mobility Fast Hubs",
      icon: Zap,
      image: "/images/footer_wind_tree.jpg",
      desc: "Integrated dual 22 kW Level 2 EV charging pedestals powered directly by Aeroleaf micro-turbines.",
      metric: "Direct Clean EV Top-Off",
    },
  ];

  return (
    <div className="applications-showcase-container">
      <div className="section-heading center">
        <span className="eyebrow">Built Environment Integration</span>
        <h2>Wind energy designed for every architectural context.</h2>
        <p className="customizer-subhead">
          From municipal civic squares to university research campuses and luxury eco-resorts.
        </p>
      </div>

      <div className="applications-modern-grid">
        {applications.map((app) => {
          const Icon = app.icon;
          return (
            <div key={app.id} className="app-modern-card">
              <div className="app-img-box">
                <img src={app.image} alt={app.title} />
                <div className="app-metric-tag">
                  <span>{app.metric}</span>
                </div>
              </div>
              <div className="app-card-body">
                <div className="app-title-row">
                  <div className="app-icon-wrap">
                    <Icon size={18} color="#2d6a4d" />
                  </div>
                  <h3>{app.title}</h3>
                </div>
                <p>{app.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
