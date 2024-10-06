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
    <div className="bg-[#333] md:bg-black md:bg-opacity-30 p-4 mt-2 md:mt-0">
      {/* Sectiopn Title */}
      <div
        className={` border-b pb-2 border-gray-600 flex items-center justify-between md:justify-start md:gap-10 text-xs text-gray-500`}
      >
        <div className="flex items-center gap-2">
          <div className="h-[20px] w-[3px] bg-[#14805e] rounded-md md:hidden" />
          <h3 className="text-[15px] text-white md:text-[#7293e1]">Amount</h3>
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
      <div className="grid grid-cols-4 gap-2 mt-3">
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

      {/* Selected Amount Small Device*/}
      <div className=" flex md:hidden items-center justify-between mt-4 text-[#14805e]  border-b border-gray-600 pb-1">
        <p>
          <TbCurrencyTaka />
        </p>
        <p>{selectedAmount !== 0 ? selectedAmount : "0.00"}</p>
      </div>

      {/* Notice */}
      <div className="bg-[#06281d] md:bg-[#7293e166] md:border-[#4571d8] border border-[#14805e] p-2 flex gap-2 text-white rounded-md overflow-hidden mt-3">
        <div className="mt-1">
          <RiErrorWarningFill />
        </div>

        <div className=" text-xs md:text-sm">
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

      {/* Selected Amount Large Device */}
      <div className="mt-8 hidden md:flex items-center gap-5">

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
          Deposit
        </button>
      </div>

      </div>
    </div>
  );
};

export default AmountList;
