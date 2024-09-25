import { IoHome } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpenSubNav, setIsOpenSubNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="relative hidden lg:block">
      <div className="bg-[#3E3E3E]">
        <div className="flex  text-white w-[90%] ml-auto ">
          <span
            onClick={() => navigate("/")}
            className="flex gap-2 self-center  px-3 py-2 bg-[#302d2d] cursor-pointer"
          >
            <IoHome className="text-xl " />
          </span>
          <p className="text-sm self-center">|</p>
          <span className="flex items-center gap-2  px-3 self-center">
            <FaMobileScreenButton className="text-xl" />
          </span>
          <p className="text-sm self-center">|</p>
          <div className="flex items-center gap-2 text-base">
            {navItems.map((nav, i) => (
              <div
                onMouseEnter={() => {
                  if (nav.subNav) {
                    setIsOpenSubNav(true);
                  }
                }}
                onMouseLeave={() => {
                  if (nav.subNav) {
                    setIsOpenSubNav(false);
                  }
                }}
                key={nav.id}
                className="flex items-center "
              >
                <div
                  onClick={() => navigate(`${nav?.link}`)}
                  className={`${
                    location.pathname.includes(nav.link)
                      ? "border-yellow-300"
                      : "hover:border-yellow-300"
                  } flex items-center object-cover px-6 py-2  gap-3 cursor-pointer border-b-4 border-transparent`}
                >
                  <p>{nav.title}</p>
                  {nav.subNav && <MdKeyboardArrowDown />}
                </div>
                {i != navItems.length - 1 && <p>|</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* dropdown */}
      <div
        className={`bg-red-400 w-full fixed z-[200] transition-all duration-300 ease-in ${
          isOpenSubNav ? "h-[200px]" : "h-0"
        }`}
      ></div>
    </div>
  );
};

export default Navbar;

const navItems = [
  {
    id: 1,
    title: "স্পোর্ট",
    subNav: [],
    link: "/sports",
  },
  {
    id: 2,
    title: "ক্যাসিনো",
    link: "/casino",
  },
  {
    id: 3,
    title: "স্লট",
    link: "/slot",
  },
  {
    id: 4,
    title: "টেবিল",
    link: "/table",
  },
  {
    id: 5,
    title: "ফিশিং",
    link: "/fishing",
  },
  {
    id: 6,
    title: "ক্রাশ",
    link: "/crush",
  },
  {
    id: 7,
    title: "আর্কেড",
    link: "/arcade",
  },
  {
    id: 8,
    title: "লটারি",
    link: "/lottery",
  },
  {
    id: 9,
    title: "প্রমোশনাল অ...",
    link: "/promotional",
  },
  {
    id: 10,
    title: "ভিয়াইপি",
    link: "/vip",
  },
  {
    id: 11,
    title: "রেফারেল",
    link: "/refferel",
  },
];
