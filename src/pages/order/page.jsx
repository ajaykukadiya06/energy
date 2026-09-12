import { SiteFooter } from "../../components/landing/SiteFooter";
import { SiteHeader } from "../../components/landing/SiteHeader";
import { OrderConfigurator } from "../../components/order/OrderConfigurator";
import {
  ShieldCheck,
  Zap,
  Wind,
  Sun,
  Battery,
  Award,
  FileSpreadsheet,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function OrderPage() {
  return (
    <div className="page-shell route-page">
      <SiteHeader />

      <main className="route-main">
        {/* Page Hero */}
        <section className="route-hero compact order-hero">
          <span className="eyebrow">Interactive Project Configurator</span>
          <h1>Configure & Order Your Aeris Wind Tree.</h1>
          <p>
            Build your custom clean energy installation. Select modular Aeroleaf units, tree scales, architectural finishes,
            EV charging pedestals, and battery storage to receive an instant engineering proposal and 3D CFD airflow audit.
          </p>
        </section>

        {/* 5-Step Interactive Order Configurator & Live Quotation Engine */}
        <section className="order-configurator-section">
          <OrderConfigurator />
        </section>

        {/* Included Engineering Deliverables Strip */}
        <section className="order-deliverables-strip">
          <div className="section-heading center">
            <span className="eyebrow">What is included</span>
            <h2>Complete Turnkey Project Deliverables</h2>
            <p className="deliverables-subhead">
              Every Aeris installation is backed by comprehensive engineering analysis, certified manufacturing, and lifetime cloud support.
            </p>
          </div>

          <div className="deliverables-grid">
            <div className="deliverable-card">
              <div className="deliv-icon">
                <Wind size={24} color="#2d6a4d" />
              </div>
              <h3>3D CFD Wind Simulation</h3>
              <p>
                Micro-climate fluid dynamic modeling analyzing terrain, nearby building vortexes, and expected annual kWh production.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliv-icon">
                <FileSpreadsheet size={24} color="#2d6a4d" />
              </div>
              <h3>Stamped Civil & Foundation CAD</h3>
              <p>
                Complete geotechnical foundation specifications, bolt anchor templates, and storm wind-load structural certifications.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliv-icon">
                <Zap size={24} color="#2d6a4d" />
              </div>
              <h3>Electrical Single-Line Schematics</h3>
              <p>
                UL 1741 & IEEE 1547 compliant electrical integration plans for grid-tied interconnection or microgrid islanding.
              </p>
            </div>

            <div className="deliverable-card">
              <div className="deliv-icon">
                <Cpu size={24} color="#2d6a4d" />
              </div>
              <h3>Lifetime Telemetry & IoT Dashboard</h3>
              <p>
                Continuous remote health monitoring, automated storm braking, and live ESG carbon offset reporting API access.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
