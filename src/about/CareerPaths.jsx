import React from "react";
import "../styles/CareerPaths.css";

// Import icons
import researcherIcon from "./image/professor (1) 1.png";
import scientistIcon from "./image/chemist 1.png";
import analystIcon from "./image/job 1.png";
import corporateIcon from "./image/suitcase 2.png";
import startupIcon from "./image/innovator 1.png";
import consultantIcon from "./image/consultant (1) 1.png";

const careers = [
  {
    icon: researcherIcon,
    title: "Academic Recognition & Prestige",
    text: "Earning a PhD is the highest academic qualification, granting you the title of Doctor and establishing your authority in a specialized field.",
  },
  {
    icon: scientistIcon,
    title: "Career Advancement & Leadership Opportunities",
    text: "A PhD opens doors to senior academic, research, administrative, and industry leadership roles that are often inaccessible without a doctoral degree.",
  },
  {
    icon: analystIcon,
    title: "In-Depth Subject Mastery",
    text: "Doctoral research enables you to gain deep, original insights into your chosen subject while contributing new knowledge to the global academic community.",
  },
  {
    icon: corporateIcon,
    title: "Teaching & Academic Careers",
    text: "A PhD prepares you to teach at universities and colleges, mentor future scholars, and actively contribute to academic excellence.",
  },
  {
    icon: startupIcon,
    title: "Global Research & Fellowship Opportunities",
    text: "Access international fellowships, research grants, and cross-border collaborations to expand your expertise and impact.",
  },
  {
    icon: consultantIcon,
    title: "Intellectual Freedom & Innovation",
    text: "Pursue original research, foster innovation, and contribute meaningful knowledge to your field and the global community.",
  },
];

function CareerPaths() {
  return (
    <section className="career-section">
      <div className="career-container">
        <h2 className="career-heading">Career Paths After PhD</h2>
        <p className="career-subheading">
          Explore diverse opportunities after completing a PhD — from teaching and research
          to global fellowships, innovation, and leadership roles across academia and industry.
        </p>

        <div className="career-grid">
          {careers.map((career, index) => (
            <div className="career-card" key={index}>
              <img
                src={career.icon}
                alt={career.title}
                className="career-icon"
              />
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
