import Layout from "../components/Layout/Layout";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaChessQueen } from "react-icons/fa";

import "../assets/css/Refferel.css";

const RefferalPage = () => {
  return (
    <Layout>
      <div className="w-full h-full">
        <div
          style={{
            background: `url('/referral-program-bg.png')`,
            width: "100%",
            height: "90vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="py-20 relative">
            <div className="flex flex-col gap-y-4 items-center">
              <img className="w-24" src="/logoRef.svg" alt="" />
              <p
                style={{
                  textShadow: " 0 .125rem .25rem #000",
                  // display: block;
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: " 2.8125rem",
                  lineHeight: " 1.2",
                  fontWeight: "900",
                }}
                className="text-white text-3xl"
              >
                Reffer Your Friends
              </p>
              <p
                style={{
                  color: "#ffde1a",
                  textShadow: " 0 .125rem .25rem #000",
                  // display: block;
                  whiteSpace: "nowrap",
                  textAlign: "center",

                  fontSize: " 2.8125rem",
                  lineHeight: " 1.2",
                  fontWeight: "900",
                }}
              >
                And Earn
              </p>
            </div>
            <div
              style={{
                background: `url('/referral-program-banner (1).png')`,
                width: "100%",
                height: "900px",
              }}
              className="absolute -top-36 -left-8 bg-cover bg-red-400"
            ></div>
          </div>
        </div>

        {/* lower part */}
        <div className="w-[75%] h-fit pb-10 mx-auto -mt-6 flex  gap-x-8">
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            className="w-[65%] bg-[#333333] rounded-md h-full py-8"
          >
            {/* heading */}
            <div className="flex justify-center">
              <h1 className="text-white font-bold text-xl">
                কিভাবে আরো প্রাইজ পাবেন?
              </h1>
            </div>

            {/* prize offer 1,2 ,3 */}
            <div className="flex items-center justify-between gap-x-3 px-5 mt-20">
              {/* 1 */}
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
                className="w-[250px] h-[180px] rounded bg-[#393939]"
              >
                {/* top */}
                <div className="flex items-center justify-between px-5 -mt-20">
                  <div className="text-8xl text-yellow font-bold mt-3">১</div>
                  <div>
                    <img
                      className="w-[80px] h-[70px]"
                      src="/referral-program-flowch-1.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* body */}
                <div className="flex flex-col gap-y-2 px-4 mt-5">
                  <p className="text-yellow text-xl">ইনভিটেশন পাঠান</p>
                  <p className="text-white text-sm">
                    আপনার রেফারেল জার্নি শুরু করতে
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
                className="w-[250px] h-[180px] rounded bg-[#393939]"
              >
                {/* top */}
                <div className="flex items-center justify-between px-5 -mt-20">
                  <div className="text-8xl text-yellow font-bold mt-3">২</div>
                  <div>
                    <img
                      className="w-[80px] h-[70px]"
                      src="/referral-program-flowch-2.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* body */}
                <div className="flex flex-col gap-y-2 px-4 mt-5">
                  <p className="text-yellow text-xl">ফ্রেন্ড রেজিস্ট্রেশন</p>
                  <p className="text-white text-sm">বেট ধরার সাথে</p>
                </div>
              </div>
              {/* 3 */}
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
                className="w-[250px] h-[180px] rounded bg-[#393939]"
              >
                {/* top */}
                <div className="flex items-center justify-between px-5 -mt-20">
                  <div className="text-8xl text-yellow font-bold mt-3">৩</div>
                  <div>
                    <img
                      className="w-[80px] h-[70px]"
                      src="/referral-program-flowch-3.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* body */}
                <div className="flex flex-col gap-y-2 px-4 mt-5">
                  <p className="text-yellow text-base">
                    পুরস্কার জিতুন weekly, monthly
                  </p>
                  <p className="text-white text-xs">
                    এবং আপনার বন্ধুদের সাথে উপভোগ করুন
                  </p>
                </div>
              </div>
            </div>

            {/* refer button */}
            <div className="flex justify-center mt-6">
              <p
                style={{
                  background:
                    "linear-gradient(to right, #fbc103 0, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103 100%)",
                }}
                className="px-8 py-2 rounded-md text-white cursor-pointer"
              >
                এখনই রেকমেন্ড করুন
              </p>
            </div>

            {/* what is refferel program */}
            <div className="px-8 mt-2">
              <p className="text-white font-bold text-xl">
                রেফারেল <br /> প্রোগ্রাম কি?
              </p>
              <p className="mt-5 text-gray-500 text-sm">
                আপনার বন্ধুকে রেফার করে মোট তিনটি ধাপে ক্যাশ প্রাইজ উপভোগ করতে
                পারেন, আপনার বন্ধুকে একসাথে খেলতে এখনই আমন্ত্রণ জানান!!! এটি হবে
                আপনার দীর্ঘমেয়াদী ইনকাম, এবং যতবার তারা বেট ধরবে, ততবারই আপনি
                আলাদা কমিশন এর পার্সেন্টেজ পাবেন।
              </p>
              <p className="mt-2 text-gray-500 hover:text-yellow inline-block text-sm cursor-pointer">
                নিয়মাবলি{" "}
                <MdOutlineKeyboardArrowRight className="inline text-xl -mt-1" />
              </p>
            </div>

            {/* rules of commision */}
            <div className="px-6 mt-10">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white text-xl">কমিশনের নিয়ম</p>
                  <p className="text-white text-sm">
                    Turnover Range : More Than 100
                  </p>
                </div>
                <div className="bg-gray-700 rounded-full p-2">
                  <MdOutlineKeyboardArrowRight className="text-xl text-white cursor-pointer " />
                </div>
              </div>
              {/* level */}
              <div className="flex items-center justify-between pt-3">
                <div className="bg-[#4C4C4C] px-5 py-2 rounded text-white">
                  লেভেল ১ <p className="text-yellow inline font-bold">0.1%</p>{" "}
                  (পর্যন্ত)
                </div>
                <div className="bg-[#4C4C4C] px-5 py-2 rounded text-white">
                  লেভেল ২ <p className="text-yellow inline font-bold">0.05%</p>{" "}
                  (পর্যন্ত)
                </div>{" "}
                <div className="bg-[#4C4C4C] px-5 py-2 rounded text-white">
                  লেভেল ৩ <p className="text-yellow inline font-bold">0.01%</p>{" "}
                  (পর্যন্ত)
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            className="w-[35%] bg-[#333333] rounded-md h-full py-8"
          >
            {/* heading */}
            <div className="flex justify-center">
              <h1 className="text-white font-bold text-xl">বোনাস র‍্যাঙ্কিং</h1>
            </div>

            {/* ranking card */}
            <div className="mt-16 px-5">
              <div className="flex items-center justify-between gap-x-3">
                {/* 1 */}
                <div
                  style={{
                    background: `url('/referral-program-leaderboard-rank2.png') no-repeat `,
                    height: "200px",
                  }}
                  className="w-full"
                >
                  <div className="flex flex-col items-center justify-center gap-1 -mt-10">
                    <FaChessQueen className="text-yellow text-xl" />
                    <p className="bg-yellow px-2 py-0.5 rounded-full text-black text-sm font-bold text-center">
                      টপ ২
                    </p>
                  </div>
                  <div className="flex justify-center mt-3 ml-2">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="/avatar2.png"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-center gap-1 justify-center">
                    <p className="text-white font-bold text-xs">auh***gjh</p>
                    <p className="text-yellow font-bold text-xs">67232</p>
                  </div>
                </div>
                {/* 2 */}
                <div
                  style={{
                    background: `url('/referral-program-leaderboard-rank1.png') no-repeat `,
                    height: "200px",
                  }}
                  className="w-full -mt-10"
                >
                  <div className="flex flex-col items-center justify-center gap-1 -mt-10">
                    <FaChessQueen className="text-yellow text-xl" />
                    <p className="bg-yellow px-2 py-0.5 rounded-full text-black text-sm font-bold text-center">
                      টপ ১
                    </p>
                  </div>
                  <div className="flex justify-center mt-3 ml-2">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="/avatar1.png"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-center gap-1 justify-center">
                    <p className="text-white font-bold text-xs">auh***gjh</p>
                    <p className="text-yellow font-bold text-xs">67232</p>
                  </div>
                </div>
                {/* 3 */}
                <div
                  style={{
                    background: `url('/referral-program-leaderboard-rank3.png') no-repeat `,
                    height: "200px",
                  }}
                  className="w-full"
                >
                  <div className="flex flex-col items-center justify-center gap-1 -mt-10">
                    <FaChessQueen className="text-yellow text-xl" />
                    <p className="bg-yellow px-2 py-0.5 rounded-full text-black text-sm font-bold text-center">
                      টপ ৩
                    </p>
                  </div>
                  <div className="flex justify-center mt-3 ml-2">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="/avatar3.png"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 flex flex-col items-center gap-1 justify-center">
                    <p className="text-white font-bold text-xs">auh***gjh</p>
                    <p className="text-yellow font-bold text-xs">67232</p>
                  </div>
                </div>
              </div>
            </div>

            {/* who gets the card */}
            <div className="mt-3">
              <div className="flex justify-center">
                <p className="text-yellow font-bold">কে বোনাস পেয়েছে?</p>
              </div>
              {/* bonus persons */}
              <div className="mt-2 flex flex-col justify-center gap-y-2 px-5">
                <div className="flex items-center justify-between bg-[#262626] rounded-sm py-3">
                  <p className="text-center w-full text-white border-r border-dashed ">
                    asdasd
                  </p>
                  <p className="text-center w-full text-yellow border-r border-dashed">
                    23412
                  </p>
                  <p className="text-center w-full text-white ">adf</p>
                </div>
                <div className="flex items-center justify-between bg-transparent rounded-sm py-3">
                  <p className="text-center w-full text-white border-r border-dashed ">
                    asdasd
                  </p>
                  <p className="text-center w-full text-yellow border-r border-dashed">
                    23412
                  </p>
                  <p className="text-center w-full text-white ">adf</p>
                </div>
                <div className="flex items-center justify-between bg-[#262626] rounded-sm py-3">
                  <p className="text-center w-full text-white border-r border-dashed ">
                    asdasd
                  </p>
                  <p className="text-center w-full text-yellow border-r border-dashed">
                    23412
                  </p>
                  <p className="text-center w-full text-white ">adf</p>
                </div>
                <div className="flex items-center justify-between bg-transparent rounded-sm py-3">
                  <p className="text-center w-full text-white border-r border-dashed ">
                    asdasd
                  </p>
                  <p className="text-center w-full text-yellow border-r border-dashed">
                    23412
                  </p>
                  <p className="text-center w-full text-white ">adf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RefferalPage;
