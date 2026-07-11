import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDetails from './pages/UserDetails'
import UserPosts from './pages/UserPosts'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/:userID' element={<UserDetails/>} />
        <Route path='/user/:userID/posts' element={<UserPosts/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
