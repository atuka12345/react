import { inputClasses } from "@mui/material";
import axios from "axios";
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../APP/instance";
import {getUser} from "../APP/util"
const userContext = createContext()

export const useUserContext=()=> useContext(userContext);

export const UserContextProvider =({children})=>{
    const [userData,setUserdata] =useState(() => {
      return getUser()
    })

    const [loading,setloading]=useState(false)
    const [error,seterror] = useState(null)
    const navigate = useNavigate ()

const register = async (userData) =>{
    try {
        setloading(true);
        const {data} = await instance.post("./users/register", userData)
   console.log("data", data)
   localStorage.setItem("token", data.token)
   localStorage.setItem("refresh token", data.refreshToken)
   setUserdata(data.user)
   navigate(`profile/${data.user.firstName}`,{
    state:{id:data.user._id},
  })
    } catch (error){seterror(error.message)
    }
    
  finally {
    setloading (false)
  }
}


const login = async (userInfo) => {

try{

setloading(true)
const {data} = await instance.post("/users/login", userInfo)
localStorage.setItem("token", data.token)
localStorage.setItem("refresh_token", data.refreshToken)
setUserdata(data.user)
navigate(`profile/${data.user.firstName}`,{
  state:{id:data.user._id},
})

}catch (error){
  seterror(error.message)
}finally{
  setloading(false)
}


}


const logout = ()=> {
  localStorage.removeItem("token")
  localStorage.removeItem("refresh_token")
  setUserdata(null)
  navigate("/")
}

    return <userContext.Provider value={{logout, register, userData, login}}>{children}</userContext.Provider>


}