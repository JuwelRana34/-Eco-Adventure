import  { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { toast} from 'sonner'
import Loading from '../Components/Loading/Loading'

function Home() {
  const {user,googleSignIn ,SignOutUsers ,setIsloading ,isLoading} = useContext(AuthContext)
  const login = () => {
    googleSignIn()
    .then(()=>{
      toast.success('login successful')
      setIsloading(false)
   })
   .catch((err)=> {
      toast.error(`${err}`)
      setIsloading(false)
   })
  }


  return (
    <>


{!user ? <button onClick={login} className='btn btn-primary'>login</button> :  <button onClick={SignOutUsers} className='btn btn-error'> Log-Out</button>}
    
    {user?.displayName}
   {user &&  <img className=' rounded-full my-4' src={user?.photoURL}  width={500} height={400} alt={user?.displayName} />}
    
    {isLoading && <Loading />}
    
    
  
    </>
  )
}

export default Home