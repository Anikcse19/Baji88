// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import "../assets/css/BannerStyles.css";

import { IoVolumeHigh } from "react-icons/io5";
import SingleSlider from "./Slider/SingleSlider";

export default function HomeBanner() {
  return (
    <div className="mb-10">
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {banner.map((b, i) => (
          <SwiperSlide key={i}>
            <img src={b} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-8 bg-[#1c6d51]">
        <div className="w-[85%] mx-auto flex items-center justify-center gap-1 ">
          <IoVolumeHigh className="text-white text-xl" />
          <div className="relative  overflow-hidden  px-2">
            <div className="flex items-center gap-1">
              <p className="text-move whitespace-nowrap text-white hover:animation-pause">
                প্রিয় গ্রাহক, আপনার bajilive.net এ ভিসিট করতে সমস্যা হলে,
                অনুগ্রহ করে 112233bj.com,2211133bj.com ব্যবহার করুন, এটি আমাদের
                ব্যাকআপ ওয়েবসাইট লিংক।
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="w-[75%] mx-auto flex items-center justify-between gap-5">
          <div className="h-[400px] w-[550px] ">
            <div className="bg-[#14805E] w-full py-4 px-6">
              <p className="text-white">প্রিয়</p>
            </div>
            <SingleSlider className="w-[550px]" />
          </div>
          <div className="h-[400px] w-[550px]">
            <div className="bg-[#14805E] w-full py-4 px-4">
              <p className="text-white">প্রিয়</p>
            </div>
            <SingleSlider className="w-[550px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

const banner = [
  "/homeBanner1.jpg",
  "/homebanner2.jpg",
  "/homeBanner3.jpg",
  "homeBanner4.jpg",
];
