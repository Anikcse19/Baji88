/* eslint-disable react/prop-types */
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ReferralProgramBtn from "../../utils/ReferralProgramBtn";
import MobileFooterSection from "../../components/MobileFooterSection";

const DBReferralProgram = ({ children }) => {
  return (
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

      <MobileFooterSection />
    </div>
  );
};

export default DBReferralProgram;
