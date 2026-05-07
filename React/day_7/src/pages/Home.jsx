import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Cards from '../components/Cards';

const Home = () => {

    const [users, setusers] = useState([]);

        const getData = async () =>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setusers(response.data);
        };
        
        useEffect(()=>{
            getData();
        },[])
  return (
            <div className='flex flex-wrap flex-row'>
                {
                users.map((elem,idx)=>{
                return <Cards key={idx} id={elem.id} name={elem.name} email={elem.email} company={elem.company.name} />
            })
            }
            </div>
  )
}

export default Home