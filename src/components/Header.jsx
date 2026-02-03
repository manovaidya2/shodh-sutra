import React, { useState } from "react";
import "../styles/header.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import sodhLogo from "../images/sodh.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="header-wrapper">
        <div className="top-bar">
          <div className="contact-info">
            {/* India Phone */}
            <span className="contact-item">
              <FaPhoneAlt />
              <a href="tel:918677920337">+91 8677920337</a>
            </span>

            {/* India WhatsApp */}
            <span className="contact-item whatsapp">
              <FaWhatsapp />
              <a
                href="https://wa.me/918677920337"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 8677920337
              </a>
            </span>

            {/* UAE Phone */}
            <span className="contact-item">
              <FaPhoneAlt />
              <a href="tel:971524186676">+971 52 418 6676</a>
            </span>

            {/* Email */}
            <span className="contact-item">
              <FaEnvelope />
              <a href="mailto:support@shodhsutra.com">
                support@shodhsutra.com
              </a>
            </span>
          </div>

          <div className="top-links">
            <a href="/shodh-sutra-form">For Students</a>
            <a href="/mentor-form">For Mentors</a>
            <a href="/admission-partner-form">For Institutions</a>
            <a href="/university-partner-form">For Universities</a>
            <FaFacebookF className="social-icon" />
            <FaLinkedinIn className="social-icon" />
          </div>
        </div>

        {/* Main Header */}
        <header className="header">
          {/* Mobile Menu Icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>

          {/* Logo */}
          <div className="logo">
            <img src={sodhLogo} alt="ShodhSutra" />
          </div>

          {/* Desktop Navigation */}
          <nav className="nav">
            <a href="/">Home</a>

            <div className="dropdown">
              <a href="#" className="dropdown-toggle">
                About Us ▽
              </a>
              <div className="dropdown-menu">
                <a href="/about">Meet ShodhSutra</a>
                <a href="/whyprusuie">Why Pursue a PhD?</a>
              </div>
            </div>

            <a href="/process">Process</a>
            <a href="/discipline">Disciplines</a>
            <a href="/guide">Guides</a>
            <a href="/contact">Contact Us</a>
          </nav>

          {/* Apply Now Button */}
          <button
            className="apply-btn"
            onClick={() => (window.location.href = "/apply-now")}
          >
            Apply Now
          </button>
        </header>
      </div>

      {/* Mobile Sidebar Navigation */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </div>
        </div>
        
        <div className="sidebar-content">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="/process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="/discipline" onClick={() => setMenuOpen(false)}>Disciplines</a>
          <a href="/guide" onClick={() => setMenuOpen(false)}>Guides</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <a href="/whyprusuie" onClick={() => setMenuOpen(false)}>Why Pursue a PhD?</a>
          
          {/* Yellow section */}
          <div className="mobile-sidebar-bottom">
            <a href="/shodh-sutra-form" onClick={() => setMenuOpen(false)}>For Students</a>
            <a href="/mentor-form" onClick={() => setMenuOpen(false)}>For Mentors</a>
            <a href="/admission-partner-form" onClick={() => setMenuOpen(false)}>For Institutions</a>
            <a href="/university-partner-form" onClick={() => setMenuOpen(false)}>For Universities</a>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </div>
  );
};

export default Header;