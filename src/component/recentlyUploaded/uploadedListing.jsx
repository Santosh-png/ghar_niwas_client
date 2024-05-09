// import UploadedCard from "./uploadedCard"; 
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import uploadedListItems from "./uploadedListItems";

// function UploadedList() {
//   const settings = {
//         dots:true,
//         infinite:true,
//         speed:500,
//         slidesToShow:3,
//         slidesToScroll:1,       
//         autoplay:true,
//         arrows:false,
//     responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
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
//     <div className="center__carousel"
//     style={{ display: "flex", flexDirection: "column", width: "100%",transform:'scale(0.8)',transition:"all 0.4s ease-in-out"}}
//     >
//       <Slider {...settings}>
//       {uploadedListItems.map((item) => (
//           <div key={item.id} className="top-card-wrapper">
//             <UploadedCard 
//                 imageUrl={item.imageUrl}
//                 location={item.location}
//                 price={item.price}
//                 title={item.title}
//                 name={item.name}
//                 date={item.date}
//             />
//             </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default UploadedList;