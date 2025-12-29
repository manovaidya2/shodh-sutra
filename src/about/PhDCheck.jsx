import React from "react";
import "../styles/PhDCheck.css";
import gradImage from "../images/phdcheckimg.jpg";

function PhDCheck() {
  return (
    <section className="phd-section">
      <div className="phd-container">
       <h2 className="phd-heading">Is a PhD Right for You?</h2>
<p>
  Pursuing a PhD is a rewarding journey, but it requires dedication, curiosity, 
  and a passion for research. If you enjoy exploring new ideas, solving complex 
  problems, and contributing original knowledge, a PhD could be the right path for you.
</p>
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
