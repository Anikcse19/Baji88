/* eslint-disable react/prop-types */
import Center from "./Center";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import useStore from "../Zustand/store/useStore";
import MobileNavSlider from "./Slider/MobileNavSlider";

const Header = ({ setSideMenuOpen }) => {
  const navigate = useNavigate();

  const { isLoginModalopen, setIsLoginModalOpen } = useStore();
  return (
    <div className="">
      {/* uper header start */}
      <div className="bg-[#2D2D2D] hidden lg:block">
        <Center>
          <div className="flex items-center justify-between text-white text-sm  px-2">
            {/* left part */}
            <div className="flex items-center gap-3">
              <span>(GMT+6) 21:07:12</span>
              <span className="flex items-center gap-1 bg-[#555555] py-1 px-4">
                <img
                  className="w-4 h-4 object-cover"
                  src="https://www.baji.live/images/web/flag/BD.png"
                  alt=""
                />
                <p className="text-base">&#2547; BDT বাংলা</p>
              </span>
            </div>
            {/* right part */}
            <div className="flex items-center gap-2 text-gray-300">
              <div className="flex items-center gap-1">
                <IoLogoWhatsapp className="text-lg" />
                <p>Whatsapp |</p>
              </div>
              <div className="flex items-center gap-1">
                <MdEmail className="text-lg" />
                <p>Email |</p>
              </div>
              <div className="flex items-center gap-1">
                <FaFacebookSquare className="text-lg" />
                <p>Facebook |</p>
              </div>
              <div className="flex items-center gap-1">
                <LuMessagesSquare className="text-lg" />
                <p>Forum </p>
              </div>
            </div>
          </div>
        </Center>
      </div>
      {/* uper header end */}

      {/* lower header start */}
      <div
        // style={{
        //   background: "linear-gradient(to bottom,#1bac7e 0,#14805e 100%)",
        // }}
        className="lg:bg-gradient-to-b from-[#1bac7e] to-[#14805e] bg-[#111111]"
      >
        <Center>
          <div className="flex items-center justify-between py-2 px-2">
            {/* left */}
            <div className="flex items-center gap-2 lg:gap-5">
              <BiMenuAltLeft
                onClick={() => setSideMenuOpen((prev) => !prev)}
                className="lg:hidden text-green-700 text-3xl"
              />
              <div onClick={() => navigate("/")} className="">
                <img
                  className="w-[70px] lg:w-[120px] h-[30px] lg:h-[50px] cursor-pointer"
                  src="/logo.png"
                  alt=""
                />
              </div>
              <div>|</div>
              <div className="max-w-[100px] max-h-[35px] overflow-hidden">
                <MobileNavSlider />
              </div>
            </div>
            {/* right */}
            <div className="flex items-center gap-5 lg:gap-3">
              <div
                onClick={() => setIsLoginModalOpen(!isLoginModalopen)}
                className="hidden lg:block px-8 py-1 rounded-md hover:border hover:border-yellow-300 transition-all duration-300 ease-in cursor-pointer"
              >
                লগ ইন
              </div>
              <div
                onClick={() => {
                  navigate("/registration");
                }}
                style={{
                  background:
                    "linear-gradient(to right, #fbc103 0, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103 100%)",
                }}
                className="hidden lg:block px-8 py-1 rounded-sm text-white cursor-pointer"
              >
                সাইন আপ
              </div>
              <div className="lg:hidden flex flex-col items-center">
                <img
                  className="w-6 h-5 hue-rotate-90 saturate-200 brightness-200"
                  src="/app-icon.svg"
                  alt=""
                />
                <p className="text-green-500 text-sm">App</p>
              </div>
              <div className="lg:hidden flex flex-col items-center ">
                <img
                  className="w-6 h-5 hue-rotate-90 saturate-200 brightness-200"
                  src="/help-icon.svg"
                  alt=""
                />
                <p className="text-green-500 text-sm">Help</p>
              </div>
            </div>
          </div>
        </Center>
      </div>
      {/* lower header end */}
    </div>
  );
};

export default Header;
