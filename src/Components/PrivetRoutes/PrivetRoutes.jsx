import  { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../../Pages/Loading'

function PrivetRoutes({children}) {
    const {user ,isLoading} = useContext(AuthContext)
    const location = useLocation()

    if (isLoading) {
        return <Loading/>
    }
if (!user) {
    return <Navigate state={location.pathname} to='/Login'></Navigate>

}
  return (
   children
  )
}

export default PrivetRoutes