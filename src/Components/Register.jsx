import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../config/Appwrite' // Adjust the import path as necessary
const Register = () => {
  ///usesate getting 
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({ name: "", email: "", password: "" })
  const [errorMsg, setErrorMsg] = useState(""); // To show error message
  const [showSuccess, setShowSuccess] = useState(false); // To show success message

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    ///button submit after data is clear in input fields
    // setName("")
    // setEmail("")
    // setPassword("")
    setUserData({ name: "", email: "", password: "" });

    // Here you can add the logic to handle the signup, like sending data to an API
    // const { name, email, password } = userData;
    console.log("User signed up with:", { userData });
    const signup = account.create(
      userData.name,
      userData.email,
      userData.password
    )
    // Navigate after showing success message
    signup.then((res) => {
      console.log("User signed up successfully:", res);
      setShowSuccess(true);
      setErrorMsg(""); // clear any previous error,(err)=>{


      setTimeout(() => {
        setShowSuccess(false);
        navigate("/login");
      }, 3000);
    }, (err) => {

      console.error("Error signing up:", err);
      setErrorMsg("❌ " + (err.message || "Something went wrong during signup."));
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    });
  }
  return (
    <div className='flex flex-col justify-center items-center md:h-screen pt-0 pb-8 bg-gray-200 md:bg-gr ay-100 relative'>

      {/* ✅ Success Toast Notification */}
      {showSuccess && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce z-50">
          ✅ Successfully Registered!
        </div>
      )}

      {/* ❌ Error Box */}
      {errorMsg && (
        <div className="absolute top-4 bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded-lg shadow-sm">
          {errorMsg}
        </div>
      )}
      <div className="flex flex-col items-center bg-white shadow-sm md:shadow-md mb-4 px-6 py-5 rounded-2xl w-80 md:w-110 md:h-120 md:px-10 md:py-5">
        <h1 className='text-xl md:text-3xl font-semibold text-blue-800'>CREATE NEW ACCOUNT</h1>
        <form className='flex flex-col gap-4.5 md:gap-5  w-full mt-5 p-2' onSubmit={handleSubmit}>

          <label htmlFor="Name" className='text-xl font-semibold'>Name</label>
          <input className='border-2 border-blue-400 rounded-xl w-65 h-10 px-3 text-black md:w-88 md:h-10 md:px-4 md:mx-2 focus:outline-none' type="text"
            placeholder='Enter Your Name'
            required
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
          <label htmlFor="email" className='text-xl font-semibold' >E-Mail</label>
          <input className='border-2 border-blue-400 rounded-xl w-65 h-10 px-3 text-black md:w-88 md:h-10 md:px-4 md:mx-2 focus:outline-none' type="email"
            placeholder='Enter your Email'
            required
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })
            } />
          <label htmlFor="password" className='text-xl font-semibold'>Password</label>
          <input className='border-2 border-blue-400 rounded-xl w-65 h-10 px-3 text-black md:w-88 md:h-10 md:px-4 md:mx-2 focus:outline-none' type="password" placeholder='Enter your Password' required value={userData.password} onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })} />

          <button type="submit" className='flex flex-col justify-center items-center bg-orange-400 text-white p-2 mt-2  text-[19px] md:text-xl font-semibold rounded-2xl cursor-pointer w-65 md:w-88 transition-all duration-300 ease-in-out hover:bg-orange-600 active:scale-95 active:bg-orange-700 ' >Submit</button>
        </form>
      </div>
      <p className='text-lg font-semibold text-black md:text-xl'>
        Already have an account ? {""}
        <Link to="/Login" className='text-blue-500 font-semibold animate-bounce inline-block'>   Login</Link>

      </p>
    </div>
  )
}

export default Register