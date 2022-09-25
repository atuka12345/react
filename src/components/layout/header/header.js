import React from 'react';
import { useUserContext } from "../../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import {CgChevronDown} from "react-icons/cg";
import { Button } from '@mui/material';
import Search from './search';

const Header = () => {
  const navigate =useNavigate()
const navigateProfile=()=>{
navigate (`/profile/${userData.firstName}`,{
state:{id: userData._id}
})
}
    const {userData,logout } = useUserContext()
  return (
    <div>
      <header>
        <Search/>
       <Link to="/" ><button className="btn">Home</button></Link>
                <div className="dropdown" >
                    <button className="btn1"> <CgChevronDown size='13px'/> </button>
                    <div className="dropdown-content">
            
            {! userData ? (
            <>
            <Link to="/regiter">Registration</Link>
           
            <br />
           <Link to="/login">Login</Link>  
            <br />
            
            </>
            ): (
            <>
           <Button onClick={navigateProfile}> profile</Button>

            <Link to="/Homepage" onClick={logout}>logout </Link>

            <Link to="/cart">Cart</Link>
            </>
             )}

              
           
            </div>
            </div>
            </header>
      </div>
  )
}

export default Header