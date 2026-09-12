import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Search, CheckCircle2, RefreshCw } from "lucide-react";

export function MatrixView() {
  const context = useOutletContext();
  const {
    leaves,
    setLeaves,
    selectedLeaf,
    selectedLeafId,
    setSelectedLeafId,
    stormBrakeActive,
  } = context;

  const [branchFilter, setBranchFilter] = useState("ALL"); // ALL, A, B, C, D, E, F
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered leaves for the Matrix view
  const filteredLeaves = leaves.filter((leaf) => {
    const matchesBranch = branchFilter === "ALL" || leaf.branchLetter === branchFilter;
    const matchesSearch =
      searchQuery.trim() === "" ||
      leaf.id.toString().includes(searchQuery.trim()) ||
      leaf.branch.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesBranch && matchesSearch;
  });

  return (
    <div className="tab-pane-fade">
      <div className="matrix-toolbar-card">
        <div className="matrix-filter-group">
          <span className="filter-label">Filter Branch:</span>
          {["ALL", "A", "B", "C", "D", "E", "F"].map((branch) => (
            <button
              key={branch}
              type="button"
              className={`branch-pill-btn ${branchFilter === branch ? "active" : ""}`}
              onClick={() => setBranchFilter(branch)}
            >
              {branch === "ALL" ? "All 36 Units" : `Branch ${branch}`}
            </button>
          ))}
        </div>

        <div className="matrix-search-box">
          <Search size={14} color="#688373" />
          <input
            type="text"
            placeholder="Search by Leaf ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="scada-twin-layout" style={{ marginTop: 20 }}>
        {/* 36 Leaves Expanded Grid */}
        <div className="aeroleaf-matrix-grid full-grid">
          {filteredLeaves.map((leaf) => {
            const isSelected = leaf.id === selectedLeafId;
            return (
              <button
                key={leaf.id}
                type="button"
                className={`leaf-matrix-node expanded ${isSelected ? "selected" : ""} ${
                  stormBrakeActive ? "braked" : ""
                }`}
                onClick={() => setSelectedLeafId(leaf.id)}
              >
                <div className="node-head-row">
                  <span className="node-num">#{leaf.id}</span>
                  <span className="node-branch-letter">{leaf.branchLetter}</span>
                </div>
                <span className="node-rpm">
                  {leaf.rpm} <small>RPM</small>
                </span>
                <span className="node-watts">{leaf.powerWatts} W</span>
                <div className="node-temp-tag">{leaf.tempC}°C</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Leaf Inspector */}
        <div className="selected-leaf-card sticky-card">
          <div className="leaf-card-header">
            <div>
              <span className="leaf-branch-tag">{selectedLeaf.branch}</span>
              <h3>Aeroleaf® Unit #{selectedLeaf.id}</h3>
            </div>
            <img
              src="/images/aeroleaf_micro_generator.jpg"
              alt="Aeroleaf turbine unit"
              className="leaf-thumbnail-img"
            />
          </div>

          <div className="leaf-diagnostics-list">
            <div className="diag-item">
              <span>Rotor Velocity</span>
              <strong>{selectedLeaf.rpm} RPM <small style={{ color: "var(--muted)" }}>(Max 850)</small></strong>
            </div>
            <div className="diag-item">
              <span>Instant Power Output</span>
              <strong>{selectedLeaf.powerWatts} Watts</strong>
            </div>
            <div className="diag-item">
              <span>Terminal Voltage</span>
              <strong>48.2 V DC (Rectified)</strong>
            </div>
            <div className="diag-item">
              <span>Electronic Regulation</span>
              <strong>10 ms Micro-Loop Active</strong>
            </div>
            <div className="diag-item">
              <span>Bearing Temperature</span>
              <strong>{selectedLeaf.tempC} °C</strong>
            </div>
            <div className="diag-item">
              <span>Vibration Acceleration</span>
              <strong>{selectedLeaf.vibrationMm} mm/s (Nominal)</strong>
            </div>
            <div className="diag-item">
              <span>Generator Architecture</span>
              <strong>Direct-Drive PMG (No Gears)</strong>
            </div>
          </div>

          <div className="leaf-action-box">
            <button
              type="button"
              className="leaf-test-spin-btn"
              onClick={() => {
                setLeaves((prev) =>
                  prev.map((l) =>
                    l.id === selectedLeaf.id ? { ...l, rpm: l.rpm + 40, powerWatts: l.powerWatts + 50 } : l
                  )
                );
              }}
            >
              <RefreshCw size={13} style={{ marginRight: 6 }} /> Run Diagnostic Test Spin
            </button>
          </div>

          <div className="leaf-status-footer">
            <CheckCircle2 size={16} color="#2d6a4d" />
            <span>Synchronous module responding normally</span>
          </div>
        </div>
      </div>
    </div>
  );
}
