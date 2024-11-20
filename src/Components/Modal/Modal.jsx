import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'

function Modal() {
    const {user} = useContext(AuthContext)

  return (
    <>
 

<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hey! { user?.displayName}</h3>
    <p className="py-4"> Our experts are available for discussion between <span className='text-orange-500 '>10:00AM - 8:00PM  </span> </p>
    
    <img className=" mx-auto w-full md:w-64 h-auto" src="https://img.freepik.com/premium-vector/time-management-concept-illustration_203587-38.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid"/>

    <div className="modal-action">
      <form method="dialog">
        
        <button className="btn btn-error text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>

</>
  )
}

export default Modal