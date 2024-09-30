/* eslint-disable react/prop-types */
import { BsChatLeftText } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CommonNav = ({children}) => {
  return (
    <div className="flex items-center justify-between bg-[#14805e] text-white py-2 px-3">
      <Link to="/">
        <IoIosArrowBack className="text-[26px]" />
      </Link>
      <p className="font-medium">{children}</p>

      <button className="flex flex-col justify-center items-center">
        <BsChatLeftText className="w-4 h-4" />
        <span className="text-sm">Help</span>
      </button>
    </div>
  );
};

export default CommonNav;
