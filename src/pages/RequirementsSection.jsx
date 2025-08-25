import React from "react";
import { FaCheckCircle, FaUserTie, FaFileAlt, FaClipboardList, FaBell } from "react-icons/fa";
import "../styles/RequirementsSection.css";

function RequirementsSection() {
  return (
    <section className="requirements-section">
      <div className="requirements-container">
        
        {/* What You'll Need to Apply */}
        <h2 className="req-title">What You’ll Need to Apply</h2>
        <p className="req-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="req-list">
          <span><FaCheckCircle className="check-icon"/> Statement of Purpose (SOP)</span>
          <span><FaCheckCircle className="check-icon"/> Research Proposal</span>
          <span><FaCheckCircle className="check-icon"/> LORs (2–3)</span>
          <span><FaCheckCircle className="check-icon"/> UG/PG Academic Transcripts</span>
          <span><FaCheckCircle className="check-icon"/> Entrance Exam Scores (If applicable)</span>
          <span><FaCheckCircle className="check-icon"/> Resume/CV</span>
          <span><FaCheckCircle className="check-icon"/> Identity Proof (Government ID / Passport)</span>
        </div>

        {/* Eligibility Criteria */}
        <h2 className="req-title">Eligibility Criteria (Quick Reference)</h2>
        <p className="req-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="eligibility-grid">
          <div className="eligibility-card">
            Master’s degree (with minimum % or CGPA)
          </div>
          <div className="eligibility-card">
            Qualifying entrance test (e.g., UGC-NET, GATE, CSIR, or university-specific)
          </div>
          <div className="eligibility-card">
            Research Proposal aligned with department goals
          </div>
        </div>

        {/* We're With You */}
        <h2 className="req-title">We’re With You at Every Step</h2>
        <p className="req-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
       <div className="support-grid">
  <div className="support-card">
    <FaUserTie className="support-icon" />
    <div>
      <h3>Personalized guidance</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
  </div>
  <div className="support-card">
    <FaFileAlt className="support-icon" />
    <div>
      <h3>SOP & Proposal review</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
  </div>
  <div className="support-card">
    <FaClipboardList className="support-icon" />
    <div>
      <h3>Application tracking dashboard</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
  </div>
  <div className="support-card">
    <FaBell className="support-icon" />
    <div>
      <h3>Notifications & deadline reminders</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default RequirementsSection;
