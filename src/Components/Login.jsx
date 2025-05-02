import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit= (e)=>{
      e.preventDefault()

      setEmail("")
      setPassword("")
  }
  return (
    <div className='flex flex-col justify-center items-center md:h-screen pt-20 pb-10 bg-gray-100'>
      <div className="flex flex-col items-center bg-white shadow-sm md:shadow-md mb-4 px-5
      5 py-5 rounded-2xl w-80 md:w-105 md:h-110 md:px-8 md:py-5">
        <h1 className='text-2xl md:text-3xl font-semibold text-blue-700'>
            LOGIN
        </h1>
        <form className='flex flex-col  gap-5 w-full md:gap-6 mt-5 p-2' onSubmit={handleSubmit}>
          <label className='text-xl md:text-2xl font-medium '>Email</label>
          <input className="border-2 border-blue-500 w-68 h-10 md:w-85 md:h-11 rounded-xl px-2.5 text-lg py-2 mx-0 md:mx-2 focus:outline-none " type="email" placeholder='Enter the Email' required value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }}/>
          <label className='text-xl md:text-2xl font-medium '>Password</label>
          <input className='border-2 border-blue-500 w-68 h-10 md:w-85 md:h-11 rounded-xl px-2.5 text-lg py-2 mx-0 md:mx-2 focus:outline-none' type="Password" placeholder='Enter the Password' required value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
          <button type='submit' className='bg-blue-600 text-white w-68 md:w-87 px-2 py-2 text-2xl rounded-xl mt-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-800 active:scale-95 active:bg-blue-800' >Login</button>
        </form>
      </div>
      <p className='text-lg font-semibold text-black md:text-xl'>
        Don't have an account ? <Link to ="/Register" className='text-blue-500 font-semibold'> Register</Link>
      </p>
    </div>
  )
}

export default Login