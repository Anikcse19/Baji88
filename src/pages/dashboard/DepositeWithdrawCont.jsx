/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const DepositeWithdrawCont = ({ children }) => {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState("/deposit");

  useEffect(() => {
    setToggle(pathname);
  }, [pathname]);

  return (
    <div>
      {/* Deposite, Withdraw, Select Promotion */}
      <div className="bg-[#14805e] pb-4">
        <div className="flex items-center justify-between text-white py-2 px-3">
          <Link to="/">
            <IoIosArrowBack className="text-[26px]" />
          </Link>
          <p>Funds</p>

          <button>
            <BsChatLeftText className="w-4 h-4" />
          </button>
        </div>

        {/* Deposite and Withdraw Buttons */}
        <div className="mt-4 w-full flex justify-center items-center px-4">
          <Link
            to="/deposit"
            // onClick={() => handleToggle("deposite")}
            className={`${
              toggle === "/deposit"
                ? "bg-[#34af83] h-[35px]"
                : "py-[2px] bg-[#0d543e]"
            } w-1/2 rounded-sm text-white font-medium text-[13px] flex justify-center items-center transition-all duration-300`}
          >
            Deposite
          </Link>

          <Link
            to="/withdraw"
            // onClick={() => handleToggle("withdraw")}
            className={`${
              toggle === "/withdraw"
                ? "bg-[#34af83] h-[35px]"
                : "py-[2px] bg-[#0d543e]"
            }  w-1/2 rounded-r-sm text-white font-medium text-[13px] flex justify-center items-center transition-all duration-300`}
          >
            Withdraw
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
};

export default DepositeWithdrawCont;
