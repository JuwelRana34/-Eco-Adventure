import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import image from '../assets/user.png'
import { Link } from 'react-router-dom'
function Userprofile() {
  const { user } = useContext(AuthContext)
  
  return (
    <>
     <h1 className=' my-5 text-center mx-auto w-1/2 bg-green-500 shadow-md shadow-green-300 rounded-md py-2 text-xl text-white'> welcome, <span className='text-sky-950'>{user.displayName} </span> </h1>
    <div className=' mx-2 md:w-6/12 md:mx-auto border rounded-lg text-center p-5'>
     
     
      <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={user?.photoURL || image } />
  </div>
</div>



      <h2 className='font-semibold'>Name: {user.displayName}</h2>
      <h2>Email: {user.email}</h2>
      <Link className='btn btn-primary mt-5' to='/UpdateProfile'>update</Link>
    </div>
    
    
    </>
  )
}

export default Userprofile