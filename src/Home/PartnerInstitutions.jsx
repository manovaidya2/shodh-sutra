import React, { useState } from "react";
import "../styles/PartnerInstitutions.css";

const institutionsData = [
  // Original 10 universities with logos
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