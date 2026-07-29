import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/login.scss'
import FormGroup from '../components/FormGroup'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const { handleLogin } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        await handleLogin({ email, password })
        navigate("/")
    }

    return (
        <main className="auth-page">
            <div className="auth-card-container">

                {/* Brand */}
                <div className="auth-brand">
                    <div className="auth-brand-icon">🎵</div>
                    <span className="auth-brand-name">Moodify</span>
                    <span className="auth-brand-tagline">Music that feels you</span>
                </div>

                <div className="auth-card">
                    <div className="auth-header">
                        <h1>Welcome back</h1>
                        <p>Sign in to continue to Moodify</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <FormGroup
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email" placeholder="you@example.com" type="email" />
                        <FormGroup
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password" placeholder="••••••••" type="password" />
                        <button type="submit" className="auth-btn">Sign In</button>
                    </form>

                    <div className="auth-footer">
                        <p>Don't have an account? <Link to="/register" className="auth-link">Create one</Link></p>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Login
