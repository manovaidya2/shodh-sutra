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
      desc: "Assess your previous education and expertise to determine which PhD discipline best matches your strengths and interests.",
    },
    {
      icon: "fa-solid fa-bullseye",
      title: "Align with Your Long-Term Goals",
      desc: "Choose a field that supports your career aspirations and long-term research ambitions.",
    },
    {
      icon: "fa-solid fa-flask",
      title: "Evaluate Research Trends & Relevance",
      desc: "Consider current research developments and the societal impact of the discipline to ensure meaningful work.",
    },
    {
      icon: "fa-solid fa-user-graduate",
      title: "Seek Mentorship & Guidance",
      desc: "Consult experts and faculty members to get advice on selecting a discipline and refining your research focus.",
    },
  ];

  const steps = [
    {
      step: "STEP – 01",
      title: "Register on SodhSutra",
      desc: "Create your account to access personalized guidance, resources, and track your PhD application progress."
    },
    {
      step: "STEP – 02",
      title: "Choose Your Research Discipline",
      desc: "Select the research area that aligns with your academic background and career objectives."
    },
    {
      step: "STEP – 03",
      title: "Prepare Required Documents",
      desc: "Gather transcripts, SOP, research proposal, recommendation letters, and other necessary materials for submission."
    },
    {
      step: "STEP – 04",
      title: "Submit Application",
      desc: "Submit your application along with all required documents through our platform or university portal."
    },
    {
      step: "STEP – 05",
      title: "Appear for Entrance / Interview",
      desc: "Attend the interview or entrance test with preparation guidance and mock sessions provided by ShodhSutra."
    },
    {
      step: "STEP – 06",
      title: "Receive Admission Offer",
      desc: "Upon acceptance, receive your offer and guidance on enrollment, orientation, and starting your research journey."
    },
  ];

  const disciplines = [
    { title: "Engineering & Technology", icon: engIcon },
    { title: "Life Sciences & Biotechnology", icon: bioIcon },
    { title: "Commerce & Management", icon: commerceIcon },
    { title: "Law & Public Policy", icon: lawIcon },
    { title: "Social Sciences & Humanities", icon: socialIcon },
    { title: "Natural & Physical Sciences", icon: scienceIcon },
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
            Explore the diverse PhD disciplines that match your interests and career goals. 
            ShodhSutra guides you in selecting the right path and preparing for a successful research journey.
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
              Navigating a PhD application can feel overwhelming, but we make it simple. 
              Understand eligibility, prepare documents, and plan your research goals with expert guidance.
            </p>
            <br />
            <p>
              Our platform ensures that aspiring researchers have the mentorship, tools, and support 
              to move confidently through the admission process and focus on what matters most: your research.
            </p>
          </div>
          <div className="process-about-image">
            <img src={scrollImg} alt="Scroll" />
          </div>
        </div>
      </section>
      
      {/* Disciplines Section */}
      <section className="disciplines-section">
        <div className="disciplines-container">
          <h2 className="disciplines-title">Explore PhD Disciplines</h2>
          <p className="disciplines-subtitle">
            Choose a discipline that aligns with your interests and future career aspirations.
          </p>

          <div className="disciplines-grid">
            {disciplines.map((item, index) => (
              <div key={index} className="discipline-card">
                <img src={item.icon} alt={item.title} className="discipline-icon" />
                <h3>{item.title}</h3>
                <p>
                  Pursue advanced research and make meaningful contributions in your chosen field with expert mentorship and resources.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Discipline */}
      <section className="choose-discipline">
        <div className="choose-container">
          {/* Left Content */}
          <div className="choose-left">
            <h2 className="choose-title">How to Choose Your Discipline</h2>
            <p className="choose-subtitle">
              Selecting the right PhD discipline is crucial. Consider your interests, career goals, and available research opportunities.
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
