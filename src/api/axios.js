import axios from "axios";

export const BASE_URL = "https://seaslugsapi.azurewebsites.net/api";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});