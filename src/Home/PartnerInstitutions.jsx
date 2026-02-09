import React, { useState } from "react";
import "../styles/PartnerInstitutions.css";

const institutionsData = [
  // Original 10 universities with logos
  { name: "North East christian University", location: "Dimapur,Nagaland", image: "data:image/png;base64,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" },

    { name: "Maharaja Agrasen Himalayan Garhwal University", location: "Dhair Gaon", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2JBp8Qt8n2sJSIOhlUY5dPbR9r_g_DKYug&s" },
  { name: "Techno India University", location: "New Town, Kolkata", image: "https://mycareersview.com/afile/mcv24242_ormjp7gs6sjx5wkkalyi.png" },
  { name: "Sparsh Himalaya University", location: "Dehradun", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHRwozk407Gw0te0vZXzZ_b5eoHFMXO1XMQ&s" },
  { name: "Haridwar University", location: "Roorkee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBOL5oYjJTHL7k-65rZ3shTL15ASne47AVg&s" },
  { name: "Mangalayatan University", location: "Aligarh", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ugW9_XBo8VNvDJ4RHx_Pmrod2U6215D44A&s" },
  { name: "The Glocal University", location: "Saharanpur", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUql6yfSBN6fdd2GzfYhZnT6-rww5zAjtDg&s" },
  { name: "Future University", location: "Bareilly", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSNHOI0FDMMJLy38qqWniM0uAgZ-Kl4s4Hg&s" },
  { name: "Maya Devi University", location: "Dehradun", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqSG6P6leuPBeFbtWBVFoXipEPTMUXE8jug&s" },
  { name: "Shri Venkateshwara University", location: "Gajraula", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDkHJIT-d3tsHtPFH8HwzenwaShRm1S4KIlLymVG7CEC_zhmmHJ6kvY1r90Nvh_2gJ6Y&usqp=CAU" },
  { name: "Shobhit University", location: "Gangoh", image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Shobhit_University%2C_Gangoh_logo.png" },
  
  // Additional universities with logos from your list
  { name: "Shrimati Manjira Devi University", location: "Uttarkashi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvqP1lkBmm93VdseEGEp9-yCnhc6jbYv1Wg&s" },
  { name: "Sanskriti University", location: "Mathura", image: "https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png" },
  { name: "Maharishi University of Information Technology", location: "Lucknow", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Maharishi_University_of_Information_Technology_%28MUIT%29.png" },
  { name: "Sreenidhi University", location: "Hyderabad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrTRSM4gMgTH8DkOHbG7F1VOtDBljrySQUQ&s" },
  { name: "Anurag University", location: "Hyderabad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8fs6w44jkkY5J30LfNxEzlXE66gQcIv45g&s" },
  { name: "Sikkim Alpine University", location: "South Sikkim", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qpacVBDLvVz60rPeRKsaREfK2FTqpRmxiQ&s" },
  { name: "Sikkim Global Technical University", location: "Namchi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwEWDTnN6cNy-SPM98FV-M8QnpTisrCP17w&s" },
  { name: "Shridhar University", location: "Pilani", image: "https://media.licdn.com/dms/image/v2/D4D0BAQE4EAldJxbsBQ/company-logo_200_200/company-logo_200_200/0/1697781231826?e=2147483647&v=beta&t=6kVGm6gq7bTLFdBBDSkkgKzvLXmsn5U1aVgSkKplEdk" },
  { name: "Shyam University", location: "Dausa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniseBzIFGhZaLw_35627yES8ijsOFKIcQhw&s" },
  { name: "Singhania University", location: "Jhunjhunu", image: "https://www.singhaniauniversity.co.in/wp-content/uploads/2023/02/SU-logo.png" },
  
  // Universities from your table - adding logos where available
  { name: "CMJ University", location: "Shillong", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/CMJ_University_logo.png/220px-CMJ_University_logo.png" },
  { name: "Asian International University", location: "Imphal", image: "https://asianinternationaluniversity.co.in/wp-content/uploads/2021/07/AIU-logo.jpg" },
  { name: "Bir Tikendrajit University", location: "Imphal", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bir_Tikendrajit_University_logo.png/220px-Bir_Tikendrajit_University_logo.png" },
  { name: "Bhabha University", location: "Bhopal", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bhabha_University_logo.png/220px-Bhabha_University_logo.png" },
  { name: "Dr. A.P.J. Abdul Kalam University", location: "Indore", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dr._A.P.J._Abdul_Kalam_University_logo.png/220px-Dr._A.P.J._Abdul_Kalam_University_logo.png" },
  { name: "Dr. C.V. Raman University, Khandwa", location: "Khandwa", image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/C.V._Raman_University_logo.png/220px-C.V._Raman_University_logo.png" },
  { name: "Dr. Preeti Global University", location: "Shivpuri", image: "https://dpreetiglobaluniversity.org/images/logo.png" },
  { name: "Madhyanchal Professional University", location: "Bhopal", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Madhyanchal_Professional_University_logo.png/220px-Madhyanchal_Professional_University_logo.png" },
  { name: "Mahakaushal University", location: "Jabalpur", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mahakaushal_University_logo.png/220px-Mahakaushal_University_logo.png" },
  { name: "Shri Krishna University", location: "Chhatarpur", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Shri_Krishna_University_logo.png/220px-Shri_Krishna_University_logo.png" },
  { name: "P.K. University", location: "Shivpuri", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/P.K._University_logo.png/220px-P.K._University_logo.png" },
  { name: "Swami Vivekanand University", location: "Sagar", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Swami_Vivekanand_University_logo.png/220px-Swami_Vivekanand_University_logo.png" },
  { name: "Sai Nath University", location: "Ranchi", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Sai_Nath_University_logo.png/220px-Sai_Nath_University_logo.png" },
  { name: "Sarala Birla University", location: "Ranchi", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Sarala_Birla_University_logo.png/220px-Sarala_Birla_University_logo.png" },
  { name: "Sona Devi University", location: "East Singhbhum", image: "https://sonadeviuniversity.edu.in/wp-content/uploads/2023/07/Sona-Devi-University-logo.png" },
  { name: "YBN University", location: "Ranchi", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/YBN_University_logo.png/220px-YBN_University_logo.png" },
  { name: "NIILM University, Kaithal", location: "Kaithal", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/NIILM_University_logo.png/220px-NIILM_University_logo.png" },
  { name: "Om Sterling Global University", location: "Hisar", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Om_Sterling_Global_University_logo.png/220px-Om_Sterling_Global_University_logo.png" },
  { name: "Monark University", location: "Ahmedabad", image: "https://monarkuniversity.ac.in/wp-content/uploads/2021/01/Monark-university-logo.png" },
  { name: "Sabarmati University", location: "Ahmedabad", image: "https://sabarmatiuniversity.edu.in/wp-content/uploads/2021/08/Sabarmati-University-logo.png" },
  { name: "Sardar Vallabhbhai Global University", location: "Ahmedabad", image: "https://svgu.edu.in/wp-content/uploads/2021/08/Sardar-Vallabhbhai-Global-University-Logo.png" },
  { name: "K. K. Modi University", location: "Durg", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/K._K._Modi_University_logo.png/220px-K._K._Modi_University_logo.png" },
  { name: "Kalinga University", location: "Raipur", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Kalinga_University_logo.png/220px-Kalinga_University_logo.png" },
  { name: "Apex Professional University", location: "Gumin Nagar", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Apex_Professional_University_logo.png/220px-Apex_Professional_University_logo.png" },
  { name: "North East Frontier Technical University", location: "Aalo", image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/North_East_Frontier_Technical_University_logo.png/220px-North_East_Frontier_Technical_University_logo.png" },
  { name: "Arunodaya University", location: "Itanagar", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Arunodaya_University_logo.png/220px-Arunodaya_University_logo.png" },
  { name: "Godavari Global University", location: "Rajamahendravaram", image: "https://www.godavariglobaluniversity.com/wp-content/uploads/2023/08/cropped-logo-1.png" },
  { name: "Krea University", location: "Sri City", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Krea_University_logo.png/220px-Krea_University_logo.png" },
  { name: "Mohan Babu University", location: "Tirupati", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Mohan_Babu_University_logo.png/220px-Mohan_Babu_University_logo.png" },
];

const PartnerInstitutions = () => {
  const [selectedInst, setSelectedInst] = useState(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="pi-container">
      <h1 className="pi-title">Universities Aligned With Our PhD Guidance Pathways</h1>
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
            <img 
              src={inst.image} 
              alt={inst.name} 
              className="pi-institution-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/150x150?text=University+Logo";
              }}
            />
            <h3 className="pi-institution-name">{inst.name}</h3>
            <p className="pi-institution-location">{inst.location}</p>
          </div>
        ))}
      </div>

      <button className="pi-view-all-btn" onClick={() => setShowAll(true)}>
        View All {institutionsData.length} Universities
      </button>

      {/* Modal */}
      {(selectedInst || showAll) && (
        <div className="pi-modal-overlay" onClick={() => { setSelectedInst(null); setShowAll(false); }}>
          <div className="pi-modal-content pi-modal-grid" onClick={(e) => e.stopPropagation()}>
            <button className="pi-modal-close" onClick={() => { setSelectedInst(null); setShowAll(false); }}>&times;</button>

            {/* Single University View */}
            {selectedInst && !showAll && (
              <>
                <img 
                  src={selectedInst.image} 
                  alt={selectedInst.name} 
                  className="pi-institution-image-large"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x300?text=University+Logo";
                  }}
                />
                <div className="pi-modal-details">
                  <h2>{selectedInst.name}</h2>
                  <p className="pi-modal-location"><strong>Location:</strong> {selectedInst.location}</p>
                  <p className="pi-modal-info">
                    {selectedInst.name} is one of our valued partner institutions. 
                    We provide comprehensive PhD guidance and support for research scholars 
                    pursuing doctoral studies at this university.
                  </p>
                  <button className="pi-close-details-btn" onClick={() => setSelectedInst(null)}>
                    Back to List
                  </button>
                </div>
              </>
            )}

            {/* All Universities View */}
            {showAll && (
              <>
                <h2>All Partner Universities ({institutionsData.length})</h2>
                <div className="pi-modal-search">
                  <input 
                    type="text" 
                    placeholder="Search universities..." 
                    className="pi-search-input"
                  />
                </div>
                <div className="pi-institutions pi-modal-institutions">
                  {institutionsData.map((inst, index) => (
                    <div
                      key={index}
                      className="pi-institution-card"
                      onClick={() => setSelectedInst(inst)}
                    >
                      <img 
                        src={inst.image} 
                        alt={inst.name} 
                        className="pi-institution-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/150x150?text=University+Logo";
                        }}
                      />
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