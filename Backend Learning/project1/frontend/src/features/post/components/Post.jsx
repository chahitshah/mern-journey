import React from 'react'
import "../../post/style/feed.scss"
import { usePost } from '../hooks/usePost'

const Post = ({user,post}) => {
  
  const {loading,handleLike,handleUnlike} = usePost()

  return (
    <div className="post">
            <div className="user">
              <img src={user.profileImage} alt="" />
              <p>{user.username}</p>
            </div>
            <img src={post.imgUrl} alt="" />
            <div className="icons">
              <div className="left">
                <button onClick={() => post.isliked ? handleUnlike(post._id) : handleLike(post._id)}>
                  <i className={post.isliked ? "ri-heart-fill liked" : "ri-heart-line"}></i>
                </button>
                <button><i className="ri-message-line"></i></button>
                <button><i className="ri-share-forward-line"></i></button>
              </div>
              <div className="right"></div>
            </div>
            <div className="bottom">
              <p className="caption">{post.Caption}</p>
            </div>
          </div>
  )
}

export default Post