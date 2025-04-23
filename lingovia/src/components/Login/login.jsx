import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



 export default function Login(){

   const[email ,setemail]=useState('')
   const[password ,setpassword]=useState('')
   const navigate = useNavigate();

   const handlesubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/Login',{email,password})
    .then(result => {console.log(result)
        if(result.data === "success"){
            navigate('/Home');
        }
    })
    .catch(error =>console.log(error))


     }
    return(
        <div className='text-white bg-[#a094a6] sm:items-center sm:pt-0 relative flex items-top justify-center min-h-[700px] '> 
          <div className='bg-black rounded-md p-6'>
            <h3 className='text-3xl sm:text-4xl text-white font-extrabold tracking-tight text-center m-4'>Login</h3>
            <form onSubmit={handlesubmit}>
                <div>
                    <label className='text-xl' htmlFor='Email'>
                        <strong>Email</strong>
                    </label>
                    <input
                      type='Email'
                      placeholder='Enter Email'
                      autoComplete='off'
                      name='email'
                      className='text-black bg-white border-2 border-gray-300 rounded-md p-2 ml-16 mb-6'
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
                <button type='submit' className='md:w-70 bg-white text-black font-bold py-3 px-6 rounded-lg mt-2 ml-6 hover:bg-gray-900 transition ease-in-out duration-300 hover:text-white '>Login</button>

            </form>
                
          </div>
        </div>
    );
}
