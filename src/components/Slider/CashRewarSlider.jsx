/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/CashRewarSlider.css";
import { Navigation } from "swiper/modules";

export default function CashRewarSlider({ setActiveIndex }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation]}
        className="CashRewarSlider"
      >
        <SwiperSlide className="py-3 flex flex-col bg-transparent">
          <h1 className="flex text-[18px] font-bold text-white">
            Cash Reward Ratio
          </h1>
          <p className="text-[#b5b5b5]">Turnover Range: More Than 5,00,000</p>
        </SwiperSlide>
        <SwiperSlide className="py-3 flex flex-col bg-transparent">
          <h1 className="flex text-[18px] font-bold text-white">
            Cash Reward Ratio
          </h1>
          <p className="text-[#b5b5b5]">Turnover Range: More Than 5,00,000</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
