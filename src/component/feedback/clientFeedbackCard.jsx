import React from 'react';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import clientFeedbackCard from './clientFeedbackList'; 
import ClientFeedbackList from './clientFeedbackCard';

function clientFeedbackCard() { 
    const settings = {
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        focusOnSelect: true,
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
        <Box className="center__carousel" sx={{ padding: "47px" }}>
            <Slider {...settings}>
                <clientFeedbackCard /> 
                <clientFeedbackCard /> 
                <clientFeedbackCard /> 
                <clientFeedbackCard /> 
            </Slider>
        </Box>
       
    );
}

export default clientFeedbackCard; 
