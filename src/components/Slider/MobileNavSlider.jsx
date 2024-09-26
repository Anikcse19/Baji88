import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const images = [
  "/fc-logo.png",
  "/public/deccan-gladiators.png",
  "/public/sunriser.png",
];

export default function MobileNavSlider() {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="MobileNavSlider"
      >
        {images.map((slide, idx) => (
          <SwiperSlide key={idx} className="swiperSlide w-[30px] h-[30px] bg-transparent">
            <img className="m-2" src={slide} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
