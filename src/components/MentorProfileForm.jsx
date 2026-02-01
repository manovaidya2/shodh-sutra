import React, { useState } from "react";
import "./MentorProfileForm.css";
import axiosInstance from "../api/axiosInstance";


export default function MentorProfileForm() {
  const emptyForm = {

  basicInfo: {
    areaOfResearch: "",
    institution: "",
    department: "",
    batch: "",
  },

  personalInfo: {
    name: "",
    father: "",
    mother: "",
    dob: "",
    gender: "",
    blood: "",
    nationality: "",
  },

  contactInfo: {
    mobile: "",
    email: "",
    presentAddress: "",
    presentZip: "",
    permanentAddress: "",
    permanentZip: "",
  },
  educationInfo: {
  class10Board: "",
  class10Grade: "",
  class10Year: "",

  class12Board: "",
  class12Grade: "",
  class12Year: "",

  gradBoard: "",
  gradGrade: "",
  gradYear: "",

  pgBoard: "",
  pgGrade: "",
  pgYear: "",

  phdBoard: "",
  phdGrade: "",
  phdYear: "",
},


  professionalInfo: {
    profession: "",
    experience: "",
    companies: "",
    achievements: "",
  },

  researchInfo: {
    thesis: "",
    papers: "",
    fields: "",
    seminars: "",
  },

  mentorIdentity: [],

  studentInteraction: [],

  challengesSection: [],

  incidentsSection: [],

  mentorRoleSection: [],

  collaborationSection: [],

  intentSection: [],

  reflectionSection: [],

  consent: false
};

const [form, setForm] = useState(emptyForm);


//   const [form, setForm] = useState({
//     areaOfResearch: "",
//     institution: "",
//     department: "",
//     batch: "",

//     name: "",
//     father: "",
//     mother: "",
//     dob: "",
//     gender: "",
//     blood: "",
//     nationality: "",

//     mobile: "",
//     email: "",
//     presentAddress: "",
//     presentZip: "",
//     permanentAddress: "",
//     permanentZip: "",

//     profession: "",
//     experience: "",
//     companies: "",
//     achievements: "",

//     thesis: "",
//     papers: "",
//     fields: "",
//     seminars: "",

//     mentorRoles: [],
//     experienceRange: "",
//     qualification: "",

//     studentHelp: [],
//     phdFrequency: "",
//     phdAction: [],

//     challenges: [],
//     dropoutSeen: "",
//     emotions: [],

//     incidents: [],
//     missing: [],

//     roleView: [],
//     recommendation: [],

//     comfort: "",
//     belief: "",

//     interest: [],
//     engagement: "",

//     ecosystemProblem: "",
//     idealSystem: "",

//     consent: false,
//   });

  const [researchFiles, setResearchFiles] = useState([]);
const [signatureFile, setSignatureFile] = useState(null);


 const handleFieldChange = (section, field, value) => {
  setForm((prev) => ({
    ...prev,

    [section]: {
      ...prev[section],
      [field]: value,
    },
  }));
};
 
  const handleQAChange = (section, question, answer, multiple = false) => {

  setForm((prev) => {

    const existing = prev[section] || [];

    const index = existing.findIndex(
      (q) => q.question === question
    );

    let updated = [...existing];

    if (index > -1) {

      if (multiple) {

        let arr = updated[index].answer || [];

        if (arr.includes(answer)) {
          arr = arr.filter(a => a !== answer);
        } else {
          arr.push(answer);
        }

        updated[index].answer = arr;

      } else {

        updated[index].answer = answer;

      }

    } else {

      updated.push({
        question,
        answer: multiple ? [answer] : answer
      });

    }

    return {
      ...prev,
      [section]: updated
    };

  });

};


const handleSubmit = async () => {

  if (
  !form.personalInfo.name ||
  !form.contactInfo.email ||
  !form.contactInfo.mobile
) {
    alert("Please fill required fields");
    return;
  }

  if (!form.consent) {
    alert("Please accept declaration");
    return;
  }

  try {

    const dataToSend = new FormData();

    // Append all text fields
 Object.keys(form).forEach((key) => {

  // If Array
  if (Array.isArray(form[key])) {

    dataToSend.append(key, JSON.stringify(form[key]));

  }

  // If Object
  else if (typeof form[key] === "object") {

    dataToSend.append(key, JSON.stringify(form[key]));

  }

  // If Normal Value
  else {

    dataToSend.append(key, form[key]);

  }

});



    // Append research files
    researchFiles.forEach((file) => {
      dataToSend.append("researchFiles", file);
    });

    // Append signature file
    if (signatureFile) {
      dataToSend.append("signatureFile", signatureFile);
    }

    console.log("Submitting Mentor Form...");

    const res = await axiosInstance.post(
      "/mentor/submit",
      dataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Response:", res.data);

    if (res.data.success) {

  alert("Mentor Profile Submitted Successfully");

  //  FULL RESET
  setForm(emptyForm);
  setResearchFiles([]);
  setSignatureFile(null);
}
 else {

      alert("Submission Failed ❌");

    }

  } catch (err) {

    console.error("Submit Error:", err);
    console.error("Server:", err.response?.data);

    alert("Server Error ❌");

  }

};



  return (
    <div className="mentor-form">

      <h1>ShodhSutra - Mentor Profile Form</h1>


      {/* Research Info */}
      
<section className="research-section">

  <h2 className="section-title">RESEARCH INFORMATION</h2>

  <div className="research-row">
    <label>Area of Research:</label>
    <input
      type="text"
      name="areaOfResearch"
      placeholder="Enter your area of research"
       onChange={(e) =>
    handleFieldChange(
      "basicInfo",
      "areaOfResearch",
      e.target.value
    )}
    />
  </div>

  <div className="research-row">
    <label>Research Program Institution :</label>
    <input
      type="text"
      name="institution"
      placeholder="Enter institution name"
      onChange={(e)=>
 handleFieldChange("basicInfo","institution",e.target.value)
}

    />
  </div>

  <div className="research-row">
    <label>Department of Research:</label>
    <input
      type="text"
      name="department"
      placeholder="Enter department name"
      onChange={(e)=>
 handleFieldChange("basicInfo","department",e.target.value)
}

    />
  </div>

  <div className="research-row">
    <label>Batch / Session:</label>
    <input
      type="text"
      name="batch"
      placeholder="Enter batch or session"
     onChange={(e)=>
 handleFieldChange("basicInfo","batch",e.target.value)
}

    />
  </div>

</section>



      {/* Mentor Information */}
<section className="mentor-info-section">

  <h2 className="section-title">MENTOR INFORMATION</h2>

  {/* Name */}
  <div className="mentor-row single">
    <label>Name:</label>
    <input
      type="text"
      name="name"
      placeholder="Enter full name"
      onChange={(e)=>handleFieldChange("personalInfo","name",e.target.value)}
    />
  </div>

  {/* Father */}
  <div className="mentor-row single">
    <label>Father’s Name:</label>
    <input
      type="text"
      name="father"
      placeholder="Enter father’s name"
      onChange={(e)=>handleFieldChange("personalInfo","father",e.target.value)}
    />
  </div>

  {/* Mother + DOB */}
  <div className="mentor-row two-col">

    <div className="mentor-col">
      <label>Mother’s Name:</label>
      <input
        type="text"
        name="mother"
        placeholder="Enter mother’s name"
        onChange={(e)=>handleFieldChange("personalInfo","mother",e.target.value)}
      />
    </div>

    <div className="mentor-col">
      <label>Date of Birth:</label>
      <input
        type="date"
        name="dob"
       onChange={(e)=>handleFieldChange("personalInfo","dob",e.target.value)}
      />
    </div>

  </div>

  {/* Gender + Blood + Nationality */}
  <div className="mentor-row three-col">

    <div className="mentor-col">
      <label>Gender:</label>
      <input
        type="text"
        name="gender"
        placeholder="Male / Female / Other"
        onChange={(e)=>handleFieldChange("personalInfo","gender",e.target.value)}
      />
    </div>

    <div className="mentor-col">
      <label>Blood Group:</label>
      <input
        type="text"
        name="blood"
        placeholder="e.g. O+, A+"
        onChange={(e)=>handleFieldChange("personalInfo","blood",e.target.value)}
      />
    </div>

    <div className="mentor-col">
      <label>Nationality:</label>
      <input
        type="text"
        name="nationality"
        placeholder="Enter nationality"
        onChange={(e)=>handleFieldChange("personalInfo","nationality",e.target.value)}
      />
    </div>

  </div>

</section>



      
     {/* Contact Information */}
<section className="contact-info-section">

  <h2 className="section-title">CONTACT INFORMATION</h2>

  {/* Mobile */}
  <div className="contact-row single">
    <label>Mobile Number:</label>
    <input
      type="text"
      name="mobile"
      placeholder="Enter mobile number"
      onChange={(e)=>handleFieldChange("contactInfo","mobile",e.target.value)}
    />
  </div>

  {/* Email */}
  <div className="contact-row single">
    <label>Email Address:</label>
    <input
      type="email"
      name="email"
      placeholder="Enter email address"
      onChange={(e)=>handleFieldChange("contactInfo","email",e.target.value)}
    />
  </div>

  {/* Present Address + Zip */}
  <div className="contact-row two-col">

    <div className="contact-col wide">
      <label>Present Address:</label>
      <textarea
        name="presentAddress"
        placeholder="Enter present address"
        onChange={(e)=>handleFieldChange("contactInfo","presentAddress",e.target.value)}
      />
    </div>

    <div className="contact-col small">
      <label>Zip Code:</label>
      <input
        type="text"
        name="presentZip"
        placeholder="Zip code"
        onChange={(e)=>handleFieldChange("contactInfo","presentZip",e.target.value)}
      />
    </div>

  </div>

  {/* Permanent Address + Zip */}
  <div className="contact-row two-col">

    <div className="contact-col wide">
      <label>Permanent Address:</label>
      <textarea
        name="permanentAddress"
        placeholder="Enter permanent address"
        onChange={(e)=>handleFieldChange("contactInfo","permanentAddress",e.target.value)}
      />
    </div>

    <div className="contact-col small">
      <label>Zip Code:</label>
      <input
        type="text"
        name="permanentZip"
        placeholder="Zip code"
       onChange={(e)=>handleFieldChange("contactInfo","permanentZip",e.target.value)}
      />
    </div>

  </div>

</section>



     {/* Educational Qualification */}
{/* Educational Qualification */}
<section className="education-section">

  <h2 className="section-title">EDUCATIONAL QUALIFICATION</h2>

  <div className="education-table">

    {/* 10th */}
    <div className="edu-row">
      <div>10th / Senior Secondary</div>

      <input
        type="text"
        placeholder="Board / School"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "class10Board",
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Grade / %"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "class10Grade",
            e.target.value
          )
        }
      />

      <input
        type="number"
        placeholder="Year"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "class10Year",
            e.target.value
          )
        }
      />
    </div>


    {/* 12th */}
    <div className="edu-row">
      <div>12th / Higher Secondary</div>

      <input
        type="text"
        placeholder="Board / School"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "class12Board",
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Grade / %"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "class12Grade",
            e.target.value
          )
        }
      />

      <input
        type="number"
        placeholder="Year"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "class12Year",
            e.target.value
          )
        }
      />
    </div>


    {/* Graduation */}
    <div className="edu-row">
      <div>Graduation</div>

      <input
        type="text"
        placeholder="University"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "gradBoard",
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="CGPA / %"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "gradGrade",
            e.target.value
          )
        }
      />

      <input
        type="number"
        placeholder="Year"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "gradYear",
            e.target.value
          )
        }
      />
    </div>


    {/* Post Graduation */}
    <div className="edu-row">
      <div>Post Graduation</div>

      <input
        type="text"
        placeholder="University"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "pgBoard",
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="CGPA / %"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "pgGrade",
            e.target.value
          )
        }
      />

      <input
        type="number"
        placeholder="Year"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "pgYear",
            e.target.value
          )
        }
      />
    </div>


    {/* PhD */}
    <div className="edu-row">
      <div>Research / Doctorate</div>

      <input
        type="text"
        placeholder="Institute"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "phdBoard",
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Status"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "phdGrade",
            e.target.value
          )
        }
      />

      <input
        type="number"
        placeholder="Year"
        onChange={(e) =>
          handleFieldChange(
            "educationInfo",
            "phdYear",
            e.target.value
          )
        }
      />
    </div>

  </div>

