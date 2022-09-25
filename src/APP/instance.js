import axios from "axios";
import { checkTokenValidity } from "./util";
import decode from "jwt-decode"
import App from "../App";

export const instance = axios.create({
    baseURL:"http://localhost:3001/"
})

instance.interceptors.request.use(async(req)=>{
    const token = localStorage.getItem("token")
    const refreshToken = localStorage.getItem("refresh_token")
    if(!token) return req
    
 

    req.headers.Authorization=`Bearer ${token}`
const expirationDate = decode(token).exp
const isExpired = expirationDate * 1000 < new Date().getTime()
if(!isExpired) return req
const response = await axios.post("http://localhost:3001/users/refresh", {
refresh_token: refreshToken,
})
localStorage.setItem("token",response.data.token)
req.headers.Authorization = `Bearer ${response.data.token}`
return req
})

instance.interceptors.response.use(
    (res) => {
        return res
    },
    async (err) => {
        if (err.response.message === "token not valid") {
            const refresh_token = localStorage.getItem("refresh_token")
            const response = await App.post("/users/refresh", {
                refresh_token,
            })
            localStorage.setItem("token", response.data.token)
        }
    
return Promise.reject(err)    }
)

    

