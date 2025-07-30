import axios from "axios";

const BASE_URL=import.meta.env.VITE_APP_BASE_URL;
const axiosInstance=axios.create({
    baseUrl:BASE_URL
})
export default axiosInstance