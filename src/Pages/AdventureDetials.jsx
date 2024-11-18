import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function AdventureDetials() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/ecoAdventures.json");
      const data = await response.json();
      const singleData = data.find(
        (singleItem) => singleItem.id === parseInt(id)
      );
      setData(singleData);
    };
    fetchData();
  }, []);

  if (!data) return <Loading/>;

  return (
    <div>
      <div>
        <div
          className="h-[400px] w-full flex justify-center items-center rounded-md"
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center space-y-4 ">
            <h1 className="text-4xl text-white font-bold">
              {data.adventureTitle}
            </h1>
            {/* <p className="text-lg text-white">{data?.ecoFriendlyFeatures?.map(i => i).join(' , ')}</p> */}
            <h1 className="text-lg text-white">{data.shortDescription}</h1>
          </div>
        </div>

        <div className="border my-10 p-5 rounded-md">
          <h1 className="text-xl text-center underline text-blue-500 capitalize mt-5 font-bold">{data.adventureTitle}</h1>

          <div>
          <p> maxGroupSize: {data.maxGroupSize}</p> 

          </div>


        </div>
      </div>
    </div>
  );
}

export default AdventureDetials;
