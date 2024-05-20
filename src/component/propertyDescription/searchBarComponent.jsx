import React from 'react'
import { Box } from '@mui/material'
import Slider from 'react-slick';
import EventCard from './EventCard';
import eventsList from './events_list_items';
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
function EventList() {
    const settings = {
        
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
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
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
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
        <Box className="center__carousel" sx={{ padding: "47px" }} >
            <Slider {...settings}>
              {eventsList?.map((item) => (
                <EventCard key={item?._id} item={item} />
              ))}
                
            </Slider>
        </Box>
    )
}

export default EventList
