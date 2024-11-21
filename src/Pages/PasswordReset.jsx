import React, { useContext, useEffect, useState } from 'react'
import {  useSearchParams } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'
import { toast } from 'sonner'

function PasswordReset() {
    const [param] = useSearchParams()
    const [email, setEmail]= useState('')
    const {RestPassword} = useContext(AuthContext)

    useEffect(()=>{
        setEmail(param.get('email')) 
    },[])

   const handelResetPass = (e)=>{
    e.preventDefault()
    RestPassword(email)
    .then(()=>{
            window.location.href = 'https://mail.google.com/mail/u/0/#inbox'
            
    })
    .catch((err)=>{
        toast.error(err)

    })
    }
  return (
    <div className=' mt-10 px-2 md:w-1/2 mx-auto space-y-4'>
      Password Your Reset 
      
      <form onSubmit={handelResetPass} className=' space-y-3'>
      <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input onChange={(e)=> setEmail(e.target.value)} type="text" name="email"  value={email} required className="grow" placeholder="Email" />
</label>

<button className='btn  bg-blue-500 hover:bg-blue-600 text-white'> Reset password</button>
        
      </form>
    </div>
  )
}

export default PasswordReset