import { RiArrowLeftSLine } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* back button */}
      <div className="flex items-center bg-[#333333] px-3 py-3">
        <div onClick={() => navigate("/")}>
          <RiArrowLeftSLine className="text-2xl text-white" />
        </div>
        <div className="flex-grow flex justify-center items-center">
          <p className="text-white">Login</p>
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
          <p className="text-gray-200">Username</p>
          <input
            className="bg-[#292929] outline-none px-6 py-4 text-gray-500 text-sm"
            placeholder="Username"
            type="text"
            name=""
            id=""
          />
          <FaEyeSlash className="text-white text-xl invisible" />
        </div>
        {/* password */}
        <div className="bg-[#292929] flex items-center justify-between px-3 rounded-sm">
          <p className="text-gray-200">Password</p>
          <input
            className="bg-[#292929] outline-none px-6 py-4 text-gray-500 text-sm"
            placeholder="Password"
            type="text"
            name=""
            id=""
          />
          <FaEyeSlash className="text-white text-xl" />
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

export default Login;
