import axios from "axios"
import axiosInstance from "./api"

const getById = (params) => {
    return axiosInstance.get(`Department/GetById/${params}`)


}
export default getById