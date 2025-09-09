import axios from "axios"
import axiosInstance from "../api"

const getAllByPage = (params) => {
    return axiosInstance.post('ParameterType/GetAllByPage',params)

}
export default getAllByPage