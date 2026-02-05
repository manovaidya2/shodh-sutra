import React, { useState } from "react";
import "../styles/PartnerInstitutions.css";

const institutionsData = [
  { name: "Techno India University", location: "New Town, Kolkata", image: "https://mycareersview.com/afile/mcv24242_ormjp7gs6sjx5wkkalyi.png" },
  { name: "Sparsh Himalaya University", location: "Dehradun", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHRwozk407Gw0te0vZXzZ_b5eoHFMXO1XMQ&s" },
  { name: "Maharaja Agrasen Himalayan Garhwal University", location: "Dhair Gaon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2JBp8Qt8n2sJSIOhlUY5dPbR9r_g_DKYug&s" },
  { name: "Haridwar University", location: "Roorkee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBOL5oYjJTHL7k-65rZ3shTL15ASne47AVg&s" },
  { name: "Mangalayatan University", location: "Aligarh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ugW9_XBo8VNvDJ4RHx_Pmrod2U6215D44A&s" },
  { name: "The Glocal University", location: "Saharanpur", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUql6yfSBN6fdd2GzfYhZnT6-rww5zAjtDg&s" },
  { name: "Future University", location: "Bareilly", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSNHOI0FDMMJLy38qqWniM0uAgZ-Kl4s4Hg&s" },
  { name: "Maya Devi University", location: "Dehradun", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqSG6P6leuPBeFbtWBVFoXipEPTMUXE8jug&s" },
  { name: "Shri Venkateshwara University", location: "Gajraula", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDkHJIT-d3tsHtPFH8HwzenwaShRm1S4KIlLymVG7CEC_zhmmHJ6kvY1r90Nvh_2gJ6Y&usqp=CAU" },
  { name: "Shobhit University", location: "Gangoh", image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Shobhit_University%2C_Gangoh_logo.png" },
  { name: "Shrimati Manjira Devi University", location: "Uttarkashi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvqP1lkBmm93VdseEGEp9-yCnhc6jbYv1Wg&s" },
  { name: "Sanskriti University", location: "Mathura", image: "https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png" },
  { name: "Maharishi University of Information Technology", location: "Lucknow", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Maharishi_University_of_Information_Technology_%28MUIT%29.png" },
  { name: "Sreenidhi University", location: "Hyderabad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrTRSM4gMgTH8DkOHbG7F1VOtDBljrySQUQ&s" },
  { name: "Anurag University", location: "Hyderabad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8fs6w44jkkY5J30LfNxEzlXE66gQcIv45g&s" },
  { name: "Sikkim Alpine University", location: "South Sikkim", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qpacVBDLvVz60rPeRKsaREfK2FTqpRmxiQ&s" },
  { name: "Sikkim Global Technical University", location: "Namchi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwEWDTnN6cNy-SPM98FV-M8QnpTisrCP17w&s" },
  { name: "Shridhar University", location: "Pilani", image: "https://media.licdn.com/dms/image/v2/D4D0BAQE4EAldJxbsBQ/company-logo_200_200/company-logo_200_200/0/1697781231826?e=2147483647&v=beta&t=6kVGm6gq7bTLFdBBDSkkgKzvLXmsn5U1aVgSkKplEdk" },
  { name: "Shyam University", location: "Dausa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniseBzIFGhZaLw_35627yES8ijsOFKIcQhw&s" },
  { name: "Singhania University", location: "Jhunjhunu", image: "/images/universities/singhania.png" },
  { name: "CMJ University", location: "Shillong", image: "/images/universities/cmj.png" },
  { name: "Asian International University", location: "Imphal", image: "/images/universities/asian-international.png" },
  { name: "Bir Tikendrajit University", location: "Imphal", image: "/images/universities/bir-tikendrajit.png" },
  { name: "Bhabha University", location: "Bhopal", image: "/images/universities/bhabha.png" },
  { name: "Dr. A.P.J. Abdul Kalam University", location: "Indore", image: "/images/universities/apj-abdul-kalam.png" },
  { name: "Dr. C.V. Raman University, Khandwa", location: "Khandwa", image: "/images/universities/cv-raman.png" },
  { name: "Dr. Preeti Global University", location: "Shivpuri", image: "/images/universities/preeti-global.png" },
  { name: "Madhyanchal Professional University", location: "Bhopal", image: "/images/universities/madhyanchal.png" },
  { name: "Mahakaushal University", location: "Jabalpur", image: "/images/universities/mahakaushal.png" },
  { name: "Shri Krishna University", location: "Chhatarpur", image: "/images/universities/shri-krishna.png" },
  { name: "P.K. University", location: "Shivpuri", image: "/images/universities/pk.png" },
  { name: "Swami Vivekanand University", location: "Sagar", image: "/images/universities/swami-vivekanand.png" },
  { name: "Sai Nath University", location: "Ranchi", image: "/images/universities/sai-nath.png" },
  { name: "Sarala Birla University", location: "Ranchi", image: "/images/universities/sarala-birla.png" },
  { name: "Sona Devi University", location: "East Singhbhum", image: "/images/universities/sona-devi.png" },
  { name: "YBN University", location: "Ranchi", image: "/images/universities/ybn.png" },
  { name: "NIILM University, Kaithal", location: "Kaithal", image: "/images/universities/niilm.png" },
  { name: "Om Sterling Global University", location: "Hisar", image: "/images/universities/om-sterling.png" },
  { name: "Monark University", location: "Ahmedabad", image: "/images/universities/monark.png" },
  { name: "Sabarmati University", location: "Ahmedabad", image: "/images/universities/sabarmati.png" },
  { name: "Sardar Vallabhbhai Global University", location: "Ahmedabad", image: "/images/universities/sardar-v.png" },
  { name: "K. K. Modi University", location: "Durg", image: "/images/universities/kk-modi.png" },
  { name: "Kalinga University", location: "Raipur", image: "/images/universities/kalinga.png" },
  { name: "Apex Professional University", location: "Gumin Nagar", image: "/images/universities/apex.png" },
  { name: "North East Frontier Technical University", location: "Aalo", image: "/images/universities/northeast.png" },
  { name: "Arunodaya University", location: "Itanagar", image: "/images/universities/arunodaya.png" },
  { name: "Godavari Global University", location: "Rajamahendravaram", image: "/images/universities/godavari.png" },
  { name: "Krea University", location: "Sri City", image: "/images/universities/krea.png" },
  { name: "Mohan Babu University", location: "Tirupati", image: "/images/universities/mohan-babu.png" },
];

const PartnerInstitutions = () => {
  const [selectedInst, setSelectedInst] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="pi-container">
      <h1 className="pi-title">Our Associates & Partner Universities</h1>
      <p className="pi-description">
        ShodhSutra works with a diverse network of UGC‑recognized Indian universities
        and reputed international institutions, aligning scholars with research
        environments best suited to their goals.
      </p>

      {/* Initial 10 Universities */}
      <div className="pi-institutions">
        {institutionsData.slice(0, 10).map((inst, index) => (
          <div
            key={index}
            className="pi-institution-card"
            onClick={() => setSelectedInst(inst)}
          >
            <img src={inst.image} alt={inst.name} className="pi-institution-image" />
            <h3 className="pi-institution-name">{inst.name}</h3>
            <p className="pi-institution-location">{inst.location}</p>
          </div>
        ))}
      </div>

      <button className="pi-view-all-btn" onClick={() => setShowAll(true)}>
        View All
      </button>

      {/* Modal */}
      {(selectedInst || showAll) && (
        <div className="pi-modal-overlay" onClick={() => { setSelectedInst(null); setShowAll(false); }}>
          <div className="pi-modal-content pi-modal-grid" onClick={(e) => e.stopPropagation()}>
            <button className="pi-modal-close" onClick={() => { setSelectedInst(null); setShowAll(false); }}>&times;</button>

            {/* Single */}
            {selectedInst && !showAll && (
              <>
                <img src={selectedInst.image} alt={selectedInst.name} className="pi-institution-image" />
                <h2>{selectedInst.name}</h2>
                <p>{selectedInst.location}</p>
                <p>Additional information about {selectedInst.name} can go here.</p>
              </>
            )}

            {/* All Universities */}
            {showAll && (
              <>
                <h2>All Partner Universities</h2>
                <div className="pi-institutions pi-modal-institutions">
                  {institutionsData.map((inst, index) => (
                    <div
                      key={index}
                      className="pi-institution-card"
                      onClick={() => setSelectedInst(inst)}
                    >
                      <img src={inst.image} alt={inst.name} className="pi-institution-image" />
                      <h3 className="pi-institution-name">{inst.name}</h3>
                      <p className="pi-institution-location">{inst.location}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerInstitutions;
