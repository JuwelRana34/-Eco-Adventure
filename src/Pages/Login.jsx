import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "sonner";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function Login() {
  const [isvisible , setIsVisible] = useState(false)
  const {user,SignInUsers,googleSignIn ,setIsloading} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
const navigate = useNavigate()

if(user){
  return navigate('/')
}

  // google login 
  const login = () => {
    googleSignIn()
    .then(()=>{
      toast.success('login successful')
      setIsloading(false);
      navigate(location?.state ? location.state :  '/')
   })
   .catch((err)=> {
      toast.error(`${err}`)
      setIsloading(false)
   })
  }

  // email password login 
  const handleLogin = (e) => {
    e.preventDefault()

   
    SignInUsers(email, password)
     .then(()=>{
      toast.success('Login successful')
      setIsloading(false)
      navigate(location?.state ? location.state :  '/')
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
    <>
    <div className="md:flex px-4 items-center justify-center">

<div>  
  <img className="w-auto" src="https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid" alt="login-imge" srcset="" />
</div>



    <div className=" mx-auto h-fit   border p-5 rounded-lg">
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
        <input onChange={(e)=> setEmail(e.target.value)}   type="text" required className="grow" name="email" placeholder="Email" />
      </label>

      <label className="input  input-bordered flex items-center gap-2">
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
        

        
        <input onChange={(e)=> setPassword(e.target.value)} type={ isvisible? 'text': "password"} required className="grow" name="password" placeholder="Password"/>
        
        <div onClick={handelPassIcon}>{isvisible? <FaRegEye /> :<FaRegEyeSlash /> }</div>
      </label>

<div>
   <Link to={`/passwordReset?email=${(email)}`} className="   text-blue-500" > Forget Password?</Link>
</div>
     
      <button className="btn btn-primary block w-full mx-auto">Login</button>
      </form>
      
      <div className=" w-full  flex justify-center">
        <button className="border text-lg  font-semibold text-gray-600 capitalize flex  items-center gap-3 rounded-lg my-5 py-2 px-3" onClick={login}> 
          <img className="w-7" src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" srcset="" />
          login with google </button>
      </div>
      
      
      <p className=" capitalize text-center font-semibold">you have't account? <Link to='/registration' className="text-blue-500 ">registration</Link></p>
    </div>


    </div>
    


    </>
  );
}

export default Login;
