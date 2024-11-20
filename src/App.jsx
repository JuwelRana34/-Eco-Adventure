import "./App.css";
import { Outlet } from "react-router-dom";
import Navmenu from "./Components/Navbar/Navmenu";


function App() {
 

  return (
    <div className="container mx-auto">
      
      <Navmenu />
      <Outlet />
    </div>
  );
}

export default App;
