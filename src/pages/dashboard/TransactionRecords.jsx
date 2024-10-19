import { useState } from "react";
import CommonNav from "../../utils/CommonNav";
import { CiFilter } from "react-icons/ci";
import FilterSidebar from "../../components/FilterSidebar";
import UserPanelLayout from "../../components/Layout/UserPanelLayout";

const TransactionRecords = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <UserPanelLayout>
      <div className="text-white  min-h-[100vh] relative">
        <CommonNav>Transaction Records</CommonNav>

        {/* filter and sorting */}
        <div>
          {/* filter */}
          <div className="bg-[#393939]  flex justify-between items-center px-3">
            <div>
              <p className="bg-[#1EC28F] px-2 rounded-md text-white">Today</p>
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
            <p className="border-r border-dashed px-3">Type</p>
            <p className="border-r border-dashed px-3">Amount</p>
            <p className="border-r border-dashed px-3">Status</p>
            <p>Trxn Date</p>
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

export default TransactionRecords;
