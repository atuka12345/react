import { TextField,FormControl,  } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import useAxios from '../../APP/hooks/axios'
import { useUserContext } from '../../context/userContext'
import '../../profile.css'
// import Avatar from "@mui/material/Avatar";
// import { useState } from "react";
// import { storage } from "./mogodb";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Profile1 = () => {
    const{userData} = useUserContext()
    console.log("user",userData)
    const location = useLocation()
    console.log("use location", location)
    const {data} = useAxios(`/users/${location.state?.id}`)


  return (
 <div className='icard'>
  
    <FormControl  className='profile'  >
 
     <h1>hello { userData.firstName}</h1> 
    <h3 className='h3'>name :</h3>
    <TextField  value={data?.user?.firstName || "" }  disabled={true} />
    <h3 className='nor'>last Name:</h3>
    <TextField className='dabla' value={data?.user?.lastName || ""} disabled={true} />
      <h3 className='nor'>email:</h3>
    <TextField className='magla' value={data?.user?.email || ""} disabled={true} />
     </FormControl>
    
    </div>

  )
}

export default Profile1 