import "./App.css";
import { Outlet } from "react-router-dom";
import Navmenu from "./Components/Navbar/Navmenu";
import Footer from "./Components/Footer/Footer"





function App() {
 

  return (
    <div className="container mx-auto">
      
      <Navmenu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
