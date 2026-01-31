import React, { useState, useEffect } from "react";
import "./ShodhSutraForm.css";
import axiosInstance from "../api/axiosInstance";

export default function ShodhSutraForm() {
  const [phdValue, setPhdValue] = useState(5);
  const [pgStatus, setPgStatus] = useState("");
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    cityCountry: "",
    age: "",

    class10Board: "",
    class10Year: "",
    class10Percentage: "",

    class12Stream: "",
    class12Board: "",
    class12Year: "",
    class12Percentage: "",

    graduationDegree: "",
    graduationSpecialisation: "",
    graduationUniversity: "",
    graduationMode: "",
    graduationAdmissionYear: "",
    graduationPassingYear: "",
    graduationPercentage: "",

    pgDegree: "",
    pgSpecialisation: "",
    pgUniversity: "",
    pgAdmissionYear: "",
    pgPassingYear: "",
    pgMode: "",
    pgPercentage: "",

    // Professional details based on status
    jobTitle: "",
    industry: "",
    organisation: "",
    firstJobYear: "",
    experienceYears: "",
    jobHistory: "",

    businessNature: "",
    businessStartYear: "",
    previousWork: "",
    currentRole: "",
    responsibilities: "",

    consultantExpertise: "",
    consultantExperience: "",
    consultantClients: "",

    academicInstitution: "",
    academicDesignation: "",
    academicSubjects: "",
    academicExperience: "",
    
    // Research & Publications
    totalResearchPapers: "",
    otherUniversityResearch: "",
    otherUniversitySession: "",
    existingResearch: "",
    seminarsAttended: "",
    researchFields: "",
    researchFiles: [],

    // New field for uploaded files
    uploadedFiles: [],

    professionalGoals: "",
    blockers: "",
    underUtilised: "",

    authorityIncidents: "",

    phdWhy: "",
    phdBenefits: "",
    phdReason: "",

    nicheHelp: "",
    nicheExpertise: "",
    nicheIdeal: "",
    lifeLessons: "",

    heardFrom: "",
    expectations: "",
    phdHelp: "",
    sessionValue: "",

    weeklyHours: "",
    fears: "",
    honestAdvice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (e) => {
    setSelectedStatus([e.target.value]);
  };

  const handlePgStatusChange = (e) => {
    setPgStatus(e.target.value);
    if (e.target.value === "No") {
      setFormData(prev => ({
        ...prev,
        pgDegree: "",
        pgSpecialisation: "",
        pgUniversity: "",
        pgAdmissionYear: "",
        pgPassingYear: "",
        pgMode: "",
        pgPercentage: ""
      }));
    }
  };

  const handleModeChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // File upload handler for marksheets
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        alert(`File ${file.name} is not a valid type. Please upload PDF, JPG, or PNG files.`);
        return false;
      }
      
      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 5MB.`);
        return false;
      }
      
      return true;
    });
    
    if (formData.uploadedFiles.length + validFiles.length > 5) {
      alert("Maximum 5 files allowed");
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, ...validFiles]
    }));
  };

  // File remove handler for marksheets
  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index)
    }));
  };

  // Research file upload handler
  const handleResearchFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!validTypes.includes(file.type)) {
        alert(`File ${file.name} is not a valid type. Please upload PDF, JPG, or PNG files.`);
        return false;
      }
      
      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 5MB.`);
        return false;
      }
      
      return true;
    });

    if (formData.researchFiles.length + validFiles.length > 5) {
      alert("Maximum 5 research files allowed");
      return;
    }

    setFormData(prev => ({
      ...prev,
      researchFiles: [...prev.researchFiles, ...validFiles]
    }));
  };

  // Research file remove handler
  const removeResearchFile = (index) => {
    setFormData(prev => ({
      ...prev,
      researchFiles: prev.researchFiles.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.fullName || !formData.email || !formData.mobile) {
      alert("Please fill in all required fields (Name, Email, Mobile)");
      return;
    }

    if (!agreed) {
      alert("Please confirm that the information is honest and accurate");
      return;
    }

    if (!formData.authorityIncidents) {
      alert("Please describe THREE authority incidents as mentioned");
      return;
    }

    // Check if professional status is selected
    if (selectedStatus.length === 0) {
      alert("Please select your current professional status");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object for file upload
      const formDataToSend = new FormData();
      
      // Append all form fields - सीधे formData से append करें
      Object.keys(formData).forEach(key => {
        // Skip file arrays, they will be appended separately
        if (key !== 'uploadedFiles' && key !== 'researchFiles') {
          formDataToSend.append(key, formData[key] || '');
        }
      });
      
      // Append status and pgStatus
      formDataToSend.append('professionalStatus', selectedStatus[0] || "");
      formDataToSend.append('pgStatus', pgStatus);
      formDataToSend.append('phdSeriousness', phdValue.toString());
      
      // Append marksheets
      formData.uploadedFiles.forEach(file => {
        formDataToSend.append('marksheets', file);
      });
      
      // Append research papers
      formData.researchFiles.forEach(file => {
        formDataToSend.append('researchPapers', file);
      });

      console.log("Submitting form with:", {
        marksheets: formData.uploadedFiles.length,
        researchPapers: formData.researchFiles.length
      });
      
      const response = await axiosInstance.post("/shodh-sutra/submit", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log("Response received:", response.data);
      
      alert("Profile submitted successfully! We'll contact you soon.");
      
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        cityCountry: "",
        age: "",
        class10Board: "",
        class10Year: "",
        class10Percentage: "",
        class12Stream: "",
        class12Board: "",
        class12Year: "",
        class12Percentage: "",
        graduationDegree: "",
        graduationSpecialisation: "",
        graduationUniversity: "",
        graduationMode: "",
        graduationAdmissionYear: "",
        graduationPassingYear: "",
        graduationPercentage: "",
        pgDegree: "",
        pgSpecialisation: "",
        pgUniversity: "",
        pgAdmissionYear: "",
        pgPassingYear: "",
        pgMode: "",
        pgPercentage: "",
        jobTitle: "",
        industry: "",
        organisation: "",
        firstJobYear: "",
        experienceYears: "",
        jobHistory: "",
        businessNature: "",
        businessStartYear: "",
        previousWork: "",
        currentRole: "",
        responsibilities: "",
        consultantExpertise: "",
        consultantExperience: "",
        consultantClients: "",
        academicInstitution: "",
        academicDesignation: "",
        academicSubjects: "",
        academicExperience: "",
        totalResearchPapers: "",
        otherUniversityResearch: "",
        otherUniversitySession: "",
        existingResearch: "",
        seminarsAttended: "",
        researchFields: "",
        researchFiles: [],
        uploadedFiles: [],
        professionalGoals: "",
        blockers: "",
        underUtilised: "",
        authorityIncidents: "",
        phdWhy: "",
        phdBenefits: "",
        phdReason: "",
        nicheHelp: "",
        nicheExpertise: "",
        nicheIdeal: "",
        lifeLessons: "",
        heardFrom: "",
        expectations: "",
        phdHelp: "",
        sessionValue: "",
        weeklyHours: "",
        fears: "",
        honestAdvice: "",
      });
      setPhdValue(5);
      setPgStatus("");
      setSelectedStatus([]);
      setAgreed(false);
      
    } catch (err) {
      console.error("Submission error details:", err);
      console.error("Error response:", err.response?.data);
      
      if (err.response?.data?.message) {
        alert(`Submission failed: ${err.response.data.message}`);
      } else {
        alert("Submission failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add professional details sections for each status
  const renderProfessionalDetails = () => {
    switch(selectedStatus[0]) {
      case "Employed":
        return (
          <section className="ss-section">
            <h2 className="ss-heading">Employment Details</h2>
            <div className="ss-row">
              <div className="ss-field">
                <label>Current Job Title *</label>
                <input 
                  className="ss-input" 
                  name="jobTitle" 
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ss-field">
                <label>Industry / Domain *</label>
                <input 
                  className="ss-input" 
                  name="industry" 
                  value={formData.industry}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="ss-row">
              <div className="ss-field">
                <label>Organisation Name *</label>
                <input 
                  className="ss-input" 
                  name="organisation" 
                  value={formData.organisation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ss-field">
                <label>Year of First Job *</label>
                <input 
                  className="ss-input" 
                  name="firstJobYear" 
                  value={formData.firstJobYear}
                  onChange={handleChange}
                  type="number"
                  min="1970"
                  max="2024"
                  required
                />
              </div>
            </div>
            <div className="ss-row">
              <div className="ss-field">
                <label>Total Years of Work Experience *</label>
                <input 
                  className="ss-input" 
                  name="experienceYears" 
                  value={formData.experienceYears}
                  onChange={handleChange}
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="ss-field">
              <label>Job history (Company, Role, Duration) *</label>
              <textarea 
                className="ss-textarea" 
                name="jobHistory" 
                value={formData.jobHistory}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
          </section>
        );

      case "Business":
        return (
          <section className="ss-section">
            <h2 className="ss-heading">Business Details</h2>
            <div className="ss-row">
              <div className="ss-field">
                <label>Nature of Business / Industry *</label>
                <input 
                  className="ss-input" 
                  name="businessNature" 
                  value={formData.businessNature}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ss-field">
                <label>Year Business Started *</label>
                <input 
                  className="ss-input" 
                  name="businessStartYear" 
                  value={formData.businessStartYear}
                  onChange={handleChange}
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="ss-row">
              <div className="ss-field">
                <label>What were you doing before this business? *</label>
                <input 
                  className="ss-input" 
                  name="previousWork" 
                  value={formData.previousWork}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ss-field">
                <label>Your current role in the business *</label>
                <input 
                  className="ss-input" 
                  name="currentRole" 
                  value={formData.currentRole}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="ss-field">
              <label>Your major responsibilities today *</label>
              <textarea 
                className="ss-textarea" 
                name="responsibilities" 
                value={formData.responsibilities}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
          </section>
        );

      case "Consultant":
        return (
          <section className="ss-section">
            <h2 className="ss-heading">Consulting Details</h2>
            <div className="ss-row">
              <div className="ss-field">
                <label>Area of Expertise *</label>
                <input 
                  className="ss-input" 
                  name="consultantExpertise" 
                  value={formData.consultantExpertise}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ss-field">
                <label>Years of Experience *</label>
                <input 
                  className="ss-input" 
                  name="consultantExperience" 
                  value={formData.consultantExperience}
                  onChange={handleChange}
                  type="number"
                  required
                />
              </div>
            </div>
            <div className="ss-field">
              <label>Types of Clients / Projects *</label>
              <textarea 
                className="ss-textarea" 
                name="consultantClients" 
                value={formData.consultantClients}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>
          </section>
        );

      case "Academician":
        return (
          <section className="ss-section">
            <h2 className="ss-heading">Academic Details</h2>
            <div className="ss-row">
              <div className="ss-field">
                <label>Institution Name *</label>
                <input 
                  className="ss-input" 
                  name="academicInstitution" 
                  value={formData.academicInstitution}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ss-field">
                <label>Designation *</label>
                <input 
                  className="ss-input" 
                  name="academicDesignation" 
                  value={formData.academicDesignation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="ss-row">
              <div className="ss-field">
                <label>Subjects / Courses Taught *</label>
                <input 
                  className="ss-input" 
                  name="academicSubjects" 
                  value={formData.academicSubjects}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ss-field">
                <label>Years of Teaching Experience *</label>
                <input 
                  className="ss-input" 
                  name="academicExperience" 
                  value={formData.academicExperience}
                  onChange={handleChange}
                  type="number"
                  required
                />
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="ss-form">
      <h1 className="ss-title">
        Shodh Sutra – Research Guidance Session Profile Form
      </h1>

      <p className="ss-desc">
        This form helps us understand your academic background, professional
        journey, authority goals, and expectations. Your responses will be used
        to personalise your one-to-one Research Guidance Session.
      </p>

      {/* SECTION 1: Basic Details */}
      <section className="ss-section">
        <h2 className="ss-heading">Basic Details</h2>
        <div className="ss-row">
          <div className="ss-field">
            <label>Full Name *</label>
            <input
              className="ss-input"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="ss-field">
            <label>Email ID *</label>
            <input
              className="ss-input"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="ss-row">
          <div className="ss-field">
            <label>Mobile Number (WhatsApp preferred) *</label>
            <input
              className="ss-input"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="ss-field">
            <label>City & Country of Residence</label>
            <input
              className="ss-input"
              name="cityCountry"
              value={formData.cityCountry}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="ss-row">
          <div className="ss-field">
            <label>Age</label>
            <input
              className="ss-input"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Class 10 */}
      <section className="ss-section">
        <h2 className="ss-heading">Academic Background – Class 10</h2>
        <div className="ss-row">
          <div className="ss-field">
            <label>Class 10 Board</label>
            <input 
              className="ss-input"
              name="class10Board" 
              value={formData.class10Board} 
              onChange={handleChange} 
              placeholder="e.g., CBSE, ICSE, State Board" 
            />
          </div>
          <div className="ss-field">
            <label>Year of Passing (Class 10)</label>
            <input 
              className="ss-input"
              name="class10Year" 
              value={formData.class10Year} 
              onChange={handleChange} 
              type="number"
              min="1970"
              max="2024"
              placeholder="e.g., 2010" 
            />
          </div>
        </div>
        <div className="ss-row">
          <div className="ss-field">
            <label>Percentage / Grade Obtained (Class 10)</label>
            <input 
              className="ss-input"
              name="class10Percentage" 
              value={formData.class10Percentage} 
              onChange={handleChange} 
              placeholder="e.g., 85% or A1" 
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Class 12 */}
      <section className="ss-section">
        <h2 className="ss-heading">Academic Background – Class 12</h2>

        <div className="ss-row">
          <div className="ss-field">
            <label>Class 12 Stream *</label>
            <div className="ss-radio-group">
              {["Science", "Commerce", "Arts"].map((s) => (
                <label key={s}>
                  <input
                    type="radio"
                    name="class12Stream"
                    value={s}
                    checked={formData.class12Stream === s}
                    onChange={handleChange}
                  />{" "}
                  {s}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="ss-row">
          <div className="ss-field">
            <label>Class 12 Board</label>
            <input 
              className="ss-input"
              name="class12Board" 
              value={formData.class12Board} 
              onChange={handleChange} 
              placeholder="e.g., CBSE, ICSE, State Board" 
            />
          </div>
          <div className="ss-field">
            <label>Year of Passing (Class 12)</label>
            <input 
              className="ss-input"
              name="class12Year" 
              value={formData.class12Year} 
              onChange={handleChange} 
              type="number"
              min="1970"
              max="2024"
              placeholder="e.g., 2012" 
            />
          </div>
        </div>

        <div className="ss-row">
          <div className="ss-field">
            <label>Percentage / Grade Obtained (Class 12)</label>
            <input 
              className="ss-input"
              name="class12Percentage" 
              value={formData.class12Percentage} 
              onChange={handleChange} 
              placeholder="e.g., 80% or A2" 
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Graduation Details */}
      <section className="ss-section">
        <h2 className="ss-heading">Graduation Details</h2>

        <div className="ss-row">
          <div className="ss-field">
            <label>Graduation Degree *</label>
            <input 
              className="ss-input"
              name="graduationDegree" 
              value={formData.graduationDegree} 
              onChange={handleChange} 
              placeholder="e.g., B.Tech, B.A., B.Com" 
              required
            />
          </div>
          <div className="ss-field">
            <label>Specialisation / Subject *</label>
            <input 
              className="ss-input"
              name="graduationSpecialisation" 
              value={formData.graduationSpecialisation} 
              onChange={handleChange} 
              placeholder="e.g., Computer Science, Economics" 
              required
            />
          </div>
        </div>

        <div className="ss-row">
          <div className="ss-field">
            <label>College / University Name *</label>
            <input 
              className="ss-input"
              name="graduationUniversity" 
              value={formData.graduationUniversity} 
              onChange={handleChange} 
              placeholder="University name" 
              required
            />
          </div>
          <div className="ss-field">
            <label>Mode of Study *</label>
            <div className="ss-radio-group">
              {["Regular", "Distance", "Online"].map((mode) => (
                <label key={mode}>
                  <input
                    type="radio"
                    name="graduationMode"
                    value={mode}
                    checked={formData.graduationMode === mode}
                    onChange={() => handleModeChange("graduationMode", mode)}
                  />{" "}
                  {mode}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="ss-row">
          <div className="ss-field">
            <label>Year of Admission *</label>
            <input 
              className="ss-input"
              name="graduationAdmissionYear" 
              value={formData.graduationAdmissionYear} 
              onChange={handleChange} 
              type="number"
              min="1970"
              max="2024"
              placeholder="e.g., 2013" 
              required
            />
          </div>
          <div className="ss-field">
            <label>Year of Passing *</label>
            <input 
              className="ss-input"
              name="graduationPassingYear" 
              value={formData.graduationPassingYear} 
              onChange={handleChange} 
              type="number"
              min="1970"
              max="2024"
              placeholder="e.g., 2017" 
              required
            />
          </div>
        </div>

        <div className="ss-row">
          <div className="ss-field">
            <label>Percentage / CGPA Obtained</label>
            <input 
              className="ss-input"
              name="graduationPercentage" 
              value={formData.graduationPercentage} 
              onChange={handleChange} 
              placeholder="e.g., 75% or 8.2 CGPA" 
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Post-Graduation */}
      <section className="ss-section">
        <h2 className="ss-heading">Post-Graduation Details</h2>

        <div className="ss-row">
          <div className="ss-field">
            <label>Completed / Pursuing Post-Graduation? *</label>
            <div className="ss-radio-group">
              {["Yes", "No"].map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name="pgStatus"
                    value={option}
                    checked={pgStatus === option}
                    onChange={handlePgStatusChange}
                  />{" "}
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>

        {pgStatus === "Yes" && (
          <>
            <div className="ss-row">
              <div className="ss-field">
                <label>Post-Graduation Degree *</label>
                <input 
                  className="ss-input"
                  name="pgDegree" 
                  value={formData.pgDegree} 
                  onChange={handleChange} 
                  placeholder="e.g., M.Tech, MBA, M.A." 
                  required
                />
              </div>
              <div className="ss-field">
                <label>Specialisation *</label>
                <input 
                  className="ss-input"
                  name="pgSpecialisation" 
                  value={formData.pgSpecialisation} 
                  onChange={handleChange} 
                  placeholder="Specialisation" 
                  required
                />
              </div>
            </div>

            <div className="ss-row">
              <div className="ss-field">
                <label>College / University Name *</label>
                <input 
                  className="ss-input"
                  name="pgUniversity" 
                  value={formData.pgUniversity} 
                  onChange={handleChange} 
                  placeholder="University name" 
                  required
                />
              </div>
              <div className="ss-field">
                <label>Year of Admission *</label>
                <input 
                  className="ss-input"
                  name="pgAdmissionYear" 
                  value={formData.pgAdmissionYear} 
                  onChange={handleChange} 
                  type="number"
                  placeholder="Admission Year" 
                  required
                />
              </div>
            </div>

            <div className="ss-row">
              <div className="ss-field">
                <label>Year of Passing / Expected Year *</label>
                <input 
                  className="ss-input"
                  name="pgPassingYear" 
                  value={formData.pgPassingYear} 
                  onChange={handleChange} 
                  type="number"
                  placeholder="Passing Year" 
                  required
                />
              </div>
              <div className="ss-field">
                <label>Mode of Study *</label>
                <div className="ss-radio-group">
                  {["Regular", "Distance", "Online"].map((mode) => (
                    <label key={mode}>
                      <input
                        type="radio"
                        name="pgMode"
                        value={mode}
                        checked={formData.pgMode === mode}
                        onChange={() => handleModeChange("pgMode", mode)}
                      />{" "}
                      {mode}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="ss-row">
              <div className="ss-field">
                <label>Percentage / CGPA Obtained</label>
                <input 
                  className="ss-input"
                  name="pgPercentage" 
                  value={formData.pgPercentage} 
                  onChange={handleChange} 
                  placeholder="Percentage" 
                />
              </div>
            </div>
          </>
        )}
      </section>

      {/* SECTION 6: Professional Status */}
      <section className="ss-section">
        <h2 className="ss-heading">Current Professional Status *</h2>
        <div className="ss-row">
          <div className="ss-field">
            <div className="ss-radio-group vertical">
              {[
                { value: "Employed", label: "Employed (Job)" },
                { value: "Business", label: "Business Owner / Entrepreneur" },
                { value: "Consultant", label: "Consultant / Freelancer" },
                { value: "Academician", label: "Academician / Teacher" },
                { value: "NotWorking", label: "Not Currently Working" }
              ].map((status) => (
                <label key={status.value} className="radio-option">
                  <input
                    type="radio"
                    name="professionalStatus"
                    value={status.value}
                    onChange={handleStatusChange}
                    checked={selectedStatus[0] === status.value}
                  />{" "}
                  {status.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditional Professional Details */}
      {renderProfessionalDetails()}

      {/* SECTION: Research & Publications */}
   
<section className="ss-section">
  <h2 className="ss-heading">Research & Publication History (if any)</h2> {/* Fixed typo */}
  
  <div className="ss-row">
    <div className="ss-field">
      <label>Total Research Papers Published</label>
      <input
        className="ss-input"
        name="totalResearchPapers"
        type="number"
        value={formData.totalResearchPapers}
        onChange={handleChange}
      />
    </div>
  </div>
  
  <div className="ss-field">
    <label>
      If taken admission in Research Program in any other University
      (Mention University Name & Session)
    </label>
    <textarea
      className="ss-textarea"
      name="otherUniversityResearch"
      value={formData.otherUniversityResearch}
      onChange={handleChange}
      rows="2"
    />
  </div>
  
  <div className="ss-field">
    <label>Existing Research</label>
    <textarea
      className="ss-textarea"
      name="existingResearch"
      value={formData.existingResearch}
      onChange={handleChange}
      rows="3"
    />
  </div>
  
  <div className="ss-field">
    <label>Fields of Research Papers</label>
    <textarea
      className="ss-textarea"
      name="researchFields"
      value={formData.researchFields}
      onChange={handleChange}
      rows="2"
    />
  </div>
  
  <div className="ss-field">
    <label>Seminars / Conferences Attended</label>
    <textarea
      className="ss-textarea"
      name="seminarsAttended"
      value={formData.seminarsAttended}
      onChange={handleChange}
      rows="3"
    />
  </div>
  
  {/* Reorder the session field to be with otherUniversityResearch */}
  <div className="ss-field">
    <label>Session (if any)</label>
    <input
      className="ss-input"
      name="otherUniversitySession"
      value={formData.otherUniversitySession}
      onChange={handleChange}
      placeholder="e.g., 2023-2024"
    />
  </div>
  
  <div className="ss-field">
    <label>
      Upload Research Papers / Seminar Certificates (PDF, JPG, PNG only)
    </label>
    <input
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      multiple
      onChange={handleResearchFileUpload}
    />
    
    {formData.researchFiles.length > 0 && (
      <div className="uploaded-files">
        <h4>Research Files:</h4>
        <ul>
          {formData.researchFiles.map((file, index) => (
            <li key={index}>
              <span>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
              <button 
                type="button" 
                onClick={() => removeResearchFile(index)}
                className="remove-file-btn"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
</section>

      {/* SECTION: Marksheet Upload */}
      <section className="ss-section">
        <h2 className="ss-heading">Document Upload</h2>
        <div className="ss-field">
          <label>Upload Marksheets / Certificates (Optional)</label>
          <p className="ss-help-text">
            You can upload your Class 10, 12, Graduation, or Post-Graduation marksheets.
            Maximum 5 files, 5MB each (PDF, JPG, PNG)
          </p>
          
          <div className="upload-area">
            <input
              type="file"
              id="marksheetUpload"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              className="ss-file-input"
              onChange={handleFileUpload}
            />
            <label htmlFor="marksheetUpload" className="upload-label">
              <svg className="upload-icon" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <path d="M14 2v6h6" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
                <path d="M10 9H8" />
              </svg>
              <span>Click to upload documents</span>
              <span className="upload-hint">or drag and drop</span>
            </label>
          </div>
          
          {formData.uploadedFiles.length > 0 && (
            <div className="uploaded-files">
              <h4>Uploaded Files:</h4>
              <ul>
                {formData.uploadedFiles.map((file, index) => (
                  <li key={index}>
                    <span>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                    <button 
                      type="button" 
                      onClick={() => removeFile(index)}
                      className="remove-file-btn"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 7: Professional Goals */}
      <section className="ss-section">
        <h2 className="ss-heading">Professional Goals</h2>
        <div className="ss-field">
          <label>What are the three most important professional goals you want to achieve in the next 2 years?</label>
          <textarea 
            className="ss-textarea" 
            name="professionalGoals" 
            value={formData.professionalGoals}
            onChange={handleChange}
            rows="4"
            placeholder="Please list your top 3 goals..."
          />
        </div>
        <div className="ss-field">
          <label>What do you feel is currently blocking or slowing your growth?</label>
          <textarea 
            className="ss-textarea" 
            name="blockers" 
            value={formData.blockers}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="ss-field">
          <label>Where do you feel under-utilised despite your experience?</label>
          <textarea 
            className="ss-textarea" 
            name="underUtilised" 
            value={formData.underUtilised}
            onChange={handleChange}
            rows="3"
          />
        </div>
      </section>

      {/* SECTION 8: Authority & Validation */}
      <section className="ss-section">
        <h2 className="ss-heading">Authority & Validation Incidents *</h2>
        <div className="ss-field">
          <label>Describe THREE real professional incidents where you felt not heard, not trusted, or had to over-explain yourself.</label>
          <textarea 
            className="ss-textarea" 
            name="authorityIncidents" 
            value={formData.authorityIncidents}
            onChange={handleChange}
            rows="6"
            placeholder="Please describe 3 specific incidents with details..."
            required
          />
        </div>
      </section>

      {/* SECTION 9: PhD Intent */}
      <section className="ss-section">
        <h2 className="ss-heading">PhD Intent & Relevance</h2>
        <div className="ss-field">
          <label>Why do you believe a PhD is relevant for you at this stage of life? (Minimum 3 reasons)</label>
          <textarea 
            className="ss-textarea" 
            name="phdWhy" 
            value={formData.phdWhy}
            onChange={handleChange}
            rows="4"
            placeholder="List at least 3 reasons..."
          />
        </div>
        <div className="ss-field">
          <label>How do you think a PhD can help you achieve your professional goals?</label>
          <textarea 
            className="ss-textarea" 
            name="phdBenefits" 
            value={formData.phdBenefits}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="ss-field">
          <label>How serious are you about pursuing a PhD in the next 6–12 months? (1 = Not serious, 10 = Very serious)</label>
          <div className="range-container">
            <div className="range-value">{phdValue}</div>
            <input
              type="range"
              min="1"
              max="10"
              value={phdValue}
              className="ss-range"
              onChange={(e) => setPhdValue(e.target.value)}
            />
            <div className="range-labels">
              <span>1 (Not serious)</span>
              <span>10 (Very serious)</span>
            </div>
          </div>
        </div>
        <div className="ss-field">
          <label>Why did you choose this number?</label>
          <textarea 
            className="ss-textarea" 
            name="phdReason" 
            value={formData.phdReason}
            onChange={handleChange}
            rows="3"
          />
        </div>
      </section>

      {/* SECTION 10: Niche & Expertise */}
      <section className="ss-section">
        <h2 className="ss-heading">Niche & Expertise</h2>
        <div className="ss-field">
          <label>What topics or problems do people naturally come to you for?</label>
          <textarea 
            className="ss-textarea" 
            name="nicheHelp" 
            value={formData.nicheHelp}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="ss-field">
          <label>Where do you feel you have deep understanding or lived expertise?</label>
          <textarea 
            className="ss-textarea" 
            name="nicheExpertise" 
            value={formData.nicheExpertise}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="ss-field">
          <label>What do you think your ideal niche or authority area should be?</label>
          <textarea 
            className="ss-textarea" 
            name="nicheIdeal" 
            value={formData.nicheIdeal}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="ss-field">
          <label>What are three life or career lessons repeatedly pushing you toward a specific direction or role?</label>
          <textarea 
            className="ss-textarea" 
            name="lifeLessons" 
            value={formData.lifeLessons}
            onChange={handleChange}
            rows="3"
          />
        </div>
      </section>

      {/* SECTION 11: Expectations */}
      <section className="ss-section">
        <h2 className="ss-heading">Expectations from Shodh Sutra</h2>
        <div className="ss-row">
          <div className="ss-field">
            <label>How did you hear about Shodh Sutra?</label>
            <input 
              className="ss-input"
              name="heardFrom" 
              value={formData.heardFrom}
              onChange={handleChange}
              placeholder="e.g., Social media, Friend, Email newsletter"
            />
          </div>
        </div>
        <div className="ss-field">
          <label>What do you expect from Shodh Sutra?</label>
          <textarea 
            className="ss-textarea" 
            name="expectations" 
            value={formData.expectations}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="ss-field">
          <label>How can Shodh Sutra help your PhD journey?</label>
          <textarea 
            className="ss-textarea" 
            name="phdHelp" 
            value={formData.phdHelp}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="ss-field">
          <label>What would make the session valuable for you?</label>
          <textarea 
            className="ss-textarea" 
            name="sessionValue" 
            value={formData.sessionValue}
            onChange={handleChange}
            rows="3"
          />
        </div>
      </section>

      {/* SECTION 12: Commitment */}
      <section className="ss-section">
        <h2 className="ss-heading">Commitment Check</h2>
        <div className="ss-field">
          <label>How many hours per week can you realistically dedicate to research work?</label>
          <input 
            className="ss-input"
            name="weeklyHours" 
            value={formData.weeklyHours}
            onChange={handleChange}
            type="number"
            placeholder="e.g., 10 hours"
          />
        </div>
        <div className="ss-field">
          <label>What fears or concerns do you currently have about pursuing a PhD?</label>
          <textarea 
            className="ss-textarea" 
            name="fears" 
            value={formData.fears}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="ss-field">
          <label>Are you open to honest guidance even if the advice is not to start a PhD immediately?</label>
          <div className="ss-radio-group">
            {["Yes", "No", "Not sure"].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="honestAdvice"
                  value={option}
                  checked={formData.honestAdvice === option}
                  onChange={() => handleModeChange("honestAdvice", option)}
                />{" "}
                {option}
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL: Checkbox + Submit */}
      <section className="ss-final">
        <label className="ss-checkbox">
          <input 
            type="checkbox" 
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          /> 
          I confirm the information shared is honest and accurate *
        </label>
        <button 
          className="ss-button" 
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Profile"}
        </button>
        <p className="ss-note">* Required fields must be filled</p>
      </section>
    </div>
  );
}