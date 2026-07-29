import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

export async function registerUser({email,password,username})
{
    const response = await api.post("/register",{email,password,username})

    return response.data
}

export async function loginUser({email,password,username})
{
    const response = await api.post("/login",{email,password,username})

    return response.data 
}

export async function getMe()
{
    const response = await api.get("/get-me")

    return response.data
}

export async function logoutUser()
{
    const response = await api.get("/logout")
    return response.data
}