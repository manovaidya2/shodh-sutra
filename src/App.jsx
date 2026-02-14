import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './Home/HomePage.jsx';
import "./App.css";
import AboutUs from './about/AboutUs';
import WhyPursuie from './about/WhyPursuie';
import Process from './pages/Process';
import Discipline from './pages/Discipline';
import ContactUs from './pages/ContactUs';
import PhDConsultation from './Home/PhDConsultation.jsx';
import Guide from './pages/Guide';
import ApplyNow from './components/ApplyNow.jsx';
import ShodhSutraForm from './components/ShodhSutraForm.jsx';

import AdmissionPartnerForm from './components/AdmissionPartnerForm.jsx';
import MentorProfileForm from './components/MentorProfileForm.jsx';
import Universityform from './components/UniversityAssociationForm.jsx';
import ScholarshipForm from './components/ScholarshipForm.jsx';
import AdmissionOfferForm from './components/PhdAdmissionForm.jsx';
import CommonEntranceExamForm from './components/CommonEntranceExam.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
          <Route path="/whyprusuie" element={<WhyPursuie />} />
          <Route path="/process" element={<Process />}  />
          <Route path="/discipline" element={<Discipline />}  />
          <Route path="/contact" element={<ContactUs/>} />
            <Route path="/consultation" element={<PhDConsultation/>} />
             <Route path="/guide" element={<Guide/>} />
             <Route path="/apply-now" element={<ApplyNow/>} />
             <Route path="/shodh-sutra-form" element={<ShodhSutraForm/>} />
             <Route path="/admission-partner-form" element={<AdmissionPartnerForm />} />
             <Route path="/mentor-form" element={<MentorProfileForm/>} />
             <Route path="/university-partner-form" element={<Universityform/>} />
             <Route path="/scholarship-form" element={<ScholarshipForm />} />
             <Route path="/admissionoffer" element={<AdmissionOfferForm />} />
             <Route path="/common-entrance-exam" element={<CommonEntranceExamForm />} />
             
             
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
