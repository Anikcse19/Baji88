/* eslint-disable react/prop-types */
import ReferralProgramBtn from "../../utils/ReferralProgramBtn";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsChatLeftText } from "react-icons/bs";

const VipPointsRecords = ({ children }) => {
  return (
    <div>
      <div className="bg-[#14805e]">
        {/* Common Nav */}
        <div className="flex items-center justify-between bg-[#14805e] text-white py-2 px-3">
          <Link to="/vip-points-exchange">
            <IoIosArrowBack className="text-[26px]" />
          </Link>
          <p className="font-medium">VIP Points VP</p>

          <button className="flex flex-col justify-center items-center">
            <BsChatLeftText className="w-4 h-4" />
            <span className="text-sm">Help</span>
          </button>
        </div>

        {/* Switch Links */}
        <div className="flex items-center justify-between mt-3">
          <ReferralProgramBtn url="/vip-points-records/received">
            VP Received
          </ReferralProgramBtn>
          <ReferralProgramBtn url="/vip-points-records/used">
            VP Used
          </ReferralProgramBtn>
        </div>
      </div>

      {children}
    </div>
  );
};

export default VipPointsRecords;
