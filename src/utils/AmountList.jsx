import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";

const AmountList = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const amounts = [
    {
      amount: "2,000",
      value: 2000,
    },
    {
      amount: "3,000",
      value: 3000,
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
      amount: "15,000",
      value: 15000,
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
      amount: "1,000",
      value: 1000,
    },
    {
      amount: "500",
      value: 500,
    },
    {
      amount: "100",
      value: 100,
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
          <p>
            Dear all member, to speed up your deposit process, kindly follow
            these steps :
          </p>
          <p>1.verify the phone number you used for deposit.</p>
          <p>2. Input the correct reference number.</p>
          <p>3. Process only selected amount.</p>
          <p>4. Attach the successful Slip.</p>
          <p>Reminder:</p>
          <p>
            Do not save the phone number displayed on Baji website on your
            device to avoid losing money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmountList;
