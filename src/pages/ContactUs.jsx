import React from "react";
import "../styles/Process.css";
import aboutBg from "../images/contact.png";
import PhDConsultation from "../Home/PhDConsultation";
import "../styles/ContactSection.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactUs() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      value: "support@shodhsutra.com",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call / WhatsApp",
      value: "+971 528313726, +91 8677920337",
      phone: ["971528313726", "918677920337"],
      whatsapp: [
        "https://wa.me/971528313726",
        "https://wa.me/918677920337",
      ],
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office Address",
      value:
        "EduGlobe Services FZ-LLC, Unit No.209-04, Al Kazim, 2nd Floor, Hor Alz Anz, Dubai, UAE (Near Al Quida Metro Station).",
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
            Have questions about your PhD applications or research plans? Our
            team of experts is ready to provide guidance, resources, and
            personalized support at every step of your doctoral journey.
          </p>
          <button className="process-explore-btn">Explore More</button>
        </div>
      </section>

      {/* Consultation Form */}
      <PhDConsultation />

      {/* Contact Info Section */}
      <section className="contact-section">
        <div className="contact-container">
          {contacts.map((item, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              {/* Email */}
              {item.title === "Email Us" && (
                <a href={`mailto:${item.value}`} className="contact-link">
                  {item.value}
                </a>
              )}

              {/* Call & WhatsApp */}
              {item.title === "Call / WhatsApp" && (
                <>
                  {item.phone.map((num, i) => (
                    <p key={i} className="phone-row">
                      <FaPhoneAlt className="inline-icon" />
                      <a href={`tel:${num}`} className="contact-link">
                        {num}
                      </a>
                    </p>
                  ))}

                  <a
                    href={item.whatsapp[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    <FaWhatsapp /> Chat on WhatsApp
                  </a>
                </>
              )}

              {/* Address */}
              {item.title === "Office Address" && <p>{item.value}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ContactUs;
