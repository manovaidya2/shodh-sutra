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
    About ShodhSutra – Your Gateway to
    <br /> Doctoral Excellence
  </h1>
  <p className="description">
    ShodhSutra is your trusted companion on the journey to a PhD. We provide expert guidance, 
    resources, and mentorship to help aspiring researchers achieve excellence, contribute original 
    knowledge, and make an impact in their field.
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
             Shodhsutra is a distinguished initiative of the EduGlobe Services FZ LLC,
              RAKEZ,Dubai, United Arab Emirates dedicated exclusively to empowering
               researchaspirants and streamlining the path to doctoral excellence.
                With a deep commitment to academic integrity, global research standards, 
                andstudent-centric support, Shodhsutra acts as a guiding force for those 
                seeking PhDadmissions across diverse disciplines and universities, both in 
                India and abroad.
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
              To make quality research education accessible, transparent,
               and achievable byoffering structured guidance, institutional
                linkages, and holistic support to PhDaspirants.
            </p>
          </div>

          <div className="center-icon">
            <img src={centerIcon} alt="Center Icon" />
            <div className="divider"></div>
          </div>

          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              To emerge globally most trusted and efficient research facilitation platform,fostering a culture of innovation, critical inquiry, and academic excellence at thedoctoral level.
            </p>
          </div>
        </div>
      </section>
        <section className="what-we-do">
      <h2 className="section-title">What We Do</h2>
      <p className="section-description">
        Whether you're a workingprofessional, academician, or apassionate learner, we provide theroadmap, resources, and recognitionto help you earn your doctoraldegree with dignity and discipline.
      </p>

      <div className="what-we-do-content">
        <div className="what-we-do-item">
          <img src={scholarIcon} alt="Scholar Icon" className="item-icon" />
          <h3>University Tie-ups &Collaborations</h3>
          <p>
           Seamless admissions throughour academic partnerships withvarious universities.
          </p>
        </div>

        <div className="vertical-line"></div>

        <div className="what-we-do-item">
          <img src={phdIcon} alt="PhD Icon" className="item-icon" />
          <h3>PhD Admission Guidance</h3>
          <p>
            Personalized support for
admission into UGC-recognized
Indian universities and reputed
international institutions.
          </p>
        </div>

        <div className="vertical-line"></div>

        <div className="what-we-do-item">
          <img src={mentorshipIcon} alt="Mentorship Icon" className="item-icon" />
          <h3>Mentorship & ProgressMonitoring:</h3>
          <p>
           Continuous guidance fromregistration to thesissubmission
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
