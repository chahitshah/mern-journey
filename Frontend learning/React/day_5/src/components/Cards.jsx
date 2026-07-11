import React, {useState } from 'react'

const Cards = () => {

  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [mobileno, setmobileno] = useState('');
  const [infostore, setinfostore] = useState([]);

  const Formhandler = (e) =>{
    e.preventDefault();
    const information = {
      username:username,
      email:email,
      mobileno:mobileno
    };

    setinfostore([...infostore,information])
    
    setusername('');
    setemail('');
    setmobileno(''); 

    
  }

  return (
    <div className=" h-100 w-80 bg-[#F8C700] rounded-4xl flex flex-col gap-10 items-center">
      <form onSubmit={(e)=>{
        Formhandler(e)
      }} className='flex flex-col items-center gap-5 mt-20'>
        <div className="section1">
        <h1 className='font-light'>Your Name</h1>
        <input value={username} onChange={(e)=>{
          setusername(e.target.value);
          
        }} className="bg-[#FCDB5A] pt-2.5 pb-2.5 pl-4 pr-15 rounded-2xl"type="text" placeholder='name' />
        </div>

        <div className="section2">
        <h1 className='font-light'>Your Email</h1>
        <input  value={email} onChange={(e)=>{
          setemail(e.target.value);
        }} className="bg-[#FCDB5A] pt-2.5 pb-2.5 pl-4 pr-15 rounded-2xl"type="text" placeholder='Email' />
        </div>

        <div className="section3">
        <h1 className='font-light'>Your Phone</h1>
        <input value={mobileno} onChange={(e)=>{
          setmobileno(e.target.value);
        }} className="bg-[#FCDB5A] pt-2.5 pb-2.5 pl-4 pr-15 rounded-2xl"type="text" placeholder='Phone' />
        </div>

        <button className='bg-[#FCDB5A] h-10 w-20 rounded-2xl active:scale-95 transition'>Submit</button>
        
      </form>

      <div>
        <div className="bg-[#F8C700] h-100 w-200 rounded-2xl flex flex-col items-center justify-center ">
          <h1>Information Log</h1>
          <div className="  overflow-auto flex flex-wrap gap-4">
            {infostore.map((elem,idx)=>{
              return (
                <div className=' bg-[#FCDB5A] h-40 w-35 pl-2 pt-2 rounded-2xl ' key={idx}>
                  <p>ID:{idx}</p>
                  <p>Name : {elem.username}</p>
                  <p>Email : {elem.email}</p>
                  <p>Mobileno : {elem.mobileno}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Cards