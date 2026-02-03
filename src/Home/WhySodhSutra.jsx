import React from "react";
import "../styles/WhySodhSutra.css";
import gradImg from "../images/elips.jpg";

function WhySodhSutra() {
  return (
    <section className="why-section">
      {/* Left Content */}
      <div className="why-content">
        <h2>Why ShodhSutra?</h2>
        <p className="why-intro">
          Whether you're a working professional, an academician, or a passionate learner, 
          we provide the roadmap, resources, and recognition to help you earn your doctoral 
          degree with dignity and discipline.
        </p>

        <div className="why-features">
          <div className="feature-item">
            <span className="icon">💡</span>
            <div>
              <h4>PhD Admission Guidance</h4>
              <p>
                Personalized support for admission into UGC-recognized Indian universities 
                and reputed international institutions.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">✅</span>
            <div>
              <h4>Research Proposal & Synopsis Development</h4>
              <p>
                Expert assistance in crafting research-worthy and university-compliant proposals.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">📊</span>
            <div>
              <h4>Supervisor & Guide Allocation</h4>
              <p>
                Access to a vast network of experienced research guides across disciplines.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">🎓</span>
            <div>
              <h4>University Tie-ups & Collaborations</h4>
              <p>
                Seamless admissions through our academic partnerships with various universities.
              </p>
            </div>
          </div>
          
          <div className="feature-item">
            <span className="icon">🎓</span>
            <div>
              <h4>Mentorship & Progress Monitoring</h4>
              <p>
                Continuous guidance from registration to thesis submission.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="why-image">
        <div className="blob-wrapper">
          <img src={gradImg} alt="Graduation Celebration" />
          <div className="border-yellow-1"></div>
          <div className="border-yellow-2"></div>
        </div>
      </div>
    </section>
  );
}

export default WhySodhSutra;
