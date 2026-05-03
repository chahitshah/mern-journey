import React from 'react'

const Cards = (props) => {
  return (
    <div className='h-80 w-70 bg-white rounded-2xl flex flex-col items-center justify-evenly'>
        <img className='h-25 w-25 rounded-full object-cover' src={props.imageURL} alt="" />
        <h1 className='text-black font-bold'>{props.userName}</h1>
        <h1 className='text-blue-500 font-bold'>{props.userRole}</h1>
        <p className='text-black font-bold'>{props.userDesc}</p>
        <button onClick={()=>{
          props.DeleteHandlerform(props.idx);
        }} className=' p-2 rounded-2xl active:scale-95 transition font-bold bg-red-500 text-white'>Remove</button>
    </div>
  )
}

export default Cards