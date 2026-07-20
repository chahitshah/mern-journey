import React from 'react'
import '../style/sidebar.scss'
import { useUser } from '../hooks/useUser'
import { useEffect } from 'react'

const Sidebar = () => {
    const {
        suggestions,
        following,
        pendingRequest,
        handleGetSuggestions,
        handleGetFollowing,
        handleGetPendingRequests,
        handleAccept,
        handleReject,
        handleFollow,
        handleUnFollow
    } = useUser()

    useEffect(() => {
        handleGetSuggestions()
        handleGetFollowing()
        handleGetPendingRequests()
    }, [])

    return (
        <aside className="sidebar-container">
            {/* 1. Follow Requests Section */}
            <div className="sidebar-section requests">
                <h3>Follow Requests</h3>
                {pendingRequest && pendingRequest.length > 0 ? (
                    <div className="card-list">
                        {pendingRequest.map(req => (
                            <div key={req._id} className="request-card">
                                <div className="user-details">
                                    <div className="avatar-placeholder">
                                        {req.follower.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="username">{req.follower}</span>
                                </div>
                                <div className="actions">
                                    <button 
                                        className="accept-btn" 
                                        onClick={() => handleAccept(req._id)}
                                    >
                                        Accept
                                    </button>
                                    <button 
                                        className="reject-btn" 
                                        onClick={() => handleReject(req._id)}
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="empty-message">No pending requests</p>
                )}
            </div>

            {/* 2. Following Section */}
            <div className="sidebar-section following-count">
                <h3>Following ({following ? following.length : 0})</h3>
                {following && following.length > 0 ? (
                    <div className="card-list">
                        {following.map(record => (
                            <div key={record._id} className="suggestion-card">
                                <div className="user-info">
                                    <div className="avatar-placeholder">
                                        {record.followee.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="username">{record.followee}</span>
                                </div>
                                <button 
                                    className="reject-btn" 
                                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                                    onClick={() => handleUnFollow(record.followee)}
                                >
                                    Unfollow
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="empty-message">You are not following anyone</p>
                )}
            </div>

            {/* 3. Suggestions Section */}
            <div className="sidebar-section suggestions">
                <h3>Suggested for you</h3>
                {suggestions && suggestions.length > 0 ? (
                    <div className="card-list">
                        {suggestions.map(user => (
                            <div key={user._id} className="suggestion-card">
                                <div className="user-info">
                                    {user.profileImage ? (
                                        <img src={user.profileImage} alt={user.username} className="avatar" />
                                    ) : (
                                        <div className="avatar-placeholder">
                                            {user.username.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                    <span className="username">{user.username}</span>
                                </div>
                                <button 
                                    className="follow-btn" 
                                    onClick={() => handleFollow(user.username)}
                                >
                                    Follow
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="empty-message">No suggestions available</p>
                )}
            </div>
        </aside>
    )
}

export default Sidebar
