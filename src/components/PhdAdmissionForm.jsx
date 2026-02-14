import React, { useState } from "react";
import "./PhdAdmissionForm.css";
import axiosInstance from "../api/axiosInstance";

export default function AdmissionOfferForm() {
  const emptyForm = {
    // SECTION 1 — APPLICANT PROFILE
    applicantProfile: {
      fullName: "",
      fatherOrSpouseName: "",
      dob: "",
      gender: "",
      mobile: "",
      email: "",
      cityState: ""
    },

    // SECTION 2 — ACADEMIC QUALIFICATION
    academicQualification: {
      graduationDegree: "",
      graduationUniversity: "",
      graduationYear: "",
      graduationPercentage: "",
      postGraduationDegree: "",
      postGraduationUniversity: "",
      postGraduationYear: "",
      postGraduationPercentage: "",
      mode: ""
    },

    // SECTION 3 — PROFESSIONAL PROFILE
    professionalProfile: {
      currentRole: "",
      organization: "",
      industry: "",
      workExperience: ""
    },

    // SECTION 4 — PhD OFFER DETAILS
    phdOfferDetails: {
      entranceExamUniversity: "",
      entranceExamDate: "",
      entranceResult: "",
      offeredStream: "",
      offeredStreamOther: "",
      proposedResearchArea: "",
      offeredUniversity: "",
      universityType: "",
      otherInstitution: ""
    },

    // SECTION 5 — FEE STRUCTURE
    feeStructure: {
      commonEntranceFee: "",
      totalPhdProgramFee: ""
    },

    // SECTION 6 — INSTALLMENT STRUCTURE
    installmentStructure: {
      firstInstallment: {
        amount: "",
        payableAt: "At the Time of Admission",
        includes: "Admission Offer Letter, Supervisor / Guide Introduction"
      },
      secondInstallment: {
        amount: "",
        milestones: "Course Work Completion, Synopsis Preparation, Topic Finalisation, Synopsis Submission"
      },
      thirdInstallment: {
        amount: "",
        milestones: "RDC Approval, Research Progress Review, Research Paper Submission"
      },
      fourthInstallment: {
        amount: "",
        milestones: "Pre-Thesis Certificate, Thesis Submission, Plagiarism Report, Research Publication, Thesis Evaluation, Viva Voce, Provisional Certificate"
      },
      finalInstallment: {
        amount: "",
        milestone: "Final Degree Award"
      }
    },

    // SECTION 7 — ADDITIONAL FEES
    additionalFees: {
      fees: [],
      details: ""
    },

    // SECTION 8 — DOCUMENT UPLOADS (ONLINE MODE)
    documentUploads: {
      tenthMarksheet: null,
      twelfthMarksheet: null,
      graduationDegree: null,
      pgDegree: null,
      idProof: null,
      passportPhoto: null,
      cvResume: null,
      researchProposal: null
    },

    // SECTION 9 — DECLARATION
    declaration: {
      consent: false
    }
  };

  const [form, setForm] = useState(emptyForm);
  const [showOtherStream, setShowOtherStream] = useState(false);
  const [showOtherInstitution, setShowOtherInstitution] = useState(false);

  // ========== HANDLER FUNCTIONS ==========
  const handleFieldChange = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNestedFieldChange = (section, subsection, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...prev[section][subsection],
          [field]: value
        }
      }
    }));
  };

  const handleInstallmentChange = (installment, field, value) => {
    setForm((prev) => ({
      ...prev,
      installmentStructure: {
        ...prev.installmentStructure,
        [installment]: {
          ...prev.installmentStructure[installment],
          [field]: value
        }
      }
    }));
  };

  const handleAdditionalFeeChange = (value) => {
    setForm((prev) => {
      const existing = prev.additionalFees.fees || [];
      let updated = [...existing];
      
      if (updated.includes(value)) {
        updated = updated.filter(item => item !== value);
      } else {
        updated.push(value);
      }
      
      return {
        ...prev,
        additionalFees: {
          ...prev.additionalFees,
          fees: updated
        }
      };
    });
  };

  // ========== HANDLER FOR DOCUMENT UPLOADS ==========
  const handleDocumentUpload = (field, file) => {
    setForm((prev) => ({
      ...prev,
      documentUploads: {
        ...prev.documentUploads,
        [field]: file
      }
    }));
  };

  // ========== VALIDATION ==========
  const validateForm = () => {
    if (!form.applicantProfile.fullName?.trim()) {
      alert("Please enter Full Name");
      return false;
    }
    if (!form.applicantProfile.fatherOrSpouseName?.trim()) {
      alert("Please enter Father's/Spouse Name");
      return false;
    }
    if (!form.applicantProfile.mobile?.trim()) {
      alert("Please enter Mobile Number");
      return false;
    }
    if (form.applicantProfile.mobile.length !== 10) {
      alert("Mobile number must be 10 digits");
      return false;
    }
    if (!form.applicantProfile.email?.trim()) {
      alert("Please enter Email ID");
      return false;
    }
    if (!form.phdOfferDetails.proposedResearchArea?.trim()) {
      alert("Please enter Proposed Research Area/Topic");
      return false;
    }
    if (!form.phdOfferDetails.offeredUniversity?.trim()) {
      alert("Please enter Offered University");
      return false;
    }
    
    // ===== DOCUMENT UPLOAD VALIDATION =====
    if (!form.documentUploads.tenthMarksheet) {
      alert("Please upload 10th Marksheet (Required)");
      return false;
    }
    if (!form.documentUploads.twelfthMarksheet) {
      alert("Please upload 12th Marksheet (Required)");
      return false;
    }
    
    if (!form.declaration.consent) {
      alert("Please accept the declaration");
      return false;
    }
    return true;
  };

  // ========== SUBMIT HANDLER ==========
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const dataToSend = new FormData();
      
      // Append all form data as JSON
      dataToSend.append("formData", JSON.stringify({
        ...form,
        documentUploads: {
          ...form.documentUploads,
          // Don't send file objects in JSON
          tenthMarksheet: form.documentUploads.tenthMarksheet?.name || null,
          twelfthMarksheet: form.documentUploads.twelfthMarksheet?.name || null,
          graduationDegree: form.documentUploads.graduationDegree?.name || null,
          pgDegree: form.documentUploads.pgDegree?.name || null,
          idProof: form.documentUploads.idProof?.name || null,
          passportPhoto: form.documentUploads.passportPhoto?.name || null,
          cvResume: form.documentUploads.cvResume?.name || null,
          researchProposal: form.documentUploads.researchProposal?.name || null
        }
      }));
      
      // Append all document files
      Object.keys(form.documentUploads).forEach(key => {
        if (form.documentUploads[key]) {
          dataToSend.append(key, form.documentUploads[key]);
        }
      });

      console.log("Submitting PhD Admission Offer Application...");
      
      const res = await axiosInstance.post("/phd-admission/apply", dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if (res.data.success) {
        alert("PhD Admission Offer Application Submitted Successfully! ✅");
        setForm(emptyForm);
        setShowOtherStream(false);
        setShowOtherInstitution(false);
      } else {
        alert(res.data.message || "Submission Failed ❌");
      }
    } catch (err) {
      console.error("Submit Error:", err);
      alert(err.response?.data?.message || "Server Error ❌");
    }
  };

  // ========== HELPER FUNCTIONS ==========
  const countWords = (text) => {
    return text?.trim() ? text.trim().split(/\s+/).length : 0;
  };

  return (
    <div className="admission-offer-form">
      <h1>🎓 COMMON Ph.D ADMISSION OFFER FORM</h1>
      <p className="sub-heading">SHODHSUTRA — Official Admission Offer Document for Doctoral Programs</p>

      {/* ========== SECTION 1 — APPLICANT PROFILE ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 1 — APPLICANT PROFILE</h2>
        
        <div className="form-row">
          <div className="form-group required">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.applicantProfile.fullName}
              onChange={(e) => handleFieldChange("applicantProfile", "fullName", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group required">
            <label>Father's / Spouse Name</label>
            <input
              type="text"
              placeholder="Enter father's or spouse name"
              value={form.applicantProfile.fatherOrSpouseName}
              onChange={(e) => handleFieldChange("applicantProfile", "fatherOrSpouseName", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group required">
            <label>Date of Birth</label>
            <input
              type="date"
              value={form.applicantProfile.dob}
              onChange={(e) => handleFieldChange("applicantProfile", "dob", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="option-group-inline">
              {["Male", "Female", "Other"].map((gender) => (
                <label key={gender} className="radio-option">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={form.applicantProfile.gender === gender}
                    onChange={(e) => handleFieldChange("applicantProfile", "gender", e.target.value)}
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group required">
            <label>Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter 10-digit mobile number"
              value={form.applicantProfile.mobile}
              onChange={(e) => handleFieldChange("applicantProfile", "mobile", e.target.value)}
              maxLength="10"
            />
          </div>

          <div className="form-group required">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={form.applicantProfile.email}
              onChange={(e) => handleFieldChange("applicantProfile", "email", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group required">
            <label>City / State</label>
            <input
              type="text"
              placeholder="Enter city and state"
              value={form.applicantProfile.cityState}
              onChange={(e) => handleFieldChange("applicantProfile", "cityState", e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 2 — ACADEMIC QUALIFICATION ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 2 — ACADEMIC QUALIFICATION</h2>
        
        <div className="form-row">
          <div className="form-group required">
            <label>Graduation Degree</label>
            <input
              type="text"
              placeholder="e.g., B.Sc., B.A., B.Com, B.Tech"
              value={form.academicQualification.graduationDegree}
              onChange={(e) => handleFieldChange("academicQualification", "graduationDegree", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group required">
            <label>University</label>
            <input
              type="text"
              placeholder="Enter university name"
              value={form.academicQualification.graduationUniversity}
              onChange={(e) => handleFieldChange("academicQualification", "graduationUniversity", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Year of Passing</label>
            <input
              type="number"
              placeholder="YYYY"
              min="1980"
              max={new Date().getFullYear()}
              value={form.academicQualification.graduationYear}
              onChange={(e) => handleFieldChange("academicQualification", "graduationYear", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Percentage / CGPA</label>
            <input
              type="text"
              placeholder="e.g., 75% or 7.5 CGPA"
              value={form.academicQualification.graduationPercentage}
              onChange={(e) => handleFieldChange("academicQualification", "graduationPercentage", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group required">
            <label>Post-Graduation Degree</label>
            <input
              type="text"
              placeholder="e.g., M.Sc., M.A., M.Com, M.Tech"
              value={form.academicQualification.postGraduationDegree}
              onChange={(e) => handleFieldChange("academicQualification", "postGraduationDegree", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group required">
            <label>University</label>
            <input
              type="text"
              placeholder="Enter university name"
              value={form.academicQualification.postGraduationUniversity}
              onChange={(e) => handleFieldChange("academicQualification", "postGraduationUniversity", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Year of Passing / Pursuing</label>
            <input
              type="text"
              placeholder="YYYY or Pursuing"
              value={form.academicQualification.postGraduationYear}
              onChange={(e) => handleFieldChange("academicQualification", "postGraduationYear", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Percentage / CGPA</label>
            <input
              type="text"
              placeholder="e.g., 80% or 8.0 CGPA"
              value={form.academicQualification.postGraduationPercentage}
              onChange={(e) => handleFieldChange("academicQualification", "postGraduationPercentage", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Mode</label>
            <div className="option-group-inline">
              {["Regular", "Distance", "Online"].map((mode) => (
                <label key={mode} className="radio-option">
                  <input
                    type="radio"
                    name="pgMode"
                    value={mode}
                    checked={form.academicQualification.mode === mode}
                    onChange={(e) => handleFieldChange("academicQualification", "mode", e.target.value)}
                  />
                  {mode}
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3 — PROFESSIONAL PROFILE ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 3 — PROFESSIONAL PROFILE (If Applicable)</h2>
        
        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Current Role / Designation</label>
            <input
              type="text"
              placeholder="e.g., Research Assistant, Teacher, Manager"
              value={form.professionalProfile.currentRole}
              onChange={(e) => handleFieldChange("professionalProfile", "currentRole", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Organisation / Business Name</label>
            <input
              type="text"
              placeholder="Enter organization name"
              value={form.professionalProfile.organization}
              onChange={(e) => handleFieldChange("professionalProfile", "organization", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Industry / Domain</label>
            <input
              type="text"
              placeholder="e.g., Education, Healthcare, IT"
              value={form.professionalProfile.industry}
              onChange={(e) => handleFieldChange("professionalProfile", "industry", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Total Work Experience</label>
            <input
              type="text"
              placeholder="e.g., 5 years, 2.5 years"
              value={form.professionalProfile.workExperience}
              onChange={(e) => handleFieldChange("professionalProfile", "workExperience", e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 4 — PhD OFFER DETAILS ========== */}
      <section className="form-section">
        <h2 className="section-title">🎓 SECTION 4 — PhD OFFER DETAILS</h2>
         <div className="form-row">
          <div className="form-group">
            <label>Details of Entrance Exam</label>
            <input
              type="text"
              placeholder=""
              value={form.phdOfferDetails.entranceExamUniversity}
              onChange={(e) => handleFieldChange("phdOfferDetails", "entranceExamUniversity", e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Name of University (Entrance Exam)</label>
            <input
              type="text"
              placeholder="Enter university name"
              value={form.phdOfferDetails.entranceExamUniversity}
              onChange={(e) => handleFieldChange("phdOfferDetails", "entranceExamUniversity", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Date of Result Publication</label>
            <input
              type="date"
              value={form.phdOfferDetails.entranceExamDate}
              onChange={(e) => handleFieldChange("phdOfferDetails", "entranceExamDate", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Result</label>
            <div className="option-group-inline">
              {["Pass", "Fail"].map((result) => (
                <label key={result} className="radio-option">
                  <input
                    type="radio"
                    name="entranceResult"
                    value={result}
                    checked={form.phdOfferDetails.entranceResult === result}
                    onChange={(e) => handleFieldChange("phdOfferDetails", "entranceResult", e.target.value)}
                  />
                  {result}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Offered Stream / Faculty</label>
            <div className="option-grid grid-3">
              {[
                "Humanity (Arts / Commerce / Science)",
                "Law",
                "Pharmacy",
                "Management / Finance",
                "Education",
                "Computer Science / IT",
                "Commerce",
                "Paramedical / Allied Health Science",
                "Medical Science",
                "Engineering"
              ].map((stream) => (
                <label key={stream} className="check-option">
                  <input
                    type="radio"
                    name="offeredStream"
                    value={stream}
                    checked={form.phdOfferDetails.offeredStream === stream}
                    onChange={(e) => {
                      handleFieldChange("phdOfferDetails", "offeredStream", e.target.value);
                      setShowOtherStream(false);
                    }}
                  />
                  {stream}
                </label>
              ))}
              <label className="check-option">
                <input
                  type="radio"
                  name="offeredStream"
                  value="Other"
                  checked={form.phdOfferDetails.offeredStream === "Other"}
                  onChange={(e) => {
                    handleFieldChange("phdOfferDetails", "offeredStream", e.target.value);
                    setShowOtherStream(true);
                  }}
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
                value={form.phdOfferDetails.offeredStreamOther}
                onChange={(e) => handleFieldChange("phdOfferDetails", "offeredStreamOther", e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="form-row">
          <div className="form-group required">
            <label>Proposed Research Area / Topic</label>
            <input
              type="text"
              placeholder="Enter your proposed research area"
              value={form.phdOfferDetails.proposedResearchArea}
              onChange={(e) => handleFieldChange("phdOfferDetails", "proposedResearchArea", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group required">
            <label>Offered University</label>
            <input
              type="text"
              placeholder="Enter university name"
              value={form.phdOfferDetails.offeredUniversity}
              onChange={(e) => handleFieldChange("phdOfferDetails", "offeredUniversity", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>University Type</label>
            <div className="option-grid grid-2">
              {[
                "Govt. Established & UGC Approved Self Funded / Private University",
                "Govt Established Govt Aided University",
                "UGC Established & MHRD Approved Deemed to Be University"
              ].map((type) => (
                <label key={type} className="check-option">
                  <input
                    type="radio"
                    name="universityType"
                    value={type}
                    checked={form.phdOfferDetails.universityType === type}
                    onChange={(e) => {
                      handleFieldChange("phdOfferDetails", "universityType", e.target.value);
                      setShowOtherInstitution(false);
                    }}
                  />
                  {type}
                </label>
              ))}
              <label className="check-option">
                <input
                  type="radio"
                  name="universityType"
                  value="Any Other Institution / College"
                  checked={form.phdOfferDetails.universityType === "Any Other Institution / College"}
                  onChange={(e) => {
                    handleFieldChange("phdOfferDetails", "universityType", e.target.value);
                    setShowOtherInstitution(true);
                  }}
                />
                Any Other Institution / College
              </label>
            </div>
          </div>
        </div>

        {showOtherInstitution && (
          <div className="form-row">
            <div className="form-group">
              <label>Specify Other Institution/College</label>
              <input
                type="text"
                placeholder="Enter institution/college name"
                value={form.phdOfferDetails.otherInstitution}
                onChange={(e) => handleFieldChange("phdOfferDetails", "otherInstitution", e.target.value)}
              />
            </div>
          </div>
        )}
      </section>

      {/* ========== SECTION 5 — FEE STRUCTURE ========== */}
      <section className="form-section">
        <h2 className="section-title">💰 SECTION 5 — FEE STRUCTURE</h2>
        <p className="section-note">Please enter the applicable fee amounts:</p>
        
        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Common Entrance Exam Fee (₹)</label>
            <input
              type="number"
              placeholder="e.g., 5000"
              value={form.feeStructure.commonEntranceFee}
              onChange={(e) => handleFieldChange("feeStructure", "commonEntranceFee", e.target.value)}
            />
            <span className="input-note">Example: ₹5,000 as per process</span>
          </div>

          <div className="form-group">
            <label>Total PhD Program Fee (₹)</label>
            <input
              type="number"
              placeholder="e.g., 390000"
              value={form.feeStructure.totalPhdProgramFee}
              onChange={(e) => handleFieldChange("feeStructure", "totalPhdProgramFee", e.target.value)}
            />
            <span className="input-note">Example: ₹3,90,000 for Law/Pharmacy stream</span>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6 — INSTALLMENT STRUCTURE ========== */}
      <section className="form-section">
        <h2 className="section-title">💳 SECTION 6 — INSTALLMENT STRUCTURE</h2>
        <p className="section-note">25% each installment — Milestone based progression</p>
        
        <div className="form-row">
          <div className="form-group">
            <label>1️⃣ First Installment (25%)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={form.installmentStructure.firstInstallment.amount}
              onChange={(e) => handleInstallmentChange("firstInstallment", "amount", e.target.value)}
            />
            <span className="input-note">Payable At: At the Time of Admission</span>
            <span className="input-note">Includes: Admission Offer Letter, Supervisor / Guide Introduction</span>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>2️⃣ Second Installment (25%)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={form.installmentStructure.secondInstallment.amount}
              onChange={(e) => handleInstallmentChange("secondInstallment", "amount", e.target.value)}
            />
            <span className="input-note">Milestones: Course Work Completion, Synopsis Preparation, Topic Finalisation, Synopsis Submission</span>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>3️⃣ Third Installment (25%)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={form.installmentStructure.thirdInstallment.amount}
              onChange={(e) => handleInstallmentChange("thirdInstallment", "amount", e.target.value)}
            />
            <span className="input-note">Milestones: RDC Approval, Research Progress Review, Research Paper Submission</span>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>4️⃣ Fourth Installment (25%)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={form.installmentStructure.fourthInstallment.amount}
              onChange={(e) => handleInstallmentChange("fourthInstallment", "amount", e.target.value)}
            />
            <span className="input-note">Milestones: Pre-Thesis Certificate, Thesis Submission, Plagiarism Report, Research Publication, Thesis Evaluation, Viva Voce, Provisional Certificate</span>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>5️⃣ Final Installment (If Applicable)</label>
            <input
              type="number"
              placeholder="Enter amount if applicable"
              value={form.installmentStructure.finalInstallment.amount}
              onChange={(e) => handleInstallmentChange("finalInstallment", "amount", e.target.value)}
            />
            <span className="input-note">Milestone: Final Degree Award</span>
            <span className="input-note">Process may vary as per university guidelines</span>
            <span className="input-note">Law & Pharmacy</span>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7 — ADDITIONAL FEES ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 7 — ADDITIONAL FEES</h2>
        <p className="section-note">Applicable If Required:</p>
        
        <div className="option-grid grid-2">
          {[
            "PhD Degree Fee",
            "Migration Fee",
            "Documentation Charges",
            "Publication Charges"
          ].map((fee) => (
            <label key={fee} className="check-option">
              <input
                type="checkbox"
                value={fee}
                checked={form.additionalFees.fees?.includes(fee)}
                onChange={(e) => handleAdditionalFeeChange(e.target.value)}
              />
              {fee}
            </label>
          ))}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Details:</label>
            <textarea
              placeholder="Enter any additional fee details..."
              value={form.additionalFees.details}
              onChange={(e) => handleFieldChange("additionalFees", "details", e.target.value)}
              rows="3"
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 8 — DOCUMENT UPLOADS ========== */}
      <section className="form-section">
        <h2 className="section-title">🔹 SECTION 8 — DOCUMENT UPLOADS</h2>
        <p className="section-note">Upload self-attested copies of required documents</p>
        
        <div className="form-row">
          <div className="form-group required">
            <label>📄 10th Marksheet <span style={{color: '#f44336'}}>*</span></label>
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
            {form.documentUploads.tenthMarksheet && (
              <div className="file-preview">
                ✓ Uploaded: {form.documentUploads.tenthMarksheet.name}
              </div>
            )}
          </div>

          <div className="form-group required">
            <label>📄 12th Marksheet <span style={{color: '#f44336'}}>*</span></label>
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
            {form.documentUploads.twelfthMarksheet && (
              <div className="file-preview">
                ✓ Uploaded: {form.documentUploads.twelfthMarksheet.name}
              </div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>📄 Graduation Degree</label>
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
            {form.documentUploads.graduationDegree && (
              <div className="file-preview">
                ✓ Uploaded: {form.documentUploads.graduationDegree.name}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>📄 PG Degree</label>
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
            {form.documentUploads.pgDegree && (
              <div className="file-preview">
                ✓ Uploaded: {form.documentUploads.pgDegree.name}
              </div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>🪪 ID Proof</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) handleDocumentUpload("idProof", file);
                }}
              />
            </div>
            {form.documentUploads.idProof && (
              <div className="file-preview">
                ✓ Uploaded: {form.documentUploads.idProof.name}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>📸 Passport Size Photo</label>
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
            {form.documentUploads.passportPhoto && (
              <div className="file-preview">
                ✓ Uploaded: {form.documentUploads.passportPhoto.name}
              </div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>📋 CV / Resume</label>
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
            {form.documentUploads.cvResume && (
              <div className="file-preview">
                ✓ Uploaded: {form.documentUploads.cvResume.name}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>📝 Research Proposal (If available)</label>
            <div className="file-input-wrapper">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) handleDocumentUpload("researchProposal", file);
                }}
              />
            </div>
            {form.documentUploads.researchProposal && (
              <div className="file-preview">
                ✓ Uploaded: {form.documentUploads.researchProposal.name}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========== SECTION 9 — DECLARATION ========== */}
      <section className="form-section declaration-section">
        <h2 className="section-title">🔹 SECTION 9 — DECLARATION</h2>
        
        <div className="declaration-text">
          <p>I hereby confirm that:</p>
          <ul>
            <li>✓ I have understood the PhD process</li>
            <li>✓ I agree with the fee structure</li>
            <li>✓ I acknowledge milestone-based progression</li>
            <li>✓ I understand completion depends on academic performance</li>
          </ul>
        </div>

        <div className="form-row">
          <label className="consent-checkbox">
            <input
              type="checkbox"
              checked={form.declaration.consent}
              onChange={() => setForm({
                ...form,
                declaration: {
                  ...form.declaration,
                  consent: !form.declaration.consent
                }
              })}
            />
            I have read and agree to all the terms and conditions mentioned above
          </label>
        </div>
      </section>

      {/* Submit Button */}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit PhD Admission Offer Application
      </button>
    </div>
  );
}


