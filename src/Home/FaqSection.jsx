import React, { useState } from "react";
import "../styles/FaqSection.css"; // Import CSS

const faqs = [
  {
    question: "1. What is SHODHSUTRA?",
    answer:
      "SHODHSUTRA is a dedicated academic platform that provides complete guidance for PhD admissions, including eligibility, entrance exams, research topics, proposal preparation, and admission procedures.",
  },
  {
    question: "2. What does 'Shodhsutra' mean in PhD?",
    answer:
      "Shodhsutra refers to the core research idea or central theme of a PhD study. It defines the direction, scope, and focus of your research work and forms the foundation of your research proposal.",
  },
  {
    question: "3. Who is eligible to apply for a PhD through SHODHSUTRA?",
    answer:
      "Generally, candidates who have a Master’s degree in a relevant subject with minimum 55% marks (50% for reserved categories) and qualified NET/JRF/SET if required. Eligibility may vary by university.",
  },
  {
    question: "4. Is NET/JRF compulsory for PhD admission?",
    answer:
      "Not always. Some universities require NET/JRF, others conduct their own entrance exams. Private universities may offer admission based on interview and research proposal.",
  },
  {
    question: "5. Can I pursue a PhD without NET?",
    answer:
      "Yes, if the university conducts its own entrance test and you qualify the interview and research proposal evaluation. NET/JRF is usually required for fellowships.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              <span>{faq.question}</span>
              <span className="faq-arrow">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
