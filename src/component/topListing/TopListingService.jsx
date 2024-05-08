import TopListingCard from "./TopCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopList(){
    const settings={
        dots:true,
        infinite:false,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,       
        autoPlay:true,
        arrow:false,
        responsive:[
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
return(
    <div className="center__carousel">
        <Slider {...settings}>
            <TopListingCard/>
            <TopListingCard/>
            <TopListingCard/>
            <TopListingCard/>
            <TopListingCard/>
            <TopListingCard/>
        </Slider>
    </div> 
)
}
export default TopList;