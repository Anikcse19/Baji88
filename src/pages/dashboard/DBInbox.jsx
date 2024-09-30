import { LuCalendarDays } from "react-icons/lu";
import CommonNav from "../../utils/CommonNav";
import { TbSpeakerphone } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const DBInbox = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <CommonNav>Inbox</CommonNav>

      {/* Date and Time */}
      <div className="flex items-center justify-between text-[#999] my-2 px-2">
        <div className="flex items-center gap-1">
          <LuCalendarDays className="text-[15px]" />
          <p className="text-xs">2024/09/29</p>
        </div>

        <div className="border rounded-[3px] px-[3px]">
          <p className="text-[10px]">GMT+6</p>
        </div>
      </div>
      {/* Message */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="bg-[#333] p-2 flex gap-5 h-[51px]"
      >
        <div className="bg-primary w-[30px] h-[30px] rounded-full flex justify-center items-center">
          <TbSpeakerphone className="text-white -rotate-[30deg]" />
        </div>

        <div className="w-[90%]">
          <h3 className="text-white text-xs flex items-center justify-between">
            ১০ লাখ ভিআইপি সাপ্তাহিক লিডারবোর্ড - দখল ক...
            <span className="text-[10px] text-[#999]">22.12.58</span>
          </h3>
          <p className="text-[10px] text-[#999]">
            প্রিয় গ্রাহক, এটি খেলার সময়! আমাদের ১০ লাখ ভিআইপি...
          </p>
        </div>
      </div>

      {/* Date and Time */}
      <div className="flex items-center justify-between text-[#999] my-2 px-2">
        <div className="flex items-center gap-1">
          <LuCalendarDays className="text-[15px]" />
          <p className="text-xs">2024/09/29</p>
        </div>

        <div className="border rounded-[3px] px-[3px]">
          <p className="text-[10px]">GMT+6</p>
        </div>
      </div>
      {/* Message */}
      <div className="bg-[#333] p-2 flex gap-5 h-[51px]">
        <div className="bg-primary w-[30px] h-[30px] rounded-full flex justify-center items-center">
          <TbSpeakerphone className="text-white -rotate-[30deg]" />
        </div>

        <div className="w-[90%]">
          <h3 className="text-white text-xs flex items-center justify-between">
            ১০ লাখ ভিআইপি সাপ্তাহিক লিডারবোর্ড - দখল ক...
            <span className="text-[10px] text-[#999]">22.12.58</span>
          </h3>
          <p className="text-[10px] text-[#999]">
            প্রিয় গ্রাহক, এটি খেলার সময়! আমাদের ১০ লাখ ভিআইপি...
          </p>
        </div>
      </div>

      <div className="bg-[#333] p-2 flex gap-5 h-[51px]">
        <div className="bg-primary w-[30px] h-[30px] rounded-full flex justify-center items-center relative">
          <TbSpeakerphone className="text-white -rotate-[30deg]" />

          <div className="w-2 h-2 absolute top-0 right-0 bg-red-500 rounded-full"></div>
        </div>

        <div className="w-[90%]">
          <h3 className="text-white text-xs flex items-center justify-between">
            ১০ লাখ ভিআইপি সাপ্তাহিক লিডারবোর্ড - দখল ক...
            <span className="text-[10px] text-[#999]">22.12.58</span>
          </h3>
          <p className="text-[10px] text-[#999]">
            প্রিয় গ্রাহক, এটি খেলার সময়! আমাদের ১০ লাখ ভিআইপি...
          </p>
        </div>
      </div>

      {/* Message Modal */}
      {open && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center p-[4vw]">
          <div>
            <div className="bg-primary text-white font-bold px-4 py-3 flex gap-">
              <p className="w-[93%] text-sm">
                ১০ লাখ ভিআইপি সাপ্তাহিক লিডারবোর্ড - দখল করুন & বিজয়ী হোন!
              </p>
              <button onClick={() => setOpen((prev) => !prev)}>
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>
            <div className="bg-white p-5">
              <p className="text-sm">
                প্রিয় গ্রাহক, এটি খেলার সময়! আমাদের ১০ লাখ ভিআইপি সাপ্তাহিক
                লিডারবোর্ডে যোগ দিন এবং এই সপ্তাহের Evolution Crazy Time
                Mission- এ অংশ নিন। Pachinko টেবিলে হিট করুন, আপনার বেট রাখুন
                এবং শীর্ষে আরোহণ করুন। ৳২,৪০,০০০ পর্যন্ত ক্যাশ প্রাইজ সহ এটি
                আপনার প্রজ্বলিত হওয়ার সেরা সময়। স্পিন করা শুরু করুন!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DBInbox;
