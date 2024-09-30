/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CommonNav from "../../utils/CommonNav";

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
        <CommonNav>Funds</CommonNav>

        {/* Deposite and Withdraw Buttons */}
        <div className="mt-4 w-full flex justify-center items-center px-4">
          <Link
            to="/deposit"
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
