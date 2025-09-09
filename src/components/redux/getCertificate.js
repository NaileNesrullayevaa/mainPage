import axios from "axios"
import axiosInstance from "./api"

const getCertificate = () => {
    return axiosInstance.post('AsanLogin/GetCertificates')

}
export default getCertificate