import Corousel from "../Components/Carousel/Corousel";
import { Link} from "react-router-dom";
import Adventure from "../Components/Adventure/Adventure";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("ecoAdventures.json");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Corousel />

      <div className=" py-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {data.slice(0, 9).map((item) => (
          <Adventure key={item.id} adventuredata={item} />
        ))}
      </div>
      <div className="text-center ">
        <Link className="btn  text-center" to="/">
          See more
        </Link>
      </div>
    </>
  );
}

export default Home;
