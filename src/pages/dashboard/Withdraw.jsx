import { Link } from "react-router-dom";
import MemberCenter from "../MemberCenter";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { RiErrorWarningFill } from "react-icons/ri";

const Withdraw = () => {
  const [active, setActive] = useState("bkash");
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleAmount = (value) => {
    setSelectedAmount(value);
  };

  const handleActive = (value) => {
    setActive(value);
  };

  const amounts = [
    {
      amount: "100",
      value: 100,
    },

    {
      amount: "500",
      value: 500,
    },

    {
      amount: "1,000",
      value: 1000,
    },

    {
      amount: "5,000",
      value: 5000,
    },
    {
      amount: "10,000",
      value: 10000,
    },

    {
      amount: "20,000",
      value: 20000,
    },
    {
      amount: "25,000",
      value: 25000,
    },

    {
      amount: "30,00",
      value: 30000,
    },
    {
      amount: "40,000",
      value: 40000,
    },
    {
      amount: "50,000",
      value: 50000,
    },
  ];

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
  ];
  return (
    <MemberCenter>
      <div className="w-full flex gap-2">

        {/* ========= LEFT CONTENT ============= */}
        <div className="w-[80%] bg-[#313131] rounded-md p-5">
          {/* Funds */}
          <div className="flex items-center justify-between border-b border-dashed border-[#26ffbc] pb-4">
            <div className="flex items-center gap-2 ">
              <div className="bg-[#26ffbc] rounded-full w-[4px] h-[20px]"></div>
              <h1 className="text-[#26ffbc] text-lg">Funds</h1>
            </div>

            <div>
              <Link to="/member-center/deposite">
                <button className="text-white px-10 bg-[#4e4e4e] font-semibold">
                  Deposite
                </button>
              </Link>

              <Link to="/member-center/withdraw">
                <button
                  className="px-12 py-1.5 rounded-md text-white font-semibold"
                  style={{
                    background:
                      "linear-gradient(to right,#e4c400 0,#f7a204 100%)",
                  }}
                >
                  Withdraw
                </button>
              </Link>
            </div>
          </div>

          <p className="text-white text-sm font-semibold mt-5 mb-2 hidden md:block">
            Payment Method
          </p>
          {/* List Of Payment Methods */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2.5">
            {paymentMethods.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className={`border-2 rounded-md flex flex-col justify-center items-center p-2 gap-1 relative md:overflow-hidden ${
                    active === item.method
                      ? "border-[#ffdf1a]"
                      : "border-gray-600"
                  }`}
                  onClick={() => {
                    handleActive(item.method);
                    // setDepositeChannel(item.depositeChannel);
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

          <div className="mt-6">
            <p className="text-white text-sm">Please select phone number</p>

            <div className="mt-2 flex items-center gap-5">
              <button
                className="w-[218px] h-[46px] rounded-md text-white text-xl font-medium flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg,#f269b0 0,#5d1b90 100%)",
                }}
              >
                <span className="w-[25px] flex justify-center items-center h-[25px] rounded-full bg-green-500 text-white">
                  <FaCheck className="text-base" />
                </span>
                <span className="font-bebas">+880 1642571383</span>
              </button>
              <button
                className="w-[218px] h-[46px] rounded-md text-white text-xl font-medium flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg,#f269b0 0,#5d1b90 100%)",
                }}
              >
                <span className="w-[25px] flex justify-center items-center h-[25px] rounded-full bg-gray-100 bg-opacity-30 text-white">
                  <FaCheck className="text-base" />
                </span>
                <span className="font-bebas">+880 1642571383</span>
              </button>
            </div>
          </div>

          {/* Sectiopn Title */}
          <div
            className={`mt-10 border-b pb-2 border-gray-600 flex items-center justify-between md:justify-start md:gap-10 text-xs text-gray-500`}
          >
            <div className="flex items-center gap-2">
              <div className="h-[20px] w-[3px] bg-[#14805e] rounded-md md:hidden" />
              <h3 className="text-[15px] text-white md:text-[#7293e1]">
                Amount
              </h3>
            </div>

            <p className="flex items-center gap-1 md:text-[#f2dc9c]">
              <span className="flex items-center">
                <TbCurrencyTaka /> 500.00
              </span>

              <span>-</span>

              <span className="flex items-center">
                <TbCurrencyTaka /> 50,000.00
              </span>
            </p>
          </div>

          {/* Amount List */}
          <div className="grid grid-cols-5 gap-2 mt-3">
            {amounts.map((item, idx) => {
              return (
                <button
                  onClick={() => handleAmount(item.value)}
                  key={idx}
                  className={`border md:border-2 rounded-sm text-xs md:text-[18px]   font-medium md:font-bebas w-full py-2.5 md:py-3 flex justify-center items-center ${
                    selectedAmount === item.value
                      ? "border-[#ffdf1a] text-[#ffdf1a]"
                      : "border-[#ffffff80] text-white md:text-[#ffffff80]"
                  }`}
                >
                  <p className="">+ {item.amount}</p>
                </button>
              );
            })}
          </div>

          {/* Notice */}
          <div className="bg-[#06281d] md:bg-[#7293e166] md:border-[#4571d8] border border-[#14805e] p-2 flex gap-2 text-white rounded-md overflow-hidden mt-3">
            <div className="mt-1">
              <RiErrorWarningFill />
            </div>

            <div className=" text-xs md:text-sm">
              <p>Reminder:</p>
              <p>
                1. Please double check the recipient&apos;s account details
                before proceeding.
              </p>
              <p>
                2. DO NOT share your account with any one to avoid losing fund
                or money.
              </p>
              <p>
                3. Please make sure your bank account holder name and Baji
                registered name should match to prevent from withdrawal
                rejection.
              </p>
            </div>
          </div>

          {/* Selected Amount Large Device */}
          <div className="mt-10 hidden md:flex items-center gap-5">
            <div>
              <div className="flex justify-between px-2 text-yellow items-center w-[180px] h-[40px] border-2 border-[#ffffff80] rounded-md">
                <p>
                  <TbCurrencyTaka />
                </p>

                <p className="text-lg">
                  {selectedAmount !== 0 ? selectedAmount : "0.00"}
                </p>
              </div>
            </div>

            <div>
              <button
                className="px-10 h-[40px] text-white rounded-md"
                style={{
                  background:
                    "linear-gradient(to right,#fbc103 0,#f79604 15%,#f79604 30%,#fbc103 55%,#fbc103 100%)",
                }}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
        {/* ======== LEFT CONTENT END ========= */}



        {/* =========== RIGHT CONTENT =============== */}
        <div className="w-[20%] h-max pb-20 bg-[#313131] rounded-md p-4">
          <p className="text-sm text-[#7293e1]">Withdraw Records</p>
          <div className="flex flex-col items-center justify-center mt-5">
            <img
              src="https://www.baji.live/images/web/player/table/no-value.svg"
              alt=""
              className="w-[50%]"
            />
            <p className="text-xs text-gray-500 mt-2">No Data</p>
          </div>
        </div>
        {/* ========= RIGHT CONTENT END ============= */}

        
      </div>
    </MemberCenter>
  );
};

export default Withdraw;
