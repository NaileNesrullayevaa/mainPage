import axios from "axios"
import axiosInstance from "../api"

const getAllCategory = (payload) => {
    return axiosInstance.post('Category/GetAll',payload)

}
export default getAllCategory