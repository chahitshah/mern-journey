import React from 'react'
import Logo from '../../assets/logo.png'
import image1 from '../../assets/image1.jpg'


const Section1 = () => {
  return (
        <div className="flex justify-center relative">
            <img src={image1} alt="" className='w-[90%] h-[60%]  rounded-2xl mt-2 ' />
            <img src={Logo} alt="" className='absolute top-[40px]' />
            <h1 className='absolute top-[90px] text-3xl font-bold'>Where Money Grows</h1>
            <p className='absolute top-[140px] max-w-lg w-[300px] text-center'>A programmable, utility-driven stable token designed for native accrual and seamless integration into DeFi.</p>
            <button className='absolute top-[220px] px-8 py-2 rounded-2xl bg-[black] text-white active:scale-95'>Try it now</button>
        </div>
  )
}

export default Section1