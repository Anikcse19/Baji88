import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";
import { RiPinterestLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

const DBSideMenu = () => {
  const { pathname } = useLocation();

  const fundsMenus = [
    {
      name: "Betting Records",
      path: "",
      icon: "/icon-bet-records.png",
    },
    {
      name: "My Wallet",
      path: "/member-center/deposite",
      icon: "/wallet.svg",
    },
    {
      name: "Turnover",
      path: "",
      icon: "/icon-turnover.png",
    },
    {
      name: "VIP",
      path: "",
      icon: "/vip.svg",
    },
    {
      name: "Transaction Records",
      path: "",
      icon: "/transaction-record.svg",
    },
  ];

  const profileMenus = [
    {
      name: "Perdonal Info",
      path: "/member-center/profile",
      icon: "/member.svg",
    },
    {
      name: "Reset password",
      path: "",
      icon: "/password.svg",
    },
    {
      name: "Inbox",
      path: "",
      icon: "/mail.svg",
    },
    {
      name: "Referral Program",
      path: "",
      icon: "/friend.svg",
    },
  ];

  const communitySocial = [
    {
      name: "Facebbok",
      path: "",
      icon: <SlSocialFacebook />,
    },
    {
      name: "Instagram",
      path: "",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      path: "",
      icon: <FaXTwitter />,
    },
    {
      name: "Pinterest",
      path: "",
      icon: <RiPinterestLine />,
    },
    {
      name: "Youtube",
      path: "",
      icon: <FiYoutube />,
    },
    {
      name: "Telegram",
      path: "",
      icon: <PiTelegramLogo />,
    },
  ];

  const communityCs = [
    {
      name: "WhatsApp",
      path: "",
      icon: <FaWhatsapp />,
    },
    {
      name: "Email",
      path: "",
      icon: <MdMailOutline />,
    },
    {
      name: "Facebook",
      path: "",
      icon: <SlSocialFacebook />,
    },
  ];

  return (
    <div className="w-[23%]">
      {/* Profile and Menus */}
      <div className="py-5 bg-[#313131] rounded-md">
        <div className="px-5 flex flex-col justify-center items-center w-full border-b border-[#4e4e4e]  pb-4">
          <img src="/elite I - V.png" alt="" className="w-[48px] h-[48px]" />
          <p className="text-sm text-white">abid12</p>
          <p className="flex items-center gap-1 text-sm text-[#26ffbc] font-bebas">
            <IoIosStar />
            1166.6
          </p>

          <div className="w-[80%] border-b pb-5 border-[#4e4e4e]">
            <div
              className="w-full mx-auto mt-4 h-[5px] rounded-full"
              style={{
                background: "linear-gradient(to right,#fdb100 0,#ffdf18 100%)",
              }}
            ></div>

            <p className="w-full mx-auto mt-1 flex items-center justify-between text-xs text-[#999]">
              <span>Elite ll</span>
              <span>Elite lll</span>
            </p>
          </div>

          <div className="flex items-center gap-5 mt-5">
            <Link to="/member-center/deposite">
              <button
                className={`flex flex-col justify-center items-center text-[13px] hover:text-[#26ffbc] ${
                  pathname === "/member-center/deposite"
                    ? "text-[#26ffbc]"
                    : "text-white"
                }`}
              >
                <img
                  src="/icon-deposit.png"
                  alt=""
                  className={`w-[35px] h-[35px] hover:bg-white rounded-full p-[1px] ${
                    pathname === "/member-center/deposite" ? "bg-white" : ""
                  }`}
                />
                <span>Deposite</span>
              </button>
            </Link>

            <Link to="/member-center/withdraw">
              <button
                className={`flex flex-col justify-center items-center text-[13px] hover:text-[#26ffbc] ${
                  pathname === "/member-center/withdraw"
                    ? "text-[#26ffbc]"
                    : "text-white"
                }`}
              >
                <img
                  src="/icon-deposit.png"
                  alt=""
                  className={`w-[35px] h-[35px] hover:bg-white rounded-full p-[1px] ${
                    pathname === "/member-center/withdraw" ? "bg-white" : ""
                  }`}
                />
                <span>Withdraw</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-2">
          {/* Funds Menus */}
          <h2 className="text-white font-medium px-5">Funds</h2>

          <ul>
            <li>
              {fundsMenus.map((item, idx) => (
                <Link
                  to={item.path}
                  key={idx}
                  className="px-5 py-1.5 my-1 hover:bg-black hover:bg-opacity-20 flex items-center text-sm text-white hover:border-[#26ffbc] hover:text-[#26ffbc] border-l-4 border-transparent hover:border-l-4 gap-2 transition-all duration-200 ease-in-out"
                >
                  <span className="w-[25px] h-[25px] bg-white bg-opacity-10 rounded-full">
                    <img src={item.icon} alt="" className="" />
                  </span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </li>
          </ul>

          <div className="w-[90%] my-2 mx-auto h-[1px] bg-[#4e4e4e]"></div>
          {/* Profile Menus */}
          <h2 className="text-white font-medium px-5">Profile</h2>
          <ul className="">
            <li>
              {profileMenus.map((item, idx) => (
                <Link
                  to={item.path}
                  key={idx}
                  className="px-5 py-1.5 my-1 hover:bg-black hover:bg-opacity-20 flex items-center text-sm text-white hover:border-[#26ffbc] hover:text-[#26ffbc] border-l-4 border-transparent hover:border-l-4 gap-2 transition-all duration-200 ease-in-out"
                >
                  <span className="w-[25px] h-[25px] bg-white bg-opacity-10 rounded-full">
                    <img src={item.icon} alt="" className="" />
                  </span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* Socials/ Community */}
      <div className="mt-1">
        <h2 className="text-primary font-semibold text-sm">community social</h2>

        <div className="grid grid-cols-2 gap-2">
          {communitySocial.map((item, idx) => (
            <div key={idx} className="bg-[#313131] rounded-[4px]">
              <Link className="px-5 py-1.5 my-1 flex items-center text-sm text-white hover:text-[#26ffbc] gap-2 transition-all duration-200 ease-in-out">
                <span className="w-[25px] h-[25px] bg-white bg-opacity-10 rounded-full flex justify-center items-center">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* community cs */}
      <div className="mt-1">
        <h2 className="text-primary font-semibold text-sm">community CS</h2>

        <div className="grid grid-cols-2 gap-2">
          {communityCs.map((item, idx) => (
            <div key={idx} className="bg-[#313131] rounded-[4px]">
              <Link className="px-5 py-1.5 my-1 flex items-center text-sm text-white hover:text-[#26ffbc] gap-2 transition-all duration-200 ease-in-out">
                <span className="w-[25px] h-[25px] bg-white bg-opacity-10 rounded-full flex justify-center items-center">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DBSideMenu;
