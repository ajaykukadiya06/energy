import { Navigate, Route, Routes } from "react-router-dom";
import BenefitsPage from "./pages/benefits/page";
import ContactPage from "./pages/contact/page";
import OrderPage from "./pages/order/page";
import ProductPage from "./pages/product/page";
import ProjectsPage from "./pages/projects/page";
import HomePage from "./pages/page";
import DashboardPage from "./pages/dashboard/page";
import { OverviewView } from "./pages/dashboard/views/OverviewView";
import { MatrixView } from "./pages/dashboard/views/MatrixView";
import { MicrogridView } from "./pages/dashboard/views/MicrogridView";
import { WeatherView } from "./pages/dashboard/views/WeatherView";
import { AnalyticsView } from "./pages/dashboard/views/AnalyticsView";
import { ControlsView } from "./pages/dashboard/views/ControlsView";
import { RoutingScrollReset } from "./components/RoutingScrollReset";

export default function App() {
  return (
    <>
      <RoutingScrollReset />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Modular Dashboard Route Tree */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<OverviewView />} />
          <Route path="matrix" element={<MatrixView />} />
          <Route path="microgrid" element={<MicrogridView />} />
          <Route path="weather" element={<WeatherView />} />
          <Route path="analytics" element={<AnalyticsView />} />
          <Route path="controls" element={<ControlsView />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
