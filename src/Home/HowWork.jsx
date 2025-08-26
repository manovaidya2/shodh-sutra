import React from 'react';
import '../styles/HowWork.css';
import innovationImg from '../images/innovation 1.png';
import step2Img from '../images/job-application 2.png';
import step3Img from '../images/university 2.png';
import step4Img from '../images/job-interview 2.png';


const steps = [
  {
    title: 'Select Research Area',
    description: 'Choose your field of study or research.',
    img: innovationImg,
  },
  {
    title: 'Submit Application',
    description: 'Fill out and submit your application form.',
    img: step2Img,
  },
  {
    title: 'Connect with Institutions',
    description: 'Get matched with top institutions in your field.',
    img: step3Img,
  },
  {
    title: 'Interview & Offer Letter',
    description: 'Complete interviews and receive your offer letter.',
    img: step4Img,
  },
];

const HowWork = () => {
  return (
    <div className="howwork-container">
      <h1 className="howwork-title">How It Works</h1>
      <p className="howwork-description">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
