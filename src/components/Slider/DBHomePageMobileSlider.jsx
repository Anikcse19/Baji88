import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "../../assets/css/DBHomePageMobileSLider.css";

const images = [
  "/sliderImg1.jpg",
  "/sliderImg2.jpg",
  "/sliderImg3.jpg",
  "/sliderImg1.jpg",
  "/sliderImg2.jpg",
  "/sliderImg3.jpg",
];

export default function DBHomePageMainSlider() {
  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        centeredSlides={true}  // Ensure center slide is focused
        loop={true}
        grabCursor={true}
        pagination={true}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="DBHomePageMainSlider mt-2"
      >
        {images.map((slide, idx) => (
          <SwiperSlide key={idx} className="swiper-slide-custom">
            <img className="slide-img" src={slide} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
