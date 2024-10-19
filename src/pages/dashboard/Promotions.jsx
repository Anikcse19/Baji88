import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import PromotionCard from "../../components/PromotionCard";

const Promotions = () => {
  const filterOptions = ["All", "Wellcome Offer", "Slot", "Casino", "Sports"];
  const [currentOp, setCurrentOp] = useState("All");
  return (
    <Layout>
      <div className="text-white py-2">
        {/* options */}
        <div className="w-full h-12 bg-[#333333] px-3 flex items-center gap-x-1">
          {filterOptions?.map((op) => (
            <p
              onClick={() => setCurrentOp(op)}
              className={`${
                currentOp === op ? "bg-green-600" : "bg-[#201f1f]"
              }  px-4 rounded py-2 text-sm`}
              key={op}
            >
              {op}
            </p>
          ))}
        </div>
        {/* body */}
        <div className="mt-6">
          <div className="flex flex-col gap-5 px-2">
            {promotionCardInfos?.map((info) => (
              <PromotionCard key={info} info={info} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Promotions;
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
