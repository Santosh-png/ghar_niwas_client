import React, { useState, useRef } from "react";
import Slider from "react-slick";
import PropertyList from '../card/cardItems';
import Pic from './propertyPic';
function PropertyDetail() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next)
  };
  return (
    <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >   
          {PropertyList.map((item)=>(
              <div key={item.id}>
                  <Pic
                  imageUrl={item.imageUrl}
                  />
              </div>
          ))}
        
      </Slider>
    </div>
  );
}

export default PropertyDetail;
