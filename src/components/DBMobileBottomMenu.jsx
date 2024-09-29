/* eslint-disable react/prop-types */
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const DBMobileBottomMenu = ({setMyAccount}) => {

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
    <div className="w-full h-[50px] px-2 bg-black flex items-center justify-between gap-5">

      <ul className="w-[75%] h-full">
        <li className="flex items-center justify-between h-full">
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
        </li>
      </ul>

      <div className="w-[25%] h-full flex items-center justify-end">
        <button
          onClick={() => setMyAccount((prev) => !prev)}
          className="flex flex-col items-center justify-center"
        >
          <span className="w-5 h-5 text-white">
            <LuUser2 />
          </span>
          <span className="text-xs text-white">My Account</span>
        </button>
      </div>
      
    </div>
  );
};

export default DBMobileBottomMenu;
