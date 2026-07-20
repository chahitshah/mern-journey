import { useContext, useEffect, useState } from "react";
import { UserContext } from "../user.context.jsx";
import {getUserSuggestions,getFollowing,getPendingRequestS,getAcceptRequest,getRejectRequest,followUser,unFollowUser} from "../services/user.api.js"


export const useUser = () =>{

    const context = useContext(UserContext)

    const {loading,setLoading,suggestions,setSuggestions,following,setFollowing,pendingRequest,setPendingRequest}= context

    const handleGetSuggestions = async ()=>{
        setLoading(true)
        const suggestionsData = await getUserSuggestions()
        setSuggestions(suggestionsData.suggestions)
        setLoading(false)
    }

    const handleGetFollowing = async ()=>{
        setLoading(true)
        const followingData = await getFollowing()
        setFollowing(followingData.following)
        setLoading(false)
    }

    const handleGetPendingRequests = async()=>{
        setLoading(true)
        const followingrequestdata = await getPendingRequestS()
        setPendingRequest(followingrequestdata.records)
        setLoading(false)
    }

    const handleAccept = async(requestId)=>{
        setLoading(true)
        const acceptdata = await getAcceptRequest(requestId)
        setPendingRequest(pendingRequest.filter(req=>req._id !==requestId))
        setLoading(false)
    }

    const handleReject = async(requestId)=>{
        setLoading(true)
        const rejectdata = await getRejectRequest(requestId)
        setPendingRequest(pendingRequest.filter(req=>req._id !==requestId))
        setLoading(false)
    }

    const handleFollow = async(username)=>{
        setLoading(true)
        const followdata = await followUser(username)
        setSuggestions(suggestions.filter(user => user.username !== username))

        setLoading(false)

    }

    const handleUnFollow = async(username)=>{
        setLoading(true)
        const unfollowdata = await unFollowUser(username)
        setFollowing(following.filter(record => record.followee !== username))

        setLoading(false)
    }
    return {
        loading, suggestions, following, pendingRequest,
        handleGetSuggestions,
        handleGetFollowing,
        handleGetPendingRequests,
        handleAccept,
        handleReject,
        handleFollow,
        handleUnFollow,
        
    }
}