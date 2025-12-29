import React from "react";
import "../styles/AboutSodhSutra.css";
import grad1 from "../images/Rectangle 6.jpg"; // Replace with your image paths
import grad2 from "../images/Rectangle 7.jpg"; // Replace with your image paths

const AboutSodhSutra = () => {
  return (
    <section className="about-section">
      <div className="about-images">
        <img src={grad1} alt="Graduation" className="about-img about-img-left" />
        <img src={grad2} alt="Graduation Group" className="about-img about-img-right" />
      </div>

      <div className="about-content">
        <div className="about-subtitle">
       
          <span>Welcome To The World of Research Education</span>
        </div>
        <h2>About SodhSutra</h2>
        <p>
          Shodhsutra is a distinguished initiative of the <strong>EduGlobe Services FZ LLC, RAKEZ,Dubai, United Arab Emirates </strong>dedicated exclusively to empowering researchaspirants and streamlining the path to doctoral excellence. With a deep commitment to academic integrity, global research standards, andstudent-centric support, Shodhsutra acts as a guiding force for those seeking PhDadmissions across diverse disciplines and universities, both in India and abroad.
        </p>
        <button className="about-btn">View All Programs</button>
      </div>
    </section>
  );
};

export default AboutSodhSutra;
