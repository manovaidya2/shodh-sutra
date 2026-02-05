import React from "react";
import "../styles/AboutUs.css";
import aboutBg from "../images/about.png";
import scrollImg from "../images/Diploma certificate obliquely.jpg";
import centerIcon from "../images/mortarboard 4.png";
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
        className="about-hero1"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="overlay1">
          <p className="small-title1">Meet ShodhSutra</p>
          <h1>
            About ShodhSutra – Your Gateway to
            <br /> Doctoral Excellence
          </h1>
          <p className="description1">
            ShodhSutra is your trusted companion on the journey to a PhD. We provide expert guidance,
            essential resources, and dedicated mentorship to help aspiring researchers achieve
            academic excellence, contribute original knowledge, and create a meaningful impact in
            their fields.
          </p>
          <button className="explore-btn1">Explore More</button>
        </div>
      </section>

      {/* About Details Section */}
      <section className="about-container">
        {/* Top Row */}
        <div className="about-top">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              ShodhSutra is a distinguished initiative of <strong>EduGlobe Services FZ-LLC, Ras Al Khaimah(RAK), UAE , Co ordination office : Unit No. 209-04, Al Kazim, 2nd floor, Hor Alz Anz, Dubai, UAE(Near Al Qiyadah Metro Station).</strong> We are dedicated exclusively to empowering
              research aspirants and streamlining the path to doctoral excellence.
              With a strong commitment to academic integrity, global research standards,
              and student-centric support, ShodhSutra serves as a guiding force for
              individuals seeking PhD admissions across diverse disciplines and
              universities in India and abroad.
            </p>
          </div>

          <div className="about-image">
            <img src={scrollImg} alt="Diploma Certificate" />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="about-bottom">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              To make quality research education accessible, transparent, and achievable
              by offering structured guidance, institutional linkages, and holistic
              support to PhD aspirants.
            </p>
          </div>

          <div className="center-icon">
            <img src={centerIcon} alt="Academic Excellence Icon" />
            <div className="divider"></div>
          </div>

          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              To emerge as a globally trusted and efficient research facilitation platform,
              fostering a culture of innovation, critical inquiry, and academic excellence
              at the doctoral level.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <h2 className="section-title">What We Do</h2>
        <p className="section-description">
          Whether you're a working professional, an academician, or a passionate learner,
          we provide the roadmap, resources, and recognition to help you earn your doctoral
          degree with dignity and discipline.
        </p>

        <div className="what-we-do-content">
          <div className="what-we-do-item">
            <img src={scholarIcon} alt="University Icon" className="item-icon" />
            <h3>University Tie-ups & Collaborations</h3>
            <p>
              Seamless admissions through our academic partnerships with leading universities.
            </p>
          </div>

          <div className="vertical-line"></div>

          <div className="what-we-do-item">
            <img src={phdIcon} alt="PhD Guidance Icon" className="item-icon" />
            <h3>PhD Admission Guidance</h3>
            <p>
              Personalized support for admission into UGC-recognized Indian universities
              and reputed international institutions.
            </p>
          </div>

          <div className="vertical-line"></div>

          <div className="what-we-do-item">
            <img src={mentorshipIcon} alt="Mentorship Icon" className="item-icon" />
            <h3>Mentorship & Progress Monitoring</h3>
            <p>
              Continuous guidance from registration to final thesis submission.
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
