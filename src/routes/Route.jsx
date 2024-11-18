import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import { Errorpage, Home, Login, PasswordReset, Registration, UpdateProfile, Userprofile} from '../Utils/Page'
import PrivetRoutes from '../Components/PrivetRoutes/PrivetRoutes'
import AdventureDetials from '../Pages/AdventureDetials';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                
            },
            {
                path: "/Login",
                element: <Login/>
            },
            {
                path: "/registration",
                element: <Registration/>
            },
            {
                path: "/UpdateProfile",
                element: <PrivetRoutes> <UpdateProfile/> </PrivetRoutes>  
            },
            {
                path: "/Userprofile",
                element: <PrivetRoutes> <Userprofile /> </PrivetRoutes>  
            },
            {
                path: "/passwordReset",
                element: <PasswordReset />   
            },
            {
                path: "/adventureDetials/:id",
                element: <PrivetRoutes><AdventureDetials /> </PrivetRoutes> ,
               
            }
        ]
    },
    {
        path: "*",
        element: <Errorpage/>
    }
])


export {router}