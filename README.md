# AERIS | Biomimetic Wind Tree Clean Energy Platform & SCADA Digital Twin

[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind / Custom CSS](https://img.shields.io/badge/CSS-Design%20Tokens-38B2AC?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-4ab97e?style=flat)]()

**AERIS** is a modern, biomimetic wind energy web platform and real-time SCADA Digital Twin cockpit engineered for silent, vertical-axis micro-turbine arrays in urban landscapes, smart cities, and corporate campuses.

---

## Key Features

### 1. Biomimetic Urban Wind Platform
- **Sculptural Wind Tree Architecture**: Flagship 36-Aeroleaf & modular 18/12-leaf micro-generation systems designed for zero acoustic impact (< 28 dB).
- **Interactive 3D / Architectural Customizer**: Real-time finish and modular branch selection with instant parameter calculations.
- **CFD Yield Calculator**: Micro-climate wind speed, height, and orientation yield estimators.
- **Turnkey Procurement & Configurator**: Multi-step configuration with ITC 30% tax credit projections and PDF proposal generation.

### 2. SCADA Digital Twin Cockpit (/dashboard)
- **Route-Separated Subsystems**:
  - **/dashboard** (Overview): Executive cockpit with generation KPIs, system status, and live event audit trail.
  - **/dashboard/matrix** (36-Ch Matrix): Aeroleaf micro-turbine telemetry grid, branch filters (A–F), and per-leaf test spin diagnostics.
  - **/dashboard/microgrid** (Microgrid): 15 kWh BESS visual battery level, dual 22 kW EV chargers, and live animated power dispatch flow.
  - **/dashboard/weather** (Atmospheric): Live anemometer scale, cut-in/nominal pins, 360° omnidirectional compass, and acoustic sensors.
  - **/dashboard/analytics** (Analytics): 7-day daily yield bar charts, lifetime MWh yield, and financial savings.
  - **/dashboard/controls** (Controls): Master eddy-current storm brake governor and automated self-diagnostics runner.
- **1-Click Demo Authentication**: Instant operational sign-in with preset demo SCADA credentials.
- **Official ESG Certified Clean Energy Certificate**: PDF-ready verifiable clean generation certificate export with cryptographic hashes and QR validation.

### 3. Typography & UI Design System
- **Typography Scale**: Built on Outfit (Display Headings), Plus Jakarta Sans (UI & Body), and JetBrains Mono (Tabular numeric telemetry).
- **Custom Industrial Scrollbar**: Sleek emerald-glow scrollbars with cross-browser Firefox and WebKit support.

---

## Tech Stack

- **Framework**: React 18 + Vite
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
`ash
# 1. Clone repository
git clone https://github.com/ajaykukadiya06/energy.git

# 2. Navigate to project directory
cd energy

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
`

### Production Build
`ash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
`

---

## Project Structure

`
├── public/                 # Static assets & architectural imagery
├── src/
│   ├── components/         # Landing & shared components (Header, Footer, Explorer, Customizer, Calculator)
│   ├── pages/
│   │   ├── dashboard/      # SCADA Digital Twin
│   │   │   ├── components/ # Sidebar, Topbar, Login, ESG Modal
│   │   │   ├── views/      # Sub-route views (Overview, Matrix, Microgrid, Weather, Analytics, Controls)
│   │   │   └── page.jsx    # Master simulation layout
│   │   ├── product/        # Product & engineering pages
│   │   └── ...
│   ├── routes/             # Route definitions and URL maps
│   ├── styles/             # Global CSS design tokens & animations
│   ├── App.jsx             # Route hierarchy
│   └── main.jsx            # Entry point
├── index.html              # HTML shell & web fonts
├── package.json
└── vite.config.js
`

---

## License

MIT License © 2026 AERIS WIND TREE ENERGY INC.
