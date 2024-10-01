/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const ReferralProgramBtn = ({ url, children }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={url}
      className={`${
        pathname === url
          ? "border-[#ffea00] text-[#ffea00]"
          : "border-transparent text-white"
      } w-1/2 border-b-[3px] font-bold text-sm  py-2 flex justify-center items-center transition-all transform ease-in-out duration-200`}
    >
      {children}
    </Link>
  );
};

export default ReferralProgramBtn;
