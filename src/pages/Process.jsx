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
      desc: "Create your account on ShodhSutra to access personalized guidance, resources, and track your PhD application process easily."
    },
    {
      step: "STEP – 02",
      title: "Choose Your Research Discipline",
      desc: "Select the research area that aligns with your interests and career goals. We help you identify the best-fit discipline for your PhD journey."
    },
    {
      step: "STEP – 03",
      title: "Prepare Required Documents",
      desc: "Gather your academic transcripts, research proposal, recommendation letters, and other necessary documents for a complete application."
    },
    {
      step: "STEP – 04",
      title: "Submit Application",
      desc: "Submit your application through our platform with all required documents and information to the university or research institute."
    },
    {
      step: "STEP – 05",
      title: "Appear for Entrance / Interview",
      desc: "Attend the university entrance exam or interview. Our team provides guidance and mock sessions to help you prepare confidently."
    },
    {
      step: "STEP – 06",
      title: "Receive Admission Offer",
      desc: "Once accepted, receive your admission offer and guidance on enrollment, registration, and starting your PhD journey successfully."
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
            ShodhSutra guides you through every stage of the PhD admission process—from registration to enrollment. 
            Get expert support, detailed timelines, and all the resources you need to start your research journey with confidence.
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
              Applying for a PhD can be overwhelming, but we make it simple. 
              From understanding eligibility to preparing documents, ShodhSutra provides step-by-step guidance.
            </p>
            <br />
            <p>
              Our platform ensures that every aspiring researcher has the support, mentorship, 
              and tools necessary to navigate the admission process smoothly and start their doctoral journey with confidence.
            </p>
          </div>
          <div className="process-about-image">
            <img src={scrollImg} alt="Scroll" />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="process-section">
        <div className="process-container">
          <h2 className="process-title">Admission Process Timeline (6-Step Flow)</h2>
          <p className="process-subtitle">
            Follow these six simple steps to complete your PhD admission smoothly and confidently.
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

      {/* Additional Sections */}
      <RequirementsSection />
      <PhDConsultation />
    </>
  );
}

export default Process;
