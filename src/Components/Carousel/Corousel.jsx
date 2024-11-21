import React from 'react'
import hill from '../../assets/mountain2.jpg'
import seaBeach from '../../assets/seaBeach.jpg'
import hill2 from '../../assets/pexels-chiecharon-705075.jpg'
import hill3 from '../../assets/pexels-minan1398-1087735.jpg'
function Corousel() {
  return (
    <div className="carousel w-full  md:h-auto">
  <div id="slide1" className="carousel-item  h-[400px] relative w-full">
    <img className="w-full object-cover object-center"
      src={hill}
       />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item h-[400px] relative w-full">
    <img className="w-full object-cover object-center"
      src={seaBeach}
      />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item h-[400px] relative w-full">
    <img className="w-full object-cover object-center"
      src={hill2}
       />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item h-[400px] relative w-full">
    <img className="w-full object-cover object-center"
      src={hill3}
      />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default Corousel