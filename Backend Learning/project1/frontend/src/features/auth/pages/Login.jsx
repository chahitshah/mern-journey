import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style/form.scss'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate()

    

    async function handleSubmit(e)
    {
        e.preventDefault()

        await handleLogin(username,password)
        .then(res=>{
          console.log(res)
          navigate("/")
        })
    }

    const { handleLogin,loading } = useAuth()
    
    if (loading) {
        return (
            <main className="auth-page loading-state">
                <div className="loader-card">
                    <div className="spinner"></div>
                    <h2>Logging into AURA...</h2>
                    <p>Securing your workspace</p>
                </div>
            </main>
        )
    }

  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-visual">
          <div className="mockup-card">
            <span className="mockup-badge">Connect • Share • Grow</span>
            <h2>Your social space, redesigned</h2>
            <p>Sign in to explore posts, follow creators, and stay connected with your audience.</p>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-brand">
            <span className="brand-glow"></span>
            AURA
          </div>
          <h1>Login</h1>
          <p className="auth-subtitle">Use your username and password to continue</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-field-group">
                <i className="ri-user-line field-icon"></i>
                <input onInput={(e)=>{setusername(e.target.value)}} className="auth-input" type="text" placeholder="Username" required />
            </div>
            <div className="input-field-group">
                <i className="ri-lock-password-line field-icon"></i>
                <input onInput={(e)=>{setpassword(e.target.value)}} className="auth-input" type="password" placeholder="Password" required />
            </div>
            <button className="auth-button" type="submit">Login</button>
          </form>

          <div className="auth-divider"><span>or</span></div>

          <p className="auth-helper">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login