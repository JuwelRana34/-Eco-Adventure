import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Modal from "../Components/Modal/Modal";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { MdOutlinePersonOff } from "react-icons/md";

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
    const currentHours = new Date().getHours()
    if(currentHours>=10 && currentHours <=20 ){
      window.open('https://meet.google.com/', '_blank')
    }else{
      
    }
 document.getElementById("my_modal_1").showModal();
   
  };

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
          <h1 className=" text-xl md:text-4xl text-center  text-blue-500 capitalize mt-5 font-bold">
            {data.adventureTitle}
          </h1>

          {/* key fetures of this trip */}

          <div className=" my-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">

            <div className=" flex justify-center items-center gap-4 border border-blue-500 rounded-lg p-5">
             
              <FaPeopleLine className="text-4xl" />
              <span className=" font-semibold">
                
                maxGroupSize : {data.maxGroupSize}
              </span>
            </div>

            <div className=" flex justify-center items-center gap-4 border border-blue-500 rounded-lg p-5">
              
              <TbCoinTaka className="text-4xl" />
              <span className=" font-semibold">
                
                Cost : {data.adventureCost}
              </span>
            </div>

            <div className=" flex justify-center items-center gap-4 border border-blue-500 rounded-lg p-5">
              
              <MdOutlineWatchLater className="text-4xl" />
              <span className=" font-semibold">
                
                duration : {data.duration}
              </span>
            </div>
            <div className={` ${data.bookingAvailability? "bg-green-100 border-green-500 ": 'bg-red-100 border-red-500'} flex justify-center items-center gap-4 border  rounded-lg p-5`}>
              {data.bookingAvailability? <FaPlaneCircleCheck className="text-4xl" />:<MdOutlinePersonOff className="text-4xl" /> }
              <span className=" font-semibold">
                
                bookingAvailable: {data.bookingAvailability? 'Yes': 'No'}
              </span>
            </div>
           
          </div>

          {/* table  */}

          <div className="overflow-x-auto py-5 mt-5">
  <table className="table">
   
    <tbody>
      {/* row 1 */}
      <tr>
        
        <th>Category</th>
        <td>{data.categoryName}</td>
        
      </tr>
      {/* row 2 */}
      <tr className="hover">
        
        <th className="flex items-center gap-2"><IoLocationOutline className="text-green-500  text-lg"/> <span className="text-green-500">Location</span></th>
        <td>{data.location}</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        
        <th>adventureLevel</th>
        <td>{data.adventureLevel}</td>
        
      </tr>
      <tr>
        
        <th>includedItems</th>
        <td>{data?.includedItems?.map(i => i).join(' , ')}</td>
        
      </tr>
      <tr>
        
        <th>Features</th>
        <td>{data?.ecoFriendlyFeatures?.map(i => i).join(' , ')}</td>
        
      </tr>
      <tr>
        
        <th>specialInstructions</th>
        <td>{data?.specialInstructions?.map(i => i).join(' , ')}</td>
        
      </tr>
    </tbody>
  </table>
</div>




        </div>

        <button
          onClick={handelModal}
          className=" bg-blue-500 hover:bg-orange-500 text-white py-2 px-4 rounded-lg fixed  bottom-10 right-10"
        >
          Talk with Expert
        </button>
      </div>

      <Modal />
    </div>
  );
}

export default AdventureDetials;
