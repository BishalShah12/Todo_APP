import axios from "axios"

const DB_URL = import.meta.env.VITE_DB_URL
export const axiosInstance = axios.create({
    withCredentials:true,
    baseURL: DB_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token' // If applicable
      }
  });
