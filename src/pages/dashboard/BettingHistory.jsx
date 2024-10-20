import { useState } from "react";
import CommonNav from "../../utils/CommonNav";
import { CiFilter } from "react-icons/ci";
import FilterSidebar from "../../components/FilterSidebar";
import UserPanelLayout from "../../components/Layout/UserPanelLayout";

const BettingHistory = () => {
  const [currentTab, setCurrentTab] = useState("settled");
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <UserPanelLayout>
      <div className="text-white  min-h-[100vh] relative">
        <CommonNav>Betting History</CommonNav>
        {/* tabs */}
        <div className="bg-[#14805e] pt-12 w-full">
          <div className="w-full flex items-center justify-between">
            <p
              onClick={() => setCurrentTab("settled")}
              className={`w-full text-center  pb-2 font-bold cursor-pointer ${
                currentTab == "settled"
                  ? "border-b-4 border-yellow text-yellow"
                  : "text-white"
              }`}
            >
              Settled
            </p>
            <p
              onClick={() => setCurrentTab("unsettled")}
              className={`w-full text-center  pb-2 font-bold cursor-pointer ${
                currentTab == "unsettled"
                  ? "border-b-4 border-yellow text-yellow"
                  : "text-white"
              }`}
            >
              Unsettled
            </p>
          </div>
        </div>
        {/* filter and sorting */}
        <div>
          {/* filter */}
          <div className="bg-[#393939]  flex justify-between items-center px-3">
            <div>
              <p className="bg-[#1EC28F] px-2 rounded-md text-white">
                Last 7 days
              </p>
            </div>
            <div className="w-10 border-l border-gray-400 py-4">
              <CiFilter
                onClick={() => setIsOpenSidebar(true)}
                className="text-white text-xl ml-4"
              />
            </div>
          </div>
          {/* filter 2 */}
          <div className="bg-[#4C4C4C]  flex justify-between items-center px-3 py-2">
            <p className="border-r border-dashed px-3">Platform</p>
            <p className="border-r border-dashed px-3">Game type</p>
            <p className="border-r border-dashed px-3">Turnover</p>
            <p>Profit/loss</p>
          </div>
        </div>
        {/* body */}
        <div className="h-[100vh] w-full flex flex-col justify-center items-center">
          <img src="/no-data.png" alt="" />
          <p>No data</p>
        </div>

        {/* sidebar */}
        <div
          className={` min-h-[100vh] w-full fixed top-0 transition-all duration-300 ease-in ${
            isOpenSidebar ? "right-0" : "-right-full"
          }`}
        >
          <FilterSidebar setIsOpenSidebar={setIsOpenSidebar} />
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default BettingHistory;
