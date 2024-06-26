import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from "../card/cardItems";
import Card from "./CarouselCard";

export default function CenteredCarousel(props) {
  const ref = React.useRef();
  return (
    <div
      style={{ 
        width: "100%", 
        position: "relative",
        // border:'1px solid red',
        paddingBottom:'30px',
        marginTop:'20px',
        
        }}>
     
      <ResponsiveContainer
        
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          if (parentWidth <= 1240) currentVisibleSlide = 5;
          if (parentWidth <= 1020) currentVisibleSlide = 3;
          if (parentWidth <= 760) currentVisibleSlide = 1;
          return (
                        
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth <= 975 ? Math.max(parentWidth - 175) : 750}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            /> 
          );
        }}
      />
     
      <>
        <Fab sx={{position: "absolute", top: "40%",left: 10, zIndex: 10,
          height:{xs:"18px",sm:"25px",md:"40px"},width:{xs:"18px",sm:"25px",md:"40px"}
        }}
         
          size="small"

          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <ArrowBackIcon sx={{height:{xs:"15px",sm:"20px",md:"30px"},width:{xs:"13px",sm:"18px",md:"24px"}}}/>
        </Fab>
        <Fab
         sx={{position: "absolute", top: "40%",right: 10, zIndex: 10,
         height:{xs:"18px",sm:"25px",md:"40px"},width:{xs:"18px",sm:"25px",md:"40px"}
       }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goNext(6);
          }}
          
        >
          <ArrowForwardIcon  sx={{height:{xs:"15px",sm:"20px",md:"30px"},width:{xs:"13px",sm:"18px",md:"24px"}}}  />
        </Fab>
      </>
    </div>
  );
}