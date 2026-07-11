import React from 'react'
import { Link } from 'react-router-dom'


const Cards = (props) => {
  return (
    <div >
        <div className='p-6 flex items-center justify-center  bg-gray-100'>
      
      <div className="h-96 w-72 bg-white rounded-2xl shadow-xl flex items-center justify-evenly flex-col p-4 hover:scale-105 transition-all duration-300">
        
        <div>
          <img
            className='h-28 w-28 rounded-full border-4 border-black object-cover'
            src="https://i.pinimg.com/736x/34/99/f7/3499f74c139df6d58d100312a8b738d8.jpg"
            alt=""
          />
        </div>

        <div className="text-2xl font-bold">
          {props.name}
        </div>

        <div className="text-gray-600">
          {props.email}
        </div>

        <div className="text-gray-700 font-medium">
          {props.company}
        </div>

        <Link to={`/user/${props.id}`} className="border-2 border-black px-5 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300 active:scale-95">
          View Details
        </Link>

      </div>

    
    </div>
    </div>
  )
}

export default Cards
