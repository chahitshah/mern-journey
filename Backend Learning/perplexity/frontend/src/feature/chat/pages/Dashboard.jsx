import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {useChat} from '../hooks/useChat'
const Dashboard = () => {

  const chat = useChat()
  const { user } = useSelector((state) => state.auth)

  console.log(user)

  useEffect(()=>{
    chat.initiliazedSocketConnection()
  }, [])

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <p>This is your dashboard.</p>
    </div>
  )
}

export default Dashboard