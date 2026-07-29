import React from 'react'
import FaceExpression from './features/expression/components/FaceExpression'
import { router } from './app.routes.jsx'
import { RouterProvider } from 'react-router-dom'
import "./features/shared/style/global.scss"
import { AuthProvider } from './features/auth/auth.context'
import { SongContextProvider } from './features/home/song.context.jsx'
const App = () => {
  return (
    <div>
      <AuthProvider>
        <SongContextProvider>
          <RouterProvider router={router}/>
        </SongContextProvider>
      </AuthProvider>
    </div>
  )
}

export default App