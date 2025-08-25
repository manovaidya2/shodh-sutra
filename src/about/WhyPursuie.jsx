import React from "react";
import "../styles/WhyPursuie.css";
import aboutBg from "../images/about.png";
import scrollImg from "../images/graduated student with diploma.jpg";
import iconAcademic from "../images/graduation 1.png";
import iconCareer from "../images/career-choice 1.png";
import iconIntellectual from "../images/light-bulb 1.png";
import iconGlobal from "../images/globe 1.png";
import PhDCheck from "./PhDCheck";
import CareerPaths from "./CareerPaths";
import Testimonial from "../Home/Testimonial";
import PhDConsultation from "../Home/PhDConsultation";


function WhyPursuie() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="wp-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="wp-overlay">
          <p className="wp-small-title">Meet ShodhSutra</p>
          <h1>
            About SodhSutra – Your Gateway to
            <br /> Doctoral Excellence
          </h1>
          <p className="wp-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="wp-explore-btn">Explore More</button>
        </div>
      </section>

      {/* About Section */}
      <section className="wp-about-container">
        <div className="wp-about-top">
          <div className="wp-about-text">
            <h2>PhD: A Journey Beyond Degrees</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            
          </div>
          <div className="wp-about-image">
            <img src={scrollImg} alt="Scroll" />
          </div>
        </div>
      </section>

      {/* PhD Reasons Section */}
      <section className="wp-phd-reasons">
        <div className="wp-container">
          <h2 className="wp-section-title">Top 4 Reasons to Pursue a PhD</h2>
          <p className="wp-section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="wp-reasons-grid">
            <div className="wp-reason-item">
              <img
                src={iconAcademic}
                alt="Academic Growth"
                className="wp-reason-icon"
              />
              <div>
                <h3>Academic Growth</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="wp-reason-item">
              <img
                src={iconCareer}
                alt="Career Opportunities"
                className="wp-reason-icon"
              />
              <div>
                <h3>Career Opportunities</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="wp-reason-item">
              <img
                src={iconIntellectual}
                alt="Intellectual Independence"
                className="wp-reason-icon"
              />
              <div>
                <h3>Intellectual Independence</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="wp-reason-item">
              <img
                src={iconGlobal}
                alt="Global Recognition"
                className="wp-reason-icon"
              />
              <div>
                <h3>Global Recognition</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PhDCheck />
      <CareerPaths />
      <Testimonial />
      <PhDConsultation />
    </>
  );
}

export default WhyPursuie;
