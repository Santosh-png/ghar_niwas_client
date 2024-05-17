import React from "react";
import Slider from "react-slick";
import { Box } from '@mui/material'
import PropertyList from '../card/cardItems';
import Pic from './propertyPic';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div 
        className={'slick-next'}
        style={{
          ...style,
          backgroundColor: "#743d72",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center",
          borderRadius: "50%",
          paddingTop: "2.5px"

        }}
        onClick={onClick}
      /> 
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
          
          backgroundColor: "#743d72",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center",
          borderRadius: "50%",
          paddingTop: "2.5px"
        }}
        onClick={onClick}
      />
    );
  }

function Duplicate() {
    const settings = { 
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        pauseOnHover: true,
        focusOnSelect: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
  return (
    <Box className="center-carousel" sx={{padding:'50px'}}>
      <Slider {...settings}>
      {PropertyList.map((item)=>(
              <div key={item.id}>
                  <Pic
                  imageUrl={item.imageUrl}
                  />
              </div>
          ))}
      </Slider>
    </Box>
  );
}

export default Duplicate;
