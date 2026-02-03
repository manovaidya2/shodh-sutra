// src/api/universityApi.js
import axiosInstance from './axiosInstance';

export const universityApi = {
  // Submit university association form
  submitUniversityForm: (formData) => {
    return axiosInstance.post('/university/submit', formData);
  },

  // Get all submissions (admin)
  getAllSubmissions: (params = {}) => {
    return axiosInstance.get('/university/submissions', { params });
  },

  // Get submission by ID (admin)
  getSubmissionById: (id) => {
    return axiosInstance.get(`/university/submissions/${id}`);
  },

  // Update submission status (admin)
  updateSubmissionStatus: (id, statusData) => {
    return axiosInstance.put(`/university/submissions/${id}/status`, statusData);
  }
};