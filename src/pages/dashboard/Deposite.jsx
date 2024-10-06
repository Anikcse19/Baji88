import { IoIosArrowUp } from "react-icons/io";
import MemberCenter from "../MemberCenter";
import { WiTime3 } from "react-icons/wi";
import { FaCircle } from "react-icons/fa";
import PaymentMethods from "../../utils/PaymentMethods";
import { Link } from "react-router-dom";

const Deposite = () => {
  return (
    <MemberCenter>
      <div className="w-full flex gap-2">
        {/* ========= LEFT CONTENT ============= */}
        <div className="w-[80%] bg-[#313131] rounded-md p-5">
          {/* Funds */}
          <div className="flex items-center justify-between border-b border-dashed border-[#26ffbc] pb-4">
            <div className="flex items-center gap-2 ">
              <div className="bg-[#26ffbc] rounded-full w-[4px] h-[20px]"></div>
              <h1 className="text-[#26ffbc] text-lg">Funds</h1>
            </div>

            <div>
              <Link to="/member-center/deposite">
                <button
                  className="px-12 py-1.5 rounded-md text-white font-semibold"
                  style={{
                    background:
                      "linear-gradient(to right,#e4c400 0,#f7a204 100%)",
                  }}
                >
                  Deposite
                </button>
              </Link>

              <Link to="/member-center/withdraw">
                <button className="text-white px-10 bg-[#4e4e4e] font-semibold">
                  Withdraw
                </button>
              </Link>
            </div>
          </div>

          {/* Promotions */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="text-white text-sm font-medium">Promotions</p>
              <button
                className="flex items-center gap-1 px-5 py-1 rounded-md text-white text-sm"
                style={{
                  background:
                    "linear-gradient(to right,#e4c400 0,#f7a204 100%)",
                }}
              >
                Promotion <IoIosArrowUp />
              </button>
            </div>

            <div className="flex justify-center mt-4 h-[140px] p- bg-primary rounded-md relative">
              <div className="w-1/2 border-r border-dashed p-2 pr-4 border-black">
                <img
                  src="/image_21623.jpg"
                  alt=""
                  className="rounded-md object-cover"
                />
              </div>

              <div className="absolute h-[110%] mt-[-8px] flex flex-col justify-between text-xl text-[#313131]">
                <FaCircle />
                <FaCircle />
              </div>

              <div className="w-1/2 text-white flex flex-col gap-1 p-2 pl-4">
                <p className="text-xs border w-max px-1 py-[2px]">Promotion</p>
                <h2 className="text-lg font-semibold">
                  এক্সট্রা ১.৫% ডিপোজিট বোনাস
                </h2>
                <p className="text-sm">ডেইলি অফার</p>
                <p className="text-xs text-gray-400 flex items-center">
                  <WiTime3 />
                  2024/09/01 00:00:00 to 2024/12/31 23:59:59 end
                </p>

                <div className="flex justify-end mt-2">
                  <button className="text-xs text-white hover:text-yellow underline">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <PaymentMethods />
        </div>
        {/* ======== LEFT CONTENT END ========= */}

        {/* =========== RIGHT CONTENT =============== */}
        <div className="w-[20%] h-max pb-20 bg-[#313131] rounded-md p-4">
          <p className="text-sm text-[#7293e1]">Deposite Records</p>
          <div className="flex flex-col items-center justify-center mt-5">
            <img
              src="https://www.baji.live/images/web/player/table/no-value.svg"
              alt=""
              className="w-[50%]"
            />
            <p className="text-xs text-gray-500 mt-2">No Data</p>
          </div>
        </div>
        {/* ========= RIGHT CONTENT END ============= */}
      </div>
    </MemberCenter>
  );
};

export default Deposite;
