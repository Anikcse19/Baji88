import { Link } from "react-router-dom";
import useStore from "../Zustand/store/useStore";

const DBMobileSideMenu = () => {
  const { isOpenSideDropdown, setIsOpenSideDropdown } = useStore();
  // Main Menus
  const menus = [
    {
      name: "Home",
      path: "",
      icon: "icon-home.png",
    },
    {
      name: "Exclusive",
      path: "",
      icon: "/icon-exclusive.png",
      subMenu: {
        name: "abc",
      },
    },
    {
      name: "Sports",
      path: "",
      icon: "/icon-sport.png",
    },
    {
      name: "Casino",
      path: "",
      icon: "/icon-casino.png",
    },
    {
      name: "Slots",
      path: "",
      icon: "/icon-slot.png",
    },
    {
      name: "Table",
      path: "",
      icon: "/icon-table.png",
    },
    {
      name: "Crash",
      path: "",
      icon: "/icon-crash.png",
    },
    {
      name: "Fishing",
      path: "",
      icon: "/icon-fish.png",
    },
    {
      name: "Arcade",
      path: "",
      icon: "/icon-arcade.png",
    },
    {
      name: "Lottery",
      path: "",
      icon: "/icon-lottery.png",
    },
  ];

  // Promotions Menus
  const promotionsMenus = [
    {
      name: "Promotions",
      path: "",
      icon: "/icon-promotion.png",
    },
    {
      name: "Referral Program",
      path: "",
      icon: "/icon-referral.png",
    },
    {
      name: "VIP",
      path: "",
      icon: "/icon-vip.png",
    },
  ];

  // Affiliate and Support Menus
  const affiliateSupportMenus = [
    {
      name: "Affiliate",
      path: "",
      icon: "/icon-affiliate.png",
    },
    {
      name: "24/7 LiveChat",
      des: "Provide 24/7 Quality Service",
      path: "",
      icon: "/icon-talk.png",
    },
    {
      name: "Forum",
      path: "",
      icon: "/icon-forum.png",
    },
    {
      name: "Brand Ambassador",
      des: "Play with celebraty",
      path: "",
      icon: "/icon-ambassador.png",
    },
  ];

  console.log(isOpenSideDropdown);

  return (
    <div className="w-full  relative">
      <div className="bg-[#111111] h-screen overflow-y-auto w-[190px]">
        {/* Logo + Main Menu */}
        <div className="bg-[#252525] px-2 pt-2 border-b border-gray-600">
          {/* Logo Section */}
          <div className="border-b border-[#14805E] flex justify-center items-center flex-col gap-2 pb-4 ">
            <img src="/logo.png" alt="" className="w-[100px]" />
            <p className="text-white text-sm">Front Of Shirt Partner</p>
            <img
              src="/afc-bournemouth.png"
              alt=""
              className="w-[50px] h-[50px] object-cover"
            />
          </div>

          {/* Menues Start Here */}
          <ul className="pt-2 bg-[#252525]">
            <li className="flex flex-col text-white text-[13px] gap-2">
              {menus.map((menu, idx) => {
                return (
                  <div
                    onClick={() => {
                      if (menu?.subMenu) {
                        setIsOpenSideDropdown(true);
                      }
                    }}
                    key={idx}
                  >
                    <Link
                      to=""
                      className="flex items-center gap-2 border-b border-gray-600 pb-2"
                    >
                      <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <img src={menu.icon} alt="" />
                      </span>
                      <span> {menu.name}</span>
                    </Link>

                    {/* side dropdown */}

                    <div
                      className={`  h-[100vh] absolute top-0 left-[190px]  transition-all duration-100 ease-in ${
                        isOpenSideDropdown
                          ? "w-[200px] z-[10000] bg-red-600"
                          : "w-0"
                      }`}
                    >
                      <div>gashkl</div>
                    </div>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>

        {/* Promotional Menus*/}
        <ul className="mt-3 bg-[#252525] p-2">
          <li className="flex flex-col text-white text-[13px] gap-2">
            {promotionsMenus.map((menu, idx) => {
              return (
                <Link
                  to=""
                  key={idx}
                  className="flex items-center gap-2 border-b border-gray-600 pb-2"
                >
                  <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <img src={menu.icon} alt="" />
                  </span>
                  <span> {menu.name}</span>
                </Link>
              );
            })}
          </li>
        </ul>

        {/* Affiliate and Support Menus*/}
        <ul className="mt-3 bg-[#252525] p-2 pb-8">
          <li className="flex flex-col text-white text-[13px] gap-2">
            {affiliateSupportMenus.map((menu, idx) => {
              return (
                <Link
                  to=""
                  key={idx}
                  className="flex items-center gap-2 bg-[#333] p-2 rounded-md border border-gray-600"
                >
                  <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <img src={menu.icon} alt="" />
                  </span>
                  <p className="flex flex-col gap-[3px]">
                    <span>{menu.name}</span>
                    <span className="text-[10px]">{menu.des}</span>
                  </p>
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DBMobileSideMenu;
