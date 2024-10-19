/* eslint-disable react/prop-types */
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ReferralProgramBtn from "../../utils/ReferralProgramBtn";
import MobileFooterSection from "../../components/MobileFooterSection";
import RewardDetailsSidebar from "../../components/RewardDetailsSidebar";
import useStore from "../../Zustand/store/useStore.js";
import { useEffect } from "react";
import UserPanelLayout from "../../components/Layout/UserPanelLayout.jsx";

const DBReferralProgram = ({ children }) => {
  const { openRewardTable } = useStore();

  // Effect to control body scroll based on myAccount state
  useEffect(() => {
    if (openRewardTable) {
      // Disable scrolling on the body when the "My Account" menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the "My Account" menu is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openRewardTable]);

  return (
    <UserPanelLayout>
      <div>
        <div className="bg-[#14805e]">
          {/* Common Nav */}
          <div className="flex items-center justify-between text-white py-2 px-3">
            <Link to="/">
              <IoIosArrowBack className="text-[26px]" />
            </Link>
            <p className="font-medium">Referral Program</p>

            <div></div>
          </div>

          {/* Switch Links */}
          <div className="flex items-center justify-between mt-3">
            <ReferralProgramBtn url="/referral-program/promotion">
              Referral Info
            </ReferralProgramBtn>
            <ReferralProgramBtn url="/referral-program/details">
              My Referral
            </ReferralProgramBtn>
          </div>
        </div>

        {children}

        {/* RewardsDetails Sidebar */}
        <div
          className={`w-screen h-full bg-black fixed z-[9999] top-0 right-0 transition-transform  duration-300 ${
            openRewardTable ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
        >
          <RewardDetailsSidebar />
        </div>

        <MobileFooterSection />
      </div>
    </UserPanelLayout>
  );
};

export default DBReferralProgram;
