import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "sonner";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function Login() {
  const [isvisible , setIsVisible] = useState(false)
  const {SignInUsers,googleSignIn ,setIsloading} = useContext(AuthContext)
const navigate = useNavigate()

  // google login 
  const login = () => {
    googleSignIn()
    .then(()=>{
      toast.success('login successful')
      setIsloading(false);
      navigate('/')
   })
   .catch((err)=> {
      toast.error(`${err}`)
      setIsloading(false)
   })
  }

  // email password login 
  const handleLogin = (e) => {
    e.preventDefault()

    const target = e.target

    SignInUsers(target.email.value, target.password.value)
     .then(()=>{
      toast.success('Login successful')
      setIsloading(false)
      navigate('/')
      e.target.reset()
     })
     .catch((err)=> {
        toast.error(`${err}`)
        setIsloading(false)
        e.target.reset()
     })
    
  }

  const handelPassIcon = () => {
      setIsVisible((icon)=> !icon)
  }

  return (
    <div className="md:w-6/12 mx-auto  border p-5 rounded-lg">
      <h1 className="text-center my-5 capitalize font-bold text-xl">Login</h1>
      
      <form onSubmit={handleLogin} className="space-y-4">

     
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" required className="grow" name="email" placeholder="Email" />
      </label>

      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        

        
        <input type={ isvisible? 'text': "password"} required className="grow" name="password" placeholder="Password"/>
        
        <div onClick={handelPassIcon}>{isvisible? <FaRegEye /> :<FaRegEyeSlash /> }</div>
      </label>

      <Link className=" underline text-blue-500" to='/'> Forget Password</Link>
      <button className="btn btn-primary block w-full mx-auto">Login</button>
      </form>
      <div className=" w-full  flex justify-center">
        <button className="border text-xl font-semibold text-gray-600 capitalize flex  items-center gap-3 rounded-lg my-5 py-2 px-3" onClick={login}> 
          <img className="w-7" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" srcset="" />
           google login</button>
      </div>
      <div className=" text-center   rounded-lg ">  <Link to='/registration' className=" btn w-full ">Registration</Link> </div>
    </div>
  );
}

export default Login;
