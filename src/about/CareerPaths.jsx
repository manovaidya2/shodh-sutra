import React from "react";
import "../styles/CareerPaths.css";

// Import icons (you can replace with your own images/icons)
import researcherIcon from "./image/professor (1) 1.png";
import scientistIcon from "./image/chemist 1.png";
import analystIcon from "./image/job 1.png";
import corporateIcon from "./image/suitcase 2.png";
import startupIcon from "./image/innovator 1.png";
import consultantIcon from "./image/consultant (1) 1.png";

const careers = [
  {
    icon: researcherIcon,
    title: "Academic Researcher",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: scientistIcon,
    title: "Scientist in R&D Labs",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: analystIcon,
    title: "Policy Analyst",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: corporateIcon,
    title: "Corporate Research & Innovation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: startupIcon,
    title: "Start-up Founder",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: consultantIcon,
    title: "Research Consultant",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function CareerPaths() {
  return (
    <section className="career-section">
      <div className="career-container">
        <h2 className="career-heading">Career Paths After PhD</h2>
        <p className="career-subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="career-grid">
          {careers.map((career, index) => (
            <div className="career-card" key={index}>
              <img src={career.icon} alt={career.title} className="career-icon" />
              <h3 className="career-title">{career.title}</h3>
              <p className="career-text">{career.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerPaths;
