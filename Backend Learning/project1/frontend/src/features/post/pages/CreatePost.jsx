import React, { useState, useRef } from 'react'
import "../style/createpost.scss"
import { usePost } from '../hooks/usePost'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const [caption, setCaption] = useState("")
    const [imagePreview, setImagePreview] = useState(null)
    const postImageInputFieldRef = useRef(null)
    const { loading, handleCreatePost } = usePost()
    const navigate = useNavigate()

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const triggerFileInput = () => {
        postImageInputFieldRef.current.click()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const file = postImageInputFieldRef.current.files[0]
        if (!file) return
        await handleCreatePost(file, caption)
        navigate("/")
    }

    if (loading) {
        return (
            <main className="create-post-page loading-state">
                <div className="loader-card">
                    <div className="spinner"></div>
                    <h2>Publishing your thoughts...</h2>
                    <p>Uploading to AURA servers</p>
                </div>
            </main>
        )
    }

    return (
        <main className="create-post-page">
            <div className="create-post-card">
                <header className="card-header">
                    <button className="back-btn" onClick={() => navigate("/")}>
                        <i className="ri-arrow-left-line"></i>
                    </button>
                    <h1>New Post</h1>
                    <div className="header-placeholder"></div>
                </header>

                <form onSubmit={handleSubmit} className="create-post-form">
                    {/* Image Upload Area */}
                    <div 
                        className={`upload-zone ${imagePreview ? 'has-preview' : ''}`}
                        onClick={triggerFileInput}
                    >
                        {imagePreview ? (
                            <img src={imagePreview} alt="Preview" className="preview-image" />
                        ) : (
                            <div className="upload-prompt">
                                <i className="ri-image-add-line upload-icon"></i>
                                <span>Upload High-Res Media</span>
                                <p>Click to browse files (JPEG, PNG)</p>
                            </div>
                        )}
                        <input 
                            ref={postImageInputFieldRef}
                            hidden 
                            type="file" 
                            name="postImage" 
                            id="postImage" 
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    {/* Caption Input */}
                    <div className="input-group">
                        <textarea
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)} 
                            name="caption" 
                            id="caption" 
                            placeholder="Write a caption..."
                            rows="3"
                            maxLength="200"
                        />
                        <span className="char-counter">{caption.length}/200</span>
                    </div>

                    <button 
                        className="button primary-button submit-btn" 
                        type="submit"
                        disabled={!imagePreview}
                    >
                        Share Post
                    </button>
                </form>
            </div>
        </main>
    )
}

export default CreatePost