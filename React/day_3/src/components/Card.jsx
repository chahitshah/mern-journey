import React from 'react'
import image1 from '../assets/image1.jpg'
import Profileimage from '../assets/Profile.jpg'

const Card = (props) => {
  return (
    <div className=" relative bg-[#FCFCFC] h-100 w-70 ml-3 mt-4 rounded-3xl flex flex-col">
      <div className="flex justify-center mt-2 relative">
        <img src={image1} alt="" className='w-[95%] h-[40%] rounded-3xl'  />
        <img className='w-25 h-25 absolute rounded-full border-white border-5 left-23 top-20' src={Profileimage} alt="" />
        <button className='bg-[#F5F5F5] pl-3 pr-3 pt-1 pb-1 right-4 top-2 absolute rounded-3xl'>Follow <i class="ri-add-large-line"></i> </button>
      </div>
      <div className="flex flex-col absolute top-[50%] gap-2">
        <h1 className='text-center font-bold '>{props.fullname}</h1>
        <h1 className='text-center'>{props.Desp}</h1>
      </div>
      <div className="bg-[#E8E8E8] absolute top-[72%] h-[15%] w-[95%] rounded-3xl ml-2 flex flex-row gap-2 items-center justify-evenly">
        <div className="text-center">
          <h1 className='font-bold'>{props.likes}</h1>
          <p>Likes</p>
        </div>
        <div className="text-center">
           <h1 className='font-bold'>{props.post}</h1>
          <p>Posts</p>
        </div>
        <div className="text-center">
          <h1 className='font-bold'>{props.view}</h1>
          <p>Views</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-9">
        <i class="ri-instagram-line"></i>
        <i class="ri-twitter-x-line"></i>
        <i class="ri-threads-line"></i>
      </div>

    </div>
  )
}

export default Card