import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ArrowAnimation from "../../utils/ArrowAnimation";
import { Link } from "react-router-dom";

const VipPointsExchange = () => {
  return (
    <div
      className="text-white VipPointsExchange min-h-screen"
      style={{
        background: "linear-gradient(245deg, #244b3a, #193226 25% 100%)",
      }}
    >
      {/* Top Nav */}
      <div className="h-[60px] flex items-center justify-between text-white px-2">
        <Link to="/profile">
          <button>
            <IoIosArrowBack className="text-[32px]" />
          </button>
        </Link>

        <p className="text-[22px]">My VIP</p>
        <div></div>
      </div>

      {/* VIP Level */}
      <div
        className="h-[129px] rounded-xl mt-2 mx-4 flex flex-col justify-between items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg,#32473ab3,#153329b3,#1c5650b3 80%,#1f6340b3)",
          boxShadow: "inset 0 0 1.3333333333vw -.8vw #fff",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="w-full px-5 pt-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/elite I - V.png"
              alt=""
              className="w-[45px] h-[45px] object-cover"
            />
            <div>
              <p className="text-xs font-bold">VIP LEVEL</p>
              <p className="text-lg font-bold">ELITE ll</p>
            </div>
          </div>

          <Link
            to="/vip-history"
            className="px-5 py-3 rounded-full"
            style={{ background: "linear-gradient(180deg,#f8e67d 0,#aa710e)" }}
          >
            <img src="/icon-history.svg" alt="" className="" />
          </Link>
        </div>

        <div className="bg-[#ffffff1a] w-full py-2 rounded-b-md px-3 flex justify-end">
          <button className="flex gap-2 items-center">
            View Vip Details
            <MdKeyboardDoubleArrowRight className="text-xl mt-1" />
          </button>
        </div>
      </div>

      {/* Total Points */}
      <div className="mx-4 mt-5">
        <p className="text-sm text-[#ffffff80]">Total VIP</p>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-end gap-3">
            <h1 className="text-[38px] leading-none">1166.6</h1>
            <span className="bg-black px-2.5 rounded-full bg-opacity-30 text-[#ffffff80]">
              VP
            </span>
          </div>

          <div
            className="px-5 py-3 rounded-full w-max"
            style={{ background: "linear-gradient(180deg,#f8e67d 0,#aa710e)" }}
          >
            <img src="/icon-points.svg" alt="" className="" />
          </div>
        </div>
      </div>

      {/* Convert VP */}
      <div className="mx-4 mt-5 ">
        <div className="flex items-center gap-2">
          <div className="h-[20px] w-[3px] bg-yellow rounded-md "></div>
          <p className="text-gray-300">Convert VP</p>
        </div>

        <div
          className="rounded-xl p-5 mt-3 h-[230px] flex gap-3"
          style={{
            background: "linear-gradient(180deg,#2b2e2d80,#20b48d80)",
            boxShadow: "inset 0 0 5px -3px #fff",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="w-[25%] flex flex-col justify-between items-center h-full">
            <div>
              <video
                src="https://img.b112j.com/bj/h5/assets/images/vip/coin-rotate-silver-alpha.webm?v=1727770742398"
                autoPlay
                loop
                muted
              ></video>
            </div>

            <div>
              {/* <BsArrowDown /> */}
              <ArrowAnimation />
            </div>
            <div>
              <video
                src="https://img.b112j.com/bj/h5/assets/images/vip/bdt/coin-rotate-gold.webm?v=1727770742398"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>

          <div className="w-[75%] flex flex-col justify-between items-center  h-full">
            <div className="w-full">
              <label className="text-sm flex justify-between">
                <span>VP</span> <span>Minimum VP Required: 4000</span>
              </label>
              <input
                type="text"
                placeholder="0"
                className="mt-2 bg-black bg-opacity-50 w-full text-xl px-2 rounded-md py-2.5 focus:outline-none"
              />
            </div>

            <div className="flex justify-start w-full text-sm">
              <p>VP Conversion Ratio: 220</p>
            </div>

            <div className="w-full">
              <label className="text-sm flex justify-between">Real Money</label>
              <input
                type="text"
                placeholder="0"
                className="mt-2 bg-black bg-opacity-50 w-full text-xl px-2 rounded-md py-2.5 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 w-full px-4">
        <button
          className="bg-white bg-opacity-20 w-full py-4 bg-cover bg-no-repeat rounded-md font-medium text-white"
          style={{ backgroundImage: "url(/convert-button-dfbg.png)" }}
        >
          Convert To Real Money
        </button>
      </div>
    </div>
  );
};

export default VipPointsExchange;
