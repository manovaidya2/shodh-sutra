import React from "react";
import "../styles/Process.css";
import aboutBg from "../images/process.jpg";
import scrollImg from "../images/graduated student with diploma.jpg";
import {
  FaFileAlt,
  FaPenFancy,
  FaUserFriends,
  FaBookOpen,
  FaComments,
  FaGraduationCap,
  FaClipboardCheck,
  FaTasks,
} from "react-icons/fa";
import "../styles/Guides.css";
import PhDConsultation from "../Home/PhDConsultation";

function Guide() {
  const guides = [
    {
      title: "How to Write a Research Proposal",
      desc: "Learn to structure your research proposal, define objectives, and present a compelling study plan aligned with your field.",
      icon: <FaFileAlt className="guide-icon" />,
    },
    {
      title: "Statement of Purpose (SOP) Writing Guide",
      desc: "Craft a strong SOP highlighting your academic background, research interests, and career aspirations to impress admission committees.",
      icon: <FaPenFancy className="guide-icon" />,
    },
    {
      title: "Letter of Recommendation (LOR) Guide",
      desc: "Understand how to select recommenders and what content makes your LORs effective and credible for PhD applications.",
      icon: <FaUserFriends className="guide-icon" />,
    },
    {
      title: "PhD Entrance Exam Preparation",
      desc: "Prepare strategically for your PhD entrance exams, covering subject knowledge, research aptitude, and analytical skills.",
      icon: <FaBookOpen className="guide-icon" />,
    },
    {
      title: "Interview Preparation Tips",
      desc: "Get insights into common interview questions, presentation skills, and techniques to confidently communicate your research interests.",
      icon: <FaComments className="guide-icon" />,
    },
    {
      title: "Fellowship & Scholarship Guide",
      desc: "Explore available fellowships and scholarships, eligibility criteria, and tips to maximize your funding opportunities.",
      icon: <FaGraduationCap className="guide-icon" />,
    },
    {
      title: "Choosing a Research Topic",
      desc: "Learn how to identify impactful research questions, align with faculty expertise, and select topics that are feasible and original.",
      icon: <FaClipboardCheck className="guide-icon" />,
    },
    {
      title: "Application Checklist",
      desc: "Ensure your application is complete with all documents, deadlines, and requirements to avoid delays or rejections.",
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
            Navigate the entire PhD application process with clarity. From selecting a research topic to preparing your proposal, SOP, LORs, and interviews – we guide you every step of the way to maximize your chances of success.
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
              Applying for a PhD can be overwhelming, but with the right guidance, you can plan your steps efficiently. Understand timelines, documentation, and research alignment to ensure a smooth admission process.
            </p>
            <br />
            <p>
              From research proposal drafting to interview preparation, our step-by-step approach ensures you are well-prepared at every stage.
            </p>
          </div>
          <div className="process-about-image">
            <img src={scrollImg} alt="Scroll" />
          </div>
        </div>
      </section>

      {/* PhD Guides Section */}
      <section className="phd-guides">
        <div className="container">
          <h2 className="section-title">PhD Guides</h2>
          <p className="section-subtitle">
            Step-by-step guides to help you succeed in every phase of your PhD application.
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

      {/* Consultation Section */}
      <PhDConsultation />
    </>
  );
}

export default Guide;
