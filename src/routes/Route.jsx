import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import { Home, Login, Registration} from '../Utils/Page'



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
            }
        ]
    }
])


export {router}