import axios from "axios"
import axiosInstance from "../api"

const getAllByPage = (params) => {
    return axiosInstance.post('CategoryParameterChoice/GetAllByPageCategoryParameterChoice',params)

}
export default getAllByPage