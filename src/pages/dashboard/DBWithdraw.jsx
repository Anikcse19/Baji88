import { IoIosCheckmarkCircle } from "react-icons/io";
import MyAccountTitle from "../../utils/MyAccountTitle";
import WithdrawAmountList from "../../utils/WithdrawAmountList";
import WithdrawMethods from "../../utils/WithdrawMethods";
import DepositeWithdrawCont from "./DepositeWithdrawCont";
import { HiOutlineRefresh } from "react-icons/hi";

const DBWithdraw = () => {
  return (
    <DepositeWithdrawCont>
      {/* Wallet */}
      <div className="border-t border-gray-500">
        <div className="bg-[#14805e] px-4 pb-5">
          <div className="flex items-center gap-2 text-white pt-1">
            <p className="text-sm ">Mani Wallet</p>
            <HiOutlineRefresh />
          </div>

          <div className="w-ma flex justify-end">
            <h1 className="text-5xl font-semibold text-white">0.91</h1>
          </div>
        </div>
      </div>

      {/* Withdraw Methods */}
      <div className="bg-[#333] p-4 mt-2">
        <MyAccountTitle className="font-medium">Payment Methods</MyAccountTitle>
        <WithdrawMethods />
      </div>

      {/* Withdraw Amount List */}
      <WithdrawAmountList />

      {/* Withdraw Methods */}
      <div className="bg-[#333] px-4 py-5 mt-2">
        <MyAccountTitle className="font-medium">Payment Methods</MyAccountTitle>

        <div className="flex flex-col gap-2">
          <button className="w-full py-2.5 flex items-center px-5 rounded-md text-xl font-medium text-white gap-2 bg-gradient-to-r from-[#14805e] to-[#05ae79]">
            <IoIosCheckmarkCircle className="text-green-400" />
            <p>01642571383</p>
          </button>

          <button className="w-full py-2.5 flex items-center px-5 rounded-md text-xl font-medium text-white gap-2 bg-gradient-to-r from-gray-500 to-gray-600">
            <IoIosCheckmarkCircle />
            <p>01642571383</p>
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <div className="px-4 mt-3 mb-12">
        <button className="bg-[#14805e] text-white font-medium w-full py-2.5 rounded-md">
          Submit
        </button>
      </div>
    </DepositeWithdrawCont>
  );
};

export default DBWithdraw;
