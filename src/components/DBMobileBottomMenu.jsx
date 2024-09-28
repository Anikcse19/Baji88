import { Link } from "react-router-dom";

const DBMobileBottomMenu = () => {
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
      name: "Deposite",
      path: "",
      icon: "/toolbar-icon-deposit.svg",
    },
    {
      name: "My Account",
      path: "",
      icon: "/icon-promotion.png",
    },
  ];

  return (
    <div className="w-full h-[50px] px-2">
      <ul className="h-full">
        <li className="flex items-center justify-between h-full">
          {menus.map((menu, idx) => {
            return (
              <Link to={menu.path} key={idx} className="flex flex-col items-center justify-center">
                <span className="w-5 h-5">
                  <img src={menu.icon} alt="" className="w-full h-full object-cover"/>
                </span>
                <span className="text-xs text-white">{menu.name}</span>
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default DBMobileBottomMenu;
