import React from "react";
import "../styles/PhDConsultation.css";
import gradImage from "../images/formimg.jpg"; // Replace with your actual image path

function PhDConsultation() {
  return (
    <div className="consultation-container">
      {/* Left Section - Image & Text */}
      <div className="left-section">
        <img src={gradImage} alt="Graduation" className="background-image" />
        <div className="overlay-text">
          <h2>Ready to Begin Your <br />PhD Journey?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="right-section">
        <h3>Book a Free Consultation</h3>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PhDConsultation;
