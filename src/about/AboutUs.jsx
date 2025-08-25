import React from "react";
import "../styles/AboutUs.css";
import aboutBg from "../images/about.png"; // Hero background
import scrollImg from "../images/Diploma certificate obliquely.jpg"; // Right-side image in top row
import centerIcon from "../images/mortarboard 4.png"; // Center icon in bottom row
import scholarIcon from "../images/graduating-student 1.png";
import phdIcon from "../images/contract 2.png";
import mentorshipIcon from "../images/consultant 2.png";
import WhySodhSutra from "../Home/WhySodhSutra";
import PhDConsultation from "../Home/PhDConsultation";

function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="overlay">
          <p className="small-title">Meet ShodhSutra</p>
          <h1>
            About SodhSutra – Your Gateway to
            <br /> Doctoral Excellence
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="explore-btn">Explore More</button>
        </div>
      </section>

      {/* About Details Section */}
      <section className="about-container">
        {/* Top Row */}
        <div className="about-top">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="about-image">
            <img src={scrollImg} alt="Scroll" />
           
          </div>
          
        </div>

        {/* Bottom Row */}
        <div className="about-bottom">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="center-icon">
            <img src={centerIcon} alt="Center Icon" />
            <div className="divider"></div>
          </div>

          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </section>
        <section className="what-we-do">
      <h2 className="section-title">What We Do</h2>
      <p className="section-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="what-we-do-content">
        <div className="what-we-do-item">
          <img src={scholarIcon} alt="Scholar Icon" className="item-icon" />
          <h3>Connect Scholars with Institutions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="vertical-line"></div>

        <div className="what-we-do-item">
          <img src={phdIcon} alt="PhD Icon" className="item-icon" />
          <h3>Simplify the PhD Admission Process</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="vertical-line"></div>

        <div className="what-we-do-item">
          <img src={mentorshipIcon} alt="Mentorship Icon" className="item-icon" />
          <h3>Provide Resources & Mentorship</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
    <WhySodhSutra />
    <PhDConsultation />
    </>
  );
}

export default AboutUs;
