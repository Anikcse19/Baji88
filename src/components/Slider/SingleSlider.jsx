import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import "../../assets/css/SliderStyles.css";

// eslint-disable-next-line react/prop-types
export default function SingleSlider({ className }) {
  const swiperRef = useRef(null); // Ref to store Swiper instance

  return (
    <div className="relative">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={false} // Disable default navigation
        modules={[EffectFlip, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Store the Swiper instance in the ref
        }}
        className={`${className} mySwiper h-[345px]`}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="w-full">
            <img className="w-[300px] h-[400px]" src={img} alt={`Slide ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className=" z-50 flex items-center justify-center space-x-2 absolute -top-12 right-4">
        <div
          className=" cursor-pointer text-white p-2 rounded-full"
          onClick={() => swiperRef.current?.slidePrev()} // Trigger previous slide
        >
          <FaLongArrowAltLeft className="text-yellow-400 text-xl font-bold mt-1 hover:scale-125 transition-all duration-300 ease-in" />
        </div>
        <div>|</div>
        <div
          className="cursor-pointer text-white p-2 rounded-full"
          onClick={() => swiperRef.current?.slideNext()} // Trigger next slide
        >
          <FaLongArrowAltRight className="text-yellow-400 text-xl font-bold mt-1 hover:scale-125 transition-all duration-300 ease-in" />
        </div>
      </div>
    </div>
  );
}

// Sample images array
const images = ["/sliderImg1.jpg", "/sliderImg2.jpg", "/sliderImg3.jpg"];
