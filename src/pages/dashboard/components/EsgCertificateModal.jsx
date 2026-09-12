import { ShieldCheck, Download } from "lucide-react";

export function EsgCertificateModal({ onClose }) {
  return (
    <div className="esg-modal-backdrop" onClick={onClose}>
      <div className="esg-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="esg-modal-header">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ShieldCheck size={24} color="#2d6a4d" />
            <div>
              <h3 style={{ margin: 0, fontSize: "1.25rem" }}>Certified ESG Clean Power Certificate</h3>
              <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>
                Certificate ID: #ESG-2026-WT042-DE
              </span>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="esg-cert-body">
          <div className="cert-watermark-stamp">VERIFIED CLEAN ENERGY</div>
          <p>
            This official document certifies that the <strong>Aeris Wind Tree Installation #WT-042</strong>{" "}
            located at Munich Innovation Campus, Germany has generated <strong>1,284 kWh</strong> of
            clean, zero-emission renewable electricity this month, avoiding{" "}
            <strong>539.3 kg of CO₂</strong> emissions.
          </p>

          <div className="cert-metrics-table">
            <div>
              <span>Total Generation:</span>
              <strong>1,284 kWh</strong>
            </div>
            <div>
              <span>Carbon Credits Earned:</span>
              <strong>0.54 Metric Tons CO₂</strong>
            </div>
            <div>
              <span>Grid Interconnection:</span>
              <strong>IEEE 1547 / UL 1741</strong>
            </div>
            <div>
              <span>Verification Timestamp:</span>
              <strong>{new Date().toLocaleDateString()} · 100% Wind</strong>
            </div>
          </div>
        </div>

        <div className="esg-modal-footer">
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              window.print();
            }}
          >
            <Download size={14} style={{ marginRight: 6 }} /> Print / Save Stamped PDF
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
