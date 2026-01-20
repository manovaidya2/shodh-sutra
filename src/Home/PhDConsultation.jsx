import React, { useState } from "react";
import "../styles/PhDConsultation.css";
import gradImage from "../images/formimg.jpg";

function PhDConsultation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://localhost:5007/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Consultation booked successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consultation-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={gradImage} alt="Graduation" className="background-image" />
        <div className="overlay-text">
          <h2>
            Ready to Begin Your <br /> PhD Journey?
          </h2>
          <p>
            Take the first step towards achieving your doctoral dreams. Book a
            free consultation with our experts to discuss your research
            interests, application strategy, and get personalized guidance.
          </p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="right-section">
        <h3>Book a Free Consultation</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>

          {/* Success & Error Messages */}
          {success && <p className="success-msg">{success}</p>}
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default PhDConsultation;
