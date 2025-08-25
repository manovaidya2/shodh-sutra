import React from 'react';
import HeroSection from './HeroSection';
import AboutSodhSutra from './AboutSodhSutra';
import Disciplines from './Disciplines';
import WhySodhSutra from './WhySodhSutra';
import HowWork from './HowWork';
import PartnerInstitutions from './PartnerInstitutions';
import Testimonial from './Testimonial';
import Resources from './Resources';
import PhDConsultation from './PhDConsultation';




function HomePage() {
  return (
   <>
    
      <HeroSection /> {/* 🆕 Add video hero section below header */}
       <AboutSodhSutra />
       <Disciplines />
       <WhySodhSutra />
       <HowWork />
       <PartnerInstitutions />
       <Testimonial />
       <Resources />
       <PhDConsultation />
       
  </>
  );
}

export default HomePage;
