import { MdOutlineArrowDropDown } from "react-icons/md";
import useStore from "../../Zustand/store/useStore";

const FilterGamesStep2 = () => {
  const { setCurrentFilterGameStep } = useStore();
  const filterOptions1 = [
    "Evolution",
    "Sexy",
    "Pragmatic Play",
    "PlayTech",
    "HotRoad",
  ];

  const filterOptions2 = [
    "Top Games",
    "Baccart",
    "Game Show",
    "Roulette",
    "Sic Bio",
    "Poker",
    "Blackjack",
    "First Person",
  ];
  return (
    <div
      style={{
        boxShadow:
          " -10px 0px 20px -5px rgba(0, 0, 0, 0.5), 10px 0px 20px -5px rgba(0, 0, 0, 0.5)",
      }}
      className="w-[75%] mx-auto flex flex-col"
    >
      {/* 1st row */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center bg-[#3E7865] py-1 px-3">
          <p className="text-yellow-400">Provider</p>
          <MdOutlineArrowDropDown className="text-white text-lg" />
        </div>
        <div className="py-3 px-3 bg-[#0E5A42]">
          <div className="flex items-center gap-10">
            {filterOptions1.map((f, i) => (
              <div key={i} className="cursor-pointer">
                {/* input checkbox */}
                <label className="custom-checkbox  flex items-center">
                  <input type="checkbox" />
                  <span className="checkmark"></span>{" "}
                  <p className="text-white">{f}</p>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 2nd row */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center bg-[#3E7865] py-1 px-3">
          <p className="text-yellow-400">Game Type</p>
          <MdOutlineArrowDropDown className="text-white text-lg" />
        </div>
        <div className="py-3 px-3 bg-[#0E5A42]">
          <div className="flex items-center gap-10">
            {filterOptions2.map((f, i) => (
              <div key={i} className="cursor-pointer">
                {/* input checkbox */}
                <label className="custom-checkbox  flex items-center">
                  <input type="checkbox" />
                  <span className="checkmark"></span>{" "}
                  <p className="text-white">{f}</p>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* hide button */}
      <div
        onClick={() => setCurrentFilterGameStep(1)}
        className="bg-[#3d9a7b] hover:bg-[#2a6f58] transition-all duration-500 ease-in cursor-pointer py-2 text-center text-yellow-400"
      >
        Hide Items
      </div>
    </div>
  );
};

export default FilterGamesStep2;
