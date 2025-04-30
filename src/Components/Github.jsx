import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useLoaderData } from 'react-router-dom'
const Github = () => {
  // const data = useLoaderData()

  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/Vaibhavgit01')
    .then(response =>
      response.json())
      .then(data =>{
        // console.log(data)
        setData(data)
      })
  })
  return (
    <div className=' bg-white text-center text-black mb-5 p-5 rounded-2xl text-2xl md:text-3xl mt-5 underline md:mx-auto md:max-w-screen-xl'> Github Follower: {data.followers}
    <div className='flex justify-center items-center p-5  md:mt-4'>
    <img className="rounded-3xl w-40 mt-5 md:p-2 md:w-50 md:mt-0 shadow-sm md:shadow-xl shadow-gray-500"  src={data.avatar_url} alt="Github_Profileimage" />
    </div>
    </div>
  )
}

export default Github

// export const githubLoader = async () => {
//   const response = await fetch('https://api.github.com/users/Vaibhavgit01')
//   return response.json()
// }