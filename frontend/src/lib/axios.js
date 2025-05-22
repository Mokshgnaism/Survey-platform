import axios from "axios";

const BASE_URL = "https://survey-platform-1.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, 
});
