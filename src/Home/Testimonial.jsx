import React from 'react';
import '../styles/Testimonial.css';
import meeraImg from '../images/testimonialimg/dr meera sharma.webp'; // replace with actual path
import ahmedImg from '../images/testimonialimg/prof ahmed.webp'; // replace with actual path
import rahulImg from '../images/testimonialimg/rahul verma.webp'; // replace with actual path
import sofiaImg from '../images/testimonialimg/dr sofia mathw.webp'; // replace with actual path
import nehaImg from '../images/testimonialimg/neha gupta.webp'; // replace with actual path

const Testimonial = () => {
  const testimonials = [
    {
      name: "Dr. Meera Sharma",
      title: "Research Scholar, AIRF",
      img: meeraImg,
      text: "“ShodhSutra’s Mentorship Help Program transformed my research journey. The guidance I received on refining my proposal and structuring my thesis was invaluable. Today, my work is published in a reputed journal, and I owe much of that success to ShodhSutra’s expert mentors.”"
    },
    {
      name: "Prof. Ahmed Khan",
      title: "Dean, School of Social Sciences, Al Noor International University",
      img: ahmedImg,
      text: "“Partnering with ShodhSutra has elevated our research output and given our students access to world-class mentoring. Their network of scholars and commitment to quality is unmatched.”"
    },
    {
      name: "Rahul Verma",
      title: "PhD Candidate, North East Christian University",
      img: rahulImg,
      text: "“From topic selection to final submission, ShodhSutra stood by me at every stage. The one-on-one consultations and access to subject-specific experts made the complex process smooth and stress-free.”"
    },
    {
      name: "Dr. Sofia Mathew",
      title: "Director, Centre for Academic Research, Global Vision University",
      img: sofiaImg,
      text: "“ShodhSutra has set a benchmark in research facilitation. Their structured programs, meticulous attention to detail, and global network have significantly benefited our faculty and doctoral scholars.”"
    },
    {
      name: "Neha Gupta",
      title: "Postgraduate Student, Jawaharlal Nehru University",
      img: nehaImg,
      text: "“ShodhSutra helped me navigate the often overwhelming research process. The personalized mentorship and practical workshops gave me the clarity and confidence to pursue my academic goals successfully.”"
    },
  ];

  return (
    <div className="tes-container">
      <div className="tes-content">
        <h1 className="tes-title">What Our Scholars Say</h1>
        <p className="tes-description">
          Hear directly from our scholars and faculty about their experience with ShodhSutra.
        </p>

        <div className="tes-testimonials">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-info">
                <img src={t.img} alt={t.name} className="testimonial-image" />
                <div className="testimonial-info-text">
                  <h3 className="testimonial-name">{t.name}</h3>
                  <p className="testimonial-title">{t.title}</p>
                </div>
              </div>
              <p className="testimonial-text">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
