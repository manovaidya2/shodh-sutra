import React from "react";
import "../styles/Disciplines.css";

const items = [
  {
    title: "Engineering & Technology",
    text: "Explore innovations and applied sciences in the engineering and tech domain, from AI to advanced materials.",
    icon: "🔧"
  },
  {
    title: "Life Sciences & Biotechnology",
    text: "Discover the frontiers of biology, genetics, and biomedical research shaping the future.",
    icon: "🧬"
  },
  {
    title: "Social Sciences & Humanities",
    text: "Engage with cultural, political, and societal research for a deeper understanding of humanity.",
    icon: "🧠"
  },
  {
    title: "Commerce & Management",
    text: "Learn business strategies, finance, and leadership skills for the modern marketplace.",
    icon: "💼"
  },
  {
    title: "Law & Public Policy",
    text: "Examine legal systems, governance, and policy-making in a rapidly changing world.",
    icon: "⚖️"
  },
  {
    title: "Interdisciplinary Studies",
    text: "Combine multiple disciplines to create innovative and holistic solutions.",
    icon: "🎓"
  }
];

function Disciplines() {
  return (
    <section className="disciplines">
      <div className="disciplines-head">
        <h2>Explore Research Disciplines</h2>
        <p>
          Choose from a variety of fields to deepen your expertise and explore
          cutting-edge knowledge across multiple disciplines. Choose from a variety of fields to deepen your expertise and explore
          cutting-edge knowledge across multiple disciplines.
        </p>
      </div>

      <div className="disciplines-grid1">
        {items.map((it, i) => (
          <article className="disc-card" key={i}>
            <div className="disc-icon">{it.icon}</div>
            <h3>{it.title}</h3>
            <p className="disc-text">{it.text}</p>
            <button className="disc-link">
              View Course <span className="arrow">↗</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Disciplines;
