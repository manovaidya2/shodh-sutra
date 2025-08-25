import React from "react";
import "../styles/Process.css";
import aboutBg from "../images/contact.png";
import scrollImg from "../images/graduating cap and diploma certificate.jpg";
import PhDConsultation from "../Home/PhDConsultation";
import "../styles/ContactSection.css";


function ContactUs () {
     const contacts = [
    {
      icon: "fa-solid fa-envelope",
      title: "Email Us",
      value: "Support@SodhSutra.com",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Call Us",
      value: "+91-XXXXXXXXXX",
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "Office Address",
      value:
        "SodhSutra HQ, 3rd Floor, Research Tower, Knowledge Park, New Delhi – 110001, India",
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
            We’re Here to Help You on Your 
            <br /> PhD Journey
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

     <PhDConsultation />
     
      <section className="contact-section">
      <div className="contact-container">
        {contacts.map((item, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon">
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
   
    </>
  );
}

export default ContactUs;
