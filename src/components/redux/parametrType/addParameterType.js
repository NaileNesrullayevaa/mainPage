import axios from "axios"
import axiosInstance from "../api"

const addParameterType = (params) => {
    return axiosInstance.post('ParameterType/AddParameterType',params)

}
export default addParameterType