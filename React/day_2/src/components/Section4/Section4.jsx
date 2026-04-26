import React from 'react'
import image3 from '../../assets/image3.png'

const Section4 = () => {
  return (
    <div className="flex justify-between mt-6 ml-12 mr-12 ">
        <div className="flex flex-col gap-2">
            <p>USD bloom in Action</p>
            <h1 className='font-bold text-4xl'>Use cases</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate nulla eius nesciunt nostrum dolores.</p>
        </div>
        <div className=" relative  h-[500px] w-[950px] rounded-2xl overflow-hidden ">
            <img src={image3} alt="" className='h-full w-full object-cover'/>
            <h1 className='absolute top-5 px-4 font-semibold'>Business</h1>
            <p className='absolute top-20 px-4 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat enim ut hic, provident rem aspernatur consectetur! Expedita sequi debitis quia!</p>
            <h1 className='absolute top-50 px-4 font-semibold'>Learn more</h1>
        </div>
    </div>
  )
}

export default Section4