import axios from "axios"
import axiosInstance from "../api"

const removeParameterType = (params) => {
    return axiosInstance.delete("ParameterType/RemoveParameterType",{
        data:params
    })

}
export default removeParameterType