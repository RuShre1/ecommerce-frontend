//Rushina Sherstha Login Page

import React, { useState } from 'react'
import Title from '../components/Title'

// Login/Signup page component
const Login = () => {
  // State to track if user is logging in or signing up
  const [currentState, setCurrentState] = useState('Sign Up');

  // Handle form submission
  const onSubmitHandler = async (event) => {
      event.preventDefault();
  }

  return (
    // Login/Signup form
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center max-w-md mx-auto mt-14 gap-4 text-gray-800'>
        {/* Form title section */}
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='parata-regular text-3xl'>{currentState}</p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>

        {/* Name input (only shown during signup) */}
        {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-black' placeholder='Name' required/>}
        
        {/* Email input */}
        <input type="email" className='w-full px-3 py-2 border border-black' placeholder='Email' required/>
        
        {/* Password input */}
        <input type="password" className='w-full px-3 py-2 border border-black' placeholder='Password' required/>

        {/* Form footer with links */}
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
            {/* Forgot password link */}
            <p className=' cursor-pointer'>Forgot your password?</p>
            {/* Toggle between login and signup */}
            {
              currentState === 'Login'
              ? <p onClick={()=>setCurrentState('Sign Up')} className=' cursor-pointer'>Create account</p>
              : <p onClick={()=>setCurrentState('Login')} className=' cursor-pointer'>Already have an account?</p>
            }
        </div>

        {/* Submit button */}
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