</section>




      {/* Professional Information */}
<section className="professional-info-section">

  <h2 className="section-title">PROFESSIONAL INFORMATION</h2>

  {/* Current Profession */}
  <div className="prof-row">
    <label>Current Profession / Job Title:</label>
    <input
      type="text"
      name="profession"
      placeholder="Enter your job title"
     onChange={(e)=>handleFieldChange("professionalInfo","profession",e.target.value)}
    />
  </div>

  {/* Experience */}
  <div className="prof-row">
    <label>Work Experience (in years):</label>
    <input
      type="number"
      name="experience"
      placeholder="Enter total experience"
      onChange={(e)=>handleFieldChange("professionalInfo","experience",e.target.value)}
    />
  </div>

  {/* Companies */}
  <div className="prof-row">
    <label>Companies / Institutions:</label>
    <textarea
      name="companies"
      placeholder="Mention companies or institutions"
    onChange={(e)=>handleFieldChange("professionalInfo","companies",e.target.value)}
    />
  </div>

  {/* Achievements */}
  <div className="prof-row large">
    <label>Achievements & Awards:</label>
    <textarea
      name="achievements"
      placeholder="Mention achievements and awards"
      onChange={(e)=>handleFieldChange("professionalInfo","achievements",e.target.value)}
    />
  </div>

