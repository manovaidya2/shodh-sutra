import React from "react";
import "../styles/Process.css";
import aboutBg from "../images/process.jpg";
import scrollImg from "../images/graduated student with diploma.jpg";
import { FaFileAlt, FaPenFancy, FaUserFriends, FaBookOpen, FaComments, FaGraduationCap, FaClipboardCheck, FaTasks } from "react-icons/fa";
import "../styles/Guides.css";
import PhDConsultation from "../Home/PhDConsultation";

function Guide() {
  const guides = [
  {
    title: "How to Write a Research Proposal",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <FaFileAlt className="guide-icon" />,
  },
  {
    title: "Statement of Purpose (SOP) Writing Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <FaPenFancy className="guide-icon" />,
  },
  {
    title: "Letter of Recommendation (LOR) Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <FaUserFriends className="guide-icon" />,
  },
  {
    title: "PhD Entrance Exam Preparation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <FaBookOpen className="guide-icon" />,
  },
  {
    title: "Interview Preparation Tips",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <FaComments className="guide-icon" />,
  },
  {
    title: "Fellowship & Scholarship Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <FaGraduationCap className="guide-icon" />,
  },
  {
    title: "Choosing a Research Topic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <FaClipboardCheck className="guide-icon" />,
  },
  {
    title: "Application Checklist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: <FaTasks className="guide-icon" />,
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
     <section className="phd-guides">
      <div className="container">
        <h2 className="section-title">PHD Guides</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="guides-grid">
          {guides.map((guide, i) => (
            <div className="guide-card" key={i}>
              <div className="icon-wrapper">{guide.icon}</div>
              <h3>{guide.title}</h3>
              <p>{guide.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <PhDConsultation />
    </>
  );
}

export default Guide;
