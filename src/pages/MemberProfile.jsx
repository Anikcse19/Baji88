import MemberCenter from "./MemberCenter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { HiCake } from "react-icons/hi";

const MemberProfile = () => {
  return (
    <MemberCenter>
      <div className="">
        {/* Schedule */}
        <div className="flex justify-between items-center py-3 px-5 bg-[#313131] rounded-md">
          <div>
            <p className="text-white text-opacity-50">Last Login Time</p>
            <h1 className="font-bebas text-white">2024/10/05 21:26:14</h1>
          </div>
          <div>
            <p className="text-white text-opacity-50">Last Deposit Time</p>
            <h1 className="font-bebas text-white">2024/10/05 21:26:14</h1>
          </div>
          <div>
            <p className="text-white text-opacity-50">Last Withdrawal Time</p>
            <h1 className="font-bebas text-white">2024/10/05 21:26:14</h1>
          </div>
          <div>
            <p className="text-white text-opacity-50">Date Registered</p>
            <h1 className="font-bebas text-white">2024/10/05 21:26:14</h1>
          </div>
        </div>

        {/* Promotion Slider */}
        <div className="mt-2 flex gap-3 py-3 px-5 bg-[#313131] rounded-md flex-col pb-5">
          <div className="w-max">
            <p className="text-[#26ffbc] border-[#26ffbc] border rounded-[3px] px-2 text-sm py-[2px]">
              New Promotions
            </p>
          </div>

          <>
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              slidesPerGroup={3}
              slide
              loop
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={false}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {[...Array(9)].map((item, idx) => (
                <SwiperSlide key={idx} className="bg-transparent">
                  <div className="bg-transparent rounded-md">
                    <img
                      src="/public/image_171226.jpg"
                      alt=""
                      className="rounded-md bg-transparent"
                    />

                    <div className="mt-1 text-left px-1 flex items-center gap-2">
                      <div className="bg-yellow h-[16px] w-1 rounded-full"></div>
                      <p className="text-white text-sm font-medium">
                        Win With Crazy Time MIssion
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>

        {/* Member Details */}
        <div className="mt-2 flex flex-wrap gap-4">
          <div className="flex justify-center items-center gap-2 bg-black bg-opacity-20 py-4 rounded-[4px] w-[24%]">
            <FaUserAlt className="text-[#a0a0a0] text-lg" />
            <p className="text-white text-sm font-semibold"> Abid hasan Mim </p>
          </div>

          <div className="flex bg-black bg-opacity-20 w-[48%] rounded-[4px] py-4">
            <div className="flex items-center gap-2  px-10 border-gray-600 border-r">
              <BsTelephoneFill className="text-[#a0a0a0] text-lg" />
              <p className="text-white text-sm font-semibold">1307337863</p>
            </div>

            <div className="flex items-center gap-2  px-10">
              <BsTelephoneFill className="text-[#a0a0a0] text-lg" />
              <p className="text-white text-sm font-semibold">1707337863</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 bg-black bg-opacity-20 py-4 rounded-[4px] w-[24%]">
            <TbMailFilled className="text-[#a0a0a0] text-lg" />
            <p className="text-white text-sm font-semibold">
              abidhasanmim94@gma
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 bg-black bg-opacity-20 py-4 rounded-[4px] w-[24%]">
            <HiCake className="text-[#a0a0a0] text-lg" />
            <p className="text-white text-sm font-semibold">
              1999/03/23 00:00:00
            </p>
          </div>
        </div>
      </div>
    </MemberCenter>
  );
};

export default MemberProfile;
