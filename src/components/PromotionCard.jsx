/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { GoClock } from "react-icons/go";

const PromotionCard = ({ info }) => {
  console.log(info);

  const { img, title, type, period } = info;
  return (
    <div className="flex flex-col rounded overflow-hidden">
      {/* image */}
      <div>
        <img src={img} alt="" />
      </div>
      {/* details */}
      <div className="h-fit bg-[#8E8E8E] relative pb-3">
        {/* dot image */}
        <div className="line" />
        {/* title */}
        <div className="flex items-center justify-between border-l-2 border-yellow px-2 py-3">
          <div className="text-gray-200 font-bold text-xl">{title}</div>
          <div className="bg-green-700 text-yellow px-2 py-0.5 rounded-sm text-xs w-20">
            Long Term
          </div>
        </div>
        {/* type and period*/}
        <div className="px-2 py-1 flex flex-col gap-y-1 text-gray-800 text-sm">
          {/* type */}
          <div>{type}</div>
          {/* period */}
          <div className="text-xs">
            <GoClock className="inline mr-1" />
            {period}
          </div>
        </div>
        {/* sign up and details button */}
        <div className="px-2 py-1 ">
          <div className="flex items-center gap-x-4">
            {/* signup btn */}
            <div
              style={{
                background:
                  "linear-gradient(to right, #fbc103 0, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103 100%)",
              }}
              className="text-white px-5 py-1 rounded"
            >
              Sign up now
            </div>
            {/* details btn */}
            <div className="bg-[#0088DA] text-white px-5 py-1 rounded">
              Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
