import { getFeed,createPost,likePost,unlikePost } from "../services/post.api";
import { useContext,useEffect } from "react";
import { PostContext } from "../post.context";


export const usePost = () =>{
    const context = useContext(PostContext)

    const {loading,setloading,Post,setPost,feed,setfeed} = context

    const handleGetFeed = async()=>{
        setloading(true)
        const data = await getFeed()
        setfeed(data.posts)
        setloading(false)
    }

    const handleLike = async(postId)=>{
        try {
            await likePost(postId)
            setfeed(feed.map(p => p._id === postId ? { ...p, isliked: true } : p))
        } catch (err) {
            console.error("Error liking post:", err)
        }
    }

    const handleUnlike = async(postId)=>{
        try {
            await unlikePost(postId)
            setfeed(feed.map(p => p._id === postId ? { ...p, isliked: false } : p))
        } catch (err) {
            console.error("Error unliking post:", err)
        }
    }

    const handleCreatePost = async(imageFile,caption)=>{
        setloading(true)
        const data = await createPost(imageFile,caption)
        setfeed([data.post,...feed])
        setloading(false)
    }
    return {loading,feed,Post,handleGetFeed,handleCreatePost,handleLike,handleUnlike}
}