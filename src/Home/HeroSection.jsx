import React from "react";
import "../styles/Home.css";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="highlight">1000+ Students Got Admission</p>
        <h1>
          Advance Knowledge. Lead Innovation.
          <br /> Begin Your PhD with <span>SodhSutra.</span>
        </h1>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>

        {/* Search bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Programs..." />
        </div>

        {/* Button below search bar */}
        <button className="view-btn">View All Programs</button>
      </div>
    </section>
  );
};

export default HeroSection;
