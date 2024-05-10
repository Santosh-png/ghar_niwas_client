import CommonCard from '../card/card';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardListServices from "./cardItems";
function PremiumList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide:0,
    autoplay:true,  
    arrows:false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
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
            slidesToShow: 1,
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
  <div className="center__carousel"
  style={{ display: "flex", flexDirection: "column", width: "100%"
   }}
  >
    <Slider {...settings}>
    {CardListServices.map((item) => (
          <div key={item.id} className="top-card-wrapper">
     <CommonCard 
        imageUrl={item.imageUrl}
        location={item.location}
        price={item.price}
        title={item.title}
        name={item.name}
        date={item.date}
     />
    </div>
  ))}
    </Slider>
  </div>
  
 )
}

export default PremiumList;