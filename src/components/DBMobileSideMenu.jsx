/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// import useStore from "../Zustand/store/useStore";
import { useState } from "react";

const DBMobileSideMenu = ({ setSideMenuOpen }) => {
  // const { isOpenSideDropdown, setIsOpenSideDropdown } = useStore();
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  // Main Menus
  const menus = [
    {
      name: "Home",
      path: "/",
      icon: "icon-home.png",
    },
    {
      name: "Exclusive",
      path: "",
      icon: "/icon-exclusive.png",
      subMenu: [
        {
          id: 1,
          title: "",
          img: "/exclusiveImg1.jpg",
        },
        {
          id: 2,
          title: "",
          img: "/exclusiveImg2.jpg",
        },
      ],
    },
    {
      name: "Sports",
      path: "",
      icon: "/icon-sport.png",
      subMenu: [
        {
          id: 1,
          title: "এক্সচেঞ্জ",
          img: "/icon-exchange.svg",
        },
        {
          id: 2,
          title: "I-Sports",
          img: "/icon-sportbook.svg",
        },
        {
          id: 3,
          title: "SBO Sports",
          img: "/icon-sbov2.svg",
        },
        {
          id: 4,
          title: "E1Sport",
          img: "/icon-awcme1sport.svg",
        },
        {
          id: 5,
          title: "ঘোড়া বই",
          img: "/icon-horsebook.svg",
        },
        {
          id: 6,
          title: "ভার্চুয়াল",
          img: "/icon-virtual.svg",
        },
        {
          id: 7,
          title: "কাবাডি",
          img: "/icon-kabaddi.svg",
        },
        {
          id: 8,
          title: "Fantasy",
          img: "/icon-powerelevenv2.svg",
        },
      ],
    },
    {
      name: "Casino",
      path: "",
      icon: "/icon-casino.png",
      subMenu: [
        {
          id: 0,
          title: "All",
          path: "/mcasino?cat=All",
          img: "/all-icon.svg",
        },
        {
          id: 1,
          title: "Evolution",
          path: "/mcasino?cat=Evolution",
          img: "/provider-evo.png",
        },
        {
          id: 2,
          title: "Sexy",
          path: "/mcasino?cat=Sexy",
          img: "/provider-awcmsexy.png",
        },
        {
          id: 3,
          title: "Pragmatic Play",
          path: "/mcasino?cat=Pragmatic Play",
          img: "/provider-awcmpp.png",
        },
        {
          id: 4,
          title: "Playtech",
          path: "/mcasino?cat=Playtech",
          img: "/provider-awcmpt.png",
        },
        {
          id: 5,
          title: "HotRoad",
          path: "/mcasino?cat=HotRoad",
          img: "/provider-awcmhotroad.png",
        },
      ],
    },
    {
      name: "Slots",
      path: "",
      icon: "/icon-slot.png",
      subMenu: [
        {
          id: 0,
          title: "All",
          path: "/mslots?cat=All",
          img: "/all-icon.svg",
        },
        {
          id: 1,
          title: "Jilli",
          path: "/mslots?cat=Jilli",
          img: "/slot-provider-awcmjili.png",
        },
        {
          id: 2,
          title: "PG Soft",
          path: "/mslots?cat=PG Soft",
          img: "/slot-provider-pg.png",
        },
        {
          id: 3,
          title: "Pragmatic Play",
          path: "/mslots?cat=Pragmatic Play",
          img: "/provider-awcmpp.png",
        },
        {
          id: 4,
          title: "JDB",
          path: "/mslots?cat=JDB",
          img: "/slot-provider-jdb.png",
        },
        {
          id: 5,
          title: "Fa Chai",
          path: "/mslots?cat=Fa Chai",
          img: "/slot-provider-awcmfc.png",
        },
        {
          id: 6,
          title: "SpadeGaming",
          path: "/mslots?cat=SpadeGaming",
          img: "/slot-provider-awcmsg.png",
        },
        {
          id: 7,
          title: "Red Tiger",
          path: "/mslots?cat=Red Tiger",
          img: "/slot-provider-awcmrt.png",
        },
        {
          id: 8,
          title: "FastSpin",
          path: "/mslots?cat=FastSpin",
          img: "/slot-provider-awcmfastspin.png",
        },
        {
          id: 9,
          title: "Playtech",
          path: "/mslots?cat=Playtech",
          img: "/provider-awcmpt.png",
        },
        {
          id: 10,
          title: "Yellow Bat",
          path: "/mslots?cat=Yellow Bat",
          img: "/slot-provider-awcmyesbingo.png",
        },
        {
          id: 11,
          title: "Rich88",
          path: "/mslots?cat=Rich88",
          img: "/slot-provider-rich88.png",
        },
        {
          id: 100,
          title: "KA Gaming",
          path: "/mslots?cat=KA Gaming",
          img: "/slot-provider-ka.png",
        },
        {
          id: 12,
          title: "WorldMatch",
          path: "/mslots?cat=WorldMatch",
          img: "/slot-provider-worldmatch.png",
        },
        {
          id: 13,
          title: "CQ9",
          path: "/mslots?cat=CQ9",
          img: "/slot-provider-cq9.png",
        },
        {
          id: 14,
          title: "Joker",
          path: "/mslots?cat=Joker",
          img: "/slot-provider-joker.png",
        },
        {
          id: 15,
          title: "PLAY'N GO",
          path: "/mslots?cat=PLAY'N GO",
          img: "/slot-provider-playngo.png",
        },
        {
          id: 16,
          title: "Play8",
          path: "/mslots?cat=Play8",
          img: "/slot-provider-awcmp8.png",
        },
        {
          id: 17,
          title: "Netent",
          path: "/mslots?cat=Netent",
          img: "/slot-provider-netent.png",
        },
      ],
    },
    {
      name: "Table",
      path: "",
      icon: "/icon-table.png",
      subMenu: [
        {
          id: 0,
          title: "All",
          path: "/mtable?cat=All",
          img: "/all-icon.svg",
        },
        {
          id: 1,
          title: "Jilli",
          path: "/mtable?cat=Jilli",
          img: "/slot-provider-awcmjili.png",
        },
        {
          id: 2,
          title: "KingMaker",
          path: "/mtable?cat=KingMaker",
          img: "/table-provider-awcmkm.png",
        },
        {
          id: 3,
          title: "Spribe",
          path: "/mtable?cat=Spribe",
          img: "/table-provider-jdbaspribe.png",
        },
        {
          id: 4,
          title: "Rich88",
          path: "/mtable?cat=Rich88",
          img: "/slot-provider-rich88.png",
        },
        {
          id: 5,
          title: "PG Soft",
          path: "/mtable?cat=PG Soft",
          img: "/slot-provider-pg.png",
        },
        {
          id: 6,
          title: "WorldMatch",
          path: "/mtable?cat=WorldMatch",
          img: "/slot-provider-worldmatch.png",
        },
        {
          id: 7,
          title: "KA Gaming",
          path: "/mtable?cat=KA Gaming",
          img: "/slot-provider-ka.png",
        },
        {
          id: 8,
          title: "CQ9",
          path: "/mtable?cat=CQ9",
          img: "/slot-provider-cq9.png",
        },
        {
          id: 9,
          title: "PLAY'N GO",
          path: "/mtable?cat=PLAY'N GO",
          img: "/slot-provider-playngo.png",
        },
        {
          id: 10,
          title: "Bpoker",
          path: "/mtable?cat=Bpoker",
          img: "/table-provider-bpoker.png",
        },
        {
          id: 11,
          title: "Ludo",
          path: "/mtable?cat=Ludo",
          img: "/table-provider-ludo.png",
        },
      ],
    },
    {
      name: "Crash",
      path: "",
      icon: "/icon-crash.png",
      subMenu: [
        {
          id: 0,
          title: "All",
          path: "/mcrash?cat=All",
          img: "/all-icon.svg",
        },
        {
          id: 1,
          title: "Spribe",
          path: "/mcrash?cat=Spribe",
          img: "/table-provider-jdbaspribe.png",
        },
        {
          id: 2,
          title: "Rich88",
          path: "/mcrash?cat=Rich88",
          img: "/slot-provider-rich88.png",
        },
        {
          id: 3,
          title: "Jilli",
          path: "/mcrash?cat=Jilli",
          img: "/slot-provider-awcmjili.png",
        },
        {
          id: 4,
          title: "Pragmatic Play",
          path: "/mcrash?cat=Pragmatic Play",
          img: "/provider-awcmpp.png",
        },
        {
          id: 5,
          title: "Fa Chai",
          path: "/mcrash?cat=Fa Chai",
          img: "/slot-provider-awcmfc.png",
        },
        {
          id: 6,
          title: "KingMaker",
          path: "/mcrash?cat=KingMaker",
          img: "/table-provider-awcmkm.png",
        },
        {
          id: 7,
          title: "KA Gaming",
          path: "/mcrash?cat=KA Gaming",
          img: "/slot-provider-ka.png",
        },
      ],
    },
    {
      name: "Fishing",
      path: "",
      icon: "/icon-fish.png",
      subMenu: [
        {
          id: 0,
          title: "All",
          path: "/mfishing?cat=All",
          img: "/all-icon.svg",
        },
        {
          id: 1,
          title: "Jilli",
          path: "/mfishing?cat=Jilli",
          img: "/slot-provider-awcmjili.png",
        },
        {
          id: 2,
          title: "Fa Chai",
          path: "/mfishing?cat=Fa Chai",
          img: "/slot-provider-awcmfc.png",
        },
        {
          id: 3,
          title: "JDB",
          path: "/mfishing?cat=JDB",
          img: "/slot-provider-jdb.png",
        },
        {
          id: 4,
          title: "KA Gaming",
          path: "/mfishing?cat=KA Gaming",
          img: "/slot-provider-ka.png",
        },
        {
          id: 5,
          title: "CQ9",
          path: "/mfishing?cat=CQ9",
          img: "/slot-provider-cq9.png",
        },
        {
          id: 6,
          title: "Joker",
          path: "/mfishing?cat=Joker",
          img: "/slot-provider-joker.png",
        },
        {
          id: 7,
          title: "Yellow Bat",
          path: "/mfishing?cat=Yellow Bat",
          img: "/slot-provider-awcmyesbingo.png",
        },
      ],
    },
    {
      name: "Arcade",
      path: "",
      icon: "/icon-arcade.png",
      subMenu: [
        {
          id: 0,
          title: "All",
          path: "/marcade?cat=All",
          img: "/all-icon.svg",
        },
        {
          id: 1,
          title: "JDB",
          path: "/marcade?cat=JDB",
          img: "/slot-provider-jdb.png",
        },
        {
          id: 2,
          title: "Fa Chai",
          path: "/marcade?cat=Fa Chai",
          img: "/slot-provider-awcmfc.png",
        },
        {
          id: 3,
          title: "PG Soft",
          path: "/marcade?cat=PG Soft",
          img: "/slot-provider-pg.png",
        },
        {
          id: 4,
          title: "KA Gaming",
          path: "/marcade?cat=KA Gaming",
          img: "/slot-provider-ka.png",
        },
        {
          id: 5,
          title: "Rich88",
          path: "/marcade?cat=Rich88",
          img: "/slot-provider-rich88.png",
        },
        {
          id: 6,
          title: "CQ9",
          path: "/marcade?cat=CQ9",
          img: "/slot-provider-cq9.png",
        },
      ],
    },
    {
      name: "Lottery",
      path: "",
      icon: "/icon-lottery.png",
      subMenu: [
        {
          id: 0,
          title: "All",
          path: "/mlottey?cat=All",
          img: "/all-icon.svg",
        },
        {
          id: 1,
          title: "Jilli",
          path: "/mlottery?cat=Jilli",
          img: "/slot-provider-awcmjili.png",
        },
        {
          id: 2,
          title: "KingMaker",
          path: "/mlottery?cat=KingMaker",
          img: "/table-provider-awcmkm.png",
        },
        {
          id: 3,
          title: "Yellow Bat",
          path: "/mlottery?cat=Yellow Bat",
          img: "/slot-provider-awcmyesbingo.png",
        },
        {
          id: 4,
          title: "Number",
          path: "/mlottery?cat=Number",
          img: "/provider-number.png",
        },
        {
          id: 5,
          title: "Joker",
          path: "/mlottery?cat=Joker",
          img: "/slot-provider-joker.png",
        },
      ],
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

  const handleMenuClick = (idx) => {
    setOpenSubMenuIndex(openSubMenuIndex === idx ? null : idx); // Toggle the submenu
  };

  return (
    <div className="w-full  relative">
      <div className="bg-[#111111] h-screen overflow-y-auto w-[190px]">
        {/* Logo + Main Menu */}
        <div className="bg-[#252525] px-2 pt-2 border-b border-gray-600">
          {/* Logo Section */}
          <div className="border-b border-[#14805E] flex justify-center items-center flex-col gap-2 pb-4 ">
            <img src="/logo (2).png" alt="" className="w-[80px] h-[60px]" />
            <p className="text-white text-lg">Front Of Shirt Partner</p>
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
                  <div key={idx}>
                    <Link
                      to={menu?.path}
                      className="flex items-center gap-2 text-base border-b border-gray-600 pb-2"
                      onClick={() => handleMenuClick(idx)}
                    >
                      <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <img src={menu.icon} alt="" />
                      </span>
                      <span className=""> {menu.name}</span>
                    </Link>

                    {/* Submenu */}
                    {menu.subMenu && openSubMenuIndex === idx && (
                      <div className="absolute overflow-y-scroll top-0 left-[190px] h-[100vh] max-w-[29.33vw] bg-[#333333] transition-all duration-300 ease-in-out">
                        <div className="w-full flex flex-col gap-y-3 p-2">
                          {menu.subMenu.map((sMenu) => (
                            <Link
                              key={sMenu.id}
                              to={sMenu.path}
                              onClick={() => {
                                setSideMenuOpen(false);
                                setOpenSubMenuIndex(null);
                              }}
                              className="flex flex-col items-center gap-y-2 w-full px-2 py-3 border-b border-slate-700"
                            >
                              <img
                                className="h-[50px] w-[50px]"
                                src={sMenu.img}
                                alt={sMenu.title}
                              />
                              <p>{sMenu.title}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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
