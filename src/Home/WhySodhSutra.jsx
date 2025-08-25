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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>

        <div className="why-features">
          <div className="feature-item">
            <span className="icon">💡</span>
            <div>
              <h4>Simplified Application Workflow</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">✅</span>
            <div>
              <h4>Verified Institution Listings</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">📊</span>
            <div>
              <h4>Track Application Progress</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">🎓</span>
            <div>
              <h4>Mentorship & Research Assistance</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
