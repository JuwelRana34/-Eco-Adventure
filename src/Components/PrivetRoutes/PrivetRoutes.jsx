import  { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'

function PrivetRoutes({children}) {
    const {user} = useContext(AuthContext)
if (!user) {
    return <Navigate to='/Login'></Navigate>

}
  return (
   {children}
  )
}

export default PrivetRoutes