import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

function UpdateProfile() {
  const { UpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelUpdate = (e) => {
    e.preventDefault();
    const value = e.target;
    UpdateProfile(value.name.value, value.Photo.value)
    .then(() =>{
      toast.success('Profile Updated Successfully')
    })
    .catch((err) => {
      toast.error(err)
    })
    navigate("/");
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center">
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
