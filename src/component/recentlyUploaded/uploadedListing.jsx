import UploadedCard from "./uploadedCard"; 
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UploadedList() {
  const settings = {
    dots:true,
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrow:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
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
return (
    <div className="center__carousel">
      <Slider {...settings}>
        <UploadedCard/>
        <UploadedCard/>
        <UploadedCard/>
        <UploadedCard/>
        <UploadedCard/>
        <UploadedCard/>
      </Slider>
    </div>
  );
}

export default UploadedList;