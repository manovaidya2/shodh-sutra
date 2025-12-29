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
            Take the first step towards achieving your doctoral dreams. Book a free consultation with our experts to discuss your research interests, 
            application strategy, and get personalized guidance to make your PhD journey smooth and successful.
          </p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="right-section">
        <h3>Book a Free Consultation</h3>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PhDConsultation;
