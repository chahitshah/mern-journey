import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/form.scss'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

const Register = () => {

    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate()

    const {handleRegister,loading}=useAuth()

    

    async function handleSubmit(e)
    {
        e.preventDefault()
        await handleRegister(username,email,password)
        .then(res=>{
          console.log(res)
          navigate("/")
        })
    }

    if (loading) {
        return (
            <main className="auth-page loading-state">
                <div className="loader-card">
                    <div className="spinner"></div>
                    <h2>Creating your AURA account...</h2>
                    <p>Preparing space context</p>
                </div>
            </main>
        )
    }

  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-visual">
          <div className="mockup-card">
            <span className="mockup-badge">Create your profile</span>
            <h2>Launch your community</h2>
            <p>Join the platform with your username, email, and password to start sharing right away.</p>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-brand">
            <span className="brand-glow"></span>
            AURA
          </div>
          <h1>Register</h1>
          <p className="auth-subtitle">Create a new account with username, email, and password</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-field-group">
                <i className="ri-user-line field-icon"></i>
                <input onInput={(e)=>{setusername(e.target.value)}} className="auth-input" type="text" placeholder="Username" required />
            </div>
            <div className="input-field-group">
                <i className="ri-mail-line field-icon"></i>
                <input onInput={(e)=>{setemail(e.target.value)}} className="auth-input" type="email" placeholder="Email" required />
            </div>
            <div className="input-field-group">
                <i className="ri-lock-password-line field-icon"></i>
                <input onInput={(e)=>{setpassword(e.target.value)}} className="auth-input" type="password" placeholder="Password" required />
            </div>
            <button className="auth-button" type="submit">Register</button>
          </form>

          <div className="auth-divider"><span>or</span></div>

          <p className="auth-helper">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Register