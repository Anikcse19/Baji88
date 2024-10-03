import { FaRegCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const VipHistory = () => {
  const months = ["Aug", "Jul", "Jun", "Apr"];
  const labels = [
    {
      lavel: "ELITE ll",
      points: "278.25",
      icon: "/elite I - V.png",
    },
    {
      lavel: "ELITE ll",
      points: "10233.45",
      icon: "/elite I - V.png",
    },
    {
      lavel: "NORAML",
      points: "500",
      icon: "/normal.png",
    },
    {
      lavel: "NORMAL",
      points: "5319.5",
      icon: "/normal.png",
    },
  ];

  return (
    <div
      className="text-white relative min-h-screen"
      style={{
        background: "linear-gradient(245deg, #244b3a, #193226 25% 100%)",
      }}
    >
      {/* Top Nav */}
      <div className="h-[60px] sticky flex w-full  top-0 items-center justify-between text-white px-2">
        <Link to="/vip-points-exchange">
          <button>
            <IoIosArrowBack className="text-[32px]" />
          </button>
        </Link>

        <p className="text-[22px]">My History</p>
        <div></div>
      </div>

      <div className="px-4 text-lg font-semibold">
        <p>2024</p>
      </div>
      <div className="w-full px-4 flex mt-2">
        {/* Month Track Line */}
        <div className="w-[20%] flex flex-col items-center justify-center gap-2 mt-4">
          {months.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-end justify-center gap-2"
            >
              <div className="flex items-center gap-1.5 text-right">
                <p className="w-[30px]">{item}</p>
                <FaRegCircle className="text-yellow" />
              </div>
              <div className="w-[2px] h-[100px] mx-1.5 bg-yellow"></div>
            </div>
          ))}
        </div>

        {/* Vip Levels */}
        <div className="w-[80%] flex flex-col gap-5">
          {labels.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4"
              style={{
                background: "linear-gradient(180deg,#2b2e2d80,#20b48d80)",
                boxShadow: "inset 0 0 5px -3px #fff",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="w-full flex items-center justify-between">
                <div>
                  <p className="text-xs">VIP LEVEL</p>
                  <p className="text-lg font-bold">{item.lavel}</p>
                </div>

                <img src={item.icon} alt="" className="w-[50px] h-[50px]" />
              </div>

              <div className="mt-1 text-xs">
                <p>Experience Accuired</p>
                <p className="text-yellow text-sm">{item.points}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VipHistory;
