import React from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import ClientFeedbackCard from './ClientFeedbackCard.component'; 
// import ClientAvatarList from './clientAvatarList'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientFeedbackList() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        focusOnSelect: true,
        autoplay: true,
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
        <Box className="center__carousel" sx={{ padding: "47px" , color:"primary.main" }}>
            <Slider {...settings}>
                <ClientFeedbackCard />
                <ClientFeedbackCard />
                <ClientFeedbackCard />
                <ClientFeedbackCard />
                <ClientFeedbackCard />
                <ClientFeedbackCard />
            </Slider>
        </Box>
    );
}

export default ClientFeedbackList;
