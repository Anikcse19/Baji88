/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

const filterOptionss = [
  "SABA Sports",
  "JDB",
  "CQ9",
  "PG SOft",
  "Evolution",
  "Joker",
  "Exchange",
  "SBO Sports",
  "Bpoker",
  "Ludu",
  "KA Gaming",
  "Sexy",
  "Red Tiger",
  "SpadeGaming",
  "KingMaker",
  "Jilli",
  "Plya8",
  "FA Chai",
];

const FilterSidebar = ({ setIsOpenSidebar }) => {
  const [currentOp, setCurrentOp] = useState([]);
  const [filterOptions, setFilterOptions] = useState(filterOptionss);
  return (
    <div className="w-full min-h-[100vh] bg-black relative">
      <div className="flex items-center gap-x-5 px-3 border-b border-gray-400">
        <FaChevronLeft
          onClick={() => setIsOpenSidebar(false)}
          className="text-xl text-white font-bold"
        />
        <div className="py-3 border-l border-gray-400 px-2 text-gray-500">
          Betting Record Filter
        </div>
      </div>
      {/* filter options */}
      <div className="mt-2 px-2">
        <p>Platform</p>

        <div className="mt-2 grid grid-cols-3 gap-3 ">
          {filterOptions?.map((op) => (
            <p
              onClick={() => {
                setCurrentOp((prev) => [op, ...prev]);
                setFilterOptions((prev) => [
                  op,
                  ...prev.filter((p) => p !== op),
                ]);
              }}
              className={` text-center rounded-md py-2 ${
                currentOp.includes(op) ? "bg-green-500" : "bg-[#333333]"
              }`}
              key={op}
            >
              {op}
            </p>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 w-full">
        <div className="w-full flex justify-center">
          <p className="bg-green-600 text-white px-3 py-2 rounded-md w-full m-5 text-center">
            Confirm
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
