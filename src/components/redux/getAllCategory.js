import axios from "axios"
import axiosInstance from "./api"

const getAllCategory = (params) => {
    return axiosInstance.post('Category/GetAll',params)

}
export default getAllCategory