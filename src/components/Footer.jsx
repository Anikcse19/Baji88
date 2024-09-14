import ToggleParagraph from "./ToggleParagraph";

const Footer = () => {
  return (
    <div className="bg-[#353535] mx-auto">
      <ToggleParagraph />

      <div className="my-5 w-[75%] mx-auto">
        {/* services */}
        <div className="flex items-center justify-between gap-x-5 pb-5">
          {/* item 1 */}
          <div className="flex items-center gap-5">
            <div>
              <img className="w-16 h-16" src="/customerService.png" alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white">কাস্টমার সাপোর্ট</p>
              <p className="text-xs text-gray-400">
                ২৪/৭ আপনাদের সেবায় নিয়োজিত
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div className="flex items-center gap-5">
            <div>
              <img className="w-16 h-16" src="/guide.png" alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white">নতুন সদস্যদের জন্যে গাইড</p>
              <p className="text-xs text-gray-400">
                বহুল আলোচিত প্রশ্ন সমুহ এবং সাহায্যকারী গাইড
              </p>
              <p className="text-white text-xs hover:text-green-500 cursor-pointer transition-all duration-300 ease-out">
                এখনই এক্সপ্লোর করুণ
              </p>
            </div>
          </div>
          {/* item 3 */}
          <div className="flex items-center gap-5">
            <div>
              <img className="w-16 h-16" src="/ambasadors.png" alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white">ব্র্যান্ড অ্যাম্বাসেডর</p>
              <p className="text-xs text-gray-400">সেলিব্রিটির সাথে খেলুন</p>
              <p className="text-white text-xs hover:text-green-500 cursor-pointer transition-all duration-300 ease-out">
                এখনই মজা করুন
              </p>
            </div>
          </div>
          {/* item 4 */}
          <div className="">
            <img src="/android-bn.png" alt="" />
          </div>
        </div>

        <hr />
        {/* sponsorships */}
        <div className="mt-5"></div>
      </div>
    </div>
  );
};

export default Footer;
