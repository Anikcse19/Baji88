import { useEffect, useState } from "react";
import CashRewarSlider from "../../components/Slider/CashRewarSlider";
import DBReferralProgram from "./DBReferralProgram";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import ReferralLeaderboard from "../../components/ReferralLeaderboard";
import RulesModal from "../../utils/RulesModal";

const DBPromotion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const content1Data = [
    { tier: "Tier 1", percentage: "0.15%" },
    { tier: "Tier 2", percentage: "0.16%" },
    { tier: "Tier 3", percentage: "0.17%" },
  ];

  const content2Data = [
    { tier: "Tier 1", percentage: "0.18%" },
    { tier: "Tier 2", percentage: "0.19%" },
    { tier: "Tier 3", percentage: "0.20%" },
  ];

  const datas = [content1Data, content2Data];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <DBReferralProgram>
      <div className="pb-10">
        {/* Refere Your Friend and earn */}
        <div
          className="h-[353px] bg-cover flex flex-col justify-cente pt-[10%] items-center"
          style={{
            backgroundImage: "url(/referral-program-banner.png)",
          }}
        >
          <img src="/logo.png" alt="" className="w-[80px]" />
          <h1 className="text-[34px] uppercase font-bold text-white">
            Refer Your Friends
          </h1>
          <h1 className="text-[34px] uppercase font-bold text-[#ffde1a]">
            And Earn
          </h1>
        </div>

        {/* How does our Referral Program work? */}
        <div className="border border-gray-500 mx-3 rounded-md bg-[#333] px-2 py-5 -mt-20">
          <div className="text-[18px] text-white font-bold text-center">
            How does our
            <br />
            Referral Program work?
          </div>

          <div className="text-sm text-[#b5b5b5] my-5">
            You can earn cash rewards up to three referral tiers when you refer
            your friends.
            <br />
            Invite your friends to join together and be entitled for lifetime
            cash rewards each time your friends place a bet.
          </div>

          {/* Rules Trigger Buttons */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="border w-full py-2 rounded-md border-gray-500 text-[#b5b5b5]"
          >
            Rules
          </button>
          {/* Rules Modal */}
          {open && <RulesModal setOpen={setOpen} />}

          <div className="mt-5">
            <CashRewarSlider setActiveIndex={setActiveIndex} />

            <div className="text-white flex flex-col gap-y-2 mt-5">
              {datas[activeIndex].map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-[#4c4c4c] rounded-md flex items-center justify-between text-base"
                >
                  <p className="text-white font-medium">{item.tier}</p>
                  <p className="text-[#ffde1a] font-semibold">
                    {item.percentage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to earn more rewar */}
        <div className=" border border-gray-500 mx-3 rounded-md bg-[#333] px-2 py-5 mt-2">
          <h2 className="text-xl text-center font-bold text-white">
            How to earn more rewards
          </h2>

          {/* Content-1 */}
          <div>
            <h1 className="text-8xl p-0 m-0 leading-none font-bold text-[#ffde1a]">
              1
            </h1>
            <div className="p-5 bg-white  bg-opacity-10 rounded-md relative">
              <p className="text-base font-bold text-[#ffde1a]">
                Send an invitation
              </p>
              <p className="text-xs text-white">
                To start your referral journey
              </p>

              <img
                src="/referral-program-flowch-1.png"
                alt=""
                className="h-[102px] absolute -top-10 right-0"
              />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -bottom-3 left-1/2" />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -top-4 left-0" />
            </div>
          </div>

          {/* Content-2 */}
          <div>
            <h1 className="text-8xl text-right leading-none font-bold text-[#ffde1a]">
              2
            </h1>
            <div className="p-5 bg-white bg-opacity-10 rounded-md relative text-right">
              <p className="text-base font-bold text-[#ffde1a]">
                Friend registration
              </p>
              <p className="text-xs text-white">with best placed</p>

              <img
                src="/referral-program-flowch-2.png"
                alt=""
                className="h-[102px] absolute -top-10 left-0"
              />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -bottom-3 left-1/2" />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -top-4 left-0" />
            </div>
          </div>

          {/* Content-3 */}
          <div>
            <h1 className="text-8xl p-0 m-0 leading-none font-bold text-[#ffde1a]">
              3
            </h1>
            <div className="p-5 bg-white  bg-opacity-10 rounded-md relative">
              <p className="text-base font-bold text-[#ffde1a]">
                Get rewarded daily, <br /> weekly, monthly
              </p>
              <p className="text-xs text-white">and enjoy with your friends</p>

              <img
                src="/referral-program-flowch-3.png"
                alt=""
                className="h-[102px] absolute -top-10 right-0"
              />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -bottom-3 left-1/2" />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -top-4 left-0" />
            </div>
          </div>

          <div className="w-full mt-5 bg-yellow flex justify-center items-center rounded-md">
            <Link
              to="/referral-program/details"
              className=" py-3 font-semibold"
            >
              Refer a friend now
            </Link>
          </div>
        </div>

        {/* Referral Leaderboard */}
        <ReferralLeaderboard />
      </div>
    </DBReferralProgram>
  );
};

export default DBPromotion;