</section>



     {/* Research Papers & Thesis */}
<section className="research-paper-section">

  <h2 className="section-title">RESEARCH PAPERS & THESIS</h2>

  {/* Thesis */}
  <div className="research-row">
    <label>Research Thesis Title:</label>
    <textarea
      name="thesis"
      placeholder="Enter your research thesis title"
     onChange={(e)=>handleFieldChange("researchInfo","thesis",e.target.value)}
    />
  </div>

  {/* Total Papers */}
  <div className="research-row">
    <label>Total Research Papers Published:</label>
    <input
      type="number"
      name="papers"
      placeholder="Enter total number"
      onChange={(e)=>handleFieldChange("researchInfo","papers",e.target.value)}
    />
  </div>

  {/* Fields */}
  <div className="research-row">
    <label>Fields of Research Papers:</label>
    <textarea
      name="fields"
      placeholder="Mention research fields"
      onChange={(e)=>handleFieldChange("researchInfo","fields",e.target.value)}
    />
  </div>

  {/* Seminars */}
  <div className="research-row">
    <label>Seminars / Conferences Attended:</label>
    <textarea
      name="seminars"
      placeholder="Mention seminars and conferences"
     onChange={(e)=>handleFieldChange("researchInfo","seminars",e.target.value)}
    />
  </div>

  {/* PDF Upload (Simple) */}
  <div className="research-row">
    <label>Upload Research Papers / Certificates (PDF Only):</label>
    <input
  type="file"
  accept=".pdf"
  multiple
  onChange={(e) =>
  setResearchFiles(Array.from(e.target.files))
}

