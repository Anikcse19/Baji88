import { FaRegCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const VipHistory = () => {
  return (
    <div
      className="text-white relative min-h-screen"
      style={{
        background: "linear-gradient(245deg, #244b3a, #193226 25% 100%)",
      }}
    >
      {/* Top Nav */}
      <div className="h-[60px] sticky flex w-full  top-0 items-center justify-between text-white px-2">
        <Link to="/profile">
          <button>
            <IoIosArrowBack className="text-[32px]" />
          </button>
        </Link>

        <p className="text-[22px]">My History</p>
        <div></div>
      </div>

      <div className="w-full px-4 flex mt-5">
        {/* Month Track Line */}
        <div className="w-[20%] flex flex-col items-center justify-center gap-2 mt-4">
          {[...Array(4)].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-end justify-center gap-2"
            >
              <div className="flex items-center gap-2">
                <p>Aug</p>
                <FaRegCircle className="text-yellow" />
              </div>
              <div className="w-[2px] h-[100px] mx-1.5 bg-yellow"></div>
            </div>
          ))}
        </div>

        {/* Vip Levels */}
        <div className="w-[80%] flex flex-col gap-5">
          {[...Array(4)].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4"
              style={{
                background:
                  "linear-gradient(120deg,#32473ab3,#153329b3,#1c5650b3 80%,#1f6340b3)",
                boxShadow: "inset 0 0 1.3333333333vw -.8vw #fff",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="w-full flex items-center justify-between">
                <div>
                  <p className="text-xs">VIP LEVEL</p>
                  <p className="text-lg font-bold">ELITE ll</p>
                </div>

                <img
                  src="/elite I - V.png"
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>

              <div className="mt-1 text-xs">
                <p>Experience Accuired</p>
                <p className="text-yellow text-sm">278.25</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VipHistory;
