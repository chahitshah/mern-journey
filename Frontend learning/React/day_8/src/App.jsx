import React from 'react'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
const App = () => {
  return (
   <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
   </div>
   
  )
}

export default App
