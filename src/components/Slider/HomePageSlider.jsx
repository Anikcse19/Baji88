import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./HomePageSlider.css";
import { Autoplay, Pagination } from "swiper/modules";

const HomePageSlider = () => {
  const images = [
    "/sliderImg1.jpg",
    "/sliderImg2.jpg",
    "/sliderImg3.jpg",
    "/sliderImg1.jpg",
    "/sliderImg2.jpg",
    "/sliderImg3.jpg",
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]} 
      spaceBetween={10}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}"><div class="bullet-progress"></div></span>`;
        },
      }}
      className="mainSlider"
    >
      {images.map((slide) => (
        <SwiperSlide key={slide.id} className="rounded-md bg-transparent h-[117px]">
          <img src={slide} alt="" className="rounded-md"/>
        </SwiperSlide>
      ))}

      {/* Pagination bullets will appear here */}
      <div className="flex justify-center mt-6">
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

export default HomePageSlider;
