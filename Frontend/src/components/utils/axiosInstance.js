import axios from "axios"

// const DB_URL = import.meta.env.VITE_DB_URL
// const DB_URL = "https://todo-app-theta-jet-14.vercel.app/api/v1"
export const axiosInstance = axios.create({
    withCredentials:true,
    baseURL: "https://todo-app-theta-jet-14.vercel.app/api/v1",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token' // If applicable
      }
  });

