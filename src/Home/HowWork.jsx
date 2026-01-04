import React from 'react';
import '../styles/HowWork.css';
import innovationImg from '../images/innovation 1.png';
import step2Img from '../images/job-application 2.png';
import step3Img from '../images/university 2.png';
import step4Img from '../images/job-interview 2.png';


const steps = [
  {
    title: 'Select Research Area',
    description: 'Choose your research field with expert guidance.',
    img: innovationImg,
  },
  {
    title: 'Submit Application',
    description: 'Apply with complete documentation and compliance support..',
    img: step2Img,
  },
  {
    title: 'Connect with Institutions',
    description: 'Get matched with the right university and research supervisor.',
    img: step3Img,
  },
  {
    title: 'Interview & Offer Letter',
    description: 'Attend interviews and receive your official admission offer.',
    img: step4Img,
  },
];

const HowWork = () => {
  return (
    <div className="howwork-container">
      <h1 className="howwork-title">How It Works</h1>
      <p className="howwork-description">
     ShodhSutra offers a structured, transparent, and mentor-driven pathway to doctoral success. From identifying the right research direction to securing admission and continuous academic support, we guide scholars at every stage of their PhD journey with integrity and global research standards.
      </p>

      <div className="howwork-steps">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="howwork-step">
              <div className="step-icon">
                <img src={step.img} alt={step.title} />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <div className="step-arrow">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowWork;
