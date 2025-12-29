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
    title: "Academic Recognition & PrestigeA",
    text: "Earning a PhD is the highest academicqualification, earning you the title of Doctorand establishing your authority in a specializedfield.",
  },
  {
    icon: scientistIcon,
    title: "Career Advancement & LeadershipOpportunities",
    text: "PrestigeA PhD opens doors to senior academic,research, administrative, and industryleadership positions that are often inaccessiblewithout a doctoral degree.",
  },
  {
    icon: analystIcon,
    title: "In-Depth Subject Mastery",
    text: "Doctoral research enables you to gain deep original insights into your chosen subject contributing new knowledge to the global academic community.",
  },
  {
    icon: corporateIcon,
    title: "Teaching & Academic Careers",
    text: "A PhD equips you to teach in universities and colleges, mentor the next generation of scholars, and contribute to academic excellence.",
  },
  {
    icon: startupIcon,
    title: "Global Research & Fellowship Opportunities",
    text: "Access international fellowships, research grants, and collaborative projects across borders to advance your expertise.",
  },
  {
    icon: consultantIcon,
    title: "Intellectual Freedom & Innovation",
    text: "Conduct original research, gain deep insights, and contribute meaningful knowledge to your field and the global community.",
  },
];

function CareerPaths() {
  return (
    <section className="career-section">
      <div className="career-container">
       <h2 className="career-heading">Career Paths After PhD</h2>
<p className="career-subheading">
  Explore diverse opportunities after completing a PhD — from teaching and research to global fellowships, innovation, and leadership roles across academia and industry.
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
