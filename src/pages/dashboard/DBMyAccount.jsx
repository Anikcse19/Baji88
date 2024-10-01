/* eslint-disable react/prop-types */

import { FiEye } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { MdClose, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import MyAccountTitle from "../../utils/MyAccountTitle";
import MyAccountBtns from "../../utils/MyAccountBtns";
import { RiLogoutBoxRLine } from "react-icons/ri";

const DBMyAccount = ({ setMyAccount }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black">
      {/* Name and VIP Points */}
      <div
        className="h-[20vh] bg-cover relative z-[9] bg-center"
        style={{ backgroundImage: "url(/member-header-bg.png)" }}
      >
        {/* Close Button */}
        <div
          onClick={() => setMyAccount(false)}
          className="bg-black w-20 h-20 rounded-full absolute -right-7  -top-7 flex justify-cente items-center pt-5 pl-4 z-[9999]"
        >
          <button className="text-white text-[30px]">
            <MdClose />
          </button>
        </div>

        <div className="flex items-center pl-5 gap-4 h-full">
          <div className="w-[65px] h-[65px]">
            <img src="/elite I - V.png" alt="" />
          </div>

          <div className="text-white">
            <p>Abid Ahsan Mim</p>
            <div className="bg-[#333] w-max px-3 rounded-[20px] py-[3px] mt-[2px]">
              <p className="flex items-center gap-1 text-xs">
                VIP Point (VP){" "}
                <span className="text-[#39d89f] font-medium">1166</span> My VIP
                <span className="text-lg">
                  <MdKeyboardDoubleArrowRight />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-2 flex flex-col gap-2 mt-[-5px] z-[99] absolute w-full pb-4">
        {/* Balance/ Wallet */}
        <div className="bg-[#303030] h-[69px] rounded-[8px] flex items-center justify-between p-2 text-xs">
          <div className="flex items-center text-[#7dbfaa] gap-1.5">
            <p>Main Wallet</p>
            <HiOutlineRefresh className="text-base" />
            <FiEye className="text-base" />
          </div>

          <p className="text-[#ffdf1a] flex items-center text-base">
            <TbCurrencyTaka />
            1.82
          </p>
        </div>

        {/* Funds */}
        <div className="bg-[#303030] h-[113px] rounded-[8px] p-3">
          <MyAccountTitle>Funds</MyAccountTitle>

          <div className="w-full flex items-center justify-around p-2">
            <MyAccountBtns url="/deposit" imgUrl="/icon-deposit.png">
              Deposite
            </MyAccountBtns>
            <MyAccountBtns url="/withdraw" imgUrl="/icon-withdrawal.png">
              Withdraw
            </MyAccountBtns>
          </div>
        </div>

        {/* History*/}
        <div className="bg-[#303030] h-[130px] rounded-[8px] p-3">
          <MyAccountTitle>History</MyAccountTitle>

          <div className="w-full flex items-center justify-between p-2">
            <MyAccountBtns
              url="/user-panel/betting-history"
              imgUrl="/icon-bet-records.png"
            >
              Betting Records
            </MyAccountBtns>

            <MyAccountBtns imgUrl="/icon-turnover.png">Turnover</MyAccountBtns>

            <MyAccountBtns
              imgUrl="/icon-records.png"
              className="flex flex-col leading-4"
            >
              <span className="">Transaction</span>
              <span className="">Records</span>
            </MyAccountBtns>
          </div>
        </div>

        {/* Profile */}
        <div className="bg-[#303030] h-[130px] rounded-[8px] p-3">
          <MyAccountTitle>Profile</MyAccountTitle>

          <div className="w-full flex items-center justify-between p-2">
            <MyAccountBtns url="/profile" imgUrl="/icon-profile.png">
              Personal Info
            </MyAccountBtns>

            <MyAccountBtns
              url="/change-password"
              imgUrl="/icon-resetpasswords.png"
              className="flex flex-col leading-3 max-w-[80px]"
            >
              Reset password
            </MyAccountBtns>

            <MyAccountBtns url="/inbox" imgUrl="/icon-inbox.png">
              Inbox
            </MyAccountBtns>

            <MyAccountBtns url="/referral-program/promotion" imgUrl="/icon-referral.png">Referral</MyAccountBtns>
          </div>
        </div>

        {/* Contact Us */}
        <div className="bg-[#303030] h-[113px] rounded-[8px] p-3">
          <MyAccountTitle>Contact Us</MyAccountTitle>

          <div className="w-full flex items-center justify-between p-2">
            <MyAccountBtns imgUrl="/icon-whatsapp.png">Whatsapp</MyAccountBtns>

            <MyAccountBtns imgUrl="/icon-email.png">Email</MyAccountBtns>

            <MyAccountBtns imgUrl="/icon-facebook-messenger.png">
              Facebook
            </MyAccountBtns>
          </div>
        </div>

        {/* Logout */}
        <div className="bg-[#303030] h-[40px] rounded-[8px] flex justify-center items-center">
          <button className="text-white flex items-center gap-1 text-sm">
            <RiLogoutBoxRLine className="text-lg mt-[3px]" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DBMyAccount;
