import React from 'react'
import "./nav.scss"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'
const Navbar = () => {

    const {user} = useAuth()
    const navigate = useNavigate()
  return (
    <nav className='nav-bar'>
        <div className="nav-brand">
          <span className="brand-glow"></span>
          AURA
        </div>
        <div className="nav-right">
            <button 
            onClick={()=>navigate("/create-post")}
            className='button primary-button'>new post</button>
            {user && (
                <div className="user-profile">
                    {user.profileImage ? (
                        <img src={user.profileImage} alt={user.username} className="nav-avatar" />
                    ) : (
                        <div className="nav-avatar-placeholder">
                            {user.username.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <span className="nav-username">{user.username}</span>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar