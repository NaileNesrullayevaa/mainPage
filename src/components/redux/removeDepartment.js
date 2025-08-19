import axios from "axios"
import axiosInstance from "./api"

const removeDepartment = (params) => {
    return axiosInstance.delete('Department/RemoveDepartment',params)

}
export default removeDepartment