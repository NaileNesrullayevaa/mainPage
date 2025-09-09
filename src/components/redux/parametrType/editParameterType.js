import axios from "axios"
import axiosInstance from "../api"

const editParameterType = (params) => {
    return axiosInstance.post('ParameterType/EditParameterType',params)

}
export default editParameterType