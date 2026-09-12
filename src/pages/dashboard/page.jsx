import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { DashboardSidebar } from "./components/DashboardSidebar";
import { DashboardTopbar } from "./components/DashboardTopbar";
import { DashboardLogin } from "./components/DashboardLogin";
import { EsgCertificateModal } from "./components/EsgCertificateModal";

const DEMO_EMAIL = "demo@aeris.com";
const DEMO_PASSWORD = "aeris123";
const DASHBOARD_SESSION_KEY = "aeris-demo-dashboard-session";

// Generate initial state for 36 Aeroleaf micro-turbines across 6 branches (A to F)
const INITIAL_LEAVES = Array.from({ length: 36 }, (_, i) => {
  const branchIdx = Math.floor(i / 6);
  const branchLetter = String.fromCharCode(65 + branchIdx); // Branch A to F
  return {
    id: i + 1,
    branch: `Branch ${branchLetter}`,
    branchLetter,
    rpm: Math.floor(210 + Math.random() * 45),
    powerWatts: Math.floor(240 + Math.random() * 55),
    tempC: (22.5 + Math.random() * 3.5).toFixed(1),
    vibrationMm: (0.12 + Math.random() * 0.08).toFixed(2),
    status: "optimal",
    efficiency: (97.5 + Math.random() * 2).toFixed(1),
  };
});

export default function DashboardPage() {
  const [authenticated, setAuthenticated] = useState(
    () => window.sessionStorage.getItem(DASHBOARD_SESSION_KEY) === "authenticated"
  );
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [windSpeed, setWindSpeed] = useState(5.8);
  const [batteryCharge, setBatteryCharge] = useState(84);
  const [leaves, setLeaves] = useState(INITIAL_LEAVES);
  const [selectedLeafId, setSelectedLeafId] = useState(1);
  const [stormBrakeActive, setStormBrakeActive] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [isSimulatingLive, setIsSimulatingLive] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Live real-time telemetry fluctuations
  useEffect(() => {
    if (!authenticated || !isSimulatingLive) return undefined;

    const interval = window.setInterval(() => {
      setLastUpdated(new Date());

      // Fluctuating wind speed (4.5 to 7.8 m/s)
      const newWind = parseFloat((5.5 + Math.sin(Date.now() / 4000) * 1.5 + (Math.random() - 0.5) * 0.4).toFixed(1));
      setWindSpeed(newWind);

      // Battery slow charge cycle
      setBatteryCharge((prev) => {
        const next = prev + (Math.random() > 0.6 ? 0.1 : -0.05);
        return parseFloat(Math.min(99.5, Math.max(20, next)).toFixed(1));
      });

      // Update leaves based on wind speed & brake factor
      const brakeFactor = stormBrakeActive ? 0.05 : 1;
      setLeaves((prev) =>
        prev.map((leaf) => {
          const targetRpm = Math.round(newWind * 42 * brakeFactor + (Math.random() - 0.5) * 12);
          const targetPower = Math.round((newWind / 5.5) * 260 * brakeFactor + (Math.random() - 0.5) * 20);
          return {
            ...leaf,
            rpm: Math.max(0, targetRpm),
            powerWatts: Math.max(0, targetPower),
            vibrationMm: (0.12 + Math.random() * 0.06).toFixed(2),
            tempC: (22.5 + (targetRpm / 300) * 4 + (Math.random() - 0.5) * 0.4).toFixed(1),
          };
        })
      );
    }, 2000);

    return () => window.clearInterval(interval);
  }, [authenticated, isSimulatingLive, stormBrakeActive]);

  if (!authenticated) {
    return (
      <DashboardLogin
        onLogin={() => {
          window.sessionStorage.setItem(DASHBOARD_SESSION_KEY, "authenticated");
          setAuthenticated(true);
        }}
        demoEmail={DEMO_EMAIL}
        demoPassword={DEMO_PASSWORD}
      />
    );
  }

  function handleLogout() {
    window.sessionStorage.removeItem(DASHBOARD_SESSION_KEY);
    setAuthenticated(false);
  }

  const selectedLeaf = leaves.find((l) => l.id === selectedLeafId) || leaves[0];
  const totalLiveWatts = leaves.reduce((sum, l) => sum + l.powerWatts, 0);
  const totalLiveKw = (totalLiveWatts / 1000).toFixed(2);
  const avgRpm = Math.round(leaves.reduce((sum, l) => sum + l.rpm, 0) / leaves.length);
  const avgEfficiency = (leaves.reduce((sum, l) => sum + parseFloat(l.efficiency), 0) / leaves.length).toFixed(1);

  const contextValue = {
    leaves,
    setLeaves,
    selectedLeaf,
    selectedLeafId,
    setSelectedLeafId,
    totalLiveKw,
    avgRpm,
    avgEfficiency,
    windSpeed,
    batteryCharge,
    stormBrakeActive,
    setStormBrakeActive,
    lastUpdated,
  };

  return (
    <div className="scada-dashboard-app">
      {/* LEFT SIDEBAR NAVIGATION */}
      <DashboardSidebar
        totalLiveKw={totalLiveKw}
        stormBrakeActive={stormBrakeActive}
        onOpenCertificate={() => setShowCertificateModal(true)}
        onLogout={handleLogout}
        isOpenMobile={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* RIGHT SIDE MAIN DASHBOARD COCKPIT */}
      <div className="scada-main-container">
        <DashboardTopbar
          windSpeed={windSpeed}
          totalLiveKw={totalLiveKw}
          stormBrakeActive={stormBrakeActive}
          onToggleStormBrake={() => setStormBrakeActive(!stormBrakeActive)}
          onOpenCertificate={() => setShowCertificateModal(true)}
          onToggleMobileMenu={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />

        <main className="scada-content-body">
          <Outlet context={contextValue} />
        </main>
      </div>

      {/* ESG MODAL */}
      {showCertificateModal && (
        <EsgCertificateModal onClose={() => setShowCertificateModal(false)} />
      )}
    </div>
  );
}