/>

  </div>

</section>
 



 {/* Consent & Agreement */}
<section className="consent-section">

  <h2 className="section-title">CONSENT & AGREEMENT</h2>

  <div className="consent-wrapper">

    
    {/* Signature / Photo Upload */}
<div className="research-row">

  <label>Upload Photo / Signature (JPG, PNG only)</label>

  <input
    type="file"
    accept="image/jpeg,image/png,image/jpg"
    onChange={(e) => {

      const file = e.target.files[0];
      if (!file) return;

      // Check Image
      if (!file.type.startsWith("image/")) {
        alert("Only image files allowed");
        e.target.value = "";
        return;
      }

      // Size Check (10MB max - matches backend)
      if (file.size > 10 * 1024 * 1024) {
        alert("Image must be under 10MB");
        e.target.value = "";
        return;
      }

      console.log("Selected Image:", file);

      setSignatureFile(file);
    }}
  />

  {signatureFile && (
    <p style={{ color: "green", fontSize: "14px" }}>
      ✅ Selected: {signatureFile.name}
    </p>
  )}

</div>


    {/* Text */}
    <div className="consent-text">

      <ul>
        <li>
          I certify that the above information is true & correct to the best of my knowledge.
        </li>

        <li>
          I agree to follow all rules and regulations of ShodhSutra.
        </li>
      </ul>

      {/* Checkbox */}
      <label className="consent-checkbox">

        <input
          type="checkbox"
          checked={form.consent}
          onChange={() =>
            setForm({ ...form, consent: !form.consent })
          }
        />

        I agree to the above terms and conditions.

      </label>

    </div>

  </div>

</section>



      {/* ===================== YOUR Questions ===================== */}

      {/* Section 1 */}

      {/* Mentor Identity & Experience */}
