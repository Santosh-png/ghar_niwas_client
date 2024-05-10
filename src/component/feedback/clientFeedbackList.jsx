import React from 'react';
import Slider from 'react-slick';
import ClientFeedbackCard from './ClientFeedbackCard.component'; 
// import ClientAvatarList from './clientAvatarList'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientFeedbackItems from './ClientFeedbackItems';

function ClientFeedbackList() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
        focusOnSelect: true,
        autoplay: true,
        responsive: [
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
                slidesToShow: 1,
                slidesToScroll: 2,
                centerMode: true,
                // centerPadding:"20px",
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
        <div className="center__carousel" sx={{ color:"primary.main" }}>
            <Slider {...settings}>
                {/* <ClientFeedbackCard />
                <ClientFeedbackCard />
                <ClientFeedbackCard />
                <ClientFeedbackCard />
                <ClientFeedbackCard />
                <ClientFeedbackCard /> */}

                {ClientFeedbackItems.map((item) => (
                          <div key={item.id} className="top-card-wrapper">
                    <ClientFeedbackCard
                        name={item.name}
                        location={item.location}
                        post={item.post}
                        date={item.date}
                        feedback={item.feedback}
                        
                    />
                    </div>
                  ))}
      

            </Slider>
        </div>
    );
}
export default ClientFeedbackList;
