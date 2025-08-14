import axios from "axios"
import axiosInstance from "./api"

const getAddDepartment = (params) => {
    return axiosInstance.post('Department/AddDepartments',params)

}
export default getAddDepartment