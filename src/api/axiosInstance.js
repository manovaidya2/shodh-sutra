import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5007/api",
  // remove withCredentials if you don't need cookies/auth
});

export default axiosInstance;
