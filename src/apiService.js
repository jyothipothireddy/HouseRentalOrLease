import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api"; // Update this to match your backend API base URL

// Configure Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Login API call
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data; // Assuming the backend returns a token or success message
  } catch (error) {
    throw error.response?.data || "Something went wrong";
  }
};

// Register API call
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data; // Assuming the backend returns a success message
  } catch (error) {
    throw error.response?.data || "Something went wrong";
  }
};
