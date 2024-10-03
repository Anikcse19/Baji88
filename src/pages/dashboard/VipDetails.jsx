import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import MobileFooterSection from "../../components/MobileFooterSection";
import { IoIosArrowBack } from "react-icons/io";
import { BsChatLeftText } from "react-icons/bs";

const VipDetails = () => {
  const vipLevels = [
    "/elite_name.png",
    "/pro_name.png",
    "/expert_name.png",
    "/master_name.png",
    "/gm_name.png",
    "/legend_name.png",
    "/mythic_name.png",
  ];

  const ranks = [
    {
      rank: "Elite I-V",
      rankIcon: "/rank0.png",
      vp: "/vp.png",
      vpPoint: "80,000",
      color: "text-[#c99b6a]",
    },
    {
      rank: "Pro I-III",
      rankIcon: "/pro_name.png",
      vp: "/vp.png",
      vpPoint: "4,00,000",
      color: "text-[#b0aece]",
    },
    {
      rank: "Expert I-III",
      rankIcon: "/expert_name.png",
      vp: "/vp.png",
      vpPoint: "24,00,000",
      color: "text-[#fdc22a]",
    },
    {
      rank: "Master I-II",
      rankIcon: "/master_name.png",
      vp: "/vp.png",
      vpPoint: "2,40,00,000",
      color: "text-[#9089f0]",
    },
    {
      rank: "Grandmaster",
      rankIcon: "/gm_name.png",
      vp: "",
      vpPoint: "*By Invitation Only",
      color: "text-[#09a0f5}",
    },
    {
      rank: "Legend",
      rankIcon: "/legend_name.png",
      vp: "",
      vpPoint: "*By Invitation Only",
      color: "text-[#ea1d3f]",
    },
    {
      rank: "Mythic",
      rankIcon: "/mythic_name.png",
      vp: "",
      vpPoint: "*By Invitation Only",
      color: "text-[#c03563]",
    },
  ];

  const tHead = [
    "/rank0.png",
    "/pro_name.png",
    "/expert_name.png",
    "/master_name.png",
    "/gm_name.png",
    "/legend_name.png",
    "/mythic_name.png",
  ];

  const vipPointCash = [
    {
      rank: "Elite",
      rankIcon: "/rank0.png",
      vp: "/vp.png",
      vpPoint: "80,000",
      color: "text-[#c99b6a]",
    },
    {
      rank: "Pro",
      rankIcon: "/pro_name.png",
      vp: "/vp.png",
      vpPoint: "4,00,000",
      color: "text-[#b0aece]",
    },
    {
      rank: "Expert",
      rankIcon: "/expert_name.png",
      vp: "/vp.png",
      vpPoint: "24,00,000",
      color: "text-[#fdc22a]",
    },
    {
      rank: "Master",
      rankIcon: "/master_name.png",
      vp: "/vp.png",
      vpPoint: "2,40,00,000",
      color: "text-[#9089f0]",
    },
    {
      rank: "Grandmaster",
      rankIcon: "/gm_name.png",
      vp: "",
      vpPoint: "*By Invitation Only",
      color: "text-[#09a0f5}",
    },
    {
      rank: "Legend",
      rankIcon: "/legend_name.png",
      vp: "",
      vpPoint: "*By Invitation Only",
      color: "text-[#ea1d3f]",
    },
    {
      rank: "Mythic",
      rankIcon: "/mythic_name.png",
      vp: "",
      vpPoint: "*By Invitation Only",
      color: "text-[#c03563]",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-between bg-[#14805e] text-white py-2 px-3">
        <Link to="/vip-points-exchange">
          <IoIosArrowBack className="text-[26px]" />
        </Link>
        <p className="font-medium">My VIP</p>

        <button className="flex flex-col justify-center items-center">
          <BsChatLeftText className="w-4 h-4" />
          <span className="text-sm">Help</span>
        </button>
      </div>

      {/* Label Icons */}
      <div
        className="h-[257px] bg-cover flex
         flex-col justify-end items-center"
        style={{ backgroundImage: "url(/bg_mobile.jpg)" }}
      >
        <div className="flex flex-wrap justify-center items-end gap-1 w-[80%]">
          {vipLevels.map((item, idx) => (
            <div key={idx} className="w-[50px] h-[50px]">
              <img src={item} alt="" className="" />
            </div>
          ))}
        </div>
      </div>

      {/* Why Baji Vip Club */}
      <div className="mt-8 px-4">
        <div className="text-white text-xs text-center flex flex-col gap-2">
          <h1 className="text-[20px] font-bold gradient-text uppercase">
            Why Baji Vip Club?
          </h1>
          <p>
            The Baji VIP Club enriches your betting experience with a priority
            payment lane and 24/7 personalised VIP manager exclusive to Baji VIP
            only.
          </p>
          <p>
            Join the Baji VIP Club today to unlock all levels of excitement with
            big prizes and cash!
          </p>
        </div>

        <div className="mt-8 text-white text-xs text-center flex flex-col gap-2">
          <h1 className="text-[20px] font-bold gradient-text uppercase">
            VIP LEVELLING
          </h1>
          <p>
            Your accumulated VIP Experiences (VE) determine your VIP level and
            the requirements as below:
          </p>
        </div>
      </div>

      {/* VIP Levelling */}
      <div className="px-4 mt-5">
        <div
          className="p-1 rounded-lg overflow-x-auto"
          style={{
            background:
              "linear-gradient(180deg, rgba(163,128,59,1) 0%, rgba(254,217,128,1) 100%)",
          }}
        >
          <table className="w-full table-auto text-left text-white">
            <thead
              className="bg-[#c2aa6b text-sm font-[400] rounded-md"
              style={{
                background:
                  "linear-gradient(180deg, rgba(163,128,59,1) 0%, rgba(254,217,128,1) 100%)",
              }}
            >
              <tr className="text-[#4a3d1b]">
                <th className="py-4 px-3">Baji VIP Level</th>
                <th className="py-4 px-2">Accumulated VIP Experiences</th>
              </tr>
            </thead>
            <tbody className=" text-white text-[11px] text-center">
              {ranks.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-3 py-1 bg-[#141414]">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={item.rankIcon}
                        className="w-[25px] h-[25px]"
                        alt=""
                      />
                      <span className={`${item.color} text-sm font-bold`}>
                        {item.rank}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-1 bg-[#0B0B0B]">
                    <div className="flex items-center justify-center gap-1">
                      {item.vp && (
                        <img
                          src={item.vp}
                          className="w-[18px] h-[18px]"
                          alt=""
                        />
                      )}
                      <span
                        className={`${
                          item.vpPoint === "*By Invitation Only" && "italic"
                        } font-bold text-sm text-[#f8d072]`}
                      >
                        {item.vpPoint}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link
            to=""
            className="text-[#fed980] uppercase font-medium underline"
          >
            HOW TO EARN VIP EXPERIENCES (VE)
          </Link>
        </div>
      </div>

      {/* Reward and Benifits */}
      <div className="mt-20 mx-4">
        <div className="flex flex-col justify-center items-center mt-5">
          <h1 className="text-[#fed980] uppercase font-medium text-xl">
            Your Reward and Benifits
          </h1>
          <p className="text-xs text-white">
            Exceptional rewards that get better with each level up!
          </p>
        </div>

        {/* Table */}
        <div
          className="p-[3px] rounded-lg overflow-x-auto mt-3"
          style={{
            background:
              "linear-gradient(180deg, rgba(163,128,59,1) 0%, rgba(254,217,128,1) 100%)",
          }}
        >
          <table className="w-full table-auto text-left text-white bg-black">
            <thead className="bg-[#c2aa6b text-sm font-[400] rounded-md flex">
              <tr>
                <th className="py-4 px-5 text-white">Level</th>
                {tHead.map((item, idx) => (
                  <th key={idx} className="py-4 px-1.5">
                    <img src={item} alt="" className="w-[25px] h-[25px]" />
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className=" text-white text-[11px] text-center flex flex-col gap-2">
              {[...Array(9)].map((item, idx) => (
                <tr
                  key={idx}
                  className="bg-white bg-opacity-5 rounded-md flex justify-center items-center gap-[1px]"
                >
                  <td className="text-xs">VIP Points To Cash</td>

                  {[...Array(7)].map((itm, i) => (
                    <td
                      key={i}
                      className="p-3 bg-white bg-opacity-5 rounded-md"
                    >
                      <FaCheck />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center mt-4">
          <Link
            to=""
            className="text-[#fed980] uppercase text-sm font-medium underline"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Reedem Your VIP Pints */}
      <div className="px-4 my-20">
        <div className="flex items-center justify-end gap-4 text-sm">
          <div className="flex items-center gap-2">
            <img src="/vp.png" alt="" className="w-[18px] h-[18px]" />
            <p className="text-white">VIP Points</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/coin.png" alt="" className="w-[18px] h-[18px]" />
            <p className="text-white">BDT Cash</p>
          </div>
        </div>

        {/* TAble Start */}
        <div
          className="p-1 mt-3 rounded-lg overflow-x-auto"
          style={{
            background:
              "linear-gradient(180deg, rgba(163,128,59,1) 0%, rgba(254,217,128,1) 100%)",
          }}
        >
          <div
            className="text-center py-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(163,128,59,1) 0%, rgba(254,217,128,1) 100%)",
            }}
          >
            <p className="font-semibold text-sm">
              Redeem your VIP Points (VP) for cash with no limitation!
            </p>
          </div>
          <table className="w-full table-auto text-left text-white ">
            <thead className="bg-[#c2aa6b text-sm font-[400] rounded-md text-center bg-black">
              <tr>
                <th className="py-4 px-3">Level</th>
                <th className="py-4 px-2">VIP points to Cash</th>
              </tr>
            </thead>

            <tbody className=" text-white">
              {vipPointCash.map((item, idx) => (
                <tr key={idx} className="">
                  <td className="px-3 py-1 bg-[#141414]">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={item.rankIcon}
                        className="w-[25px] h-[25px]"
                        alt=""
                      />
                      <span className={`${item.color} text-sm font-bold`}>
                        {item.rank}
                      </span>
                    </div>
                  </td>

                  <td className="px-3 py-2 bg-[#0B0B0B]">
                    <div className="flex items-center justify-center gap-1">
                      <div className="flex items-center justify-center gap-1">
                        <img
                          src="/vp.png"
                          className="w-[18px] h-[18px]"
                          alt=""
                        />
                        <span className="text-sm">220</span>
                      </div>

                      <MdPlayArrow className="text-base text-slate-600" />

                      <div className="flex items-center justify-center gap-1">
                        <img
                          src="/public/coin.png"
                          className="w-[18px] h-[18px]"
                          alt=""
                        />
                        <span className="text-sm text-yellow">1</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link
            to=""
            className="text-[#fed980] uppercase text-sm font-medium underline"
          >
            HOW TO EARN VIP EXPERIENCES (VP)
          </Link>
        </div>
      </div>

      <MobileFooterSection />
    </div>
  );
};

export default VipDetails;
