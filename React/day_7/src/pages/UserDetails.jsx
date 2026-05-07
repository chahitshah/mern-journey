import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserDetails = () => {

  const params = useParams()

  const [user, setUser] = useState(null)

  useEffect(() => {

    const getData = async () => {

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.userID}`
      )

      setUser(response.data)
    }

    getData()

  }, [params.userID])

  return (
    <div>

      {user && (
        <div>

          <h1>name : {user.name}</h1>

          <h2>email : {user.email}</h2>

          <h2>phone : {user.phone}</h2>

          <h2>Website : {user.website}</h2>

          <h2> Company name : {user.company.name}</h2>

          <h2>Address : {user.address.city}</h2>

        </div>
      )}

    </div>
  )
}

export default UserDetails