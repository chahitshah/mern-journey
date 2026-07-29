import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/login.scss'
import FormGroup from '../components/FormGroup'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'

const Register = () => {

    const [username,setUsername] = useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const {user,loading,handleLogin,handleRegister,handleGetMe,handleLogout} = useAuth()
    const navigate = useNavigate()
    async function handleSubmit(e)
    {
        e.preventDefault()

        await handleRegister({username,email,password})

        navigate("/")

    }


    return (
        <main className="auth-page">
            <div className="auth-card-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h1>Register</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="auth-form">
                        <FormGroup
                         value={username}
                         onChange={(e)=>{setUsername(e.target.value)}}
                         label="Username" placeholder="Enter your username" type="text" />
                        <FormGroup
                         value={email}
                         onChange={(e)=>{setEmail(e.target.value)}}
                        label="Email" placeholder="Enter your email" type="email" />
                        <FormGroup
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                         label="Password" placeholder="••••••••" type="password" />
                        <button type="submit" className="auth-btn">Submit</button>
                    </form>
                    <div className="auth-footer">
                        <p>Already have an account? <Link to="/login" className="auth-link">Login</Link></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register