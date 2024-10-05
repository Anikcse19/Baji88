import { BiMobile } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";

const DBTopNav = () => {
  return (
    <div className="flex items-center justify-between py-3 px-5 bg-[#313131] rounded-md">
      <div>
        <p className="text-sm text-[#999]">Main Balance</p>
        <h2 className="text-[#76bd6a] font- font-bebas flex items-center gap-1">
          <TbCurrencyTaka />
          <span className="text-[25px] ">0.91</span>
        </h2>
      </div>

      <div className="text-sm border-l pl-2 border-gray-900">
        <p className=" text-[#999]">Securirty Level Safe</p>
        <p className="text-[#76bd6a]">Safe</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-[#76bd6a] w-6 h-6 flex justify-center items-center rounded-full text-gray-300">
          <IoMailSharp className="text-sm" />
        </div>

        <div className="bg-[#76bd6a] w-6 h-6 flex justify-center items-center rounded-full text-gray-300">
          <BiMobile className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default DBTopNav;
