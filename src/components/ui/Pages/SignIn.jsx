import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
  const [formdata,setformdata] = useState({})
  const [loading , setloading] = useState(null);
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const handlechange = (e) =>{
   setformdata({
    ...formdata,
    [e.target.id]: e.target.value,
   })
  };
  const handlesubmit = async(e) =>{
   e.preventDefault();
   try{
    setloading(true);
    const res = await fetch('api/auth/signin',{
     method:'POST',
     headers:{
       'Content-Type': 'application/json',
     },
     body:JSON.stringify(formdata),
    });
    const data = await res.json();
    if(data.success === false){
     seterror(data.message);
     setloading(false);
     return;
   }
   setloading(false);
   seterror(null)
   navigate('/')
  }
   catch(error){
   setloading(false);
   seterror(error.message);
   }
   
   }
   
  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign In</h1>
      <form onSubmit={handlesubmit} className='flex flex-col gap-4' >
        <input type='email' placeholder='Email'  className='border p-3 rounded-lg' id='email' onChange={handlechange}/>
        <input type='Password' placeholder='Password'  className='border p-3 rounded-lg' id='password' onChange={handlechange}/>
        <button disabled ={loading} className='bg-slate-900 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-85'>
          {
            loading? 'loading...' : "SignIn"
          }
        </button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p> Don't have an account?</p>
        <Link to='/signup'>
        <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignIn