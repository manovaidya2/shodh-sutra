import React from 'react';
import '../styles/Resources.css';

// Import images
import sopLORImg from '../images/resource1.png';
import researchProposalImg from '../images/resource2.png';
import phdPrepImg from '../images/resource3.png';

const Resources = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Resources For Aspirants</h1>
        <p className="description2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className="resources">
          <div className="resource-card">
            <img src={sopLORImg} alt="SOP & LOR Guidance" className="resource-image" />
            <h3 className="resource-title">SOP & LOR Guidance</h3>
            <p className="resource-date">Posted On: June 18, 2025</p>
            <a href="#" className="read-now">Read Now</a>
          </div>
          <div className="resource-card">
            <img src={researchProposalImg} alt="How to Write a Research Proposal" className="resource-image" />
            <h3 className="resource-title">How to Write a Research Proposal</h3>
            <p className="resource-date">Posted On: June 18, 2025</p>
            <a href="#" className="read-now">Read Now</a>
          </div>
          <div className="resource-card">
            <img src={phdPrepImg} alt="PhD Entrance Prep Tips" className="resource-image" />
            <h3 className="resource-title">PhD Entrance Prep Tips</h3>
            <p className="resource-date">Posted On: June 18, 2025</p>
            <a href="#" className="read-now">Read Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
