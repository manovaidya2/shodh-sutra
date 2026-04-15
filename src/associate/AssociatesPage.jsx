import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, ExternalLink, FileText, Globe, Search, Filter, X, Eye } from "lucide-react";
import "./AssociatesPage.css";

export default function AssociatesPage() {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [error, setError] = useState(null);

  // Backend base URL for file access
  const BACKEND_URL = "https://api.eduglobe.ae";
  const API_URL = "https://api.eduglobe.ae/api/associates";

  // Fetch universities from API using native fetch
  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched universities:", data);
      
      const sortedUniversities = (data.data || []).sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return new Date(a.createdAt) - new Date(b.createdAt);
        }
        if (a._id && b._id) {
          return a._id.localeCompare(b._id);
        }
        return 0;
      });
      
      setUniversities(sortedUniversities);
    } catch (error) {
      console.error("Error fetching universities:", error);
      setError("Failed to load universities. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Get unique university types for filter
  const universityTypes = ["all", ...new Set(universities.map(uni => uni.type).filter(Boolean))];

  // Filter universities based on search and type
  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = 
      (uni.name && uni.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (uni.location && uni.location.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "all" || uni.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Navigate to university detail page
  const handleCardClick = (uni) => {
    navigate(`/associates/${uni._id}`);
  };

  // Function to open website
  const handleVisitWebsite = (url, uniName, e) => {
    e.stopPropagation();
    if (url && url !== "#" && url !== "") {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`Official website for ${uniName} is currently not available.`);
    }
  };

  // Get image URL
  const getImageUrl = (filename) => {
    if (!filename) return null;
    return `${BACKEND_URL}/uploads/${filename}`;
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading universities...</p>
      </div>
    );
  }

  if (error && universities.length === 0) {
    return (
      <div className="error-container">
        <div className="error-card">
          <div className="error-icon">⚠️</div>
          <p className="error-message">{error}</p>
          <button
            onClick={fetchUniversities}
            className="retry-button"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="associates-page">
      <div className="container">
        
        {/* Centered Header Section */}
        <div className="header-section">
          <h1 className="page-title">Universities</h1>
          <div className="title-underline"></div>
          <p className="page-description">
            We have partnerships with <span className="highlight-count">{universities.length}+ universities</span> across India to help you achieve your study abroad dreams.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-filter-row">
            {/* Search Bar */}
            <div className="search-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search by university name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="filter-wrapper">
              <Filter className="filter-icon" size={18} />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="filter-select"
              >
                {universityTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type === "all" ? "All Types" : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            {(searchTerm || selectedType !== "all") && (
              <button
                onClick={clearFilters}
                className="clear-filters-btn"
              >
                <X size={16} />
                <span className="clear-filters-text">Clear Filters</span>
              </button>
            )}
          </div>

          {/* Search Results Count */}
          {(searchTerm || selectedType !== "all") && (
            <p className="results-count">
              Found {filteredUniversities.length} university{filteredUniversities.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* UNIVERSITY CARDS */}
        {filteredUniversities.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <p className="no-results-text">No universities found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="clear-filters-link"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="cards-grid">
            {filteredUniversities.map((uni, idx) => (
              <div 
                key={uni._id || idx} 
                onClick={() => handleCardClick(uni)}
                className="university-card"
              >
                <div className="card-content">
                  {/* University Header */}
                  <div className="card-header">
                    {/* Logo */}
                    {uni.logo ? (
                      <img
                        src={getImageUrl(uni.logo)}
                        alt={uni.name}
                        className="university-logo"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/48?text=Logo";
                        }}
                      />
                    ) : (
                      <div className="university-logo-placeholder">
                        <Building2 size={20} />
                      </div>
                    )}
                    
                    <div className="university-info">
                      <h3 className="university-name">
                        {uni.name}
                      </h3>
                      {uni.location && (
                        <p className="university-location">
                          📍 {uni.location}
                        </p>
                      )}
                      <span className="university-type">
                        {uni.type || "University"}
                      </span>
                    </div>
                  </div>

                  {/* Documents Count Badge */}
                  {uni.documents && uni.documents.length > 0 ? (
                    <div className="documents-section">
                      <div className="documents-badge">
                        <FileText size={14} className="documents-icon" />
                        <span>{uni.documents.length} Document{uni.documents.length !== 1 ? 's' : ''} Available</span>
                        <Eye size={14} className="eye-icon" />
                        <span className="click-hint">Click to view</span>
                      </div>
                    </div>
                  ) : (
                    <div className="no-documents">
                      <p className="no-documents-text">
                        No documents available
                      </p>
                    </div>
                  )}

                  {/* Website Button */}
                  <button
                    onClick={(e) => handleVisitWebsite(uni.website, uni.name, e)}
                    className="website-button"
                  >
                    <Globe size={14} />
                    Visit Official Website
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Footer */}
        <div className="footer-stats">
          <div className="stats-card">
            <p className="stats-text">
              Showing <span className="stats-highlight">{filteredUniversities.length}</span> of <span className="stats-total">{universities.length}</span> associated universities
            </p>
            <button
              onClick={fetchUniversities}
              className="refresh-button"
            >
              <svg className="refresh-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}