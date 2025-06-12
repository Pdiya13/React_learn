import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Pdiya13')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center text-white bg-gray-600 m-4 p-4 text-3xl'>
      Github Followers : {data.followers}
      <div className='flex flex-row align-middle mt-5'>
      <img className='' src={data.avatar_url} alt="Git Picture" width={300}/> 
      <div className='flex flex-col mt-5'>
        <div className='align-right ml-50 text-white mb-2 text-xl'> Name : {data.name}</div>
        <div className='align-right ml-50 text-white mb-2 text-xl'> Public Repos : {data.public_repos}</div>
        <div className='align-right ml-50 text-white mb-2 text-xl'> Public Gists  : {data.public_gists}</div>
      </div>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>
{
    const response = await fetch('https://api.github.com/users/Pdiya13')
    return response.json()
}