import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectedroute = ({hasAccess,children}) => {
    if(!hasAccess){
return <Navigate to="/" replace />
    }
  return children
}

export default Protectedroute