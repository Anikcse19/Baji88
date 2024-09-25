import { useState } from "react";
import Exclusive from "./ui/Exclusive";
import Sport from "./ui/Sport";

const FloatingNav = () => {
  const [currentTab, setCurrentTab] = useState("এক্সক্লুসিভ");
  return (
    <div className="lg:hidden">
      <div className="overflow-x-scroll scroll-smooth w-full pb-4">
        <div className="flex items-center gap-3 px-2">
          {floatingNavs.map((nav) => (
            <div
              className="w-[70px] flex flex-col items-center gap-1"
              key={nav.id}
              onClick={() => {
                setCurrentTab(nav?.title);
              }}
            >
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={nav?.icon}
                  alt=""
                />
              </div>
              <p className="text-white font-bold text-sm">{nav?.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* navs results */}
      <div className="pt-2  px-3">
        <div>
          {/* nav title */}
          <div className="border-l-4 border-green-500 rounded-sm px-2">
            <p className="text-white">{currentTab}</p>
          </div>
          {/* elements */}
          <div className="py-4">
            {currentTab == "এক্সক্লুসিভ" ? (
              <Exclusive />
            ) : (
              currentTab == "স্পোর্ট" && <Sport />
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
