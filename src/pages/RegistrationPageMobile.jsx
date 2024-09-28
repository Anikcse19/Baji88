import { RiArrowLeftSLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const RegistrationPageMobile = () => {
  const navigate = useNavigate();
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
        <div className="bg-[#292929] flex justify-between  items-center px-3  rounded-sm">
          <div className="flex-grow flex items-center">
            <p className="text-gray-200 text-sm">Username</p>
            <input
              className="bg-[#292929] outline-none px-6 py-4 text-gray-500 text-sm"
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
          <p className="text-gray-200 text-sm  w-12">Password</p>
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
          <p className="text-gray-200 text-sm  w-12">Confirm Password</p>
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
          <p className="text-gray-200 text-sm  w-12">Currency</p>
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

        <div className="bg-[#292929] flex items-center justify-between gap-x-5 px-3 rounded-sm mt-3">
          <div className="flex items-center gap-0.5">
            {" "}
            <p className="text-gray-200 text-sm inline">Fullname</p>
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
            <FaEyeSlash className="text-white text-xl" />
          </div>
        </div>
        {/* forgot pass */}
        <div className="my-3 flex justify-end">
          <p className="p-1 border border-teal-600 text-teal-600 rounded-sm">
            Forgot Password?
          </p>
        </div>
        {/* login button */}
        <div className="bg-teal-500 py-3 rounded flex items-center justify-center">
          <p className="text-white">Login</p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPageMobile;
