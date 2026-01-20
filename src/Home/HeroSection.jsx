import React, { useState } from "react";
import "../styles/Home.css";
import { FaSearch, FaTimes } from "react-icons/fa";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(null);

  const closePopup = () => setActiveTab(null);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="highlight">1000+ Students Successfully Enrolled in PhD Programs</p>

          <h1>
            Advance Knowledge. Lead Innovation.
            <br /> Begin Your PhD with <span>SodhSutra.</span>
          </h1>

          <p className="desc">
            SodhSutra empowers aspiring researchers with expert guidance,
            structured mentorship, and end-to-end support throughout their PhD
            journey.
          </p>

          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search PhD Programs or Disciplines..." />
          </div>

          {/* Buttons */}
          <div className="phd-buttons">
            <button onClick={() => setActiveTab("honorary")}>
              Honorary Ph.D
            </button>
            <button onClick={() => setActiveTab("phd")}>
              Ph.D
            </button>
          </div>
        </div>
      </section>

      {/* ================= POPUP ================= */}

      {activeTab && (
        <div className="popup-overlay">
          <div className="popup-box">
<button
  className="popup-close"
  onClick={closePopup}
  aria-label="Close Popup"
>
  <FaTimes />
</button>



            {activeTab === "honorary" && (
              <>
                <h2>Honorary Ph.D (Honoris Causa)</h2>

                <h3>Introduction</h3>
                <p>
                  The Honorary Doctorate is conferred upon individuals of
                  outstanding merit who have contributed significantly in
                  education, research, public service, arts, science, business,
                  or social transformation.
                </p>

                <h3>Areas of Recognition</h3>
                <ul>
                  <li>Education & Research</li>
                  <li>Literature, Arts & Culture</li>
                  <li>Science & Innovation</li>
                  <li>Public Administration & Governance</li>
                  <li>Business & Entrepreneurship</li>
                  <li>Social Work & Philanthropy</li>
                  <li>Human Rights & Justice</li>
                  <li>Environment & Sustainability</li>
                </ul>

                <h3>Eligibility Criteria</h3>
                <ul>
                  <li>Sustained impactful contribution</li>
                  <li>Clean legal & ethical record</li>
                  <li>Posthumous award only with approval</li>
                </ul>
              </>
            )}

            {activeTab === "phd" && (
              <>
                <h2>Ph.D Program</h2>

                <p>
                  Ph.D is one of the most respected degrees worldwide. IPS
                  provides Ph.D programs in Humanities, Commerce, Science,
                  Management & Computer Science.
                </p>

                <h3>Admission Procedure</h3>
                <ul>
                  <li>Online Pre-registration</li>
                  <li>Entrance Test & Interview</li>
                  <li>Course Work & Exams</li>
                  <li>Synopsis & Topic Approval</li>
                  <li>Thesis Submission & Viva</li>
                  <li>Degree Awarded</li>
                </ul>

                <h3>Eligibility</h3>
                <ul>
                  <li>Minimum 55% in Post Graduation</li>
                  <li>Research Proposal Required</li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
