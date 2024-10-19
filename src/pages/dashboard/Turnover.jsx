import { useState } from "react";
import CommonNav from "../../utils/CommonNav";
import UserPanelLayout from "../../components/Layout/UserPanelLayout";

const Turnover = () => {
  const [currentTab, setCurrentTab] = useState("active");
  return (
    <UserPanelLayout>
      <div className="  min-h-[100vh] ">
        <CommonNav>Turnover</CommonNav>
        {/* tabs */}
        <div className="bg-[#14805e] pt-12 w-full">
          <div className="w-full flex items-center justify-between">
            <p
              onClick={() => setCurrentTab("active")}
              className={`w-full text-center  pb-2 font-bold cursor-pointer ${
                currentTab == "active"
                  ? "border-b-4 border-yellow text-yellow"
                  : "text-white"
              }`}
            >
              Active
            </p>
            <p
              onClick={() => setCurrentTab("completed")}
              className={`w-full text-center  pb-2 font-bold cursor-pointer ${
                currentTab == "completed"
                  ? "border-b-4 border-yellow text-yellow"
                  : "text-white"
              }`}
            >
              Completed
            </p>
          </div>
        </div>
        {/* body */}
        <div className="h-[100vh] w-full flex flex-col justify-center items-center">
          <img src="/no-data.png" alt="" />
          <p className="text-white">No data</p>
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default Turnover;
