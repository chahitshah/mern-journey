import React from 'react'
import {RouterProvider} from 'react-router-dom'
import { route } from './routes'
import "./style.scss"
import { AuthProvider } from './features/auth/auth.context.jsx'
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={route}/>
    </AuthProvider>
    
  )
}

export default App