import React from 'react'
import "../style/createpost.scss"
import { useState } from 'react'
import { useRef } from 'react'
import { usePost } from '../hooks/usePost'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const [caption , setCaption] = useState("")
    const postImageInputFieldRef = useRef(null)
    
    const {loading , handleCreatePost} = usePost()

    const navigate = useNavigate()

    async function handleSubmit(e)
    {
        e.preventDefault()

        const file = postImageInputFieldRef.current.files[0]

        await handleCreatePost(file,caption)

        navigate("/")

    }

    if(loading)
    {
        return(
            <main>
                <h1>Creating Post</h1>
            </main>
        )
    }
  return (
    <main className="create-post-page">
        <div className="form-container">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="postImage">Upload Image</label>
                <input ref={postImageInputFieldRef}hidden type="file" name="postImage" id="postImage" />
                <input
                value={caption}
                onChange={(e)=>(setCaption(e.target.value))} 
                 type="text" name="caption" id="caption" placeholder='Enter Caption'/>
                <button className='button primary-button' type="submit">create Post</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost