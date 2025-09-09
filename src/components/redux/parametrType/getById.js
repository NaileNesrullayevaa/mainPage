import axios from "axios"
import axiosInstance from "../api"

const getById = (params) => {
    return axiosInstance.get(`ParameterType/GetById/${params}`)

}
export default getById