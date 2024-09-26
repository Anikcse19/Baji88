/* eslint-disable react/prop-types */
import { BiMenuAltLeft } from "react-icons/bi";
import { BsChatLeftText } from "react-icons/bs";
import logo from "../../public/logo.png";
import MobileNavSlider from "./Slider/MobileNavSlider";

const DBMobileNavbar = ({ setSideMenuOpen }) => {
  return (
    <nav className="w-full h-[60px] flex items-center justify-between gap-2 px-2 border-b border-gray-900">
      {/*Left Content- Logo + Slider*/}
      <div className="w-full flex items-center gap-2">
        {/* Side Menu Button */}
        <button
          onClick={() => setSideMenuOpen((prev) => !prev)}
          className="text-[28px] text-[#14805E]"
        >
          <BiMenuAltLeft />
        </button>

        {/* Logo and Nav Slider */}
        <div className="w-full flex items-center gap-[8%]">
          <div className="w-[60px]">
            <img src={logo} alt="logo" className="w-full h-full object-cove" />
          </div>

          <div className="max-w-[100px] max-h-[35px] overflow-hidden">
            <MobileNavSlider />
          </div>
        </div>
      </div>

      {/*Right Content- Help */}
      <div>
        <button className="text-xl text-[#14805E] flex flex-col justify-center items-center">
          <BsChatLeftText className="" />
          <span className="text-xs font-medium">Help</span>
        </button>
      </div>
    </nav>
  );
};

export default DBMobileNavbar;
