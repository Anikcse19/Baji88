import { BsChatLeftText } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { TiStarburstOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const DBDeposite = () => {
  return (
    <div className="w-full h-full bg-green-400">
      <div className="bg-[#14805e]">
        <div className="flex items-center justify-between text-white py-2 px-3">
          <Link to="/"><IoIosArrowBack className="text-[26px]" /></Link>
          <p>Funds</p>

          <button>
            <BsChatLeftText className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 flex justify-center items-center">
          <button className="bg-[#34af83] px-12 py-1 rounded-md text-white font-medium text-[13px]">
            Deposite
          </button>
          <button className="bg-[#0d543e] px-12 py- rounded-r-md text-white font-medium text-[13px]">
            Withdraw
          </button>
        </div>

        <div className="mt-4 bg-[#34af83] h-10 flex items-center justify-between text-white px-2">
          <div className="flex items-center gap-1">
            <TiStarburstOutline className="text-xl"/>
            <p className="text-sm">Select Promotions</p>
          </div>
          <p className="text-xs">এক্সট্রা ১.৫% ডিপোজিট বোনাস</p>
        </div>
      </div>
    </div>
  );
};

export default DBDeposite;
