import {  useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Review({reviewData}) {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = ( s,time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper "
      >
        {reviewData.map(i =><SwiperSlide  >
          
          <div className=" mt-4 py-10 bg-gradient-to-b from-white to-sky-500 ">
              <img
                src={i.image}
                alt={i.name}
                className="w-24 h-24 ring-1 mx-auto my-4 rounded-full"
              />
              <h3 className="font-semibold">{i.name}</h3>
              <p className="text-md">{i.review}</p>
              <p>
                <strong>Rating:</strong> {i.rating}/5
              </p>
              <p>{i.location}</p>
              <p>{i.date}</p>
            </div>
        </SwiperSlide> )}

        
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
  )
}

export default Review