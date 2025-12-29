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
          Gather these essential documents and materials to ensure a smooth PhD application process.
        </p>
        <div className="req-list">
          <span><FaCheckCircle className="check-icon"/> Statement of Purpose (SOP)</span>
          <span><FaCheckCircle className="check-icon"/> Research Proposal</span>
          <span><FaCheckCircle className="check-icon"/> Letters of Recommendation (2–3)</span>
          <span><FaCheckCircle className="check-icon"/> UG/PG Academic Transcripts</span>
          <span><FaCheckCircle className="check-icon"/> Entrance Exam Scores (if applicable)</span>
          <span><FaCheckCircle className="check-icon"/> Resume/CV</span>
          <span><FaCheckCircle className="check-icon"/> Identity Proof (Government ID or Passport)</span>
        </div>

        {/* Eligibility Criteria */}
        <h2 className="req-title">Eligibility Criteria (Quick Reference)</h2>
        <p className="req-subtitle">
          Make sure you meet the minimum requirements before applying for a PhD program.
        </p>
        <div className="eligibility-grid">
          <div className="eligibility-card">
            Master’s degree in a relevant field with minimum required CGPA or percentage
          </div>
          <div className="eligibility-card">
            Qualifying entrance test (e.g., UGC-NET, GATE, CSIR, or university-specific)
          </div>
          <div className="eligibility-card">
            Research proposal aligned with department or faculty research goals
          </div>
        </div>

        {/* We're With You */}
        <h2 className="req-title">We’re With You at Every Step</h2>
        <p className="req-subtitle">
          Our team supports you throughout the PhD application process to ensure you stay confident and prepared.
        </p>
        <div className="support-grid">
          <div className="support-card">
            <FaUserTie className="support-icon" />
            <div>
              <h3>Personalized Guidance</h3>
              <p>Receive one-on-one mentorship to navigate eligibility, research topics, and application steps.</p>
            </div>
          </div>
          <div className="support-card">
            <FaFileAlt className="support-icon" />
            <div>
              <h3>SOP & Proposal Review</h3>
              <p>Get expert feedback on your Statement of Purpose and Research Proposal to enhance your chances of selection.</p>
            </div>
          </div>
          <div className="support-card">
            <FaClipboardList className="support-icon" />
            <div>
              <h3>Application Tracking Dashboard</h3>
              <p>Monitor the progress of your applications in one place with our easy-to-use tracking system.</p>
            </div>
          </div>
          <div className="support-card">
            <FaBell className="support-icon" />
            <div>
              <h3>Notifications & Deadline Reminders</h3>
              <p>Stay on top of important dates, deadlines, and updates so you never miss a critical step.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default RequirementsSection;
