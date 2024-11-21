import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import image from "../assets/user.png";
import { Link } from "react-router-dom";
function Userprofile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1 className=" my-5 text-center mx-auto w-[80%] md:w-1/2 bg-green-500 shadow-lg shadow-green-200 rounded-md py-2 text-xl text-white">
        welcome, <span className="text-sky-950">{user.displayName} </span>
      </h1>

      <div className=" mx-2 md:w-6/12 md:mx-auto border rounded-lg text-center p-5 bg-gradient-to-bl from-zinc-100 to-sky-500">
        <div className="avatar my-5">
          <div className="w-24 ring-2 ring-blue-500 shadow-lg rounded-full">
            <img src={user?.photoURL || image} />
          </div>
        </div>

        <h2 className="font-semibold text-xl">{user.displayName}</h2>
        <h2>
          {" "}
          <span className="font-semibold"> </span> {user.email}
        </h2>
        <Link className="btn btn-primary mt-5" to="/UpdateProfile">
          update
        </Link>
      </div>
    </>
  );
}

export default Userprofile;
