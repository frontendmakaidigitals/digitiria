import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TiStarFullOutline } from "react-icons/ti";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Testimonial = () => {
  const data = [
    {
      id: 0,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      designation: "Lorem Designation",
      rating: 5,
      img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1941",
    },
    {
      id: 2,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      designation: "Lorem Designation",
      rating: 5,
      img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1941",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <TiStarFullOutline className="text-yellow-500 text-3xl" key={i} />
      );
    }
    return stars;
  };

  return (
    <div className="w-full">
          <div className="w-[80%]">
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        autoplay={true}
      >
        {data.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              className="bg-red-500 px-4 py-3 rounded-md"
            >
              <div className="py-3">
                <p>{data.comment}</p>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <div className="flex gap-3">
                          <div style={{backgroundImage: `url(${data.img})`}} className="w-10 overflow-hidden rounded-full">
                    
                  </div>
                  <div>
                    <p>{data.name}</p>
                    <p>{data.designation}</p>
                  </div>
                </div>
                <div className="flex">{renderStars(data.rating)}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
     </div>
    </div>
  );
};

export default Testimonial;
