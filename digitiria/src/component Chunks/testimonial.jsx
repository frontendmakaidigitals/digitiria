 
import { Swiper, SwiperSlide } from "swiper/react";
import { TiStarFullOutline } from "react-icons/ti";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import './swper.css'
import { Pagination, Navigation  } from "swiper/modules";
const Testimonial = () => {
  const data = [
    {
      id: 0,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      designation: "Lorem Designation",
      rating: 4,
      img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1941",
    },
    {
      id: 1,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      designation: "Lorem Designation",
      rating: 5,
      img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1941",
    },
    {
      id: 2,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      designation: "Lorem Designation",
      rating: 4,
      img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1941",
    },
    {
      id: 3,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      designation: "Lorem Designation",
      rating: 5,
      img: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1941",
    },
    {
      id: 4,
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
    <div className="w-full flex  justify-center mt-10 overflow-hidden">
      <div className="w-full ">
        <p className="text-slate-100 font-Satoshi text-4xl font-[700] mb-10 text-center">
          Over 100+ User trust us
        </p>
        <Swiper
          
          grabCursor={true}
          centeredSlides={true} // Center the active slide
          slidesPerView={3}
          spaceBetween={50} // Adjust space between slides
          loop={true}
          modules={[Pagination, Navigation]}
          navigation={true}
          className="overflow-visible"
        >
          {data.map((data) => {
            return (
              <SwiperSlide
                key={data.id}
                className="bg-[#FFF5F5] px-4 py-3 rounded-md"
              >
                <div className="py-3">
                  <p className="text-lg ">{data.comment}</p>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 overflow-hidden  rounded-full">
                      <img
                        src={data.img}
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p>{data.name}</p>
                      <p>{data.designation}</p>
                    </div>
                  </div>
                  <div className="flex  px-2 bg-[#FFE8E8] rounded-full">
                    {renderStars(data.rating)}
                  </div>
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
