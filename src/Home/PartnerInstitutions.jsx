import React from 'react';
import '../styles/PartnerInstitutions.css';

// Import local images
import harvardImg from '../images/Rectangle 9.jpg';
import stanfordImg from '../images/Rectangle 11.jpg';
import princetonImg from '../images/Rectangle 10.jpg';

const PartnerInstitutions = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Partner Institutions</h1>
        <p className="description1">
         ShodhSutra collaborates with UGC-recognized Indian universities and reputed international institutions to provide scholars with credible, compliant, and globally aligned research opportunities.
        </p>
        <div className="institutions">
          <div className="institution-card">
            <img src={harvardImg} alt="Harvard University" className="institution-image" />
            <h3 className="institution-name">Harvard University</h3>
          </div>
          <div className="institution-card">
            <img src={stanfordImg} alt="Stanford University" className="institution-image" />
            <h3 className="institution-name">Stanford University</h3>
          </div>
          <div className="institution-card">
            <img src={princetonImg} alt="Princeton University" className="institution-image" />
            <h3 className="institution-name">Princeton University</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerInstitutions;
