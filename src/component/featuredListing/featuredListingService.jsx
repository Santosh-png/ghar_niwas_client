// import PremiumCard from './premiumListingCard.jsx';
import FeaturedCard from "./featuredCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import featureListItems from "./featureListItems";
function PremiumList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  style={{ display: "flex", flexDirection: "column", width: "100%",backgroundColor
    :'pink'
   }}
  >
    <Slider {...settings}>
    {featureListItems.map((item) => (
          <div key={item.id} className="top-card-wrapper">
     <FeaturedCard 
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