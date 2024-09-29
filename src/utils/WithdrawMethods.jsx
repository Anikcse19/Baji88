/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";

const WithdrawMethods = ({ setDepositeChannel }) => {
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
      name: "UPay",
      method: "upay",
      depositeChannel: "CashOut",
      icon: "/upay.png",
      promotion: "1.5",
    },
  ];

  return (
    <div className="mt-2">
      {/* List Of Payment Methods */}
      <div className="grid grid-cols-3 gap-2.5">
        {paymentMethods.map((item, idx) => {
          return (
            <button
              key={idx}
              className={`border  rounded-md flex flex-col justify-center items-center p-2 gap-1 relative ${
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
    </div>
  );
};

export default WithdrawMethods;
