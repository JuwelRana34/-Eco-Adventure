import React from 'react'
import { Link} from 'react-router-dom'

function Errorpage() {
 
  return (
    <div>
        <img className='mx-auto' src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid" alt="" srcset="" />
        <div className='text-center'>
          <Link to='/' className='btn m-5  btn-primary'> Back To Home</Link>
        </div>
        
    </div>
  )
}

export default Errorpage