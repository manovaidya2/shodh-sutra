import React from 'react';
import '../styles/PartnerInstitutions.css';

// Import local images
import associateImg1 from '../about/image/about-img.jpg';
import associateImg2 from '../about/image/5e8ed2bbe4124_corona_banner.jpg';

import inspirationImg1 from '../images/delhi.jpeg';
import inspirationImg2 from '../images/jnu.jpeg';
import inspirationImg3 from '../images/ipu.jpeg';

const PartnerInstitutions = () => {
  return (
    <div className="container">
      <div className="content">

        {/* OUR ASSOCIATES */}
        <h1 className="title">Our Associates</h1>
        <p className="description1">
          ShodhSutra collaborates with UGC-recognized Indian universities and reputed international institutions to provide scholars with credible, compliant, and globally aligned research opportunities.
        </p>

        <div className="institutions">
          <div className="institution-card">
            <img src={associateImg1} alt="Associate 1" className="institution-image" />
            <h3 className="institution-name">North East Christian University (NECU)</h3>
          </div>

          <div className="institution-card">
            <img src={associateImg2} alt="Associate 2" className="institution-image" />
            <h3 className="institution-name">Maharaja Agrasen Himalayan Garhwal University (MAHGU)</h3>
          </div>
        </div>

        {/* OUR INSPIRATION */}
        <h1 className="title inspiration-title">Our Inspiration</h1>

        <div className="institutions">
          <div className="institution-card">
            <img src={inspirationImg1} alt="Inspiration 1" className="institution-image" />
            <h3 className="institution-name">University of Delhi (DU)</h3>
          </div>

          <div className="institution-card">
            <img src={inspirationImg2} alt="Inspiration 2" className="institution-image" />
            <h3 className="institution-name">Jawaharlal Nehru University (JNU)</h3>
          </div>

          <div className="institution-card">
            <img src={inspirationImg3} alt="Inspiration 3" className="institution-image" />
            <h3 className="institution-name">Indraprastha University (IPU)</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PartnerInstitutions;
