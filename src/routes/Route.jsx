import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import { Errorpage, Home, Login, Registration, UpdateProfile, Userprofile} from '../Utils/Page'
import PrivetRoutes from '../Components/PrivetRoutes/PrivetRoutes'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
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
            }
        ]
    },
    {
        path: "*",
        element: <Errorpage/>
    }
])


export {router}