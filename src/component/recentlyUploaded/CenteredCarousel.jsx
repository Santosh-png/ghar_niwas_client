import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import data from "./uploadedListItems";
import Card from "./CarouselCard";


export default function CenteredCarousel(props) {
  const ref = React.useRef();
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
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
        <Fab
          style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <ArrowBackIcon />
        </Fab>
        <Fab
          style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
          size="small"
          color="primary"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          <ArrowForwardIcon />
        </Fab>
      </>
    </div>
  );
}

// export const Card = React.memo(function (props) {
//   const { data, dataIndex } = props;
//   const { imageUrl } = data[dataIndex];
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: 300,
//         userSelect: "none",
//       }}
//       className="my-slide-component"
//     >
//       <img
//         style={{
//           height: "100%",
//           width: "100%",
//           objectFit: "cover",
//           borderRadius: 0,
//         }}
//         draggable={false}
//         src={imageUrl}
//       />
//     </div>
//   );
// });