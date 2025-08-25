import React from "react";
import "../styles/PhDCheck.css";
import gradImage from "../images/phdcheckimg.jpg";

function PhDCheck() {
  return (
    <section className="phd-section">
      <div className="phd-container">
        <h2 className="phd-heading">Is a PhD Right for You?</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="phd-content">
          <div className="phd-image-wrapper">
            <div className="phd-border-line line1"></div>
            <div className="phd-border-line line2"></div>
            <img src={gradImage} alt="Graduated Student" className="phd-image" />
          </div>

          <div className="phd-text">
            <p>✅ You have a strong interest in deep research.</p>
            <p>✅ You enjoy solving complex problems.</p>
            <p>✅ You aim to work in academia or high-level R&D.</p>
            <p>✅ You are patient, disciplined, and self-motivated.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhDCheck;
