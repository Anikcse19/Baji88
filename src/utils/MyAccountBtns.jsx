/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MyAccountBtns = ({ url, imgUrl, children, className, newTab }) => {
  return (
    <Link target={newTab && "_blank"} to={url}>
      <button className="flex flex-col items-center">
        <img src={imgUrl} alt="" className="w-[35px] h-[35px]" />
        <p className={`text-[13px] text-white max-w-[100px] ${className}`}>
          {children}
        </p>
      </button>
    </Link>
  );
};

export default MyAccountBtns;
