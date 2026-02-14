import React, { useState } from "react";
import "./ScholarshipForm.css";
import axiosInstance from "../api/axiosInstance";

export default function ScholarshipForm() {
  const emptyForm = {
    personalInfo: {
      fullName: "",
      dob: "",
      gender: "",
      mobile: "",
      email: "",
      permanentAddress: ""
    },

    academicDetails: {
      highestQualification: "",
      university: "",
      yearOfPassing: "",
      percentage: ""
    },

    proposedSubject: "",

    professionalDetails: {
      employmentStatus: "",
      otherStatus: "",
      organization: "",
      designation: "",
      workExperience: ""
    },

    scholarshipEligibility: [],

    researchBackground: {
      hasPublished: "",
      publicationDetails: "",
      hasAttended: "",
      conferenceDetails: "",
      researchInterest: ""
    },

    statementOfNeed: "",

    declaration: {
      consent: false
    }
  };

  const [form, setForm] = useState(emptyForm);
  // ❌ REMOVED: supportingDocs and signatureFile - UI mein nahi hai

  const handleFieldChange = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // ✅ FIXED: handleNestedFieldChange for researchBackground (no subsection parameter)
  const handleNestedFieldChange = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleEligibilityChange = (value) => {
    setForm((prev) => {
      const existing = prev.scholarshipEligibility || [];
      let updated = [...existing];
      
      if (updated.includes(value)) {
        updated = updated.filter(item => item !== value);
      } else {
        updated.push(value);
      }
      
      return {
        ...prev,
        scholarshipEligibility: updated
      };
    });
  };

  // ✅ FIXED: Other eligibility input should ADD onBlur, not onChange
  const handleOtherEligibility = (e) => {
    const otherValue = e.target.value.trim();
    if (otherValue) {
      handleEligibilityChange(otherValue);
      e.target.value = ""; // Clear after adding
    }
  };

  // ✅ FIXED: Validation with proper checks
  const validateForm = () => {
    if (!form.personalInfo.fullName?.trim()) {
      alert("Please enter your full name");
      return false;
    }
    if (!form.personalInfo.email?.trim()) {
      alert("Please enter your email address");
      return false;
    }
    if (!form.personalInfo.mobile?.trim()) {
      alert("Please enter your mobile number");
      return false;
    }
    if (form.personalInfo.mobile.length !== 10) {
      alert("Mobile number must be 10 digits");
      return false;
    }
    if (!form.academicDetails.highestQualification?.trim()) {
      alert("Please enter your highest qualification");
      return false;
    }
    if (!form.academicDetails.university?.trim()) {
      alert("Please enter your university/institution name");
      return false;
    }
    if (!form.proposedSubject?.trim()) {
      alert("Please enter your Proposed PhD Subject");
      return false;
    }
    if (!form.statementOfNeed?.trim()) {
      alert("Please provide your Statement of Need");
      return false;
    }
    if (!form.declaration.consent) {
      alert("Please accept the declaration");
      return false;
    }
    return true;
  };

  // ✅ FIXED: handleSubmit - removed file upload logic, simplified data structure
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      // ✅ SIMPLIFIED: Direct JSON object, no FormData needed since no files
      const dataToSend = {
        ...form,
        // Ensure scholarshipEligibility is always array
        scholarshipEligibility: form.scholarshipEligibility || []
      };

      console.log("Submitting Scholarship Application...", dataToSend);
      
      const res = await axiosInstance.post("/scholarship/apply", dataToSend);

      if (res.data.success) {
        alert("Scholarship Application Submitted Successfully! ✅");
        setForm(emptyForm);
        // ❌ REMOVED: setSupportingDocs and setSignatureFile
      } else {
        alert(res.data.message || "Submission Failed ❌");
      }
    } catch (err) {
      console.error("Submit Error:", err);
      alert(err.response?.data?.message || "Server Error ❌");
    }
  };

  // ✅ Helper function for word count
  const countWords = (text) => {
    return text?.trim() ? text.trim().split(/\s+/).length : 0;
  };

  // ✅ UI is EXACTLY same as aapka diya hua - kuch nahi badla
  return (
    <div className="scholarship-form">
      <h1>PhD Scholarship Application</h1>
      <p className="sub-heading">For Internal Scholarship Consideration – 10% / 20% / 25%</p>

      {/* Section A: Personal Information */}
      <section className="form-section">
        <h2 className="section-title">SECTION A: PERSONAL INFORMATION</h2>
        
        <div className="form-row">
          <div className="form-group required">
            <label>Full Name (as per academic records)</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.personalInfo.fullName}
              onChange={(e) => handleFieldChange("personalInfo", "fullName", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group required">
            <label>Date of Birth</label>
            <input
              type="date"
              value={form.personalInfo.dob}
              onChange={(e) => handleFieldChange("personalInfo", "dob", e.target.value)}
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
                    checked={form.personalInfo.gender === gender}
                    onChange={(e) => handleFieldChange("personalInfo", "gender", e.target.value)}
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
              value={form.personalInfo.mobile}
              onChange={(e) => handleFieldChange("personalInfo", "mobile", e.target.value)}
              maxLength="10"
            />
          </div>

          <div className="form-group required">
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={form.personalInfo.email}
              onChange={(e) => handleFieldChange("personalInfo", "email", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Permanent Address</label>
            <textarea
              placeholder="Enter your complete permanent address"
              value={form.personalInfo.permanentAddress}
              onChange={(e) => handleFieldChange("personalInfo", "permanentAddress", e.target.value)}
              rows="3"
            />
          </div>
        </div>
      </section>

      {/* Section B: Academic Details */}
      <section className="form-section">
        <h2 className="section-title">SECTION B: ACADEMIC DETAILS</h2>
        
        <div className="form-row form-row-2">
          <div className="form-group required">
            <label>Highest Qualification</label>
            <input
              type="text"
              placeholder="e.g., M.Sc., M.Tech, MA"
              value={form.academicDetails.highestQualification}
              onChange={(e) => handleFieldChange("academicDetails", "highestQualification", e.target.value)}
            />
          </div>

          <div className="form-group required">
            <label>Name of University/Institution</label>
            <input
              type="text"
              placeholder="Enter university/institution name"
              value={form.academicDetails.university}
              onChange={(e) => handleFieldChange("academicDetails", "university", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Year of Passing</label>
            <input
              type="number"
              placeholder="YYYY"
              min="1950"
              max={new Date().getFullYear()}
              value={form.academicDetails.yearOfPassing}
              onChange={(e) => handleFieldChange("academicDetails", "yearOfPassing", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Percentage / CGPA</label>
            <input
              type="text"
              placeholder="e.g., 85% or 8.5 CGPA"
              value={form.academicDetails.percentage}
              onChange={(e) => handleFieldChange("academicDetails", "percentage", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group required">
            <label>Proposed PhD Subject/Discipline</label>
            <input
              type="text"
              placeholder="Enter your proposed PhD subject"
              value={form.proposedSubject}
              onChange={(e) => setForm({ ...form, proposedSubject: e.target.value })}
            />
          </div>
        </div>
      </section>

      {/* Section C: Professional Details */}
      <section className="form-section">
        <h2 className="section-title">SECTION C: PROFESSIONAL DETAILS (If Applicable)</h2>
        
        <div className="form-row">
          <div className="form-group">
            <label>Current Employment Status</label>
            <div className="option-grid grid-2">
              {["Employed", "Self-Employed", "Unemployed", "Homemaker", "Other"].map((status) => (
                <label key={status} className="check-option">
                  <input
                    type="radio"
                    name="employmentStatus"
                    value={status}
                    checked={form.professionalDetails.employmentStatus === status}
                    onChange={(e) => handleFieldChange("professionalDetails", "employmentStatus", e.target.value)}
                  />
                  {status}
                </label>
              ))}
            </div>
          </div>
        </div>

        {form.professionalDetails.employmentStatus === "Other" && (
          <div className="form-row">
            <div className="form-group">
              <label>Please Specify</label>
              <input
                type="text"
                placeholder="Specify your employment status"
                value={form.professionalDetails.otherStatus}
                onChange={(e) => handleFieldChange("professionalDetails", "otherStatus", e.target.value)}
              />
            </div>
          </div>
        )}

        {form.professionalDetails.employmentStatus && 
         form.professionalDetails.employmentStatus !== "Unemployed" && 
         form.professionalDetails.employmentStatus !== "Homemaker" && (
          <>
            <div className="form-row form-row-2">
              <div className="form-group">
                <label>Organization Name (if employed):</label>
                <input
                  type="text"
                  placeholder="Enter organization/institution name"
                  value={form.professionalDetails.organization}
                  onChange={(e) => handleFieldChange("professionalDetails", "organization", e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Designation:</label>
                <input
                  type="text"
                  placeholder="Enter your designation"
                  value={form.professionalDetails.designation}
                  onChange={(e) => handleFieldChange("professionalDetails", "designation", e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Total Work Experience (in years):</label>
                <input
                  type="number"
                  placeholder="Enter years of experience"
                  step="0.5"
                  min="0"
                  value={form.professionalDetails.workExperience}
                  onChange={(e) => handleFieldChange("professionalDetails", "workExperience", e.target.value)}
                />
              </div>
            </div>
          </>
        )}
      </section>

      {/* Section D: Scholarship Eligibility Grounds */}
      <section className="form-section">
        <h2 className="section-title">SECTION D: SCHOLARSHIP ELIGIBILITY GROUNDS</h2>
        <p className="section-note">Please tick the applicable category (supporting documents may be required):</p>
        
        <div className="option-grid grid-3">
          {[
            "Unemployed Candidate",
            "Meritorious Student (Above 70% / Distinction)",
            "Financially Weaker Background",
            "Single Parent / Homemaker",
            "Physically Challenged Candidate",
            "Research Publication Experience",
            "Previous Academic Excellence Awards",
            "Defense / Government Service Background"
          ].map((category) => (
            <label key={category} className="check-option">
              <input
                type="checkbox"
                value={category}
                checked={form.scholarshipEligibility?.includes(category)}
                onChange={(e) => handleEligibilityChange(e.target.value)}
              />
              {category}
            </label>
          ))}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Other (Specify):</label>
            <input
              type="text"
              placeholder="Specify any other eligibility category"
              onBlur={handleOtherEligibility}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleOtherEligibility(e);
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* Section E: Research Background */}
      <section className="form-section">
        <h2 className="section-title">SECTION E: RESEARCH BACKGROUND (If Any)</h2>
        
        <div className="form-row form-row-2">
          <div className="form-group">
            <label>Have you published any research paper?</label>
            <div className="option-group-inline">
              {["Yes", "No"].map((option) => (
                <label key={option} className="radio-option">
                  <input
                    type="radio"
                    name="hasPublished"
                    value={option}
                    checked={form.researchBackground.hasPublished === option}
                    onChange={(e) => handleNestedFieldChange("researchBackground", "hasPublished", e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Have you attended any conferences/seminars?</label>
            <div className="option-group-inline">
              {["Yes", "No"].map((option) => (
                <label key={option} className="radio-option">
                  <input
                    type="radio"
                    name="hasAttended"
                    value={option}
                    checked={form.researchBackground.hasAttended === option}
                    onChange={(e) => handleNestedFieldChange("researchBackground", "hasAttended", e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>

        {form.researchBackground.hasPublished === "Yes" && (
          <div className="form-row">
            <div className="form-group">
              <label>Publication Details</label>
              <textarea
                placeholder="Please provide details of your publications (titles, journals, year, etc.)"
                value={form.researchBackground.publicationDetails}
                onChange={(e) => handleNestedFieldChange("researchBackground", "publicationDetails", e.target.value)}
                rows="3"
              />
            </div>
          </div>
        )}

        {form.researchBackground.hasAttended === "Yes" && (
          <div className="form-row">
            <div className="form-group">
              <label>Conference/Seminar Details</label>
              <textarea
                placeholder="Please provide details of conferences/seminars attended"
                value={form.researchBackground.conferenceDetails}
                onChange={(e) => handleNestedFieldChange("researchBackground", "conferenceDetails", e.target.value)}
                rows="3"
              />
            </div>
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label>Brief description of your proposed research interest (100–150 words)</label>
            <textarea
              placeholder="Describe your research interests, area of study, and what you aim to achieve..."
              value={form.researchBackground.researchInterest}
              onChange={(e) => handleNestedFieldChange("researchBackground", "researchInterest", e.target.value)}
              rows="6"
              maxLength="750"
            />
            <div className="word-count">
              {countWords(form.researchBackground.researchInterest)}/150 words approx.
            </div>
          </div>
        </div>
      </section>

      {/* Section F: Statement of Need */}
      <section className="form-section">
        <h2 className="section-title">SECTION F: STATEMENT OF NEED (Mandatory)</h2>
        
        <div className="form-row">
          <div className="form-group required">
            <label>In 150–200 words, explain why you are seeking a scholarship and how it will support your PhD journey</label>
            <textarea
              placeholder="Describe your financial need, circumstances, and how this scholarship will enable your doctoral studies..."
              value={form.statementOfNeed}
              onChange={(e) => setForm({ ...form, statementOfNeed: e.target.value })}
              rows="8"
              maxLength="1000"
              required
            />
            <div className="word-count">
              {countWords(form.statementOfNeed)}/200 words approx.
            </div>
          </div>
        </div>
      </section>

      {/* Section G: Declaration */}
      <section className="form-section declaration-section">
        <h2 className="section-title">SECTION G: DECLARATION</h2>
        
        <div className="declaration-text">
          <p>I hereby declare that all the information provided above is true and correct to the best of my knowledge. I understand that scholarship approval is subject to verification and internal review by Shodhsutra.</p>
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
            I agree to the above terms and conditions.
          </label>
        </div>
      </section>

      {/* Submit Button */}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit Scholarship Application
      </button>
    </div>
  );
}
