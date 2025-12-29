import React from "react";
import "../styles/Home.css";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="highlight">1000+ Students Successfully Enrolled in PhD Programs</p>

        <h1>
          Advance Knowledge. Lead Innovation.
          <br /> Begin Your PhD with <span>SodhSutra.</span>
        </h1>

        <p className="desc">
          SodhSutra empowers aspiring researchers with expert guidance,
          structured mentorship, and end-to-end support throughout their PhD
          journey. From choosing the right discipline to securing admission,
          we help you move forward with clarity and confidence.
        </p>

        {/* Search bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search PhD Programs or Disciplines..." />
        </div>

        {/* Button below search bar */}
        <button className="view-btn">View All Programs</button>
      </div>
    </section>
  );
};

export default HeroSection;
