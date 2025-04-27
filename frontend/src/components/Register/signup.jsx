import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";


 export default function Signup(){

   const[name ,setname]=useState('')
   const[email ,setemail]=useState('')
   const[password ,setpassword]=useState('')
   const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_API_URL;

   const handlesubmit = (e) => {
    e.preventDefault()
    axios.post(`/register`, { name, email, password })
    .then(result => {console.log(result)
      navigate('/Login');
    })
    .catch(error =>console.log(error))
    }
    return(
        <div className='text-white bg-[#a094a6] sm:items-center sm:pt-0 relative flex items-top justify-center min-h-[700px] '> 
          <div className='bg-black rounded-md p-6 flex flex-row gap-4'>
            <form onSubmit={handlesubmit}
             className='border-r-1 border-white pr-6'>
            <h3 className='text-3xl sm:text-4xl text-white font-extrabold tracking-tight text-center m-4'>Register</h3>
            <div>
                    <label className='text-xl'   htmlFor='Email'>
                        <strong>Name</strong>
                    </label>
                    <input
                      type='text'
                      placeholder='Enter Name'
                      autoComplete='off'
                      name='Name'
                      className='text-black bg-white border-2 border-gray-300 rounded-md p-2 ml-14 mb-6 mt-3'
                      onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div>
                    <label className='text-xl' htmlFor='Email'>
                        <strong>Email</strong>
                    </label>
                    <input
                      type='Email'
                      placeholder='Enter Email'
                      autoComplete='off'
                      name='email'
                      className='text-black bg-white border-2 border-gray-300 rounded-md p-2 ml-15 mb-6'
                      onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div>
                     <label className='text-xl' htmlFor='password'>
                        <strong>Password</strong>
                    </label>
                    <input
                    type='password'
                    placeholder='Enter Password'
                     name='password'
                      autoComplete='off'
                      className='text-black bg-white border-2 border-gray-300 rounded-md p-2 ml-6 mb-6'
                      onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <button type='submit' className='md:w-70 bg-white text-black font-bold py-3 px-6 rounded-lg mt-2 ml-6 hover:bg-gray-900 transition ease-in-out duration-300 hover:text-white '>Register</button>
            </form>
            <div className='flex flex-col justify-center'>
               <div className=' text-white text-6xl flex justify-center'> <CgProfile /></div>
                <p className='text-white text-center'>Already have an Account ?</p>
                <div className="flex justify-center mt-4">
                 <Link
                    to="/Login"
                    className="md:w-70 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-900 hover:text-white transition duration-300 text-center ml-6 "
                  >
                    Login
                  </Link>
                </div>
                </div>
          </div>
        </div>
    );
}
