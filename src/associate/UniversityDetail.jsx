import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, MapPin, Building2 } from 'lucide-react';
import './UniversityDetail.css';

const BACKEND_URL = "https://api.eduglobe.ae";
const API_URL = "https://api.eduglobe.ae/api/associates";

export default function UniversityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUniversityDetails();
  }, [id]);

  const fetchUniversityDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUniversity(data.data);
    } catch (error) {
      console.error("Error fetching university details:", error);
      setError("Failed to load university details");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (doc) => {
    const fileName = typeof doc === 'object' ? doc.file : doc;
    const docName = typeof doc === 'object' ? doc.name : doc;
    const url = `${BACKEND_URL}/uploads/${fileName}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = docName || fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      // Fallback: open in new tab
      window.open(url, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="uni-detail-loading-container">
        <div className="uni-detail-loading-spinner"></div>
      </div>
    );
  }

  if (error || !university) {
    return (
      <div className="uni-detail-error-container">
        <div className="uni-detail-error-content">
          <div className="uni-detail-error-icon">⚠️</div>
          <p className="uni-detail-error-message">{error || "University not found"}</p>
          <button
            onClick={() => navigate(-1)}
            className="uni-detail-back-button"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="uni-detail-main-wrapper">

      {/* Header */}
      <div className="uni-detail-header">
        <div className="uni-detail-header-content">
          <button onClick={() => navigate(-1)} className="uni-detail-nav-back">
            <ArrowLeft size={20} />
          </button>
          <h1 className="uni-detail-header-title">{university.name}</h1>
        </div>
      </div>

      {/* Full width single page — no cards, just sections with dividers */}
      <div className="uni-detail-main-content">

        {/* University Info */}
        <div className="uni-detail-info-section">
          {university.logo && (
            <img
              src={`${BACKEND_URL}/uploads/${university.logo}`}
              alt={university.name}
              className="uni-detail-logo"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/96?text=Logo";
              }}
            />
          )}
          <div className="uni-detail-info-wrapper">
            <h2 className="uni-detail-name">{university.name}</h2>
            <div className="uni-detail-tags">
              {university.location && (
                <span className="uni-detail-tag">
                  <MapPin size={15} className="uni-detail-tag-icon" />
                  {university.location}
                </span>
              )}
              {university.type && (
                <span className="uni-detail-tag">
                  <Building2 size={15} className="uni-detail-tag-icon" />
                  {university.type}
                </span>
              )}
              {university.website && (
                <a href={university.website} target="_blank" rel="noreferrer" className="uni-detail-website-link">
                  <Globe size={15} />
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Detail Sections */}
        {university.details?.filter(d => d.heading).map((detail, i) => (
          <React.Fragment key={i}>
            <hr className="uni-detail-section-divider" />
            <div className="uni-detail-description-section">
              <h3 className="uni-detail-section-heading">
                {detail.heading}
              </h3>
              <p className="uni-detail-section-text">
                {detail.description}
              </p>
            </div>
          </React.Fragment>
        ))}

        {/* Important Files */}
        {university.documents?.length > 0 && (
          <>
            <hr className="uni-detail-section-divider" />
            <div className="uni-detail-files-section">
              <h3 className="uni-detail-files-heading">
                Important Files
              </h3>
              <div className="uni-detail-files-grid">
                {university.documents.map((doc, i) => {
                  const docName = typeof doc === 'object' ? doc.name : doc;
                  return (
                    <button
                      key={i}
                      onClick={() => handleDownload(doc)}
                      className="uni-detail-file-card"
                    >
                      <span className="uni-detail-file-name">{docName}</span>
                      <div className="uni-detail-file-icon">
                        <svg width="36" height="36" viewBox="0 0 38 38" fill="none">
                          <rect x="4" y="2" width="22" height="28" rx="3"
                            fill="white" opacity=".2"/>
                          <rect x="4" y="2" width="22" height="28" rx="3"
                            stroke="white" strokeWidth="1.2"/>
                          <path d="M9 12h12M9 16h12M9 20h8"
                            stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                          <rect x="20" y="20" width="14" height="14" rx="3" fill="white" opacity=".25"/>
                          <path d="M27 24v5M24.5 26.5L27 29l2.5-2.5"
                            stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}