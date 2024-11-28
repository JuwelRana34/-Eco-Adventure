import "./App.css";
import { Outlet, useNavigation } from "react-router-dom";
import Navmenu from "./Components/Navbar/Navmenu";
import Footer from "./Components/Footer/Footer"





function App() {
 const navigate = useNavigation()
 console.log(navigate)
 if(navigate.state === 'loading') return <h1>Loading...</h1>

  return (
    <div className="container mx-auto">
      
      <Navmenu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
