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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
