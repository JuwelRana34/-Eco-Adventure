import { useContext, useEffect } from "react";
import { Link, Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import userPhoto from "../../assets/user.png";

function Navmenu() {

  const location = useLocation();
 
  useEffect(() => {
    const Titles = {
      "/": "Home | Eco-Adventure",
      "/registration": "registration | Eco-Adventure",
      "/Login": "Login | Eco-Adventure",
      "/UpdateProfile": "UpdateProfile | Eco-Adventure",
      "/Userprofile": "Userprofile | Eco-Adventure",
      "/passwordReset": "passwordReset | Eco-Adventure",
      "/adventureDetials": "adventureDetials | Eco-Adventure",
    };

    const basePath = location.pathname.split("/")[1]

    document.title = Titles[location.pathname] || Titles[`/${basePath}`] || "Eco-Adventure";
  }, [location]);


  const { user, SignOutUsers } = useContext(AuthContext);
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/UpdateProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/Userprofile">user profile</NavLink>
      </li>
    </>
  );

  const HandelLogOut = () => {
    SignOutUsers();
  };

  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn px-3 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-semibold"
          >
            {menu}
          </ul>
        </div>
        <Link to={'/'} className="btn text-transparent bg-clip-text bg-gradient-to-l text-base from-orange-500 to-emerald-500 btn-ghost px-1 font-bold  md:text-2xl">Eco-Adventure</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  font-semibold">{menu}</ul>
      </div>

      <div className="navbar-end">
        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
          <div
            tabIndex={0}
            role="button"
            className="btn mx-2 btn-ghost  md:block btn-circle avatar"
          >
            {user? <div className="   w-full  rounded-full">
              <img alt="userPhoto" src={user?.photoURL || userPhoto} />
            </div>: ''}
            
          </div>
        </div>
        {user ? (
          <button onClick={HandelLogOut} className=" py-3 px-3 rounded-lg bg-red-500 text-white text-xs md:text-base">
            
            LogOut
          </button>
        ) : (
          <Link to="/Login" className="py-3 px-5 rounded-lg bg-blue-500 text-white text-xs md:text-base">
            login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navmenu;
