import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/login.scss'
import FormGroup from '../components/FormGroup'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { handleRegister } = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        await handleRegister({ username, email, password })
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
                        <h1>Create account</h1>
                        <p>Join Moodify and vibe to your mood</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <FormGroup
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            label="Username" placeholder="your_username" type="text" />
                        <FormGroup
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email" placeholder="you@example.com" type="email" />
                        <FormGroup
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password" placeholder="••••••••" type="password" />
                        <button type="submit" className="auth-btn">Create Account</button>
                    </form>

                    <div className="auth-footer">
                        <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Register