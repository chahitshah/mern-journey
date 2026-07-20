import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})


export async function getUserSuggestions()
{
    const response = await api.get("/api/users/suggestions")
    return response.data
}

export async function getFollowing()
{
    const response = await api.get("/api/users/following")
    return response.data
}

export async function getPendingRequestS()
{
    const response = await api.get("/api/users/pending-requests")
    return response.data
}

export async function getAcceptRequest(requestId)
{
    const response = await api.post(`/api/users/accept/${requestId}`)
    return response.data
}

export async function getRejectRequest(requestId)
{
    const response = await api.post(`/api/users/reject/${requestId}`)
    return response.data
}

export async function followUser(username)
{
    const response = await api.post(`/api/users/follow/${username}`)
    return response.data
}

export async function unFollowUser(username)
{
    const response = await api.post(`/api/users/unfollow/${username}`)
    return response.data
}
