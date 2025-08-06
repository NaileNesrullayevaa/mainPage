import axios from "axios";

const BASE_URL=import.meta.env.VITE_BASE_URL;
console.log(BASE_URL)
const axiosInstance=axios.create({
    baseURL:BASE_URL
})


axiosInstance.interceptors.request.use(
  (config) => {
    const storedToken = localStorage.getItem("register-token");
    if (storedToken) {
      config.headers.Authorization = `Bearer ${storedToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("register-token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };


export default axiosInstance




