import { RiFileCopy2Line, RiLinkM } from "react-icons/ri";
import DBReferralProgram from "./DBReferralProgram";
import { BsFillQuestionCircleFill, BsQrCode } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useStore from "../../Zustand/store/useStore";

const DBMyReferral = () => {
  const [open, setOpen] = useState(false);
  const [openCopyModal, setOpenCopyModal] = useState(false);
  const { openRewardTable, setOpenRewardTable } = useStore();

  const handleDrawerToggle = () => {
    setOpenRewardTable(!openRewardTable);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <DBReferralProgram>
      <div className="pb-10 relative">
        {/* Refere Your Friend and earn */}
        <div
          className="h-[353px] bg-cover flex flex-col justify-cente pt-[10%] items-center"
          style={{
            backgroundImage: "url(/referral-program-banner.png)",
          }}
        >
          <img src="/logo (2).png" alt="" className="w-[80px]" />
          <h1 className="text-[34px] uppercase font-bold text-white">
            Refer Your Friends
          </h1>
          <h1 className="text-[34px] uppercase font-bold text-[#ffde1a]">
            And Earn
          </h1>
        </div>

        {/* QR Scaner */}
        <div
          className="border border-gray-500 mx-3 rounded-md bg-[#333] px-2 pt-5 pb-2 -mt-20 flex flex-col justify-center items-center gap-3 bg-cover"
          style={{ backgroundImage: "url(/referral-panel-bg-1.png)" }}
        >
          <p className="text-xs text-[#b5b5b5]">Your Referral Code</p>

          <button
            onClick={() => setOpenCopyModal((prev) => !prev)}
            className="flex items-center font-bold text-yellow gap-1"
          >
            bzJOq <RiFileCopy2Line />
          </button>

          {/* Scaner Img */}
          <div className="mt-3">
            <BsQrCode className="text-[180px] text-white" />
          </div>

          {/* Copy and Share Buttons */}
          <div className="w-full flex items-center gap-3 font-semibold mt-5">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="bg-yellow w-1/2 flex justify-center py-3 rounded-md items-center gap-1"
            >
              Copy Link <RiLinkM className="text-xl" />
            </button>
            <button className="bg-yellow w-1/2 flex justify-center py-3 rounded-md items-center gap-1">
              Share
            </button>
          </div>
        </div>

        {/* Reward Details */}
        <div
          className="relative mt-3 mx-3 p-2 rounded-md bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/referral-panel-bg-2.png)",
          }}
        >
          {/* Reward details Btn */}
          <button
            onClick={() => handleDrawerToggle()}
            className="absolute right-0 top-0 text-xs bg-yellow px-3 py-1"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)" }}
          >
            Reward details ...
          </button>

          {/* Active Downloads */}
          <div className="mt-5 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-semibold text-yellow">0</h1>
            <p className="text-xs text-white flex items-center gap-2">
              Active downloads <BsFillQuestionCircleFill />
            </p>
          </div>

          {/* Life Time Cash Rewards */}
          <div className="mt-3 bg-black bg-opacity-70 rounded-md py-2 px-3">
            <p className="font-semibold text-white">Life Time Cash Rewards</p>
            <div className="flex justify-end">
              <p className="text-2xl text-yellow">0</p>
            </div>
          </div>

          {/* Referral Turn Over */}
          <div className="mt-3 bg-black bg-opacity-70 rounded-md py-2 px-3">
            <p className="font-semibold text-white">Referral Turn Over</p>
            <div className="flex justify-end">
              <p className="text-2xl text-yellow">0</p>
            </div>
          </div>

          {/* Cash Rewards */}
          <div className="mt-3 bg-black bg-opacity-70 rounded-md py-2 px-3">
            <p className="font-semibold text-white">Cash Rewards</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl text-yellow">0</p>

              <button className="bg-yellow text-xs h-max py-[2px] rounded-full px-2">
                Claim All
              </button>
            </div>
          </div>
        </div>

        {/* Copy URL Modal */}
        {open && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center p-[4vw]">
            <div className="w-full">
              <div className="bg-primary text-white font-bold px-4 py-3 flex gap-">
                <p className="w-[93%] text-sm">Notification</p>
                <button onClick={() => setOpen((prev) => !prev)}>
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>

              <div className="bg-white p-7 w-full">
                <p className="text-sm">
                  Already copies to clipboard: <br />
                  <span>www.baji.live?refcode=bzkJOq</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Copy Code Modal */}
        {openCopyModal && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center p-[4vw]">
            <div className="w-full">
              <div className="bg-primary text-white font-bold px-4 py-3 flex gap-">
                <p className="w-[93%] text-sm">Notification</p>
                <button onClick={() => setOpenCopyModal((prev) => !prev)}>
                  <AiOutlineClose className="text-2xl" />
                </button>
              </div>

              <div className="bg-white p-7 w-full">
                <p className="text-sm">Already copies to clipboard.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </DBReferralProgram>
  );
};

export default DBMyReferral;
