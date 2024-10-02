import { MdOutlineDoubleArrow } from "react-icons/md";
import CommonNav from "../../utils/CommonNav";
import { IoPauseOutline } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const DBProfile = () => {
  return (
    <div>
      <CommonNav>Personal Info</CommonNav>

      {/* Member Status */}
      <div className="p-4">
        <div
          className="h-[120px] rounded-md bg-cover flex justify-center items-end relative"
          style={{ backgroundImage: "url(/vip-card-bg-3.jpg)" }}
        >
          <img
            src="/elite I - V.png"
            alt=""
            className="w-[80px] h-[80px] absolute -bottom-5"
          />
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          <p className="text-primary">abid07</p>
          <div
            className="flex items-center text-white px-2 py-[2px] rounded-md 
          bg-gradient-to-br from-yellow-500 to-yellow-700 text-sm"
          >
            <p>Elite</p> <IoPauseOutline className="mt-[2px]" />
          </div>
        </div>
      </div>

      {/* VIP Points */}
      <div className="flex items-center h-[48px] bg-[#333]">
        <div className="w-full h-full text-white font-medium flex justify-center items-center">
          <p className="max-w-[90px] leading-4">VIP Points (VP)</p>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <p className="text-primary font-medium text-[21px]">1166.6</p>
        </div>

        <Link to="/vip-points-exchange" className="w-full h-full">
          <button className="text-white w-full h-full flex justify-center items-center gap-1 text-sm font-medium bg-gradient-to-r from-[#2fb19e] to-[#19916b]">
            My VIP <MdOutlineDoubleArrow />
          </button>
        </Link>
      </div>

      {/* Ueer Info */}
      <div className="bg-[#333] px-4 py-6 mt-2">
        {/* Full Name */}
        <div className="flex justify-between">
          <div className="text-xs">
            <p className="text-white">Full Name</p>
            <p className=" text-[#ff7e00] mt-1">Abid Hasan Mim</p>
          </div>
          <p className="text-[10px] text-[#999]">
            Date Registered: 2020/11/10{" "}
          </p>
        </div>

        {/* Phone Number */}
        <div className="mt-4 border-b pb-2 border-gray-600">
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">Phone Number</p>
            <button className=" flex items-center text-white bg-green-500 px-1.5 rounded-md text-sm py-[1px] gap-1">
              <FaPlus />
              Add
            </button>
          </div>

          {/* Default Number */}
          <div className="mt-2 border-s border-cyan-500 flex items-center justify-between bg-[#00b5ff1a] py-2.5 px-2 rounded-md relative">
            <p className="text-primary text-sm">1307337863</p>

            <div className="flex items-center gap-1 text-xs text-green-500">
              <IoIosCheckmarkCircle className="text-base" />
              <p>Already Verified</p>
            </div>

            <div className="absolute -top-2 right-5 bg-cyan-600 text-xs rounded-full px-2 text-white">
              Default
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between py-2 px-2 rounded-md">
            <p className="text-primary text-sm">1607337863</p>

            <div className="flex items-center gap-1 text-xs text-green-500">
              <IoIosCheckmarkCircle className="text-base" />
              <p>Already Verified</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mt-4 border-b pb-2 border-gray-600">
          <div>
            <p className="text-xs text-white">Email</p>
          </div>

          <div className="mt-2 flex items-center justify-between py-2 px-2 rounded-md">
            <p className="text-primary text-sm">abidhasanmim94@gmail.com</p>

            <div className="flex items-center gap-1 text-xs text-green-500">
              <IoIosCheckmarkCircle className="text-base" />
              <p>Already Verified</p>
            </div>
          </div>
        </div>

        {/* Birthday */}
        <div className="mt-4 border-b pb-2 border-gray-600">
          <div>
            <p className="text-xs text-white">Email</p>
          </div>

          <div className="mt-2 flex items-center justify-between py-2 px-2 rounded-md">
            <p className="text-primary text-sm">1999/09/23</p>

            <div className="flex items-center gap-1 text-xs text-green-500">
              <IoIosCheckmarkCircle className="text-base" />
              <p>Already Verified</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-6 pb-20 px-4 items-center gap-2">
        <div className="w-[10%]">
          <img src="/icon-customer.png" alt="" className="w-[32px] h-[32px]" />
        </div>

        <div className="w-[70%] text-xs text-white">
          <p>
            For privacy and security, Information can’t modified after
            confirmation. Please
            <span className="text-[#ff7e00]"> contact customer service </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DBProfile;
