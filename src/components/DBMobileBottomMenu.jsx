import { Link, useNavigate } from "react-router-dom";

const DBMobileBottomMenu = () => {
  const user = "anik";

  const navigate = useNavigate();
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
    <div className="w-full h-[50px] px-2 ">
      <ul className="h-full">
        {user != "" ? (
          <div className="flex items-center justify-between h-full">
            <div className="bg-blue-200 flex items-center justify-center gap-1 w-full h-full">
              <img className="w-6 h-6" src="/BD.png" alt="" />
              <p className="font-bold text-sm">BDT</p>
            </div>
            <div
              onClick={() => navigate("/login")}
              className="bg-teal-700 w-full h-full flex justify-center items-center"
            >
              <p className="text-white font-bold">Login</p>
            </div>
            <div
              onClick={() => navigate("/sign-up")}
              className="bg-[#FFDF1A] w-full h-full flex justify-center items-center"
            >
              <p className="text-black font-bold"> Sign up</p>
            </div>
          </div>
        ) : (
          <li className="flex items-center justify-between h-full bg-black">
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
        )}
      </ul>
    </div>
  );
};

export default DBMobileBottomMenu;
