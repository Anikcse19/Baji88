/* eslint-disable react/prop-types */
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const RulesModal = ({ setOpen }) => {
  return (
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
            রেফারেলের সমপরিমাণ রিওয়ার্ড! আনলিমিটেড ডেইলি ক্যাশ রিওয়ার্ড এবং
            বোনাস আমাদের &apos;রেফার এ ফ্রেন্ড&apos; প্রোগ্রামের মাধ্যমে ক্লেইম
            করার জন্য প্রস্তুত।
          </span>
          <span>
            এই প্রমোশনটি সকল সদস্যদের জন্য এভেইল্যাবল। প্রমোশন শুরু 30th
            সেপ্টেম্বর ২০২৪ তারিখ ২২:০০ (GMT+6) থেকে।
          </span>

          <div>
            <span className="font-bold">আপনার কি করা উচিত?</span>
            <br />
            <span className="font-bold">‘আনলিমিটেড ডেইলি ক্যাশ রিওয়ার্ড’:</span>
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
              - রেফারার এবং রেফারি উভয়কেই রেফারির রেজিস্ট্রেশনের তারিখ থেকে, ৭
              দিনের মধ্যে নীচের রিকোয়ারমেন্টগুলি সহ, ফোন নম্বর এবং ইমেল
              ভেরিফিকেশন সম্পূর্ণ করতে হবে।
            </span>
            <img src="/turnover table.PNG" alt="" />
            <Link to="" className="text-blue-700 italic">
              *এখানে
            </Link>
            <span className="italic">
              তালিকাভুক্ত অডসগুলো দিয়ে গেমস এবং স্পোর্টস মার্কেটে রাখা বেটগুলি
              টার্নওভার ক্যালকুলেশনের সময় বাদ দেওয়া হয়।
            </span>
          </div>

          <div>
            <span className="font-bold">আপনি কি পাবেন?</span> <br />
            <span className="font-bold">
              ‘আনলিমিটেড ডেইলি ক্যাশ রিওয়ার্ড’ সম্পর্কে:
            </span>
            <span>
              -আপনার রেফারি এবং তাদের রেফারেলদের দ্বারা সংগ্রহীত মোট টার্নওভারের
              উপর ভিত্তি করে আপনি আনলিমিটেড ডেইলি ক্যাশ রিওয়ার্ড পাবেন, যেমনটি
              নীচের টেবিলে বলা হয়েছে।
            </span>
            <img src="/turnover table 2.PNG" alt="" />
            <span>
              - দিনের ২২:০০ (GMT+6) থেকে পরের দিনের ২১:৫৯ (GMT+6) পর্যন্ত সেটেল
              করা বেটগুলি টার্নওভার ক্যালকুলেশনের ক্ষেত্রে ধরা হবে।
            </span>
            <br />
            <span className="italic">
              <Link to="" className="text-blue-700">
                এখানে
              </Link>
              তালিকাভুক্ত অডসগুলো দিয়ে এক্সচেঞ্জ বুকমেকার, গেমস এবং স্পোর্টস
              মার্কেটে রাখা বেটগুলি টার্নওভার ক্যালকুলেশনের সময় বাদ দেওয়া হয়।
            </span>
          </div>

          <div className="italic">
            <span>উদাহরণ: </span> <br />
            <span>
              টিয়ার ১: যখন bjraf000 রেফার করে bjraf001-কে, তখন bjraf001 হয়
              bjraf000 এর &apos;টিয়ার ১&apos; রেফারি।
            </span>
            <br />
            <span>
              টিয়ার ২: bjraf001 যদি bjraf002 কে রেফার করে, bjraf002 তখন bjraf000
              এর &apos;টিয়ার ২&apos; রেফারি হয়ে যায়।
            </span>
            <br />
            <span>
              টিয়ার ৩: একইভাবে যদি bjraf002 রেফার করে bjraf003-কে, bjraf003 তখন
              bjraf000 এর &apos;টিয়ার ৩&apos; রেফারি হয়ে যাবে।
            </span>
            <br />
            <span>
              - যদি bjraf000-এর সকল &apos;টিয়ার ১&apos; রেফারিদের মোট টার্নওভার
              ২০০,০০০ টাকা হয়, bjraf000 ০.১৫% ক্যাশ রিওয়ার্ড পাবে।
            </span>
            <br />
            <span>
              - একইভাবে, যখন সকল &apos;টিয়ার ২&apos; রেফারিদের মোট টার্নওভার
              ৫,০০,০০০ টাকায় হিট করে, bjraf000 তখন ০.০৭% ক্যাশ রিওয়ার্ড পাবেন।
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
              উদাহরণ: আপনি এবং আপনার ২ জন রেফারি সকল রিকোয়ারমেন্টগুলি পূরণ করলে,
              আপনি মোট ৬০০ টাকা (৩০০ x ২ = ৬০০) রেফারেল বোনাস পাবেন।
            </span>
            <br />
            <span className="italic">
              *রেফারারদের শুধুমাত্র একবার প্রয়োজনীয় টার্নওভার সম্পন্ন করতে
              হবে।
            </span>
          </div>

          <div>
            <span className="font-bold">
              ক্যাশ রিওয়ার্ড ওয়েজারিং রিকোয়ারমেন্ট:
            </span>
            <br />
            <span>
              - ক্যাশ রিওয়ার্ড প্রতিদিন ০৩:০০ (GMT+6) এর মধ্যে &apos;রেফারেল
              প্রোগ্রাম&apos; পেইজে আপনার &apos;ক্যাশ রিওয়ার্ড&apos; সেকশনে জমা
              হবে।
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
              - রিকোয়ারমেন্টগুলি যেদিন পূরণ হবে ঐ দিনেই বোনাস আপনার অ্যাকাউন্টে
              জমা হবে।
            </span>
            <br />
            <span>- বোনাস যেকোনো গেমে ব্যবহার করা যাবে।</span> <br />
            <span>
              - উইথড্র করার আগে বোনাসের ১x ওয়েজারিং রিকোয়ারমেন্ট (টার্নওভার)
              কমপ্লিট করতে হবে।
            </span>
            <br />
            <span>
              - ওয়েজারিং রিকোয়ারমেন্ট (টার্নওভার) এর শর্ত কমপ্লিট না হওয়া
              পর্যন্ত আপনার ডিপোজিট, বোনাস এবং উইনিং এমাউন্ট উইথড্র করা যাবে না।
            </span>
          </div>

          <div>
            <span className="font-bold">সীমাবদ্ধতা:</span> <br />
            <span>
              - ন্যূনতম ক্যাশ রিওয়ার্ড পেআউট হল ০.০১ টাকা এবং সর্বোচ্চ পেআউট এর
              ক্ষেত্রে কোন লিমিট নেই।
            </span>
            <br />
            <span>- বোনাস বেট এই প্রমোশনে অন্তভূর্ক্ত হয় না।</span>
            <br />
            <span>
              - রেফারিরা যদি &apos;রেফারেল কোড&apos; বা &apos;রেফারেল
              লিঙ্ক&apos; ব্যবহার করে রেজিস্ট্রেশন না করে, তাহলে রেজিস্ট্রেশন
              সম্পূর্ণ হওয়ার পরে তারা &apos;রেফারেল কোড&apos; প্রবেশ করাতে
              পারবে না।
            </span>
            <br />
            <span>
              - ফার্স্ট উইথড্র করার আগে অ্যাকাউন্টে কমপক্ষে একটি ডিপোজিট রেকর্ড
              থাকা আবশ্যক।
            </span>
          </div>

          <div>
            <span className="font-bold">অন্যান্য শর্ত:</span> <br />
            <span>
              - যদি একাউন্টের ব্যাপারে কোন প্রকার অপব্যবহারের সন্দেহ হয় এবং /
              অথবা প্রাপ্ত সুবিধাটি মেনে না নেয় তবে Baji বোনাস বাতিলের অধিকার
              সংরক্ষণ করে।
            </span>
            <br />
            <span>
              - যে কোনও সময় এই প্রমোশন থেকে যে কোনও প্লেয়ারকে বাদ দিতে এবং কোনও
              ব্যাখ্যা না দিয়ে পরিবর্তন, সংশোধন, এবং / অথবা কোনও বোনাস অফার বা
              প্রমোশন বাতিল করার অধিকার Baji সংরক্ষণ করে।
            </span>
            <br />
            <span>- Baji-র সাধারণ নীতিমালা এবং শর্তাদি প্রযোজ্য।</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
