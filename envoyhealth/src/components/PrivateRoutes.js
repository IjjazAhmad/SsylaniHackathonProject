import React from 'react'
import { useAuthContext } from '../pages/Contaxt/AuthContaxt'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({ Component }) {
    const location = useLocation()
    const { isAuth } = useAuthContext()
     
    if (!isAuth) {
      return <Navigate to='/auth/login' state={{ from: location.pathname }} replace />
    }
  
    return (
    <>
        <Component />
    </>
    )
}
