import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function Login() {
  const {UpdateProfile} = useContext(AuthContext)
  const navigate = useNavigate()
  const handelUpdate = (e) => {
    e.preventDefault()
    const value = e.target
    UpdateProfile(value.name.value, value.Photo.value)
      
    navigate('/')
    e.target.reset()
  }
  return (
    <form onSubmit={handelUpdate} className=' space-y-2'>

<input  type="text" required placeholder="name" name='name' className="input input-bordered w-full max-w-xs" /> <br />

<input type="text" required placeholder="Photo Url" name='Photo' className="input input-bordered w-full max-w-xs" />


<button type="submit" className='btn btn-primary'>Update</button>

    </form>
  )
}

export default Login