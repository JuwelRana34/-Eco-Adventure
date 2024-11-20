import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "sonner";

function UpdateProfile() {
  const { UpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelUpdate = (e) => {
    e.preventDefault();
    const value = e.target;
    UpdateProfile(value.name.value, value.Photo.value)
    .then(() =>{
      toast.success('Profile Updated Successfully')
      e.target.reset();
       navigate("/Userprofile");
    })
    .catch((err) => {
      toast.error(err)
    })
   
    
  };

  return (
    <div className=" px-4 md:flex gap-12 my-20 justify-center items-center">
      <div>
        <img className="w-64" src="https://img.freepik.com/free-vector/update-concept-illustration_114360-26109.jpg?ga=GA1.1.1974322130.1689523785&semt=ais_hybrid" alt="update-img" srcset="" />
      </div>
    <form onSubmit={handelUpdate} className="  space-y-2">
      <input
        type="text"
        required
        placeholder="name"
        name="name"
        className="input input-bordered w-full max-w-xs"
      />{" "}
      <br />
      <input
        type="text"
        required
        placeholder="Photo Url"
        name="Photo"
        className="input input-bordered w-full max-w-xs"
      /> <br />
      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
    </div>
  );
}

export default UpdateProfile;
