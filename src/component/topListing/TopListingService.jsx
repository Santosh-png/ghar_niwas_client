import React from "react";
import Slider from "react-slick";
import TopCard from "./TopCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../global.css";
import TopListItems from "./TopListItems";

function Toplist() {
    const settings = {
      dots: true,
      centerMode: true, // Enable center mode
      centerPadding: "0px", // Adjust padding if necessary
      slidesToShow: 3, // Show 3 slides at a time
      slidesToScroll: 1,
      autoplay: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
      
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
        ],   
    }
  return (
    <div className="center__carousel"
    style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
      <Slider {...settings}>
        {TopListItems.map((item) => (
          <div key={item.id} className="top-card-wrapper">
     <TopCard 
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
  ); 
}

export default Toplist;