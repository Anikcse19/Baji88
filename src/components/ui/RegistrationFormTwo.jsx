import { useEffect, useState } from "react";
import useStore from "../../Zustand/store/useStore";
import { FiRefreshCw } from "react-icons/fi";
import { HiArrowSmLeft } from "react-icons/hi";
import { TiTick } from "react-icons/ti";

const RegistrationFormTwo = () => {
  const { setCurrentRegistrationStep } = useStore();
  const [code, setCode] = useState(null);
  const generatedNumbers = new Set();

  function generateUnique4DigitNumber() {
    console.log("click");

    let uniqueNumber;

    // Keep generating until a unique 4-digit number is found
    do {
      uniqueNumber = Math.floor(1000 + Math.random() * 9000); // Generates a random number between 1000 and 9999
    } while (generatedNumbers.has(uniqueNumber));

    // Add the unique number to the set to track it
    generatedNumbers.add(uniqueNumber);

    setCode(uniqueNumber);
  }
  // generateUnique4DigitNumber();
  useEffect(() => {
    generateUnique4DigitNumber();
  }, []);
  return (
    <div className="flex flex-col gap-y-5">
      {/* Full Name */}
      <div className="flex flex-col gap-1">
        <p className="text-white">FullName</p>
        <input
          type="text"
          name=""
          id=""
          className="bg-[#454545] py-3 px-4 text-white outline-none focus:border-2 focus:border-green-400 rounded-sm"
          placeholder="Please Input Full Name"
        />
      </div>
      {/* number */}
      <div className="flex flex-col gap-1">
        <p className="text-white">Phone Number</p>
        <div className="w-full flex items-center gap-3">
          <div className="w-[35%] flex items-center gap-2 bg-[#454545] py-3 px-4 rounded-sm">
            <img
              className="w-6 h-6 object-cover"
              src="https://www.baji.live/images/web/flag/BD.png"
              alt=""
            />
            <p className="text-white">+880</p>
          </div>
          <div className="w-[65%]">
            <input
              type="text"
              name=""
              id=""
              className="bg-[#454545] py-3 px-6 text-white outline-none focus:border-2 focus:border-green-400 rounded-sm"
              placeholder="Please enter phone number"
            />
          </div>
          <div></div>
        </div>
      </div>
      {/* email */}
      <div className="flex flex-col gap-1">
        <p className="text-white">Email</p>
        <input
          type="email"
          name=""
          id=""
          className="bg-[#454545] py-3 px-4 text-white outline-none focus:border-2 focus:border-green-400 rounded-sm"
          placeholder="Enter your email"
        />
      </div>
      {/* verification code */}
      <div className="flex flex-col gap-1">
        <p className="text-white">Verification Code</p>
        <div className="w-full flex items-center gap-3">
          <div className="w-[50%] ">
            <input
              type="text"
              name=""
              id=""
              className="bg-[#454545] py-3 px-3 text-white outline-none focus:border-2 focus:border-green-400 rounded-sm"
              placeholder="Enter 4 digit code"
            />
          </div>
          <div className="w-[50%] flex items-center justify-between gap-2 bg-black py-3 px-3 rounded-sm">
            <p className="text-white font-bold text-2xl pl-4">{code}</p>
            <FiRefreshCw
              onClick={generateUnique4DigitNumber}
              className="text-white text-xl cursor-pointer hover:rotate-180"
            />
          </div>
          <div></div>
        </div>
      </div>

      <div className="flex gap-3">
        <input type="checkbox" name="" id="" className="w-4 h-4" />
        <p className="text-xs text-gray-200">
          {" "}
          I am 18 years old, and agree to terms and conditions.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex justify-end mt-3">
          <HiArrowSmLeft
            onClick={() => setCurrentRegistrationStep(1)}
            className="text-white font-bold text-4xl bg-green-700 rounded-full p-1 cursor-pointer"
          />
        </div>
        <div className="flex justify-end mt-3">
          <TiTick
            // onClick={() => setCurrentRegistrationStep(2)}
            className="text-white font-bold text-4xl bg-green-500 rounded-full p-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormTwo;
