import axios from "axios"
import axiosInstance from "../api"

const getAll = (payload) => {
    return axiosInstance.post('CategoryParameter/GetAll',payload)

}
export default getAll