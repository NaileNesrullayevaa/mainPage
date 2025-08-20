import axios from "axios"
import axiosInstance from "./api"

const editDepartment = (params) => {
    return axiosInstance.post('Department/EditDepartments',params)

}
export default editDepartment