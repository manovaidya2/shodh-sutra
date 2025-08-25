import React, { useState } from "react";
import "../styles/header.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
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
          <span>
            <FaPhoneAlt /> +91 - 9990316499
          </span>
          <span>
            <FaEnvelope /> phd@gmail.com
          </span>
        </div>
        <div className="top-links">
          <a href="#">For Students</a>
          <a href="#">For Mentors</a>
          <a href="#">For Institutions</a>
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

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </div>
          <a href="/">Home</a>

          <div className="dropdown">
            <a href="#">About Us ▽</a>
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

      {/* Dark Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </div>
  );
};

export default Header;
