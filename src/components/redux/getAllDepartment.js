import axios from "axios"
import axiosInstance from "./api"

const getAllDepartment= (params) => {
    return axiosInstance.post('Department/GetAllByPage',params)

}
export default getAllDepartment