import Card from "../components/Card";
import Layout from "../components/Layout/Layout";
import HeroCarousel from "../components/Slider/HeroCarousel";
import { FaSearch } from "react-icons/fa";
import FilterGamesStep1 from "../components/ui/FilterGamesStep1";
import FilterGamesStep2 from "../components/ui/FilterGamesStep2";
import useStore from "../Zustand/store/useStore";

const SlotPgae = () => {
  const { currentFilterGameStep } = useStore();

  const images = ["slotBanner.jpg"];
  return (
    <Layout>
      <HeroCarousel elements={images} />
      {/* searching and sorting section */}
      <div className="bg-white  w-full flex items-center">
        <div className="w-[75%] mx-auto flex  justify-between pt-4 ">
          {/* searhing */}
          <div className="flex items-center gap-2 pb-4 ">
            <FaSearch className="text-gray-600 text-2xl" />
            <input
              type="text"
              placeholder="Search Games"
              className="px-4 py-1 outline-none bg-gray-200 rounded-md border focus:border-slate-700"
            />
          </div>
          {/* sorting */}
          <div className="flex  gap-4 text-gray-600  ">
            <p className="pb-4">Sort:</p>
            <p className="text-[#137657] font-bold border-b-4 border-[#137657] pb-4">
              Recomended
            </p>
            <p className="pb-4">Latest</p>
            <p className="pb-4">Favourite</p>
            <p className="pb-4">A-Z</p>
          </div>
        </div>
      </div>

      {/* filter section */}
      <div className="bg-[#127556] w-full  flex items-center">
        {currentFilterGameStep == 1 ? (
          <FilterGamesStep1 />
        ) : (
          <FilterGamesStep2 />
        )}
      </div>
      <div className="mt-10 w-[75%] mx-auto">
        <div className="grid grid-cols-6 gap-2">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25,
          ].map((a) => (
            <Card key={a} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SlotPgae;
