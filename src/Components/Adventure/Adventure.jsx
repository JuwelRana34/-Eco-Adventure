import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Adventure({ adventuredata }) {
  const { adventureTitle, image, ecoFriendlyFeatures, id } = adventuredata;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-2">
      <div
        data-aos="fade-up"
        className="card  overflow-hidden card-compact bg-base-100 h-[400px]   shadow-lg rounded"
      >
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
            <ul className=" list-disc list-inside text-gray-700">

            {ecoFriendlyFeatures.map((i,index) =>( 
              <li key={index}> {i} </li>  
              ))}

            </ul>
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/adventureDetials/${id}`}
              className="py-2 px-4 bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#1FA2FF]  hover:bg-[position:right_center] hover:no-underline text-white rounded-md text-md  transition-all duration-500 bg-[length:200%_auto] "
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adventure;
