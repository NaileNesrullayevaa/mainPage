import axios from "axios"
import axiosInstance from "./api"

const getAllPage = (payload) => {
    return axiosInstance.post('Object/GetAllByPage', payload)
    // return axiosInstance.post(`Objects/${page}`, payload)

}
export default getAllPage