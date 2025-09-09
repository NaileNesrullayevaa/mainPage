import axios from "axios"
import axiosInstance from "../api"

const getAll = () => {
    return axiosInstance.get('Parameter/GetAll')

}
export default getAll