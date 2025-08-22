import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../components/redux/api'

const DigitalLogin = () => {

    const baseUrl="https://apireyestr.culture.az/"
    const [login,setLogin] =useState(false)
    var navigate=useNavigate()
    var myToken
//   1step
    const redirectAsan=()=>{
        var randomData=Date.now();
        var redirect="https://dev-reyestr.culture.az";
        var clientKey=import.meta.env.VITE_CLIENT_KEY;
        window.location.replace(
            `https://portal.login.gov.az/grant-permission?client_id=${clientKey}&redirect_uri=${redirect}&response_type=code&state=${randomData}&scope=openid certificate`
        )
    }

    // 2step(get code value from url and create token)
    const createToken=async(codeValue)=>{
        const postData={
            Code:codeValue
        }
        try{
            const response=await axiosInstance.post(`AsanLogin/GetAccessToken/${codeValue}`,postData)
            localStorage.setItem("register-token",response.data)
            setLogin(true)
        }
        catch(error){
            toast.error(error.message)
        }
    }

    // 3Step(check Session User)

    useEffect(()=>{
        const myToken=localStorage.getItem("register-token");
        const urlSearchParams = new URLSearchParams(window.location.search);
        const codeValue=urlSearchParams.get("code");

        if(myToken){
            navigate("/asan")
            // handleSessionUser(); //token varsa cagir
        }
        else if(codeValue){
            createToken(codeValue);
        }
    },[login])
  return (
    <div>
        <a onClick={redirectAsan} type='submit' hrwf="#" className='btn'>Daxil ol</a>
    </div>
  )
}

export default DigitalLogin