import "./App.css";
import { Outlet } from "react-router-dom";
import Navmenu from "./Components/Navbar/Navmenu";

function App() {
  return (
    <>
      <Navmenu />
      <Outlet />
    </>
  );
}

export default App;
