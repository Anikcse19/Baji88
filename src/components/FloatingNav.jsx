import { useState } from "react";
import Exclusive from "./ui/Exclusive";
import Sport from "./ui/Sport";
import Casino from "./ui/Casino";
import Slots from "./ui/Slots";
import Table from "./ui/Table";
import Crash from "./ui/Crash";
import Fishing from "./ui/Fishing";
import Arcade from "./ui/Arcade";
import Lottery from "./ui/Lottery";

const FloatingNav = () => {
  const [currentTab, setCurrentTab] = useState("এক্সক্লুসিভ");
  return (
    <div className="lg:hidden">
      <div className="overflow-x-auto scroll-smooth w-full pb-4">
        <div className="flex items-center gap-x-2 px-2">
          {floatingNavs.map((nav) => (
            <div
              className={`w-[77px]  px-3 py-3 box-border flex flex-col items-center ${
                currentTab == nav?.title && "bg-[#2b2b2b]"
              }`}
              key={nav.id}
              onClick={() => setCurrentTab(nav.title)}
            >
              <div className="w-[45px] h-[45px] flex-shrink-0">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={nav.icon}
                  alt={nav.title}
                />
              </div>
              <p className="text-center text-white font-bold text-xs mt-2">
                {nav.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="pt-2 px-3">
        <div>
          {/* Tab Title */}
          <div className="border-l-4 border-green-500 rounded-sm px-2">
            <p className="text-white">{currentTab}</p>
          </div>

          {/* Tab Content */}
          <div className="py-4">
            {currentTab === "এক্সক্লুসিভ" ? (
              <Exclusive />
            ) : currentTab === "স্পোর্ট" ? (
              <Sport />
            ) : currentTab === "ক্যাসিনো" ? (
              <Casino />
            ) : currentTab === "স্লট" ? (
              <Slots />
            ) : currentTab === "টেবিল" ? (
              <Table />
            ) : currentTab === "ক্রাশ" ? (
              <Crash />
            ) : currentTab === "ফিসিং" ? (
              <Fishing />
            ) : currentTab === "আরকেড" ? (
              <Arcade />
            ) : (
              <Lottery />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;

const floatingNavs = [
  {
    id: 1,
    title: "এক্সক্লুসিভ",
    icon: "/icon-exclusive.png",
  },
  {
    id: 2,
    title: "স্পোর্ট",
    icon: "/icon-sport.png",
  },
  {
    id: 3,
    title: "ক্যাসিনো",
    icon: "/icon-casino.png",
  },
  {
    id: 4,
    title: "স্লট",
    icon: "/icon-slot.png",
  },
  {
    id: 5,
    title: "টেবিল",
    icon: "/icon-table.png",
  },
  {
    id: 6,
    title: "ক্রাশ",
    icon: "/icon-crash.png",
  },
  {
    id: 7,
    title: "ফিসিং",
    icon: "/icon-fish.png",
  },
  {
    id: 8,
    title: "আরকেড",
    icon: "/icon-arcade.png",
  },
  {
    id: 9,
    title: "লটারি",
    icon: "/icon-lottery.png",
  },
];
