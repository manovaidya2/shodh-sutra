import React from "react";
import "../styles/WhySodhSutra.css";
import gradImg from "../images/elips.jpg";

function WhySodhSutra() {
  return (
    <section className="why-section">
      {/* Left Content */}
      <div className="why-content">
        <h2>Why SodhSutra?</h2>
        <p className="why-intro">
          Whether you're a workingprofessional, academician, or apassionate learner, we provide theroadmap, resources, and recognitionto help you earn your doctoraldegree with dignity and discipline
        </p>

        <div className="why-features">
          <div className="feature-item">
            <span className="icon">💡</span>
            <div>
              <h4>PhD Admission Guidance</h4>
              <p>
               Personalized support for
admission into UGC-recognized
Indian universities and reputed
international institutions
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">✅</span>
            <div>
              <h4>PhD Admission GuidanceResearch Proposal & SynopsisDevelopment:</h4>
              <p>
               Expert help in crafting research-worthy and university-compliantproposals.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">📊</span>
            <div>
              <h4>Supervisor & GuideAllocation:</h4>
              <p>
               Access to a vast network ofexperienced research guidesacross disciplines.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">🎓</span>
            <div>
              <h4>University Tie-ups &Collaborations:</h4>
              <p>
                Seamless admissions throughour academic partnerships withvarious universities
              </p>
            </div>
          </div>
          
          <div className="feature-item">
            <span className="icon">🎓</span>
            <div>
              <h4>Mentorship & ProgressMonitoring:</h4>
              <p>
               Continuous guidance fromregistration to thesissubmission.
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
