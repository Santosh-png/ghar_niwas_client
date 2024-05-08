// import PremiumCard from './premiumListingCard.jsx';
import FeaturedCard from "./featuredCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function PremiumList() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide:0,
    autoplay:true,  
    arrows:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
 return(
  <div className="center__carousel">
    <Slider {...settings}>
      <FeaturedCard/>
      <FeaturedCard/>
      <FeaturedCard/>
      <FeaturedCard/>
      <FeaturedCard/>
      <FeaturedCard/>
    </Slider>
  </div>
  
 )
}

export default PremiumList;