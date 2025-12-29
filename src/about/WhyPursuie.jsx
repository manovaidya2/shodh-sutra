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
    About ShodhSutra – Your Gateway to
    <br /> Doctoral Excellence
  </h1>
  <p className="wp-description">
    ShodhSutra is your trusted partner in the journey of doctoral research. We
    guide aspiring scholars with expert mentorship, resources, and support to
    achieve excellence in their PhD and beyond.
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
    Pursuing a PhD is more than earning a degree—it is a journey of curiosity,
    discovery, and personal growth. It allows you to dive deep into a subject,
    develop critical thinking, and contribute original ideas to your field.
  </p>
  <br />
  <p>
    Along the way, you gain research skills, intellectual independence, and
    opportunities to collaborate with experts globally. A PhD not only shapes
    your career but also builds lifelong learning habits and professional
    credibility.
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
  A PhD offers more than a degree—it is a journey of deep learning, research
  excellence, and personal growth that opens doors to impactful careers and
  global recognition.
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
                Pursuing a PhD helps you grow academically by deepening your understanding of the subject and strengthening your research and analytical skills. It encourages continuous learning and intellectual curiosity.
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
                 A PhD opens up a wide range of career opportunities in academics, research organizations, industry, and policy-making roles. It prepares you for positions that require advanced knowledge and leadership.
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
During a PhD, you learn to think independently, ask meaningful questions, and develop your own ideas. This journey builds confidence in decision-making and problem-solving.
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
                 Doctoral research provides opportunities to publish work, attend international conferences, and collaborate with experts worldwide, helping you gain global recognition and professional respect.
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
