import { IoHandRightSharp } from "react-icons/io5";

const ResponsibleGaming = () => {
  return (
    <div className="w-[50%] md:w-[14%] mt-10 md:mt-0">

      <p className="text-[13px] font-bold md:font-normal text-[#14805e] md:text-white">
      Responsible Gamming
      </p>

      <div className="flex items-center mt-3 gap-4 md:gap-7">
        <img
          src="/public/safe1.png"
          alt=""
          className="w-6 h-6 opacity-60 hover:opacity-100"
        />

        <span className="w-[25px] h-[25px] border-2 border-gray-500 text-gray-500 hover:text-white hover:border-red-600 rounded-full flex justify-center items-center text-[10px] font-bold">
          18+
        </span>

        <span className="w-[25px] h-[25px] border-2 border-gray-500 bg-white bg-opacity-10 hover:bg-opacity-100 hover:bg-red-600 hover:border-red-600 rounded-full flex justify-center items-center text-[10px] font-bold">
          <IoHandRightSharp className="text-[16px]" />
        </span>
      </div>
    </div>
  );
};

export default ResponsibleGaming;
