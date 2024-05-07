// import PremiumCard from './premiumListingCard.jsx';
import PremiumCard from "./PremiumCard";
import React from "react";
import Slider from "react-slick";

function PremiumList() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoPlay:true,
    
    // arrows:false,
    // responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
  };
 return(
  <>
  <div className="center__carousal">
    <Slider {...settings}

    >
      <div style={{
        border: "1px solid blue"
      }}>
        <PremiumCard/>
        <PremiumCard/>
        <PremiumCard/>
      </div>
    </Slider>
  </div>
  </>
 )
}

export default PremiumList;