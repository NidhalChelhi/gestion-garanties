import axios, { AxiosResponse } from "axios";
import { handleError } from "./errorHandler";

// Axios Instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api", // Set your base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic API Call Helper
export const apiCall = async <T>(
  request: Promise<AxiosResponse<T>>,
  log: boolean = true,
): Promise<T | undefined> => {
  try {
    const response = await request;
    if (log) console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    handleError(error);
    return undefined; // Explicitly return undefined
  }
};

export default api;
