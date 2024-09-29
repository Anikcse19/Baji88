import { RiArrowLeftSLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { LuRefreshCw } from "react-icons/lu";
import { useEffect, useState } from "react";

const RegistrationPageMobile = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(null);
  const [rotate, setRotate] = useState(false);
  const generatedNumbers = new Set();

  function generateUnique4DigitNumber() {
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
    setTimeout(() => {
      generateUnique4DigitNumber();
    }, 10000);
  }, []);
  return (
    <div>
      {/* back button */}
      <div className="flex items-center bg-[#333333] px-3 py-3">
        <div onClick={() => navigate("/")}>
          <RiArrowLeftSLine className="text-2xl text-white" />
        </div>
        <div className="flex-grow flex justify-center items-center">
          <p className="text-white">Sign Up</p>
        </div>
      </div>
      {/* image */}
      <div>
        <img
          className="w-full h-[220px] object-cover"
          src="/homeBanner3.jpg"
          alt=""
        />
      </div>
      {/* login form */}
      <div className="mt-5 px-2">
        {/* username */}
        <div className="bg-[#292929] flex justify-between  items-center gap-x-10 px-3  rounded-sm">
          <p className="text-gray-200 text-sm w-20 ">Username</p>
          <div className="flex-grow flex items-center px-1">
            <input
              className="bg-[#292929] flex-grow outline-none  py-4 text-gray-500 text-sm"
              placeholder="Username"
              type="text"
              name=""
              id=""
            />
            <FaEyeSlash className="text-white text-xl invisible" />
          </div>
        </div>
        {/* password */}
        <div className="bg-[#292929] flex items-center justify-between gap-x-10 px-3 rounded-sm">
          <p className="text-gray-200 text-sm w-20">Password</p>
          <div className="flex-grow flex items-center">
            {" "}
            <input
              className="bg-[#292929] flex-grow outline-none  py-4 text-gray-500 text-sm"
              placeholder="6-20 char, allow number"
              type="password"
              name=""
              id=""
            />
            <FaEyeSlash className="text-white text-xl" />
          </div>
        </div>
        {/*confirm password */}
        <div className="bg-[#292929] flex items-center justify-between gap-x-10 px-3 rounded-sm">
          <p className="text-gray-200 text-sm w-20">Confirm Password</p>
          <div className="flex-grow flex items-center">
            {" "}
            <input
              className="bg-[#292929] flex-grow outline-none  py-4 text-gray-500 text-sm"
              placeholder="Confirm Password"
              type="text"
              name=""
              id=""
            />
            <FaEyeSlash className="text-white text-xl" />
          </div>
        </div>
        {/*currency */}
        <div className="bg-[#292929] flex items-center justify-between gap-x-10 px-3 rounded-sm">
          <p className="text-gray-200 text-sm w-20">Currency</p>
          <div className="flex-grow flex items-center">
            {" "}
            <select
              className="bg-[#292929] flex-grow outline-none  py-4 text-green-500 text-sm"
              name=""
              id=""
            >
              <option value="">BDT</option>
              <option value="">INR</option>
            </select>
          </div>
        </div>

        {/* 2nd section */}

        {/* fullname */}
        <div className="bg-[#292929] flex items-center justify-between gap-x-4 px-3 rounded-sm mt-3">
          <div className="flex items-center gap-0.5">
            {" "}
            <p className="text-gray-200 text-sm w-20 inline">Fullname</p>
            <CiCircleQuestion className="text-white mt-0.5 text-xl" />
          </div>
          <div className="flex-grow flex items-center">
            {" "}
            <input
              className="bg-[#292929] flex-grow outline-none  py-4 text-gray-500 text-sm"
              placeholder="Full Name"
              type="text"
              name=""
              id=""
            />
            <FaEyeSlash className="text-white text-xl invisible" />
          </div>
        </div>

        {/* phone Number */}
        <div className="bg-[#292929] flex items-center justify-between gap-x-10 px-3 rounded-sm">
          <p className="text-gray-200 text-sm w-20">Phone Number</p>
          <div className="flex-grow flex items-center justify-between">
            <p className="w-[40%] text-green-500">+88</p>
            <input
              className="bg-[#292929] w-[60%] outline-none  py-4 text-gray-500 text-sm"
              placeholder="Phone Number"
              type="number"
              name=""
              id=""
            />
          </div>
        </div>

        {/* email */}
        <div className="bg-[#292929] flex items-center justify-between gap-x-10 px-3 rounded-sm">
          <p className="text-gray-200 text-sm w-20">E-mail</p>
          <div className="flex-grow flex items-center">
            {" "}
            <input
              className="bg-[#292929] flex-grow outline-none  py-4 text-gray-500 text-sm"
              placeholder="E-mail"
              type="email"
              name=""
              id=""
            />
            <FaEyeSlash className="text-white text-xl invisible" />
          </div>
        </div>

        {/* refer code */}
        <div className="bg-[#292929] flex items-center justify-between gap-x-10 px-3 rounded-sm">
          <p className="text-gray-200 text-smw-20 ">Refer Code</p>
          <div className="flex-grow flex items-center ">
            {" "}
            <input
              className="bg-[#292929] flex-grow outline-none  py-4 text-gray-500 text-sm"
              placeholder="Enter If you have one"
              type="text"
              name=""
              id=""
            />
            <FaEyeSlash className="text-white text-xl invisible" />
          </div>
        </div>

        {/* verification code */}
        <div className="bg-[#292929] flex items-center justify-between gap-x-10 px-3 rounded-sm">
          <p className="text-gray-200 text-sm w-20">Verification Code</p>
          <div className="flex-grow flex items-center justify-between gap-2">
            <input
              className="bg-[#292929] w-[50%] text-xs outline-none  py-4 text-gray-500 sm:text-sm"
              placeholder="Enter 4 digit code"
              type="number"
              name=""
              id=""
            />
            <p className="w-[30%] bg-white text-center px-2 py-1 tracking-widest">
              {code}
            </p>
            <LuRefreshCw
              onClick={() => {
                setRotate(true);
                setTimeout(() => {
                  setRotate(false);
                }, 1000);
                generateUnique4DigitNumber();
              }}
              className={`w-[20%] text-white text-xl transition-all duration-500 ease-in ${
                rotate ? "rotate-[360deg]" : ""
              }`}
            />
          </div>
        </div>

        {/* login button */}
        <div
          onClick={() => navigate("/")}
          className="bg-teal-500 py-3 rounded flex items-center justify-center mt-3"
        >
          <p className="text-white">Confirm</p>
        </div>

        {/* forgot pass */}
        <div className="my-3 flex justify-center">
          <p className="text-sm text-white">
            I&#39;m 18 years old, and agree to &#34;terms and conditions&#34; .
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPageMobile;
