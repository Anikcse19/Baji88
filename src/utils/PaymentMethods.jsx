/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { MdOutlineThumbUpOffAlt } from "react-icons/md";
import AmountList from "./AmountList";

const PaymentMethods = ({ setDepositeChannel }) => {
  const [active, setActive] = useState("bkash");

  const handleActive = (value) => {
    setActive(value);
  };

  const paymentMethods = [
    {
      name: "bKash",
      method: "bkash",
      depositeChannel: "CashOut",
      icon: "/bkash.png",
      promotion: "",
    },
    {
      name: "Rocket",
      method: "rocket",
      depositeChannel: "CashOut",
      icon: "/rocket.png",
      promotion: "1.5",
    },
    {
      name: "Nagad",
      method: "nogod",
      depositeChannel: "CashOut",
      icon: "/nagad.png",
      promotion: "",
    },
    {
      name: "OKWallet",
      method: "okwallet",
      depositeChannel: "CashOut",
      icon: "/okwallet.png",
      promotion: "1.5",
    },
    {
      name: "SureCash",
      method: "surecash",
      depositeChannel: "CashOut",
      icon: "/surecash.png",
      promotion: "1.5",
    },
    {
      name: "UPay",
      method: "upay",
      depositeChannel: "CashOut",
      icon: "/upay.png",
      promotion: "1.5",
    },
    {
      name: "TAP",
      method: "tap",
      depositeChannel: "CashOut",
      icon: "/tap.png",
      promotion: "1.5",
    },
    {
      name: "USDT TRC20",
      method: "trc20",
      depositeChannel: "USDT",
      icon: "/icon trc.PNG",
      promotion: "1.5",
    },
    {
      name: "BTC",
      method: "btc",
      depositeChannel: "BTC",
      icon: "/Bitcoin.svg.png",
      promotion: "1.5",
    },
    {
      name: "ETH",
      method: "eth",
      depositeChannel: "ETH",
      icon: "/ethereum-eth-logo.png",
      promotion: "1.5",
    },
    {
      name: "Local Bank",
      method: "bank",
      depositeChannel: "n/a",
      icon: "/bank-card.png",
      promotion: "1.5",
    },
  ];

  return (
    <div className="mt-2">
      <p className="text-white text-sm font-semibold mt-5 mb-2 hidden md:block">
        Payment Method
      </p>
      {/* List Of Payment Methods */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2.5">
        {paymentMethods.map((item, idx) => {
          return (
            <button
              key={idx}
              className={`border rounded-md flex flex-col justify-center items-center p-2 gap-1 relative md:overflow-hidden ${
                active === item.method ? "border-[#ffdf1a]" : "border-gray-600"
              }`}
              onClick={() => {
                handleActive(item.method),
                  setDepositeChannel(item.depositeChannel);
              }}
            >
              <img src={item.icon} alt="" className="w-[25px] h-[25px]" />
              <p
                className={`text-xs  ${
                  active === item.method ? "text-[#ffdf1a]" : "text-white"
                }`}
              >
                {item.name}
              </p>

              {/* Promotion Sticker */}
              {item.promotion && (
                <div
                  className="absolute -right-1 md:right-0 top-1 bg-cover bg-center w-[48px] md:w-[52px] h-[22px] md:h-[24px] bg-no-repeat flex justify-end items-center rounded-sm"
                  style={{ backgroundImage: "url(/bookmark.png)" }}
                >
                  <p className="text-white text-xs font-semibold">+1.5%</p>
                </div>
              )}

              {/* Mark Sticker */}
              {active === item.method && (
                <div className="w-[15px] h-[15px] bg-[#ffdf1a] absolute right-0 bottom-0 rounded-tl-[20px] rounded-[10px">
                  <IoIosCheckmark className="text-lg" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="bg-[#ffdf1a] w-max px-10 py-2 mt-4 rounded-md text-sm font-medium md:hidden">
        <p>
          <span className="capitalize">{active}</span> Payment
        </p>
      </div>

      <div className=" mt-6  hidden md:block">
        {/* Payment Type */}
        <p className="text-white text-sm font-semibold">Payment Type</p>
        <div className="mt-2 border-b border-primary ">
          <button className="bg-primary px-5 py-1 rounded-t-md uppercase text-white">
            {active}
          </button>
        </div>

        {/* Deposite Channel */}
        <div className="bg-black bg-opacity-30 py-5 px-2">
          <div>
            <p className="text-sm text-[#7293e1]">Deposite Channel</p>
            <div className="mt-4 text-sm font-medium flex items-center gap-4">
              <button className=" border border-yellow text-yellow rounded-[4px] w-[120px] py-2 relative">
                <span className="bg-[#77b167] rounded-r top-1 -left-1 absolute px-1 py-[2px] text-white">
                  <MdOutlineThumbUpOffAlt />
                </span>
                Cash Out
              </button>
              <button className="border border-gray-500 rounded-[4px] w-[120px] py-2 text-gray-500 relative">
                <span className="bg-[#77b167] rounded-r top-1 -left-1 absolute px-1 py-[2px] text-white">
                  <MdOutlineThumbUpOffAlt />
                </span>
                Send Money
              </button>
            </div>
          </div>
        </div>

        <AmountList />
      </div>
    </div>
  );
};

export default PaymentMethods;
