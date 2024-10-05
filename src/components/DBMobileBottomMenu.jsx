/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const DBMobileBottomMenu = ({ setMyAccount }) => {
  const navigate = useNavigate();
  const user = "";
  const menus = [
    {
      name: "Home",
      path: "",
      icon: "/icon-home.png",
    },
    {
      name: "Promotions",
      path: "",
      icon: "/icon-promotion.png",
    },
    {
      name: "Deposit",
      path: "/deposit",
      icon: "/toolbar-icon-deposit.svg",
    },
  ];

  return (
    <div className="w-full h-[50px]  bg-black flex items-center justify-between gap-5">
      <div className={`${user == "" ? "w-[75%]" : "w-full"} h-full`}>
        {!user == "" ? (
          <div className="flex items-center justify-between w-full h-full">
            <div className="bg-blue-200 flex items-center justify-center gap-1 w-[25%] h-full">
              <img className="w-6 h-6" src="/BD.png" alt="" />
              <p className="font-bold text-sm">
                BDT <p>English</p>
              </p>
            </div>
            <div
              onClick={() => navigate("/login")}
              className="bg-teal-700 w-[37%] h-full flex justify-center items-center"
            >
              <p className="text-white font-bold">Login</p>
            </div>
            <div
              onClick={() => navigate("/sign-up")}
              className="bg-[#FFDF1A] w-[38%] h-full flex justify-center items-center"
            >
              <p className="text-black font-bold"> Sign up</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between h-full px-2">
            {menus.map((menu, idx) => {
              return (
                <Link
                  to={menu.path}
                  key={idx}
                  className="flex flex-col items-center justify-center"
                >
                  <span className="w-5 h-5">
                    <img
                      src={menu.icon}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="text-xs text-white">{menu.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {user == "" && (
        <div className="w-[25%] h-full flex items-center justify-end px-2">
          <button
            onClick={() => setMyAccount((prev) => !prev)}
            className="flex flex-col items-center justify-center"
          >
            <span className="w-5 h-5 text-white">
              {/* <LuUser2 /> */}
              <img src="/toolbar-icon-mine.svg" alt="" />
            </span>
            <span className="text-xs text-white">My Account</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DBMobileBottomMenu;
