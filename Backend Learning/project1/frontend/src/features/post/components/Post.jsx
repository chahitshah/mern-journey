import React from 'react'
import "../../post/style/feed.scss"
import { usePost } from '../hooks/usePost'

const Post = ({ user, post }) => {
  const { handleLike, handleUnlike } = usePost()

  return (
    <article className="post-card">
      {/* 1. Header with User Info */}
      <header className="post-header">
        <div className="user-details">
          {user.profileImage ? (
            <img src={user.profileImage} alt={user.username} className="user-avatar" />
          ) : (
            <div className="user-avatar-placeholder">
              {user.username.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="user-meta">
            <span className="username">{user.username}</span>
            <span className="post-time">Active Now</span>
          </div>
        </div>
        <button className="post-more-btn">
          <i className="ri-more-2-fill"></i>
        </button>
      </header>

      {/* 2. Post Image */}
      <div className="post-image-container">
        <img src={post.imgUrl} alt="Post content" className="post-image" />
        <div className="image-overlay"></div>
      </div>

      {/* 3. Actions / Interaction Icons */}
      <footer className="post-footer">
        <div className="actions-bar">
          <div className="action-buttons-left">
            <button 
              className={`action-btn like-btn ${post.isliked ? 'liked' : ''}`}
              onClick={() => post.isliked ? handleUnlike(post._id) : handleLike(post._id)}
            >
              <i className={post.isliked ? "ri-heart-3-fill" : "ri-heart-3-line"}></i>
            </button>
            <button className="action-btn comment-btn">
              <i className="ri-chat-3-line"></i>
            </button>
            <button className="action-btn share-btn">
              <i className="ri-send-plane-2-line"></i>
            </button>
          </div>
          <button className="action-btn bookmark-btn">
            <i className="ri-bookmark-line"></i>
          </button>
        </div>

        {/* 4. Caption */}
        <div className="post-caption-section">
          <p className="caption-text">
            <strong className="caption-username">{user.username}</strong>
            {post.Caption}
          </p>
        </div>
      </footer>
    </article>
  )
}

export default Post