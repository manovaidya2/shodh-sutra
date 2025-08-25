import React from "react";
import "../styles/Process.css";
import aboutBg from "../images/process.jpg";
import scrollImg from "../images/graduating cap and diploma certificate.jpg";
import RequirementsSection from "./RequirementsSection";
import PhDConsultation from "../Home/PhDConsultation";

function Process() {
    const steps = [
  {
    step: "STEP – 01",
    title: "Register on SodhSutra",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    step: "STEP – 02",
    title: "Choose Your Research Discipline",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    step: "STEP – 03",
    title: "Prepare Required Documents",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    step: "STEP – 04",
    title: "Submit Application",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    step: "STEP – 05",
    title: "Appear for Entrance / Interview",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    step: "STEP – 06",
    title: "Receive Admission Offer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];
  return (
    <>
      {/* Hero Section */}
      <section
        className="process-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="process-overlay">
          <p className="process-small-title">Meet ShodhSutra</p>
          <h1>
           PhD Admission Process – Step-by-Step 
            <br /> Guide to Your Research Journey
          </h1>
          <p className="process-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="process-explore-btn">Explore More</button>
        </div>
      </section>

      {/* About Section */}
      <section className="process-about-container">
        <div className="process-about-top">
          <div className="process-about-text">
            <h2>Simplifying Your PhD Admission Journey</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>
          <div className="process-about-image">
            <img src={scrollImg} alt="Scroll" />
          </div>
        </div>
      </section>
      <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Admission Process Timeline (6-Step Flow)</h2>
        <p className="process-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="process-grid">
          {steps.map((item, index) => (
            <div key={index} className="process-card">
              <span className="process-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <RequirementsSection />
    <PhDConsultation />
    </>
  );
}

export default Process;
