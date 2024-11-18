import  { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import Loading from '../../Pages/Loading'

function PrivetRoutes({children}) {
    const {user ,isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <Loading/>
    }
if (!user) {
    return <Navigate to='/Login'></Navigate>

}
  return (
   children
  )
}

export default PrivetRoutes