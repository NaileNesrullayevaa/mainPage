import axios from "axios"
import axiosInstance from "./api"

const getAllPage=()=>{
    return axiosInstance.post('Object/GetAllByPage')  
}
export default getAllPage