<section className="mentor-identity-section">

  <h2 className="section-title">MENTOR IDENTITY & EXPERIENCE</h2>

  {/* Q1 */}
  <div className="identity-block">

    <p className="question">
      1. Which role best describes you currently? 
    </p>

    <div className="option-grid">

      {[
        "University / College Professor",
        "Lecturer / Assistant Professor",
        "Research Guide / Co-Guide",
        "School Educator / Special Educator",
        "Institute Founder / Director",
        "Academic Mentor (Independent)",
        "Education Consultant",
        "Trainer / Coach (Academic)"
      ].map((role) => (
        <label key={role} className="check-option">
          <input
            type="checkbox"
            name="mentorRoles"
            value={role}
            onChange={() =>
 handleQAChange(
   "mentorIdentity",
   "Which role best describes you currently?",
   role,
   true
 )
}

          />
          {role}
        </label>
      ))}

    </div>

  </div>


  {/* Q2 */}
  <div className="identity-block">

    <p className="question">
      2. Total years of experience in the education / academic ecosystem?
    </p>

    <div className="option-grid">

      {[
        "0–5 years",
        "6–10 years",
        "11–15 years",
        "16–20 years",
        "20+ years"
      ].map((exp) => (
        <label key={exp} className="check-option">
          <input
            type="radio"
            name="experienceRange"
            value={exp}
            onChange={() =>
 handleQAChange(
   "mentorIdentity",
   "Total years of experience?",
   exp,
   false
 )
}

          />
          {exp}
        </label>
      ))}

    </div>

  </div>


  {/* Q3 */}
  <div className="identity-block">

    <p className="question">
      3. Highest academic qualification held by you?
    </p>

    <div className="option-grid">

      {[
        "Master’s degree",
        "MPhil",
        "PhD",
        "Post-doctoral",
        "Other"
      ].map((q) => (
        <label key={q} className="check-option">
          <input
            type="radio"
            name="qualification"
            value={q}
            onChange={() =>
 handleQAChange(
   "mentorIdentity",
   "Highest academic qualification held by you?",
   q,
   false
 )
}

          />
          {q}
        </label>
      ))}

    </div>

  </div>

</section>

      


      
      {/* Section 2: Student Interaction & Guidance Patterns */}
