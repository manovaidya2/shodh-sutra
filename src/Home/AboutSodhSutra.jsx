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
       
          <span>KNOWLADGE MEET INNOVATION</span>
        </div>
        <h2>About SodhSutra</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <button className="about-btn">View All Programs</button>
      </div>
    </section>
  );
};

export default AboutSodhSutra;
