import React, { useActionState, useState } from 'react'
import Image1 from '../assets/Pinterest.jpg'
import Profile from '../assets/Profile.jpg'



const Cards = (props) => {
    const [checkfollowornot, setcheckfollowornot] = useState(false);
    const handelflow = ()=>{
        if(checkfollowornot === false)
        {
            setcheckfollowornot(true);
        }
        else{
            setcheckfollowornot(false);
        }
    }

    const [countlikes, setcountlikes] = useState(0);
    const Countlike = ()=>{
        setcountlikes(countlikes+1);
    }
    
  return (
    <div className=' flex flex-col relative h-100 w-80 bg-[#FFFFFF] rounded-xl overflow-hidden'>
        <div className="">
            <img className='h-32 w-full object-cover 'src={Image1} alt="" />
        </div>
        <div className="flex flex-row justify-start pl-30">
            <img className='rounded-full h-20 absolute left-8 top-28'src={Profile} alt="" />
            <div className="flex flex-row items-center gap-2 mt-2">
                <div>
                    <h1 className='text-center'>{props.post}</h1>
                    <p className='text-center'>Post</p>
                </div>
                <div>
                    <h1 className='text-center'>{props.followers}</h1>
                    <p className='text-center'>Followers</p>
                </div>
                <div>
                    <h1 className='text-center'>{props.following}</h1>
                    <p className='text-center'>Following</p>
                </div>
            </div>
        </div>
        <div className="mt-3 ml-9">
            <h1>{props.name}</h1>
            <p>{props.username}</p>
        </div>
        <div className="mt-2 ml-9">
            <p>{props.desc}</p>
        </div>
        <div className="flex justify-around mt-6">
            <button className='bg-blue-500 h-10 w-20 text-white rounded active:scale-95 transition'>Chat</button>
            <button onClick={Countlike}className='bg-blue-500 h-10 w-20 text-white rounded active:scale-95 transition'> <i class="ri-heart-3-line"></i>{countlikes}</button>
            <button onClick={handelflow} className='bg-blue-500 h-10 w-20 text-white rounded active:scale-95 transition'>{checkfollowornot===true?"Following":"Follow"}</button>
        </div>
    </div>
  )
}

export default Cards