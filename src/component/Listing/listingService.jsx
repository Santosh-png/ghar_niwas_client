import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListingCard from "./ListingCard";
import { Box, Button } from "@mui/material";
import ListingItems from "./ListingItems";

function Listing(){
  const [showAllCards, setShowAllCards] = useState(false);

  const settings={
    dots:true,
    infinite:false,
    speed:500,
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:1,       
    autoplay:true,
    arrows:false,
    responsive:[
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
          slidesToShow: 3,
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

  const renderCardSets = () => {
    const cardSets = [];
    for (let i = 0; i < ListingItems.length; i += 3) {
      cardSets.push(
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', width:'100%', alignContent:"space-around" }}>
          {ListingItems.slice(i, i + 3).map((item) => (
            <div key={item.id} className="top-card-wrapper" style={{width:"100%", marginRight:"30px", padding:"20px"}}>
              <ListingCard
                imageUrl={item.imageUrl}
                location={item.location}
                price={item.price}
                title={item.title}
                name={item.name}
                date={item.date}
              />
            </div>
          ))}
        </div>
      );
    }
    return cardSets;
  };

  return (
    <div>
      {showAllCards ? renderCardSets() : renderCardSets().slice(0, 1)}
      {!showAllCards && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2,  }}>
          <Button variant="contained" onClick={() => setShowAllCards(true)}>
            See More
          </Button>
        </Box>
      )}
      {showAllCards && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" onClick={() => setShowAllCards(false)}>
            See Less
          </Button>
        </Box>
      )}
    </div>
  );
}

export default Listing;
