import TopListingCard from "./TopCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopListItems from "./TopListItems";
import "../../global.css"
import { Box } from "@mui/material";
function TopList(){
    const settings={
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      pauseOnHover: true,
      focusOnSelect: true,
      autoplay: true,
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
    <div className="center__carousel"

    >
        <Slider {...settings}>
        {TopListItems.map((item) => (
          // <div class="top-card-wrapper MuiBox-root css-68zbsl" tabindex="-1" style="display: inline-block; width:auto">
        
       
        
     <TopListingCard 
        imageUrl={item.imageUrl}
        location={item.location}
        price={item.price}
        title={item.title}
        name={item.name}
        date={item.date}
     />
    //  </div>
  ))}
        </Slider>
    </div> 
)
}
export default TopList;