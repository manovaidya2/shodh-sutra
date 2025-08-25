import React from "react";
import "../styles/Process.css";
import aboutBg from "../images/discipline.jpg";
import scrollImg from "../images/graduating cap and diploma certificate.jpg";
import "../styles/PhdDisciplinesSection.css";
import Testimonial from "../Home/Testimonial";


import engIcon from "../images/Discipline/engineering (1) 1.png";
import bioIcon from "../images/Discipline/chromosome 1.png";
import commerceIcon from "../images/Discipline/clock 1.png";
import lawIcon from "../images/Discipline/compliant 1.png";
import socialIcon from "../images/Discipline/social-science 1.png";
import scienceIcon from "../images/Discipline/sketch 1.png";
import graduateImg from "../images/Discipline/graduated student showing her diploma.png";
import PhDConsultation from "../Home/PhDConsultation";

function Discipline() {
    const points = [
    {
      icon: "fa-solid fa-book-open-reader",
      title: "Reflect on Your Academic Background",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "fa-solid fa-bullseye",
      title: "Align with Your Long-Term Goals",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "fa-solid fa-flask",
      title: "Evaluate Research Trends & Relevance",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "fa-solid fa-user-graduate",
      title: "Seek Mentorship & Guidance",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  
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

 const disciplines = [
    { title: "Engineering & Technology", icon: engIcon },
    { title: "Life Sciences & Biotechnology", icon: bioIcon },
    { title: "Commerce & Management", icon: commerceIcon },
    { title: "Law & Public Policy", icon: lawIcon },
    { title: "Social Sciences & Humanities", icon: socialIcon },
    { title: "Commerce & Management", icon: commerceIcon },
    { title: "Natural & Physical Sciences", icon: scienceIcon },
    { title: "Social Sciences & Humanities", icon: socialIcon },
    { title: "Commerce & Management", icon: commerceIcon },
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
            Academic Disciplines That Drive 
            <br /> Innovation – Choose Your PhD Path
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
      
       <section className="disciplines-section">
      <div className="disciplines-container">
        <h2 className="disciplines-title">Explore PhD Disciplines</h2>
        <p className="disciplines-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="disciplines-grid">
          {disciplines.map((item, index) => (
            <div key={index} className="discipline-card">
              <img src={item.icon} alt={item.title} className="discipline-icon" />
              <h3>{item.title}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="choose-discipline">
      <div className="choose-container">
        {/* Left Content */}
        <div className="choose-left">
          <h2 className="choose-title">How to Choose Discipline</h2>
          <p className="choose-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="choose-list">
            {points.map((item, index) => (
              <div key={index} className="choose-item">
                <i className={`choose-icon ${item.icon}`}></i>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="choose-right">
          <img src={graduateImg} alt="Graduate" />
        </div>
      </div>
    </section>
    <Testimonial />
    <PhDConsultation />
   
    </>
  );
}

export default Discipline;
