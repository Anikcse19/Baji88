import { useState } from "react";
import MyAccountTitle from "../../utils/MyAccountTitle";
import PaymentMethods from "../../utils/PaymentMethods";
import DepositeChannel from "../../utils/DepositeChannel";
import AmountList from "../../utils/AmountList";
import DepositeWithdrawCont from "./DepositeWithdrawCont";

const DBDeposite = () => {
  const [depositeChannel, setDepositeChannel] = useState("CashOut");

  return (
    <DepositeWithdrawCont>
    <div className="w-full h-full">
       {/* Select Promotions */}
       <div className="mt- bg-[#34af83] h-10 flex items-center justify-between text-white px-2">
          <div className="flex items-center gap-1">
            <span>
              <img
                src="/icon-selectpromotion.svg"
                alt=""
                className="w-[18px] h-[18px]"
              />
            </span>
            <p className="text-sm">Select Promotions</p>
          </div>
          <p className="text-xs">এক্সট্রা ১.৫% ডিপোজিট বোনাস</p>
        </div>

      {/* payment Methods */}
      <div className="bg-[#333] p-4 mt-2">
        <MyAccountTitle className="font-medium">Payment Methods</MyAccountTitle>
        <PaymentMethods setDepositeChannel={setDepositeChannel} />
      </div>

      {/* Deposite Channels */}
      <DepositeChannel depositeChannel={depositeChannel} />

      {/* Amount List */}
      <AmountList />

      <div className="px-4 mt-3 mb-12">
        <button className="bg-[#14805e] text-white font-medium w-full py-2.5 rounded-md">
          Submit
        </button>
      </div>
    </div>
    </DepositeWithdrawCont>
  );
};

export default DBDeposite;
