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
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        focusOnSelect: true,
        autoplay: true,
    };
    return (
        <Box className="center__carousel" sx={{ padding: "47px" }}>
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
