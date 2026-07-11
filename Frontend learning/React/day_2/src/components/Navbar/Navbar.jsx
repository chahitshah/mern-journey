import React from 'react'
import Logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="">
        <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-2 ">
                <img src={Logo} alt="" />
                <p>BloomFi</p>
            </div>
            <div className="flex items-center gap-6">
                <p>USE bloom</p>
                <p>Business</p>
                <p>Treasury</p>
                <p>Developers</p>
                <p>Join us</p>
            </div>
            <button className="bg-[#2B273E] px-4 py-2 rounded-xl text-white ml-3  hover:bg-[#1f1b30] transition duration-300 active:scale-95">launch BETA</button>
        </div>
    </nav>
  )
}

export default Navbar