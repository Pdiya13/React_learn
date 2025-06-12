import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div>
      <h1 className='text-center text-white bg-gray-600 m-4 p-4 text-3xl'>User : {userId} </h1>
    </div>
  )
}  

export default User
