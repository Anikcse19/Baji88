import { useState } from "react";
import Layout from "../components/Layout/Layout";
import HeroCarousel from "../components/Slider/HeroCarousel";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import PromotionCard from "../components/PromotionCard";

const PromotionPage = () => {
  const images = ["promotionBanner.jpg"];
  const [currentOp, setCurrentOp] = useState("All");
  const filterOptions = [
    "All",
    "Wellcome Offer",
    "Slots",
    "Casino",
    "Sports",
    "Fishing",
    "ESports",
    "Lottery",
    "P2P",
  ];
  return (
    <Layout>
      <HeroCarousel elements={images} />

      {/* options slider */}
      <div className="w-full h-16 bg-[#474747] ">
        <div className="w-[75%] h-full mx-auto flex gap-x-10 items-center">
          <div className="">
            <FaArrowLeftLong className="bg-[#F7A204] w-8 h-8 rounded-full text-white p-2" />
          </div>
          <div className="flex-grow flex items-center justify-between text-white">
            {filterOptions?.map((op) => (
              <div
                className={`${
                  currentOp == op && "border-2 border-yellow"
                } px-3 py-1 rounded-md cursor-pointer`}
                onClick={() => setCurrentOp(op)}
                key={op}
              >
                {op}
              </div>
            ))}
          </div>
          <div className="">
            <FaArrowRightLong className="bg-[#F7A204] w-8 h-8 rounded-full text-white p-2" />
          </div>
        </div>
      </div>
      {/* promotion cards */}
      <div className="my-10 w-[75%] mx-auto">
        <div className="grid grid-cols-2 place-items-center gap-5">
          {promotionCardInfos?.map((info) => (
            <PromotionCard key={info} info={info} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PromotionPage;

const promotionCardInfos = [
  {
    id: 1,
    img: "/promotionCardImg1.jpg",
    title: "100% Refund on A.F.C. Bournemouth",
    type: "AFC Bournemouth Welcome Offer",
    period: "2024/08/16 0:00:00 ~ 2025/05/25 23:59:59",
  },
  {
    id: 2,
    img: "/promotionCardImg2.jpg",
    title: "৳7,777 Sports Bonus",
    type: "Welcome Offer",
    period: "2024/05/29 0:00:00 ~ 2024/12/31 23:59:59",
  },
  {
    id: 3,
    img: "/promotionCardImg3.jpg",
    title: "50% Sports Refund",
    type: "Welcome Offer",
    period: "2023/07/27 22:00to 2024/12/31 21:59 end",
  },
  {
    id: 4,
    img: "/promotionCardImg4.jpg",
    title: "৳3,00,000 Monthly Referrals Rewards",
    type: "RAF Leaderboard",
    period: "2024/09/30 22:00:00 ~ 2024/12/31 23:59:59",
  },
];
