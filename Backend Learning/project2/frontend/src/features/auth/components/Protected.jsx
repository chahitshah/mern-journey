import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate,useNavigate } from 'react-router-dom'
const Protected = ({children}) => {

    const {user,loading,handleLogin,handleRegister,handleGetMe,handleLogout} = useAuth()
    const navigate = useNavigate()
    

    if(loading)
    {
        return <h1>Loading</h1>
    }

    if(!loading && !user)
    {
       return <Navigate to="/login"/>
    }

    

    return children
}

export default Protected
