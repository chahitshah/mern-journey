import React, { useState } from 'react'
import Cards from './components/Cards';

const App = () => {

  const [userName, setuserName] = useState('');
  const [userRole, setuserRole] = useState('');
  const [imageURL, setimageURL] = useState('');
  const [userDesc, setuserDesc] = useState('');

  const [allInfo, setallInfo] = useState();

  const localData = JSON.parse(localStorage.getItem('all-users')) || [];

  const [allUsers, setallUsers] = useState(localData);

  
  const Handelform=(e)=>{
    e.preventDefault();
    
    setallUsers([...allUsers,{userName,userRole,imageURL,userDesc}]);
    console.log(allUsers);
    localStorage.setItem('all-users',JSON.stringify(allUsers));
    setuserName('');
    setimageURL('');
    setuserDesc('')
    setuserRole('');
  }

  const DeleteHandlerform=(idx)=>{
    const copyusers =[...allUsers];
    copyusers.splice(idx,1);
    setallUsers(copyusers);
  }
  return (
    <div className='flex flex-col min-h-screen bg-black text-white gap-4'>
      <form onSubmit={(e)=>{
      Handelform(e);
    }} className=' flex flex-col '>
      <div className='flex '>
      <input 
      value={userName}
      onChange={(e)=>{
        setuserName(e.target.value);
      }} 
      className='ml-4 mt-4 p-4 border ' 
      type="text" 
      placeholder='Enter you name'/>
      <input
      value={imageURL}
      onChange={(e)=>{
        setimageURL(e.target.value);
      }}
      className='ml-4 mt-4 p-4 border ' 
      type="text" 
      placeholder='Image URL'/>

      <input
      value={userRole}
      onChange={(e)=>{
        setuserRole(e.target.value)
      }} 
      className='ml-4 mt-4 p-4 border ' 
      type="text" 
      placeholder='Enter Role'/>

      <input
      value={userDesc}
      onChange={(e)=>{
        setuserDesc(e.target.value);
      }} 
      className='ml-4 mt-4 p-4 border ' 
      type="text" 
      placeholder='Enter Descripition'/>
      </div>
     
      <button className='ml-4 mt-4 w-[90%] h-14 border bg-green-500 active:scale-95 transition'>Create User</button>
    </form>

    <div className='flex flex-wrap  gap-3 m-4'>
      {allUsers.map(function(elem,idx){
        return <Cards key={idx} idx={idx} elem={elem} DeleteHandlerform={DeleteHandlerform}/>
      })}
    </div>
    </div>
    
  )
}

export default App