import React, { useContext } from 'react'
import { Link } from "react-router-dom"

import { detaildatacontext } from '../context/CartContext'
const Navbar = () => {
  const [cart, setcart] = useContext(detaildatacontext)
  return (
    <div className='bg-red-500 text-white flex justify-between h-12 items-center text-2xl'>
      <h1>Navbar</h1>
      <div className='flex gap-4 mr-5'>
        <Link className='' to="/">Home</Link>
      <Link to="/cart" >Cart ({cart.length})</Link>
      </div>
    </div>
  )
}

export default Navbar
