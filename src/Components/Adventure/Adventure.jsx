import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Adventure({ adventuredata }) {

  const { adventureTitle, image, ecoFriendlyFeatures, id } = adventuredata;
 
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
 
 
  return (
    <div>
      <div  data-aos={ id % 2 === 0 ?"fade-up":"fade-down"} className="card  overflow-hidden card-compact bg-base-100 h-[400px]  shadow-xl">
        {/* <figure> */}
        <img
          className=" rounded-t-xl  object-center hover:scale-110 transition-all h-[200px]"
          src={image}
          alt="image"
        />
        {/* </figure> */}
        <div className="card-body">
          <h2 className="card-title">{adventureTitle}</h2>
          <p className="font-semibold">
            {ecoFriendlyFeatures.map((i) => i).join(" , ")}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/adventureDetials/${id}`} className="btn btn-primary">
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adventure;
