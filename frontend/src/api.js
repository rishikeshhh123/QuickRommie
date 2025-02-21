import axios from "axios"; 

const API_URL = "http://localhost:5000/api";

export const login = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const fetchComplaints = () => axios.get(`${API_URL}/complaints`);