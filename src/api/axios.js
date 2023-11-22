import axios from "axios";

export const BASE_URL = "https://localhost:5000/api";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});