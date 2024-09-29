/* eslint-disable react/prop-types */
import { IoIosCheckmark } from "react-icons/io";
import MyAccountTitle from "./MyAccountTitle";

const DepositeChannel = ({ depositeChannel }) => {
  return (
    <div className="bg-[#333] p-4 mt-2">
      <MyAccountTitle className="font-medium">Deposite Channel</MyAccountTitle>

      <div className="border-[#ffdf1a] border rounded-md text-[#ffdf1a] w-max mt-2 relative">
        <p className="text-xs px-6 py-2 font-medium">{depositeChannel}</p>

        <div className="w-[12px] h-[12px] bg-[#ffdf1a] text-black absolute right-0 bottom-0 rounded-tl-[20px] rounded-[10px">
          <IoIosCheckmark />
        </div>
      </div>
    </div>
  );
};

export default DepositeChannel;