<section className="student-interaction-section">

  <h2 className="section-title">
    STUDENT INTERACTION & GUIDANCE PATTERNS
  </h2>

  {/* Q4 */}
  <div className="interaction-block">

    <p className="question">
      4. Students usually approach you for guidance related to:
    </p>

    <div className="option-grid">

      {[
        "Career direction",
        "Higher education choices",
        "PhD / research guidance",
        "University selection",
        "Research topic discussion",
        "Recommendation / references"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="checkbox"
            name="studentHelp"
            value={item}
            onChange={() =>
 handleQAChange(
   "studentInteraction",
   "Students usually approach you for guidance related to:",
   item,
   true
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>


  {/* Q5 */}
  <div className="interaction-block">

    <p className="question">
      5. On average, how often do students ask you about pursuing a PhD?
    </p>

    <div className="option-grid">

      {[
        "Rarely",
        "Occasionally",
        "Frequently",
        "Very frequently"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="radio"
            name="phdFrequency"
            value={item}
            onChange={() =>
 handleQAChange(
   "studentInteraction",
   "On average, how often do students ask you about pursuing a PhD?",
   item,
   false
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>


  {/* Q6 */}
  <div className="interaction-block">

    <p className="question">
      6. When a student asks you about pursuing a PhD, what do you usually do?
      <span> (Select all that apply)</span>
    </p>

    <div className="option-grid">

      {[
        "Advise them based on personal experience",
        "Suggest they speak to universities directly",
        "Ask them to reflect on goals before deciding",
        "Avoid giving specific guidance due to lack of structure",
        "Refer them informally to known contacts"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="checkbox"
            name="phdAction"
            value={item}
            onChange={() =>
 handleQAChange(
   "studentInteraction",
   "When a student asks you about pursuing a PhD, what do you usually do?",
   item,
   true
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>

</section>




{/* Section 3: Guidance Challenges */}
<section className="guidance-section">

  <h2 className="section-title">
    GUIDANCE CHALLENGES
  </h2>

  {/* Q6 */}
  <div className="interaction-block">

    <p className="question">
     7. Which challenges have you personally faced while guiding students for PhD?
      <span> (Select all that apply)</span>
    </p>

    <div className="option-grid">

      {[
        "Difficulty assessing student seriousness",
        "Lack of structured completion pathway",
        "Students enrolling and later dropping out",
        "Mismatch between student profile and PhD demands",
        "Limited follow-up or support systems",
        "Ethical discomfort with random admissions"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="checkbox"
            name="challenges"
            value={item}
            onChange={() =>
 handleQAChange(
   "challengesSection",
   "Which challenges have you personally faced while guiding students for PhD?",
   item,
   true
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>


  {/* Q7 */}
  <div className="interaction-block">

    <p className="question">
      8. Have you seen students struggle or discontinue their PhD after enrolling elsewhere?
    </p>

    <div className="option-grid">

      {[
        "Yes, multiple times",
        "Yes, a few times",
        "Rarely",
        "Never"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="radio"
            name="dropoutSeen"
            value={item}
            onChange={() =>
 handleQAChange(
   "challengesSection",
   "Have you seen students struggle or discontinue their PhD after enrolling elsewhere?",
   item,
   false
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>


  {/* Q8 */}
  <div className="interaction-block">

    <p className="question">
      9. When such cases happen, what do you feel most strongly?
      <span> (Select all that apply)</span>
    </p>

    <div className="option-grid">

      {[
        "Concern for the student",
        "Frustration at lack of guidance",
        "Helplessness due to system gaps",
        "Desire for a better support platform",
        "Acceptance as “part of the system”"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="checkbox"
            name="emotions"
            value={item}
            onChange={() =>
 handleQAChange(
   "challengesSection",
   "When such cases happen, what do you feel most strongly?",
   item,
   true
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>

</section>




      {/* Section 4: Incident-Based Reflection */}
<section className="incident-section">

  <h2 className="section-title">
    INCIDENT-BASED REFLECTION (SUBCONSCIOUS BUT PROFESSIONAL)
  </h2>

  {/* Q10 */}
  <div className="interaction-block">

    <p className="question">
      10. Can you recall instances where students you guided:
    </p>

    <div className="option-grid">

      {[
        "Chose universities based only on fees or speed",
        "Were promised unrealistic timelines",
        "Lost motivation midway",
        "Got stuck due to lack of mentorship",
        "Felt academically isolated"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="checkbox"
            name="incidents"
            value={item}
            onChange={() =>
 handleQAChange(
   "incidentsSection",
   "Can you recall instances where students you guided:",
   item,
   true
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>


  {/* Q11 */}
  <div className="interaction-block">

    <p className="question">
      11. In such instances, what do you feel was missing most?
    </p>

    <div className="option-grid">

      {[
        "Early clarity & profiling",
        "Right topic-direction",
        "Continuous academic mentoring",
        "Ethical counselling",
        "Completion-focused systems"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="checkbox"
            name="missing"
            value={item}
           onChange={() =>
 handleQAChange(
   "incidentsSection",
   "In such instances, what do you feel was missing most?",
   item,
   true
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>

</section>



{/* Section 5: Mentor Role Perception */}
<section className="mentor-role-section">

  <h2 className="section-title">
    MENTOR ROLE PERCEPTION
  </h2>

  {/* Q12 */}
  <div className="interaction-block">

    <p className="question">
      12. How do you personally view your role when guiding students?
    </p>

    <div className="option-grid">

      {[
        "Academic advisor",
        "Life mentor",
        "Ethical guide",
        "Opportunity facilitator",
        "Informal supporter"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="checkbox"
            name="roleView"
            value={item}
            onChange={() =>
 handleQAChange(
   "mentorRoleSection",
   "How do you personally view your role when guiding students?",
   item,
   true
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>


  {/* Q13 */}
  <div className="interaction-block">

    <p className="question">
      13. What matters most to you when recommending any platform?
    </p>

    <div className="option-grid">

      {[
        "Student well-being",
        "Completion probability",
        "Academic integrity",
        "Long-term career impact",
        "Institutional credibility"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="checkbox"
            name="recommendation"
            value={item}
            onChange={() =>
 handleQAChange(
   "mentorRoleSection",
   "What matters most to you when recommending any platform?",
   item,
   true
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>

</section>



 {/* Section 6: Collaboration Alignment */}
<section className="collaboration-section">

  <h2 className="section-title">
    COLLABORATION ALIGNMENT (KEY FILTER)
  </h2>

  {/* Q14 */}
  <div className="interaction-block">

    <p className="question">
      14. How comfortable are you referring a student after evaluation?
    </p>

    <div className="option-grid">

      {[
        "Very comfortable",
        "Somewhat comfortable",
        "Unsure",
        "Not comfortable"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="radio"
            name="comfort"
            value={item}
            onChange={() =>
 handleQAChange(
   "collaborationSection",
   "How comfortable are you referring a student after evaluation?",
   item,
   false
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>


  {/* Q15 */}
  <div className="interaction-block">

    <p className="question">
      15. Which statement resonates most with you?
    </p>

    <div className="option-grid">

      {[
        "Starting a PhD without clarity is harmful",
        "Admission is easy; completion is the real challenge",
        "Guidance matters more than university name",
        "Every student’s journey must be personalised"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="radio"
            name="belief"
            value={item}
            onChange={() =>
 handleQAChange(
   "collaborationSection",
   "Which statement resonates most with you?",
   item,
   false
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>

</section>


{/* Section 7: Collaboration Intent */}
<section className="collaboration-intent-section">

  <h2 className="section-title">
    COLLABORATION INTENT (NON-SALESY)
  </h2>

  {/* Q16 */}
  <div className="interaction-block">

    <p className="question">
      16. What interests you about exploring collaboration with ShodhSutra?
      
    </p>

    <div className="option-grid">

      {[
        "Ethical PhD guidance ecosystem",
        "Structured student support",
        "Academic association",
        "Long-term mentorship role",
        "Secondary income through ethical means"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="checkbox"
            name="interest"
            value={item}
            onChange={() =>
 handleQAChange(
   "intentSection",
   "What interests you about exploring collaboration with ShodhSutra?",
   item,
   true
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>


  {/* Q17 */}
  <div className="interaction-block">

    <p className="question">
      17. How would you prefer to engage initially?
    </p>

    <div className="option-grid">

      {[
        "Informal discussion",
        "Understanding the system first",
        "Observing outcomes before recommending",
        "Active mentorship involvement"
      ].map((item) => (
        <label key={item} className="check-option">
          <input
            type="radio"
            name="engagement"
            value={item}
            onChange={() =>
 handleQAChange(
   "intentSection",
   "How would you prefer to engage initially?",
   item,
   false
 )
}

          />
          {item}
        </label>
      ))}

    </div>

  </div>

</section>



{/* Section 8: Open Reflection */}
<section className="open-reflection-section">

  <h2 className="section-title">
    OPEN REFLECTION (OPTIONAL BUT POWERFUL)
  </h2>

  {/* Q18 */}
  <div className="interaction-block">

    <p className="question">
      18. In your view, what is the single biggest problem in the current PhD ecosystem?
    </p>

    <textarea
      className="reflection-textarea"
      name="ecosystemProblem"
      placeholder="Write your response here..."
      onChange={(e) =>
 handleQAChange(
   "reflectionSection",
   "In your view, what is the single biggest problem in the current PhD ecosystem?",
   e.target.value,
   false
 )
}

    />

  </div>


  {/* Q19 */}
  <div className="interaction-block">

    <p className="question">
      19. What would an ideal, ethical PhD guidance system look like to you?
    </p>

    <textarea
      className="reflection-textarea"
      name="idealSystem"
      placeholder="Write your response here..."
      onChange={(e) =>
 handleQAChange(
   "reflectionSection",
   "What would an ideal, ethical PhD guidance system look like to you?",
   e.target.value,
   false
 )
}

    />

  </div>

</section>



{/* Section 9: Consent & Declaration */}
<section className="final-consent-section">

  <h2 className="section-title">
    CONSENT & DECLARATION
  </h2>

  <div className="interaction-block">

    <p className="question">
      20. I confirm that I believe in ethical, clarity-driven guidance for students
      and wish to explore collaboration responsibly.
    </p>

    <label className="check-option single">

      <input
        type="checkbox"
        checked={form.consent}
        onChange={() =>
          setForm({ ...form, consent: !form.consent })
        }
      />

      Yes, I agree

    </label>

  </div>

</section>




      {/* Submit */}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit Profile
      </button>

    </div>
  );
}
