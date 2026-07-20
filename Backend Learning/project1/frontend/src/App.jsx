import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes'
import "./style.scss"
import { AuthProvider } from './features/auth/auth.context.jsx'
import { PostContextProvider } from './features/post/post.context.jsx'
import { UserContextProvider } from './features/user/user.context.jsx'
const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <UserContextProvider>
          <RouterProvider router={route} />
        </UserContextProvider>

      </PostContextProvider>

    </AuthProvider>

  )
}

export default App