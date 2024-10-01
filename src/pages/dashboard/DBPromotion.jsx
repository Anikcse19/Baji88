import { useEffect, useState } from "react";
import CashRewarSlider from "../../components/Slider/CashRewarSlider";
import DBReferralProgram from "./DBReferralProgram";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const DBPromotion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const content1Data = [
    { tier: "Tier 1", percentage: "0.15%" },
    { tier: "Tier 2", percentage: "0.16%" },
    { tier: "Tier 3", percentage: "0.17%" },
  ];

  const content2Data = [
    { tier: "Tier 1", percentage: "0.18%" },
    { tier: "Tier 2", percentage: "0.19%" },
    { tier: "Tier 3", percentage: "0.20%" },
  ];

  const datas = [content1Data, content2Data];

  const tableItems = [
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <DBReferralProgram>
      <div className="pb-10">

        {/* Refere Your Friend and earn */}
        <div
          className="h-[353px] bg-cover flex flex-col justify-cente pt-[10%] items-center"
          style={{
            backgroundImage: "url(/referral-program-banner.png)",
          }}
        >
          <img src="/logo.png" alt="" className="w-[80px]" />
          <h1 className="text-[34px] uppercase font-bold text-white">
            Refer Your Friends
          </h1>
          <h1 className="text-[34px] uppercase font-bold text-[#ffde1a]">
            And Earn
          </h1>
        </div>

        <div className="border border-gray-500 mx-3 rounded-md bg-[#333] px-2 py-5 -mt-20">
          <div className="text-[18px] text-white font-bold text-center">
            How does our
            <br />
            Referral Program work?
          </div>

          <div className="text-sm text-[#b5b5b5] my-5">
            You can earn cash rewards up to three referral tiers when you refer
            your friends.
            <br />
            Invite your friends to join together and be entitled for lifetime
            cash rewards each time your friends place a bet.
          </div>

          {/* Rule Trigger Buttons */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="border w-full py-2 rounded-md border-gray-500 text-[#b5b5b5]"
          >
            Rules
          </button>

          {/* Rules Modal */}
          {open && (
            <div className="absolute top-0 left-0 z-[9999] w-screen bg-black flex justify-center items-center pb-32 border-0">
              <div className="h-full border-0">
                <div className="flex items-center justify-between h-[60px] text-white px-4 text-xl">
                  <button onClick={() => setOpen((prev) => !prev)}>
                    <IoIosArrowBack className="text-2xl" />
                  </button>

                  <p>Rules</p>
                  <div></div>
                </div>
                {/* Rules Text */}
                <div className="bg-white p-5 mx-[4vw] rounded-md text-sm flex flex-col gap-7 border-0">
                  <span>
                    রেফারেলের সমপরিমাণ রিওয়ার্ড! আনলিমিটেড ডেইলি ক্যাশ রিওয়ার্ড
                    এবং বোনাস আমাদের &apos;রেফার এ ফ্রেন্ড&apos; প্রোগ্রামের
                    মাধ্যমে ক্লেইম করার জন্য প্রস্তুত।
                  </span>
                  <span>
                    এই প্রমোশনটি সকল সদস্যদের জন্য এভেইল্যাবল। প্রমোশন শুরু 30th
                    সেপ্টেম্বর ২০২৪ তারিখ ২২:০০ (GMT+6) থেকে।
                  </span>

                  <div>
                    <span className="font-bold">আপনার কি করা উচিত?</span>
                    <br />
                    <span className="font-bold">
                      ‘আনলিমিটেড ডেইলি ক্যাশ রিওয়ার্ড’:
                    </span>
                    <br />
                    <span>- আপনার বন্ধুদের সাথে আপনার </span>
                    <Link to="" className="text-blue-700">
                      &apos;রেফারেল কোড&apos;
                    </Link>
                    <span> বা </span>
                    <Link to="" className="text-blue-700">
                      &apos;রেফারেল লিঙ্ক&apos;
                    </Link>
                    <span> শেয়ার করুন। </span>
                    <br />
                    <span>- রেফারিকে </span>
                    <Link to="" className="text-blue-700">
                      &apos;রেফারেল কোড&apos;
                    </Link>
                    <span> বা </span>
                    <Link to="" className="text-blue-700">
                      &apos;রেফারেল লিঙ্ক&apos;
                    </Link>
                    <span> এর মাধ্যমে রেজিস্টার করতে হবে। </span>
                  </div>

                  <div>
                    <span className="font-bold">‘রেফারেল বোনাস’:</span>
                    <br />
                    <span>
                      - রেফারার এবং রেফারি উভয়কেই রেফারির রেজিস্ট্রেশনের তারিখ
                      থেকে, ৭ দিনের মধ্যে নীচের রিকোয়ারমেন্টগুলি সহ, ফোন নম্বর
                      এবং ইমেল ভেরিফিকেশন সম্পূর্ণ করতে হবে।
                    </span>
                    <img src="/turnover table.PNG" alt="" />
                    <Link to="" className="text-blue-700 italic">
                      *এখানে
                    </Link>
                    <span className="italic">
                      তালিকাভুক্ত অডসগুলো দিয়ে গেমস এবং স্পোর্টস মার্কেটে রাখা
                      বেটগুলি টার্নওভার ক্যালকুলেশনের সময় বাদ দেওয়া হয়।
                    </span>
                  </div>

                  <div>
                    <span className="font-bold">আপনি কি পাবেন?</span> <br />
                    <span className="font-bold">
                      ‘আনলিমিটেড ডেইলি ক্যাশ রিওয়ার্ড’ সম্পর্কে:
                    </span>
                    <span>
                      -আপনার রেফারি এবং তাদের রেফারেলদের দ্বারা সংগ্রহীত মোট
                      টার্নওভারের উপর ভিত্তি করে আপনি আনলিমিটেড ডেইলি ক্যাশ
                      রিওয়ার্ড পাবেন, যেমনটি নীচের টেবিলে বলা হয়েছে।
                    </span>
                    <img src="/turnover table 2.PNG" alt="" />
                    <span>
                      - দিনের ২২:০০ (GMT+6) থেকে পরের দিনের ২১:৫৯ (GMT+6)
                      পর্যন্ত সেটেল করা বেটগুলি টার্নওভার ক্যালকুলেশনের ক্ষেত্রে
                      ধরা হবে।
                    </span>
                    <br />
                    <span className="italic">
                      <Link to="" className="text-blue-700">
                        এখানে
                      </Link>
                      তালিকাভুক্ত অডসগুলো দিয়ে এক্সচেঞ্জ বুকমেকার, গেমস এবং
                      স্পোর্টস মার্কেটে রাখা বেটগুলি টার্নওভার ক্যালকুলেশনের সময়
                      বাদ দেওয়া হয়।
                    </span>
                  </div>

                  <div className="italic">
                    <span>উদাহরণ: </span> <br />
                    <span>
                      টিয়ার ১: যখন bjraf000 রেফার করে bjraf001-কে, তখন bjraf001
                      হয় bjraf000 এর 'টিয়ার ১' রেফারি।
                    </span>
                    <br />
                    <span>
                      টিয়ার ২: bjraf001 যদি bjraf002 কে রেফার করে, bjraf002 তখন
                      bjraf000 এর 'টিয়ার ২' রেফারি হয়ে যায়।
                    </span>
                    <br />
                    <span>
                      টিয়ার ৩: একইভাবে যদি bjraf002 রেফার করে bjraf003-কে,
                      bjraf003 তখন bjraf000 এর 'টিয়ার ৩' রেফারি হয়ে যাবে।
                    </span>
                    <br />
                    <span>
                      - যদি bjraf000-এর সকল 'টিয়ার ১' রেফারিদের মোট টার্নওভার
                      ২০০,০০০ টাকা হয়, bjraf000 ০.১৫% ক্যাশ রিওয়ার্ড পাবে।
                    </span>
                    <br />
                    <span>
                      - একইভাবে, যখন সকল 'টিয়ার ২' রেফারিদের মোট টার্নওভার
                      ৫,০০,০০০ টাকায় হিট করে, bjraf000 তখন ০.০৭% ক্যাশ রিওয়ার্ড
                      পাবেন।
                    </span>
                  </div>

                  <div>
                    <span className="font-bold">‘রেফারেল বোনাস’ সম্পর্কে:</span>
                    <br />
                    <span>
                      - আপনি প্রতিটি রেফারির জন্য ৩০০ টাকা রেফারেল বোনাস পাবেন।
                    </span>
                    <br />
                    <span className="italic">
                      উদাহরণ: আপনি এবং আপনার ২ জন রেফারি সকল রিকোয়ারমেন্টগুলি
                      পূরণ করলে, আপনি মোট ৬০০ টাকা (৩০০ x ২ = ৬০০) রেফারেল বোনাস
                      পাবেন।
                    </span>
                    <br />
                    <span className="italic">
                      *রেফারারদের শুধুমাত্র একবার প্রয়োজনীয় টার্নওভার সম্পন্ন
                      করতে হবে।
                    </span>
                  </div>

                  <div>
                    <span className="font-bold">
                      ক্যাশ রিওয়ার্ড ওয়েজারিং রিকোয়ারমেন্ট:
                    </span>{" "}
                    <br />
                    <span>
                      - ক্যাশ রিওয়ার্ড প্রতিদিন ০৩:০০ (GMT+6) এর মধ্যে 'রেফারেল
                      প্রোগ্রাম' পেইজে আপনার 'ক্যাশ রিওয়ার্ড' সেকশনে জমা হবে।{" "}
                    </span>
                    <span>
                      - ক্যাশ রিওয়ার্ড রিয়েল ক্যাশে দেওয়া হবে, কোনও ওয়েজারিং
                      রিকোয়ারমেন্ট (টার্নওভার) নেই।
                    </span>
                  </div>

                  <div>
                    <span className="font-bold">
                      রেফারেল বোনাস ওয়েজারিং রিকোয়ারমেন্ট:
                    </span>
                    <span>
                      - রিকোয়ারমেন্টগুলি যেদিন পূরণ হবে ঐ দিনেই বোনাস আপনার
                      অ্যাকাউন্টে জমা হবে।
                    </span>{" "}
                    <br />
                    <span>- বোনাস যেকোনো গেমে ব্যবহার করা যাবে।</span> <br />
                    <span>
                      - উইথড্র করার আগে বোনাসের ১x ওয়েজারিং রিকোয়ারমেন্ট
                      (টার্নওভার) কমপ্লিট করতে হবে।
                    </span>{" "}
                    <br />
                    <span>
                      - ওয়েজারিং রিকোয়ারমেন্ট (টার্নওভার) এর শর্ত কমপ্লিট না
                      হওয়া পর্যন্ত আপনার ডিপোজিট, বোনাস এবং উইনিং এমাউন্ট উইথড্র
                      করা যাবে না।
                    </span>
                  </div>

                  <div>
                    <span className="font-bold">সীমাবদ্ধতা:</span> <br />
                    <span>
                      - ন্যূনতম ক্যাশ রিওয়ার্ড পেআউট হল ০.০১ টাকা এবং সর্বোচ্চ
                      পেআউট এর ক্ষেত্রে কোন লিমিট নেই।
                    </span>{" "}
                    <br />
                    <span>
                      - বোনাস বেট এই প্রমোশনে অন্তভূর্ক্ত হয় না।{" "}
                    </span>{" "}
                    <br />
                    <span>
                      - রেফারিরা যদি 'রেফারেল কোড' বা 'রেফারেল লিঙ্ক' ব্যবহার
                      করে রেজিস্ট্রেশন না করে, তাহলে রেজিস্ট্রেশন সম্পূর্ণ
                      হওয়ার পরে তারা 'রেফারেল কোড' প্রবেশ করাতে পারবে না।
                    </span>{" "}
                    <br />
                    <span>
                      - ফার্স্ট উইথড্র করার আগে অ্যাকাউন্টে কমপক্ষে একটি ডিপোজিট
                      রেকর্ড থাকা আবশ্যক।
                    </span>
                  </div>

                  <div>
                    <span className="font-bold">অন্যান্য শর্ত:</span> <br />
                    <span>
                      - যদি একাউন্টের ব্যাপারে কোন প্রকার অপব্যবহারের সন্দেহ হয়
                      এবং / অথবা প্রাপ্ত সুবিধাটি মেনে না নেয় তবে Baji বোনাস
                      বাতিলের অধিকার সংরক্ষণ করে।
                    </span>
                    <br />
                    <span>
                      - যে কোনও সময় এই প্রমোশন থেকে যে কোনও প্লেয়ারকে বাদ দিতে
                      এবং কোনও ব্যাখ্যা না দিয়ে পরিবর্তন, সংশোধন, এবং / অথবা
                      কোনও বোনাস অফার বা প্রমোশন বাতিল করার অধিকার Baji সংরক্ষণ
                      করে।
                    </span>
                    <br />
                    <span>- Baji-র সাধারণ নীতিমালা এবং শর্তাদি প্রযোজ্য।</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-5">
            <CashRewarSlider setActiveIndex={setActiveIndex} />

            <div className="text-white flex flex-col gap-y-2 mt-5">
              {datas[activeIndex].map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-[#4c4c4c] rounded-md flex items-center justify-between text-base"
                >
                  <p className="text-white font-medium">{item.tier}</p>
                  <p className="text-[#ffde1a] font-semibold">
                    {item.percentage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to earn more rewar */}
        <div className=" border border-gray-500 mx-3 rounded-md bg-[#333] px-2 py-5 mt-2">
          <h2 className="text-xl text-center font-bold text-white">
            How to earn more rewards
          </h2>

          {/* Content-1 */}
          <div>
            <h1 className="text-8xl p-0 m-0 leading-none font-bold text-[#ffde1a]">
              1
            </h1>
            <div className="p-5 bg-white  bg-opacity-10 rounded-md relative">
              <p className="text-base font-bold text-[#ffde1a]">
                Send an invitation
              </p>
              <p className="text-xs text-white">
                To start your referral journey
              </p>

              <img
                src="/referral-program-flowch-1.png"
                alt=""
                className="h-[102px] absolute -top-10 right-0"
              />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -bottom-3 left-1/2" />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -top-4 left-0" />
            </div>
          </div>

          {/* Content-2 */}
          <div>
            <h1 className="text-8xl text-right leading-none font-bold text-[#ffde1a]">
              2
            </h1>
            <div className="p-5 bg-white bg-opacity-10 rounded-md relative text-right">
              <p className="text-base font-bold text-[#ffde1a]">
                Friend registration
              </p>
              <p className="text-xs text-white">with best placed</p>

              <img
                src="/referral-program-flowch-2.png"
                alt=""
                className="h-[102px] absolute -top-10 left-0"
              />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -bottom-3 left-1/2" />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -top-4 left-0" />
            </div>
          </div>

          {/* Content-3 */}
          <div>
            <h1 className="text-8xl p-0 m-0 leading-none font-bold text-[#ffde1a]">
              3
            </h1>
            <div className="p-5 bg-white  bg-opacity-10 rounded-md relative">
              <p className="text-base font-bold text-[#ffde1a]">
                Get rewarded daily, <br /> weekly, monthly
              </p>
              <p className="text-xs text-white">and enjoy with your friends</p>

              <img
                src="/referral-program-flowch-3.png"
                alt=""
                className="h-[102px] absolute -top-10 right-0"
              />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -bottom-3 left-1/2" />

              <MdOutlineDoubleArrow className="text-7xl text-white opacity-5 absolute -top-4 left-0" />
            </div>
          </div>

          <div className="w-full mt-5 bg-yellow flex justify-center items-center rounded-md">
            <Link
              to="/referral-program/details"
              className=" py-3 font-semibold"
            >
              Refer a friend now
            </Link>
          </div>
        </div>

        {/* Referral Leaderboard */}
        <div className="border border-gray-500 mx-3 rounded-md bg-[#333] px-2 py-5 mt-2">
          <h2 className="text-xl text-center font-bold text-white">
            Referral Leaderboard
          </h2>

          <div className="mt-16 flex gap-2">
            {/* Second Place */}
            <div
              className="w-[107px] h-[155px] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-2.5 relative"
              style={{
                backgroundImage: "url(/referral-program-leaderboard-rank2.png)",
              }}
            >
              <FaCrown className="absolute -top-8 text-2xl text-yellow" />

              <img src="" alt="" />
              <div className="text-xs bg-yellow px-2 rounded-full py-1 font-bold absolute -top-2">
                Second place
              </div>
              <img src="/avatar2.png" alt="" className="w-[64px] h-[64px]" />
              <div>
                <p className="text-xs font-semibold text-white">bidd****ssa</p>
                <p className="text-xs font-bold text-yellow">10,913.34</p>
              </div>
            </div>

            {/* First Place */}
            <div
              className="w-[107px] h-[155px] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-2.5 relative -mt-5"
              style={{
                backgroundImage: "url(/referral-program-leaderboard-rank2.png)",
              }}
            >
              <FaCrown className="absolute -top-8 text-2xl text-yellow" />

              <img src="" alt="" />
              <div className="text-xs bg-yellow px-2 rounded-full py-1 font-bold absolute -top-2">
                Second place
              </div>
              <img src="/avatar2.png" alt="" className="w-[64px] h-[64px]" />
              <div>
                <p className="text-xs font-semibold text-white">bidd****ssa</p>
                <p className="text-xs font-bold text-yellow">10,913.34</p>
              </div>
            </div>

            {/* Third Place */}
            <div
              className="w-[107px] h-[155px] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-2.5 relative"
              style={{
                backgroundImage: "url(/referral-program-leaderboard-rank2.png)",
              }}
            >
              <FaCrown className="absolute -top-8 text-2xl text-yellow" />

              <img src="" alt="" />
              <div className="text-xs bg-yellow px-2 rounded-full py-1 font-bold absolute -top-2">
                Second place
              </div>
              <img src="/avatar2.png" alt="" className="w-[64px] h-[64px]" />
              <div>
                <p className="text-xs font-semibold text-white">bidd****ssa</p>
                <p className="text-xs font-bold text-yellow">10,913.34</p>
              </div>
            </div>
          </div>

          <h2 className="text-center font-bold text-yellow mt-8">
            Who received the bonous?
          </h2>

          <div className="mt-6 shadow-sm overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <tbody className="text-gray-400">
                {tableItems.map((item, idx) => (
                  <tr
                    key={idx}
                    className="divide-x divide-dashed divide-gray-500 odd:bg-[#262626] even:bg-transparent"
                  >
                    <td className="px-6 py-4">{item.name}</td>

                    <td className="px-6 py-4">
                      <span className="text-yellow font-medium">
                        {item.amount}
                      </span>
                      <span>BDT</span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowra flex flex-col">
                      <span>{item.date}</span>
                      <span className="text-[10px] text-end">{item.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </DBReferralProgram>
  );
};

export default DBPromotion;
