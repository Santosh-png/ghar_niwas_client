// import UploadedCard from "./uploadedCard"; 
import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// function UploadedList() {
//   const settings = {
//     dots:true,
//     // className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "0px",
//     slidesToShow: 3,
//     speed: 500,
//     arrows:false,
//     responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             // initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
// };
// return (
//     <div className="center__carousel">
//       <Slider {...settings}>
//         <UploadedCard/>
//         <UploadedCard/>
//         <UploadedCard/>
//         <UploadedCard/>
//         <UploadedCard/>
//         <UploadedCard/>
//       </Slider>
//     </div>
  
//   );
// }

// export default UploadedList;




function UploadedList() {
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
export default UploadedList;