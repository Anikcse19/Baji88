import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";

const WithdrawAmountList = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);

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
  const handleAmount = (value) => {
    setSelectedAmount(value);
  };
  return (
    <div className="bg-[#333] p-4 mt-2">
        
      {/* Sectiopn Title */}
      <div
        className={` border-b pb-2 border-gray-600 flex items-center justify-between text-xs text-gray-500`}
      >
        <div className="flex items-center gap-2">
          <div className="h-[20px] w-[3px] bg-[#14805e] rounded-md" />
          <h3 className="text-[15px] text-white">Amount</h3>
        </div>

        <p className="flex items-center gap-1">
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
      <div className="grid grid-cols-4 gap-2 mt-3">
        {amounts.map((item, idx) => {
          return (
            <button
              onClick={() => handleAmount(item.value)}
              key={idx}
              className={`border  rounded-sm  w-full py-2.5 flex justify-center ${
                selectedAmount === item.value
                  ? "border-[#ffdf1a] text-[#ffdf1a]"
                  : "border-gray-600 text-white"
              }`}
            >
              <p className="text-xs font-medium">+ {item.amount}</p>
            </button>
          );
        })}
      </div>

      {/* Selected Amount */}
      <div className="flex items-center justify-between mt-4 text-[#14805e] border-b border-gray-600 pb-1">
        <p>
          <TbCurrencyTaka />
        </p>
        <p>{selectedAmount !== 0 ? selectedAmount : "0.00"}</p>
      </div>

      {/* Notice */}
      <div className="bg-[#06281d] border border-[#14805e] p-2 flex gap-2 text-white rounded-md overflow-hidden mt-3">
        <div className="mt-1">
          <RiErrorWarningFill />
        </div>

        <div className=" text-xs">
          <p>Reminder:</p>
          <p>
            1. Please double check the recipient&apos;s account details before
            proceeding.
          </p>
          <p>
            2. DO NOT share your account with any one to avoid losing fund or
            money.
          </p>
          <p>
            3. Please make sure your bank account holder name and Baji
            registered name should match to prevent from withdrawal rejection.
          </p>
        </div>
      </div>


    </div>
  );
};

export default WithdrawAmountList;
