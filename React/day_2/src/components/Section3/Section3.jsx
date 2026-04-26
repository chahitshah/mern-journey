import React from 'react'
import image2 from '../../assets/image2.jpg'

const Section3 = () => {
  return (
    <div className="flex mt-5 gap-3 ml-12 mr-12">
      <div className=" relative h-[200px] w-[500px] rounded-3xl overflow-hidden">
        <img src={image2} alt="" className='object-cover'/>
        <h1 className='absolute text-black top-9 ml-4'>Capital that grows</h1>
        <p className='absolute text-black bottom-5 ml-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, modi.</p>
      </div>
      <div className="h-[200px] w-[200px] rounded-3xl flex flex-col gap-3 px-2 py-2 justify-between bg-[#2B2742] text-white">
        <h1 className='w-[300px] '>Always liquid,always stable</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="h-[200px] w-[200px]  rounded-3xl flex flex-col gap-3 px-2 py-2 justify-between  bg-[#2B2742] text-white">
        <h1 className='w-[300px]'>100% hands-free</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  )
}

export default Section3