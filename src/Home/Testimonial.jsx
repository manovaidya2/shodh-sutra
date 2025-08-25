import React from 'react';
import '../styles/Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Matthews",
      title: "PhD Students",
      img: "https://media.istockphoto.com/id/1409948380/photo/business-portrait.jpg?s=612x612&w=0&k=20&c=m2ivjMl1v_eK5n-yv-NM3OqpKMy8XZ_gFOv0pih2TPk=",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Sarah Al-Nayan",
      title: "PhD Students",
      img: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "John Matthews",
      title: "PhD Students",
      img: "https://media.istockphoto.com/id/1409948380/photo/business-portrait.jpg?s=612x612&w=0&k=20&c=m2ivjMl1v_eK5n-yv-NM3OqpKMy8XZ_gFOv0pih2TPk=",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name: "Sarah Al-Nayan",
      title: "PhD Students",
      img: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];

  return (
    <div className="tes-container">
      <div className="tes-content">
        <h1 className="tes-title">What Our Scholars Say</h1>
        <p className="tes-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
