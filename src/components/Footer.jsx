import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import sodhLogo from "../images/sodh.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        {/* Column 1 */}
        <div className="footer-column">
          <div className="logo">
            <img src={sodhLogo} alt="ShodhSutra" />
          </div>
          <p>
            ShodhSutra is a dedicated PhD guidance and mentorship platform
            helping research aspirants navigate admissions, research planning,
            and academic growth with confidence and clarity.
          </p>
          <h4>Follow Us On :</h4>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/discipline">Disciplines</a>
          <a href="#">Universities</a>
          <a href="/guide">Guides</a>
          <a href="#">Resource Center</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h4>About ShodhSutra</h4>
          <a href="/about">Meet ShodhSutra</a>
          <a href="/whyprusuie">Why Pursue a PhD?</a>
          <a href="#">For Students</a>
          <a href="#">Admissions & Mentorship Program</a>
          <a href="#">For Mentors</a>
          <a href="#">Why Become a Mentor</a>
          <a href="#">Mentor Onboarding Form</a>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShodhSutra. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
