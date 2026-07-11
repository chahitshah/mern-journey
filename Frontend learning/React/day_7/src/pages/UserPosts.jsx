import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserPosts = () => {
    const params = useParams();
    const [posts, setposts] = useState([]);
    useEffect(() => {

    const getData = async () => {

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${params.userID}`
      )

      setposts(response.data)
    }

    getData()

  }, [params.userID])

  return (
    <div>
        {posts.map((elem)=>{
            return<div>
                <h1>{elem.body}</h1>
                <h1>{elem.title}</h1>

            </div>

        })}
    </div>
  )
}

export default UserPosts