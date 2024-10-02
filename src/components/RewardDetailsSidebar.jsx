import { CiFilter } from "react-icons/ci";
import useStore from "../Zustand/store/useStore";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineClipboardList } from "react-icons/hi";

const RewardDetailsSidebar = () => {
  const { openRewardTable, setOpenRewardTable } = useStore();

  const handleDrawerToggle = () => {
    setOpenRewardTable(!openRewardTable);
  };

  return (
    <div className="w-screen h-full min-h-screen">
      {/* Top Nav */}
      <div className="h-[60px] bg-black flex items-center justify-between text-white px-2">
        <button onClick={() => handleDrawerToggle()}>
          <IoIosArrowBack className="text-2xl" />
        </button>
        <p className="font-medium">Cash Reward History</p>
        <div></div>
      </div>

      {/* Filter Menu */}
      <div className="bg-[#393939] h-[50px] flex justify-end px-2">
        <button className="text-2xl text-white border-l b border-[#4a4a4a] px-2">
          <CiFilter />
        </button>
      </div>

      <div className="bg-[#4c4c4c] px-2">
        <ul className="flex items-center text-sm text-white justify-between text-center">
          <li className="border-dashed border-r border-gray-500 py-2 w-full">
            Date
          </li>
          <li className="border-dashed border-r border-gray-500 py-2 w-full">
            Turnover
          </li>
          <li className="border-dashed border-r border-gray-500 py-2 w-full">
            Cash Reward
          </li>
          <li className="py-2 w-full">Status</li>
        </ul>
      </div>

      {/* Body/Content */}
      <div className="flex justify-center flex-col items-center">
        <HiOutlineClipboardList className="text-gray-600 text-8xl mt-[40%]" />
        <span className="text-[#393939] text-sm">No Data</span>
      </div>

      <div className="bg-[#333] fixed bottom-0 w-full flex h-[100px] p-3 gap-3">
        <div className=" gap-2 w-1/2">
          <p className="text-white text-center text-sm">Total Claimed Amount</p>
          <div className="flex justify-end mt-3">
            <p className="text-xl text-yellow">0</p>
          </div>
        </div>

        <div className="h-full w-[1px] bg-white"></div>

        <div className=" gap-2 w-1/2">
          <p className="text-white text-center text-sm">
            Unclaimed Cash Reward
          </p>
          <div className="flex justify-end mt-3">
            <p className="text-xl text-yellow">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardDetailsSidebar;
