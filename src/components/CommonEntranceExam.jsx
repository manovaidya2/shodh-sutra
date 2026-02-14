import React, { useState } from "react";
import "./CommonEntranceExam.css";
import axiosInstance from "../api/axiosInstance";

export default function CommonEntranceExamForm() {
  // ============== FORM STRUCTURE WITH SECTION ARRAYS ==============
  const emptyForm = {
    // SECTION 1 — FACULTY / STREAM APPLIED FOR
    section1: {
      question: "Faculty / Stream Applied For",
      selectedStreams: [],
      otherStream: ""
    },

    // SECTION 2 — PERSONAL DETAILS
    section2: [
      { question: "Full Name (In Block Letters)", answer: "" },
      { question: "Date of Birth", answer: "" },
      { question: "Age", answer: "" },
      { question: "Gender", answer: "" },
      { question: "Nationality", answer: "" },
      { question: "Social Category", answer: "" },
      { question: "Other Category", answer: "" }
    ],

    // SECTION 3 — IDENTITY DETAILS (WITH FILE UPLOAD)
    section3: {
      question: "ID Proof Submitted",
      selectedIdProofs: [],
      idNumber: "",
      otherIdProof: "",
      idProofFile: null  // File upload for ID proof
    },

    // SECTION 4 — CONTACT DETAILS
    section4: [
      { question: "Mobile Number", answer: "" },
      { question: "Alternate Number", answer: "" },
      { question: "Email ID", answer: "" },
      { question: "Communication Address", answer: "" },
      { question: "Communication City", answer: "" },
      { question: "Communication State", answer: "" },
      { question: "Communication PIN", answer: "" },
      { question: "Permanent Address", answer: "" },
      { question: "Permanent City", answer: "" },
      { question: "Permanent State", answer: "" },
      { question: "Permanent PIN", answer: "" }
    ],

    // SECTION 5 — ACADEMIC QUALIFICATIONS
    section5: {
      graduation: [
        { degree: "", discipline: "", mode: "", university: "", year: "", percentage: "" }
      ],
      postGraduation: [
        { degree: "", discipline: "", mode: "", university: "", year: "", percentage: "" }
      ],
      mphil: [
        { degree: "", discipline: "", mode: "", university: "", year: "", percentage: "" }
      ]
    },

    // SECTION 6 — PROFESSIONAL EXPERIENCE
    section6: {
      experiences: [
        { organization: "", designation: "", from: "", to: "", nature: "" }
      ],
      totalExperience: ""
    },

    // SECTION 7 — PRESENT EMPLOYMENT DETAILS
    section7: [
      { question: "Organisation Name", answer: "" },
      { question: "Designation", answer: "" },
      { question: "Employment Type", answer: "" },
      { question: "Years of Experience", answer: "" }
    ],

    // SECTION 8 — RESEARCH INTEREST
    section8: [
      { question: "Proposed Research Area / Topic", answer: "" },
      { question: "Why do you want to pursue PhD?", answer: "" }
    ],

    // SECTION 9 — ENTRANCE EXAM DETAILS
    section9: [
      { question: "Entrance Exam Fee Payment Mode", answer: "" },
      { question: "Receipt No. / NEFT / Bank Transfer Details", answer: "" },
      { question: "Date & Bank", answer: "" },
      { question: "Entrance Mode", answer: "" },
      { question: "Advertisement No. & Date", answer: "" },
      { question: "Cycle of Entrance Exam", answer: "" },
      { question: "Preferred Exam Date", answer: "" },
      { question: "Exam Centre / City", answer: "" },
      { question: "Subject / Faculty Applied For", answer: "" },
      { question: "Result of Entrance Exam", answer: "" },
      { question: "If Entrance Exam Exempted (Grounds)", answer: "" }
    ],

    // SECTION 10 — DOCUMENT UPLOADS (ONLINE MODE - NO CHECKLIST)
    section10: {
      tenthMarksheet: null,
      twelfthMarksheet: null,
      graduationDegree: null,
      pgDegree: null,
      idProof: null,
      cvResume: null,
      passportPhoto: null
    },

    // SECTION 11 — DECLARATION (ONLY CHECKBOX)
    section11: [
      { question: "Consent", answer: false }
    ],

    // METADATA
    metadata: {
      applicationDate: new Date().toISOString(),
      applicationType: "Common Entrance Exam",
      formVersion: "1.0"
    }
  };

  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // UI State for conditional fields
  const [showOtherStream, setShowOtherStream] = useState(false);
  const [showOtherCategory, setShowOtherCategory] = useState(false);
  const [showOtherIdProof, setShowOtherIdProof] = useState(false);

  // ============== HANDLER FOR SECTION ARRAYS ==============
  const handleSectionAnswer = (sectionName, questionText, answer) => {
    setForm(prev => {
      if (sectionName === "section1" || sectionName === "section3" || 
          sectionName === "section5" || sectionName === "section6" || 
          sectionName === "section10") {
        return prev; // These are handled separately
      }
      
      const section = [...prev[sectionName]];
      const index = section.findIndex(q => q.question === questionText);
      
      if (index !== -1) {
        section[index] = { ...section[index], answer };
      }
      
      return {
        ...prev,
        [sectionName]: section
      };
    });
  };

  // ============== HANDLER FOR STREAM SELECTION ==============
  const handleStreamChange = (stream) => {
    setForm(prev => {
      const current = prev.section1.selectedStreams || [];
      let updated;
      
      if (stream === "Other") {
        setShowOtherStream(!showOtherStream);
        if (!showOtherStream) {
          updated = [...current, "Other"];
        } else {
          updated = current.filter(s => s !== "Other");
          prev.section1.otherStream = "";
        }
      } else {
        if (current.includes(stream)) {
          updated = current.filter(s => s !== stream);
        } else {
          updated = [...current, stream];
        }
      }
      
      return {
        ...prev,
        section1: {
          ...prev.section1,
          selectedStreams: updated || current
        }
      };
    });
  };

  // ============== HANDLER FOR SOCIAL CATEGORY ==============
  const handleCategoryChange = (category) => {
    handleSectionAnswer("section2", "Social Category", category);
    setShowOtherCategory(category === "Other");
    if (category !== "Other") {
      handleSectionAnswer("section2", "Other Category", "");
    }
  };

  // ============== HANDLER FOR ID PROOF ==============
  const handleIdProofChange = (proof) => {
    setForm(prev => {
      const current = prev.section3.selectedIdProofs || [];
      let updated;
      
      if (proof === "Other") {
        setShowOtherIdProof(!showOtherIdProof);
        if (!showOtherIdProof) {
          updated = [...current, "Other"];
        } else {
          updated = current.filter(p => p !== "Other");
          prev.section3.otherIdProof = "";
        }
      } else {
        if (current.includes(proof)) {
          updated = current.filter(p => p !== proof);
        } else {
          updated = [...current, proof];
        }
      }
      
      return {
        ...prev,
        section3: {
          ...prev.section3,
          selectedIdProofs: updated || current
        }
      };
    });
  };

  // ============== HANDLER FOR ID PROOF FILE UPLOAD ==============
  const handleIdProofFileUpload = (file) => {
    setForm(prev => ({
      ...prev,
      section3: {
        ...prev.section3,
        idProofFile: file
      }
    }));
  };

  // ============== HANDLER FOR ACADEMIC QUALIFICATIONS ==============
  const handleAcademicChange = (level, index, field, value) => {
    setForm(prev => {
      const updated = { ...prev };
      updated.section5[level][index] = {
        ...updated.section5[level][index],
        [field]: value
      };
      return updated;
    });
  };

  const addAcademicRow = (level) => {
    setForm(prev => {
      const updated = { ...prev };
      updated.section5[level].push({
        degree: "", discipline: "", mode: "", university: "", year: "", percentage: ""
      });
      return updated;
    });
  };

  const removeAcademicRow = (level, index) => {
    setForm(prev => {
      const updated = { ...prev };
      if (updated.section5[level].length > 1) {
        updated.section5[level].splice(index, 1);
      }
      return updated;
    });
  };

  // ============== HANDLER FOR PROFESSIONAL EXPERIENCE ==============
  const handleExperienceChange = (index, field, value) => {
    setForm(prev => {
      const updated = { ...prev };
      updated.section6.experiences[index] = {
        ...updated.section6.experiences[index],
        [field]: value
      };
      return updated;
    });
  };

  const addExperienceRow = () => {
    setForm(prev => {
      const updated = { ...prev };
      updated.section6.experiences.push({
        organization: "", designation: "", from: "", to: "", nature: ""
      });
      return updated;
    });
  };

  const removeExperienceRow = (index) => {
    setForm(prev => {
      const updated = { ...prev };
      if (updated.section6.experiences.length > 1) {
        updated.section6.experiences.splice(index, 1);
      }
      return updated;
    });
  };

  // ============== HANDLER FOR DOCUMENT UPLOADS ==============
  const handleDocumentUpload = (field, file) => {
    setForm(prev => ({
      ...prev,
      section10: {
        ...prev.section10,
        [field]: file
      }
    }));
  };

  // ============== AGE CALCULATOR ==============
  const calculateAge = (dob) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // ============== HELPER FUNCTION TO GET ANSWER ==============
  const getAnswer = (sectionName, questionText) => {
    if (sectionName === "section1" || sectionName === "section3" || 
        sectionName === "section5" || sectionName === "section6" || 
        sectionName === "section10") {
      return "";
    }
    
    const section = form[sectionName];
    if (Array.isArray(section)) {
      const field = section.find(q => q.question === questionText);
      return field?.answer || "";
    }
    return "";
  };

  // ============== VALIDATION ==============
  const validateForm = () => {
    if (form.section1.selectedStreams.length === 0) {
      alert("Please select at least one Faculty/Stream");
      return false;
    }
    if (!getAnswer("section2", "Full Name (In Block Letters)")) {
      alert("Please enter Full Name");
      return false;
    }
    if (!getAnswer("section2", "Date of Birth")) {
      alert("Please enter Date of Birth");
      return false;
    }
    if (!form.section3.idProofFile) {
      alert("Please upload ID Proof document");
      return false;
    }
    if (!getAnswer("section4", "Mobile Number")) {
      alert("Please enter Mobile Number");
      return false;
    }
    if (!getAnswer("section4", "Email ID")) {
      alert("Please enter Email ID");
      return false;
    }
    if (!form.section5.graduation[0].degree) {
      alert("Please enter Graduation details");
      return false;
    }
    if (!form.section5.postGraduation[0].degree) {
      alert("Please enter Post-Graduation details");
      return false;
    }
    if (!form.section10.tenthMarksheet) {
      alert("Please upload 10th Marksheet");
      return false;
    }
    if (!form.section10.twelfthMarksheet) {
      alert("Please upload 12th Marksheet");
      return false;
    }
    if (!form.section10.graduationDegree) {
      alert("Please upload Graduation Degree");
      return false;
    }
    
    if (!form.section10.passportPhoto) {
      alert("Please upload Passport Size Photo");
      return false;
    }
    
    const consentField = form.section11?.find(q => q.question === "Consent");
    if (!consentField?.answer) {
      alert("Please accept the declaration");
      return false;
    }
    return true;
  };

  // ============== SUBMIT HANDLER ==============
  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const dataToSend = new FormData();
      
      // Append all form data as JSON
      dataToSend.append("applicationData", JSON.stringify(form));
      
      // Append ID proof file
      if (form.section3.idProofFile) {
        dataToSend.append("idProofDocument", form.section3.idProofFile);
      }
      
      // Append all document uploads
      Object.keys(form.section10).forEach(key => {
        if (form.section10[key]) {
          dataToSend.append(key, form.section10[key]);
        }
      });

      console.log("📤 Submitting Common Entrance Exam Application...");
      
      const res = await axiosInstance.post("/entrance-exam/apply", dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (res.data.success) {
        alert("✅ Common Entrance Exam Application Submitted Successfully!");
        setForm(emptyForm);
        setShowOtherStream(false);
        setShowOtherCategory(false);
        setShowOtherIdProof(false);
      } else {
        alert(res.data.message || "❌ Submission Failed");
      }
    } catch (err) {
      console.error("Submit Error:", err);
      alert(err.response?.data?.message || "❌ Server Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ============== RENDER FORM ==============
  return (
    <div className="common-entrance-form">
      <h1>🧾 SHODHSUTRA</h1>
      <p className="sub-heading">COMMON ENTRANCE EXAM FORM — For Admission to PhD Programme</p>

      {/* ========== SECTION 1 — FACULTY / STREAM APPLIED FOR ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 1 — FACULTY / STREAM APPLIED FOR</h2>
        
        <div className="form-row">
          <div className="form-group ">
            <label>Select Stream(s)</label>
            <div className="option-grid grid-3">
              {[
                "Humanities (Arts / Commerce / Science)",
                "Law",
                "Pharmacy",
                "Management",
                "Education",
                "Computer Science",
                "Commerce",
                "Engineering",
                "Medical Science",
                "Paramedical / Allied Health Science"
              ].map((stream) => (
                <label key={stream} className="check-option">
                  <input
                    type="checkbox"
                    value={stream}
                    checked={form.section1.selectedStreams?.includes(stream)}
                    onChange={() => handleStreamChange(stream)}
                  />
                  {stream}
                </label>
              ))}
              <label className="check-option">
                <input
                  type="checkbox"
                  value="Other"
                  checked={form.section1.selectedStreams?.includes("Other")}
                  onChange={() => handleStreamChange("Other")}
                />
                Other
              </label>
            </div>
          </div>
        </div>

        {showOtherStream && (
          <div className="form-row">
            <div className="form-group">
              <label>Specify Other Stream</label>
              <input
                type="text"
                placeholder="Enter stream/faculty name"
                value={form.section1.otherStream || ""}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  section1: {
                    ...prev.section1,
                    otherStream: e.target.value
                  }
                }))}
              />
            </div>
          </div>
        )}
      </section>

      {/* ========== SECTION 2 — PERSONAL DETAILS ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 2 — PERSONAL DETAILS</h2>
        
        <div className="form-row">
          <div className="form-group required">
            <label>Full Name (In Block Letters)</label>
            <input
              type="text"
              placeholder="Enter your full name in BLOCK LETTERS"
              value={getAnswer("section2", "Full Name (In Block Letters)")}
              onChange={(e) => handleSectionAnswer("section2", "Full Name (In Block Letters)", e.target.value.toUpperCase())}
              style={{ textTransform: 'uppercase' }}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group required">
            <label>Date of Birth (DD/MM/YYYY)</label>
            <input
              type="date"
              value={getAnswer("section2", "Date of Birth")}
              onChange={(e) => {
                handleSectionAnswer("section2", "Date of Birth", e.target.value);
                const age = calculateAge(e.target.value);
                handleSectionAnswer("section2", "Age", age.toString());
              }}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              placeholder="Auto-calculated"
              value={getAnswer("section2", "Age")}
              readOnly
              className="readonly-field"
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Gender</label>
            <div className="option-group-inline">
              {["Male", "Female", "Other"].map((gender) => (
                <label key={gender} className="radio-option">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={getAnswer("section2", "Gender") === gender}
                    onChange={(e) => handleSectionAnswer("section2", "Gender", e.target.value)}
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Nationality</label>
            <input
              type="text"
              placeholder="Enter nationality"
              value={getAnswer("section2", "Nationality")}
              onChange={(e) => handleSectionAnswer("section2", "Nationality", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Social Category</label>
            <div className="option-group-inline">
              {["General", "OBC", "SC", "ST", "Other"].map((category) => (
                <label key={category} className="radio-option">
                  <input
                    type="radio"
                    name="socialCategory"
                    value={category}
                    checked={getAnswer("section2", "Social Category") === category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
        </div>

        {showOtherCategory && (
          <div className="form-row">
            <div className="form-group">
              <label>Specify Other Category</label>
              <input
                type="text"
                placeholder="Enter other category"
                value={getAnswer("section2", "Other Category")}
                onChange={(e) => handleSectionAnswer("section2", "Other Category", e.target.value)}
              />
            </div>
          </div>
        )}
      </section>

      {/* ========== SECTION 3 — IDENTITY DETAILS WITH FILE UPLOAD ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 3 — IDENTITY DETAILS</h2>
        
        <div className="form-row">
          <div className="form-group">
            <label>ID Proof Submitted</label>
            <div className="option-grid grid-3">
              {["Aadhaar", "PAN", "Voter ID", "Passport", "Driving License"].map((proof) => (
                <label key={proof} className="check-option">
                  <input
                    type="checkbox"
                    value={proof}
                    checked={form.section3.selectedIdProofs?.includes(proof)}
                    onChange={() => handleIdProofChange(proof)}
                  />
                  {proof}
                </label>
              ))}
              <label className="check-option">
                <input
                  type="checkbox"
                  value="Other"
                  checked={form.section3.selectedIdProofs?.includes("Other")}
                  onChange={() => handleIdProofChange("Other")}
                />
                Other
              </label>
            </div>
          </div>
        </div>

        {showOtherIdProof && (
          <div className="form-row">
            <div className="form-group">
              <label>Specify Other ID Proof</label>
              <input
                type="text"
                placeholder="Enter other ID proof type"
                value={form.section3.otherIdProof || ""}
                onChange={(e) => setForm(prev => ({
                  ...prev,
                  section3: {
                    ...prev.section3,
                    otherIdProof: e.target.value
                  }
                }))}
              />
            </div>
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label>ID Number</label>
            <input
              type="text"
              placeholder="Enter ID proof number"
              value={form.section3.idNumber || ""}
              onChange={(e) => setForm(prev => ({
                ...prev,
                section3: {
                  ...prev.section3,
                  idNumber: e.target.value
                }
              }))}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group required">
            <label>Upload ID Proof (Self-attested copy)</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    handleIdProofFileUpload(file);
                  }
                }}
              />
            </div>
            {form.section3.idProofFile && (
              <div className="file-preview">
                ✓ Uploaded: {form.section3.idProofFile.name}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4 — CONTACT DETAILS ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 4 — CONTACT DETAILS</h2>
        
        <div className="form-row form-row-2">
          <div className="form-group required">
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={getAnswer("section4", "Mobile Number")}
              onChange={(e) => handleSectionAnswer("section4", "Mobile Number", e.target.value)}
              maxLength="10"
            />
          </div>

          <div className="form-group">
            <label>Alternate Number</label>
            <input
              type="tel"
              placeholder="Enter alternate number"
              value={getAnswer("section4", "Alternate Number")}
              onChange={(e) => handleSectionAnswer("section4", "Alternate Number", e.target.value)}
              maxLength="10"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group required">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={getAnswer("section4", "Email ID")}
              onChange={(e) => handleSectionAnswer("section4", "Email ID", e.target.value)}
            />
          </div>
        </div>

        <h3 style={{ margin: '20px 0 10px', color: '#000', fontSize: '1.1rem' }}>Address for Communication</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label>Address</label>
            <textarea
              placeholder="Enter complete address"
              value={getAnswer("section4", "Communication Address")}
              onChange={(e) => handleSectionAnswer("section4", "Communication Address", e.target.value)}
              rows="2"
            />
          </div>
        </div>

        <div className="form-row form-row-3">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={getAnswer("section4", "Communication City")}
              onChange={(e) => handleSectionAnswer("section4", "Communication City", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              placeholder="State"
              value={getAnswer("section4", "Communication State")}
              onChange={(e) => handleSectionAnswer("section4", "Communication State", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>PIN</label>
            <input
              type="text"
              placeholder="PIN code"
              value={getAnswer("section4", "Communication PIN")}
              onChange={(e) => handleSectionAnswer("section4", "Communication PIN", e.target.value)}
              maxLength="6"
            />
          </div>
        </div>

        <h3 style={{ margin: '20px 0 10px', color: '#000', fontSize: '1.1rem' }}>Permanent Address</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label>Address</label>
            <textarea
              placeholder="Enter complete permanent address"
              value={getAnswer("section4", "Permanent Address")}
              onChange={(e) => handleSectionAnswer("section4", "Permanent Address", e.target.value)}
              rows="2"
            />
          </div>
        </div>

        <div className="form-row form-row-3">
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={getAnswer("section4", "Permanent City")}
              onChange={(e) => handleSectionAnswer("section4", "Permanent City", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              placeholder="State"
              value={getAnswer("section4", "Permanent State")}
              onChange={(e) => handleSectionAnswer("section4", "Permanent State", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>PIN</label>
            <input
              type="text"
              placeholder="PIN code"
              value={getAnswer("section4", "Permanent PIN")}
              onChange={(e) => handleSectionAnswer("section4", "Permanent PIN", e.target.value)}
              maxLength="6"
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 5 — ACADEMIC QUALIFICATIONS ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 5 — ACADEMIC QUALIFICATIONS</h2>
        <p className="section-note">Mode: Regular / Distance / Online / Part-Time</p>
        
        {/* Graduation */}
        <h3 style={{ marginBottom: '15px', color: '#000' }}>Graduation</h3>
        {form.section5.graduation.map((row, index) => (
          <div key={index} className="academic-row">
            <div className="form-row grid-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Degree"
                  value={row.degree}
                  onChange={(e) => handleAcademicChange("graduation", index, "degree", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Discipline"
                  value={row.discipline}
                  onChange={(e) => handleAcademicChange("graduation", index, "discipline", e.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  value={row.mode}
                  onChange={(e) => handleAcademicChange("graduation", index, "mode", e.target.value)}
                >
                  <option value="">Mode</option>
                  <option value="Regular">Regular</option>
                  <option value="Distance">Distance</option>
                  <option value="Online">Online</option>
                  <option value="Part-Time">Part-Time</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="University"
                  value={row.university}
                  onChange={(e) => handleAcademicChange("graduation", index, "university", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Year"
                  value={row.year}
                  onChange={(e) => handleAcademicChange("graduation", index, "year", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="% / CGPA"
                  value={row.percentage}
                  onChange={(e) => handleAcademicChange("graduation", index, "percentage", e.target.value)}
                />
              </div>
            </div>
            <div className="row-actions">
              {index === form.section5.graduation.length - 1 && (
                <button type="button" className="add-row-btn" onClick={() => addAcademicRow("graduation")}>+ Add</button>
              )}
              {form.section5.graduation.length > 1 && (
                <button type="button" className="remove-row-btn" onClick={() => removeAcademicRow("graduation", index)}>− Remove</button>
              )}
            </div>
          </div>
        ))}

        {/* Post-Graduation */}
        <h3 style={{ margin: '25px 0 15px', color: '#000' }}>Post-Graduation</h3>
        {form.section5.postGraduation.map((row, index) => (
          <div key={index} className="academic-row">
            <div className="form-row grid-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Degree"
                  value={row.degree}
                  onChange={(e) => handleAcademicChange("postGraduation", index, "degree", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Discipline"
                  value={row.discipline}
                  onChange={(e) => handleAcademicChange("postGraduation", index, "discipline", e.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  value={row.mode}
                  onChange={(e) => handleAcademicChange("postGraduation", index, "mode", e.target.value)}
                >
                  <option value="">Mode</option>
                  <option value="Regular">Regular</option>
                  <option value="Distance">Distance</option>
                  <option value="Online">Online</option>
                  <option value="Part-Time">Part-Time</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="University"
                  value={row.university}
                  onChange={(e) => handleAcademicChange("postGraduation", index, "university", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Year"
                  value={row.year}
                  onChange={(e) => handleAcademicChange("postGraduation", index, "year", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="% / CGPA"
                  value={row.percentage}
                  onChange={(e) => handleAcademicChange("postGraduation", index, "percentage", e.target.value)}
                />
              </div>
            </div>
            <div className="row-actions">
              {index === form.section5.postGraduation.length - 1 && (
                <button type="button" className="add-row-btn" onClick={() => addAcademicRow("postGraduation")}>+ Add</button>
              )}
              {form.section5.postGraduation.length > 1 && (
                <button type="button" className="remove-row-btn" onClick={() => removeAcademicRow("postGraduation", index)}>− Remove</button>
              )}
            </div>
          </div>
        ))}

        {/* M.Phil / Other */}
        <h3 style={{ margin: '25px 0 15px', color: '#000' }}>M.Phil / Other</h3>
        {form.section5.mphil.map((row, index) => (
          <div key={index} className="academic-row">
            <div className="form-row grid-6">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Degree"
                  value={row.degree}
                  onChange={(e) => handleAcademicChange("mphil", index, "degree", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Discipline"
                  value={row.discipline}
                  onChange={(e) => handleAcademicChange("mphil", index, "discipline", e.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  value={row.mode}
                  onChange={(e) => handleAcademicChange("mphil", index, "mode", e.target.value)}
                >
                  <option value="">Mode</option>
                  <option value="Regular">Regular</option>
                  <option value="Distance">Distance</option>
                  <option value="Online">Online</option>
                  <option value="Part-Time">Part-Time</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="University"
                  value={row.university}
                  onChange={(e) => handleAcademicChange("mphil", index, "university", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Year"
                  value={row.year}
                  onChange={(e) => handleAcademicChange("mphil", index, "year", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="% / CGPA"
                  value={row.percentage}
                  onChange={(e) => handleAcademicChange("mphil", index, "percentage", e.target.value)}
                />
              </div>
            </div>
            <div className="row-actions">
              {index === form.section5.mphil.length - 1 && (
                <button type="button" className="add-row-btn" onClick={() => addAcademicRow("mphil")}>+ Add</button>
              )}
              {form.section5.mphil.length > 1 && (
                <button type="button" className="remove-row-btn" onClick={() => removeAcademicRow("mphil", index)}>− Remove</button>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* ========== SECTION 6 — PROFESSIONAL EXPERIENCE ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 6 — PROFESSIONAL EXPERIENCE (If applicable)</h2>
        
        {form.section6.experiences.map((exp, index) => (
          <div key={index} className="experience-row">
            <div className="form-row grid-5">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Organization"
                  value={exp.organization}
                  onChange={(e) => handleExperienceChange(index, "organization", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Designation"
                  value={exp.designation}
                  onChange={(e) => handleExperienceChange(index, "designation", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="From"
                  value={exp.from}
                  onChange={(e) => handleExperienceChange(index, "from", e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="To"
                  value={exp.to}
                  onChange={(e) => handleExperienceChange(index, "to", e.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  value={exp.nature}
                  onChange={(e) => handleExperienceChange(index, "nature", e.target.value)}
                >
                  <option value="">Nature</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
            </div>
            <div className="row-actions">
              {index === form.section6.experiences.length - 1 && (
                <button type="button" className="add-row-btn" onClick={addExperienceRow}>+ Add</button>
              )}
              {form.section6.experiences.length > 1 && (
                <button type="button" className="remove-row-btn" onClick={() => removeExperienceRow(index)}>− Remove</button>
              )}
            </div>
          </div>
        ))}

        <div className="form-row" style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label>Total Experience (Years)</label>
            <input
              type="text"
              placeholder="Enter total years of experience"
              value={form.section6.totalExperience}
              onChange={(e) => setForm(prev => ({
                ...prev,
                section6: {
                  ...prev.section6,
                  totalExperience: e.target.value
                }
              }))}
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 7 — PRESENT EMPLOYMENT DETAILS ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 7 — PRESENT EMPLOYMENT DETAILS</h2>
        
        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Organisation Name</label>
            <input
              type="text"
              placeholder="Enter organisation name"
              value={getAnswer("section7", "Organisation Name")}
              onChange={(e) => handleSectionAnswer("section7", "Organisation Name", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              placeholder="Enter designation"
              value={getAnswer("section7", "Designation")}
              onChange={(e) => handleSectionAnswer("section7", "Designation", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Employment Type</label>
            <div className="option-group-inline">
              {["Regular", "Contract", "Part-Time", "Business Owner"].map((type) => (
                <label key={type} className="radio-option">
                  <input
                    type="radio"
                    name="employmentType"
                    value={type}
                    checked={getAnswer("section7", "Employment Type") === type}
                    onChange={(e) => handleSectionAnswer("section7", "Employment Type", e.target.value)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Years of Experience</label>
            <input
              type="text"
              placeholder="Enter years"
              value={getAnswer("section7", "Years of Experience")}
              onChange={(e) => handleSectionAnswer("section7", "Years of Experience", e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 8 — RESEARCH INTEREST ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 8 — RESEARCH INTEREST</h2>
        
        <div className="form-row">
          <div className="form-group required">
            <label>Proposed Research Area / Topic</label>
            <input
              type="text"
              placeholder="Enter your proposed research area/topic"
              value={getAnswer("section8", "Proposed Research Area / Topic")}
              onChange={(e) => handleSectionAnswer("section8", "Proposed Research Area / Topic", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group required">
            <label>Why do you want to pursue PhD?</label>
            <textarea
              placeholder="Describe your motivation and goals for pursuing PhD..."
              value={getAnswer("section8", "Why do you want to pursue PhD?")}
              onChange={(e) => handleSectionAnswer("section8", "Why do you want to pursue PhD?", e.target.value)}
              rows="4"
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 9 — ENTRANCE EXAM DETAILS ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 9 — ENTRANCE EXAM DETAILS</h2>
        
        <div className="form-row">
          <div className="form-group">
            <label>Entrance Exam Fee Payment Mode</label>
            <div className="option-group-inline">
              {["Cash", "NEFT", "Bank Transfer"].map((mode) => (
                <label key={mode} className="radio-option">
                  <input
                    type="radio"
                    name="paymentMode"
                    value={mode}
                    checked={getAnswer("section9", "Entrance Exam Fee Payment Mode") === mode}
                    onChange={(e) => handleSectionAnswer("section9", "Entrance Exam Fee Payment Mode", e.target.value)}
                  />
                  {mode}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Receipt No. / NEFT / Bank Transfer Details</label>
            <input
              type="text"
              placeholder="Enter transaction details"
              value={getAnswer("section9", "Receipt No. / NEFT / Bank Transfer Details")}
              onChange={(e) => handleSectionAnswer("section9", "Receipt No. / NEFT / Bank Transfer Details", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Date & Bank</label>
            <input
              type="text"
              placeholder="Date and bank name"
              value={getAnswer("section9", "Date & Bank")}
              onChange={(e) => handleSectionAnswer("section9", "Date & Bank", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Entrance Mode</label>
            <div className="option-group-inline">
              {["Online", "Offline"].map((mode) => (
                <label key={mode} className="radio-option">
                  <input
                    type="radio"
                    name="entranceMode"
                    value={mode}
                    checked={getAnswer("section9", "Entrance Mode") === mode}
                    onChange={(e) => handleSectionAnswer("section9", "Entrance Mode", e.target.value)}
                  />
                  {mode}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Advertisement No. & Date</label>
            <input
              type="text"
              placeholder="Enter advertisement details"
              value={getAnswer("section9", "Advertisement No. & Date")}
              onChange={(e) => handleSectionAnswer("section9", "Advertisement No. & Date", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Cycle of Entrance Exam</label>
            <div className="option-group-inline">
              {["July/Aug", "Feb/March"].map((cycle) => (
                <label key={cycle} className="radio-option">
                  <input
                    type="radio"
                    name="examCycle"
                    value={cycle}
                    checked={getAnswer("section9", "Cycle of Entrance Exam") === cycle}
                    onChange={(e) => handleSectionAnswer("section9", "Cycle of Entrance Exam", e.target.value)}
                  />
                  {cycle}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Preferred Exam Date</label>
            <input
              type="date"
              value={getAnswer("section9", "Preferred Exam Date")}
              onChange={(e) => handleSectionAnswer("section9", "Preferred Exam Date", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Exam Centre / City</label>
            <input
              type="text"
              placeholder="Enter exam centre/city"
              value={getAnswer("section9", "Exam Centre / City")}
              onChange={(e) => handleSectionAnswer("section9", "Exam Centre / City", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Subject / Faculty Applied For</label>
            <input
              type="text"
              placeholder="Enter subject/faculty"
              value={getAnswer("section9", "Subject / Faculty Applied For")}
              onChange={(e) => handleSectionAnswer("section9", "Subject / Faculty Applied For", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Result of Entrance Exam</label>
            <div className="option-group-inline">
              {["Pass", "Fail", "Awaiting"].map((result) => (
                <label key={result} className="radio-option">
                  <input
                    type="radio"
                    name="examResult"
                    value={result}
                    checked={getAnswer("section9", "Result of Entrance Exam") === result}
                    onChange={(e) => handleSectionAnswer("section9", "Result of Entrance Exam", e.target.value)}
                  />
                  {result}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>If Entrance Exam Exempted (At What Ground)</label>
            <input
              type="text"
              placeholder="Enter exemption grounds"
              value={getAnswer("section9", "If Entrance Exam Exempted (Grounds)")}
              onChange={(e) => handleSectionAnswer("section9", "If Entrance Exam Exempted (Grounds)", e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 10 — DOCUMENT UPLOADS (ONLINE MODE) ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 10 — DOCUMENT UPLOADS</h2>
        <p className="section-note">Upload self-attested copies of all required documents</p>
        
        <div className="form-row">
          <div className="form-group ">
            <label>10th Marksheet</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) handleDocumentUpload("tenthMarksheet", file);
                }}
              />
            </div>
            {form.section10.tenthMarksheet && (
              <div className="file-preview">
                ✓ Uploaded: {form.section10.tenthMarksheet.name}
              </div>
            )}
          </div>

          <div className="form-group ">
            <label>12th Marksheet</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) handleDocumentUpload("twelfthMarksheet", file);
                }}
              />
            </div>
            {form.section10.twelfthMarksheet && (
              <div className="file-preview">
                ✓ Uploaded: {form.section10.twelfthMarksheet.name}
              </div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group ">
            <label>Graduation Degree</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) handleDocumentUpload("graduationDegree", file);
                }}
              />
            </div>
            {form.section10.graduationDegree && (
              <div className="file-preview">
                ✓ Uploaded: {form.section10.graduationDegree.name}
              </div>
            )}
          </div>

          <div className="form-group ">
            <label>PG Degree</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) handleDocumentUpload("pgDegree", file);
                }}
              />
            </div>
            {form.section10.pgDegree && (
              <div className="file-preview">
                ✓ Uploaded: {form.section10.pgDegree.name}
              </div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>CV / Resume</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) handleDocumentUpload("cvResume", file);
                }}
              />
            </div>
            {form.section10.cvResume && (
              <div className="file-preview">
                ✓ Uploaded: {form.section10.cvResume.name}
              </div>
            )}
          </div>

          <div className="form-group ">
            <label>Passport Size Photo</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) handleDocumentUpload("passportPhoto", file);
                }}
              />
            </div>
            {form.section10.passportPhoto && (
              <div className="file-preview">
                ✓ Uploaded: {form.section10.passportPhoto.name}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========== SECTION 11 — DECLARATION (ONLY CHECKBOX) ========== */}
      <section className="form-section declaration-section">
        <h2 className="section-title">🔹 SECTION 11 — DECLARATION</h2>
        
        <div className="declaration-text">
          <p>I hereby declare that the information provided by me is true and correct to the best of my knowledge.</p>
          <p style={{ marginTop: '15px' }}>I understand that:</p>
          <ul>
            <li>✓ Entrance qualification is mandatory for PhD admission</li>
            <li>✓ Eligibility will be verified as per university norms</li>
            <li>✓ Admission depends on academic evaluation</li>
          </ul>
        </div>

        <div className="form-row">
          <label className="consent-checkbox">
            <input
              type="checkbox"
              checked={form.section11?.find(q => q.question === "Consent")?.answer || false}
              onChange={(e) => {
                const section11 = [...form.section11];
                const index = section11.findIndex(q => q.question === "Consent");
                if (index !== -1) {
                  section11[index] = { ...section11[index], answer: e.target.checked };
                  setForm({ ...form, section11 });
                }
              }}
            />
            I have read and agree to all the terms and conditions mentioned above
          </label>
        </div>
      </section>

      {/* ========== SUBMIT BUTTON ========== */}
      <button 
        className="submit-btn" 
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Entrance Exam Application"}
      </button>
    </div>
  );
}
