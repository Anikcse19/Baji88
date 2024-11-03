import useStore from "../../Zustand/store/useStore";

const FilterGamesStep1 = () => {
  const { setCurrentFilterGameStep } = useStore();
  const filterOptions = [
    "Evolution",
    "Sexy",
    "Pragmatic Play",
    "PlayTech",
    "HotRoad",
  ];
  return (
    <div className="w-[75%] mx-auto flex justify-between">
      {/* left */}
      <div className="flex items-center gap-10">
        {filterOptions.map((f, i) => (
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
      {/* right */}
      <div
        style={{
          boxShadow:
            " -10px 0px 10px -5px rgba(0, 0, 0, 0.5), 10px 0px 10px -5px rgba(0, 0, 0, 0.5)",
        }}
        className="bg-primary px-6 py-3 cursor-pointer hover:bg-[#2d866bf6] transition-all duration-500 ease-in-out"
      >
        <p
          onClick={() => setCurrentFilterGameStep(2)}
          className="text-yellow-400 text-sm"
        >
          More Filters
        </p>
      </div>
    </div>
  );
};

export default FilterGamesStep1;
