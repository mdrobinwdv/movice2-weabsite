import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import images
import slider1 from "../assets/banner.jpg";
import slider2 from "../assets/banner2.jpg";
import slider3 from "../assets/movie.jpg";
import slider4 from "../assets/squad.webp";
import slider5 from "../assets/Wednesday.webp";

const images = [
  slider1,slider2,slider3,slider4,slider5,
];

 function ImageSlider() {
  return (
    <div className=" w-full ">
          <Swiper modules={[Pagination, Autoplay]} pagination={{clickable: true , dynamicBullets: true}}
               autoplay={{delay: 3000,disableOnInteraction: false,}}
               loop={true}
               spaceBetween={20}
               slidesPerView={1}
               className="imageSwiper w-full h-[60vh] md:h-[70vh] lg:h-[90vh] ">
               {images.map((img, index) => (
               <SwiperSlide key={index}>
                    <img className=" w-full h-full object-cover  " src={img} alt={`slide-${index}`} />
               </SwiperSlide>))}
          </Swiper>
    </div>
  );
}
export default ImageSlider
