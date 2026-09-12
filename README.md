# AERIS | Biomimetic Wind Tree Clean Energy Platform & SCADA Digital Twin

[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind / Custom CSS](https://img.shields.io/badge/CSS-Design%20Tokens-38B2AC?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-4ab97e?style=flat)]()

**AERIS** is a modern, biomimetic wind energy web platform and real-time SCADA Digital Twin cockpit engineered for silent, vertical-axis micro-turbine arrays in urban landscapes, smart cities, and corporate campuses.

---

## Technical Architecture & Core Technology

The WindTree system is an urban micro-generation structure carrying multiple vertical-axis **Aeroleaf®** micro-turbines. Rather than a single large horizontal turbine, it combines dozens of direct-drive generators with embedded electronic regulation.

```
Wind (360° Capture)
       ↓
Aeroleaf Double-Blade Rotors
       ↓
Synchronous Permanent-Magnet Micro-Generators (Direct Drive — No Gearbox / No Belts)
       ↓
AC Electricity Generation (48V Low Voltage)
       ↓
Embedded Electronic Regulation & DC Rectification (Microprocessor cycles every ~10ms)
       ↓
Combined DC Bus Collection
       ↓
Central MPPT Grid / Microgrid Inverter
       ↓
110V / 230V / 400V AC Output & BESS Battery Storage
```

---

## Verified Technical Specifications

### 1. Aeroleaf® Turbine Module

| Parameter | Verified Technical Value | Engineering Notes |
| :--- | :--- | :--- |
| **Turbine Type** | Vertical-axis micro-wind turbine | Omnidirectional 360° capture without yaw mechanism |
| **Blade Geometry** | Double-blade leaf profile | Optimized for turbulent, low-altitude urban air currents |
| **Generator Type** | Synchronous Permanent Magnet (PMG) | Direct-drive (No gearbox, no belts) |
| **Standard Module Power** | 300 W (Peak) | Configurations available from 300 W up to 1,000 W |
| **Operational Voltage** | 48 V DC (Rectified) | Safe low-voltage building & pedestrian integration |
| **Maximum Rotational Speed** | 850 RPM | Electronically governed with active safety damping |
| **Starting Cut-in Speed** | 2.5 m/s (9 km/h) | Exploits weak micro-drafts and gentle breezes |
| **Continuous Wind Resistance**| 43 m/s (155 km/h) | Continuous operational limit |
| **Survival Gust Limit** | 50 m/s (180 km/h) | Structural storm integrity |
| **Acoustic Profile** | Low-noise direct-drive | Whispering aerodynamic profile for urban compliance |
| **Environmental Protection** | Weatherproof Encapsulation | Sealed against rain, snow, sand, and coastal saline air |
| **Hybrid Solar Petal Option** | 36 Wp Photovoltaic Petal | Hybrid module rated at 336 W (300 W Wind + 36 Wp Solar) |

### 2. WindTree 36A (Flagship Documented Configuration)

| Parameter | Specification | Engineering Context |
| :--- | :--- | :--- |
| **Model Reference** | WindTree 36A | Complete turnkey architectural tree system |
| **Aeroleaf Quantity** | 36 Aeroleaf Units | 6 branches (Branches A through F, 6 leaves each) |
| **Installed Capacity** | 10,800 W (10.8 kW) | 36 × 300 W theoretical peak rating |
| **Nominal System Power** | 5,868 W (5.868 kW) | Continuous nominal working threshold |
| **Total Height** | 9.8 m (32 ft) | Biomimetic steel trunk & sculptural branches |
| **Total Diameter** | 8.0 m (26.3 ft) | Broad canopy wind interception envelope |
| **Aeroleaf Unit Height** | 0.97 m (3.2 ft) | Individual modular rotor height |
| **Total Structural Weight** | 3,590 kg | High-tensile C5 marine-grade powder-coated steel |
| **Installation Time** | 2 – 4 Days | Crane-assisted modular sectional assembly |
| **Min. Building Clearance** | 6.0 m (19.7 ft) | Recommended aerodynamic boundary separation |
| **Max. Cabinet Distance** | 20.0 m (66 ft) | Low-loss DC/AC umbilical run to electrical hub |
| **Grid Inverter Output** | 110 V / 230 V / 400 V | Single or Three-Phase Grid-Tied / Microgrid |

### 3. Product Range & Modular Scalability

| Model | Aeroleafs | Peak Installed Capacity | Nominal Power | Height | Footprint Base | Typical Application |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Single Aeroleaf®** | 1 | 300 W | ~160 W | 1.2 m | 0.2 m² | Rooftop railings, balustrades, telecom masts |
| **Branch Cluster (3x)** | 3 | 900 W | ~490 W | 2.1 m | 0.6 m² | Wall mounts, boutique commercial balconies |
| **Wind Bush 12** | 12 | 3.6 – 4.2 kW | ~1.95 kW | 3.2 m | 1.5 m² | Rooftop terraces, residential gardens |
| **Wind Tree 18** | 18 | 5.4 kW | ~2.93 kW | 5.6 m | 2.2 m² | Boutique hospitality, hotel courtyards |
| **Wind Tree 36A** | 36 | 10.8 kW | 5.868 kW | 9.8 m | 3.8 m² | Civic squares, corporate HQs, city parks |
| **Custom Arrays** | Up to 36+ kW | Configurable | Scalable | Modular | Variable | Multi-tree urban clean power microgrids |

---

## Verified vs. Marketing Claims

> [!IMPORTANT]
> **Engineering Rigor & Transparent Metrics**
> - **Power vs. Energy**: 10.8 kW is the *installed peak capacity* of a 36A tree. Actual annual kWh yield depends on the site wind velocity distribution, roughness class, and installation height.
> - **Cut-in vs. Rated**: Aeroleafs begin spinning at 2.5 m/s (9 km/h). Full rated power is reached at nominal higher speeds (10–12 m/s).
> - **Acoustics**: Aeroleafs utilize direct-drive PMGs and no gearboxes/belts to deliver whisper-quiet operation suited for urban plazas without mechanical gear whine.
> - **Maintenance**: Low-maintenance direct-drive architecture minimizes moving friction parts. Regular scheduled inspections ensure optimal longevity.

---

## SCADA Digital Twin Cockpit (/dashboard)

- **Route-Separated Subsystems**:
  - **/dashboard** (Overview): Executive cockpit with generation KPIs, system status, and live event audit trail.
  - **/dashboard/matrix** (36-Ch Matrix): 36-Aeroleaf telemetry grid, branch filters (A–F), and per-leaf test spin diagnostics.
  - **/dashboard/microgrid** (Microgrid): 15 kWh BESS visual battery level, dual 22 kW EV chargers, and live animated power dispatch flow.
  - **/dashboard/weather** (Atmospheric): Live anemometer scale (2.5 m/s cut-in, 43 m/s continuous, 50 m/s storm), 360° omnidirectional compass, and acoustic monitors.
  - **/dashboard/analytics** (Analytics): 7-day daily yield bar charts, lifetime MWh yield, and financial savings.
  - **/dashboard/controls** (Controls): Master eddy-current storm brake governor and automated self-diagnostics runner.
- **1-Click Demo Authentication**: Instant operational sign-in with preset demo SCADA credentials.
- **Official ESG Certified Clean Energy Certificate**: PDF-ready verifiable clean generation certificate export with cryptographic hashes and QR validation.

---

## Tech Stack

- **Framework**: React 18 + Vite 7
- **Routing**: React Router 6 (Nested route architecture with real-time state outlet context)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Outfit, Plus Jakarta Sans, Inter, JetBrains Mono)
- **Styling**: Modern CSS Design System & Tokenized CSS Variables

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
```bash
# 1. Clone repository
git clone https://github.com/ajaykukadiya06/energy.git

# 2. Navigate to project directory
cd energy

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## License

MIT License © 2026 AERIS WIND TREE ENERGY INC.
