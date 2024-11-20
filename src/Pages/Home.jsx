import Corousel from "../Components/Carousel/Corousel";
import { Link } from "react-router-dom";
import Adventure from "../Components/Adventure/Adventure";
import { useEffect, useState } from "react";

import Review from "../Components/Review/Review";
function Home() {
  const [data, setData] = useState([]);
  const [visibledatas, setVisibledatas] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [showall, setShowall] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("ecoAdventures.json");
      const data = await response.json();
      setData(data);
      setVisibledatas(data.slice(0, 9));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("clinet.json");
      const reviewData = await response.json();

      setReviewData(reviewData);
    };
    fetchData();
  }, []);

  const handelshowbtn = () => {
    if (showall) {
      setVisibledatas(data.slice(0, 9));
    } else {
      setVisibledatas(data);
    }
    setShowall(!showall);
  };

  return (
    <>
      <Corousel />
      <div className="py-5 mt-10">
        <h1 className="font-bold text-2xl pl-4 my-5">Adventure Experiences</h1>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {visibledatas.map((item) => (
            <Adventure key={item.id} adventuredata={item} />
          ))}
        </div>
      </div>
      <div className="text-center ">
        <Link onClick={handelshowbtn} className="btn  text-center" to="/">
          {showall ? "see less" : "See more "}
        </Link>

        <div className="mt-16  ">
          <div className=" text-center ">
            
            <span className=" font-Gochi text-2xl "> Client Testimonial </span>
            <h1 className="text-4xl font-bold"> Adventure Talks</h1>
          </div>
          <Review reviewData={reviewData} />
        </div>
      </div>
    </>
  );
}

export default Home;
