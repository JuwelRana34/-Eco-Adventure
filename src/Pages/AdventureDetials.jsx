import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Modal from "../Components/Modal/Modal";

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

  const handelModal = () => {
    document.getElementById('my_modal_1').showModal()
  }

  if (!data) return <Loading />;

  return (
    <div>
      <div>
        <div
          className="h-[400px] w-full  overflow-hidden flex relative justify-center items-center rounded-md"
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" absolute bg-black opacity-50 w-full h-full"></div>

          <div className="text-center space-y-4 z-50  ">
            <h1 className="text-4xl text-white font-bold">
              {data.adventureTitle}
            </h1>
            {/* <p className="text-lg text-white">{data?.ecoFriendlyFeatures?.map(i => i).join(' , ')}</p> */}
            <h1 className="text-lg text-white">{data.shortDescription}</h1>
          </div>
        </div>

        <div className="border my-10 p-5 rounded-md">
          <h1 className="text-xl text-center underline text-blue-500 capitalize mt-5 font-bold">
            {data.adventureTitle}
          </h1>

          <div>
            <p> maxGroupSize: {data.maxGroupSize}</p>
            <p> categoryName: {data.categoryName}</p>
          </div>
        </div>

       

 <button onClick={handelModal} className=" bg-pink-500 text-white py-2 px-4 rounded-lg fixed  bottom-10 right-10" >talk expart</button>
      </div>

      <Modal/>
    </div>
  );
}

export default AdventureDetials;
