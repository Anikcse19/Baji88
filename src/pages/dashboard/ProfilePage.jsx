import DashboardLayout from "../../components/Layout/DashboardLayout";
import DBHomePageMainSlider from "../../components/Slider/DBHomePageMobileSlider";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const ProfilePage = () => {
  return (
    <DashboardLayout>
      <DBHomePageMainSlider />

      <div className="w-full h-8 bg-black">
        <div className="w-[95%] lg:w-[85%] mx-auto flex items-center justify-center gap-1 ">
          <HiOutlineSpeakerphone className="lg:hidden text-green-500 text-6xl" />

          <div className="relative  overflow-hidden  px-2">
            <div className="flex items-center gap-1">
              <p className="text-move whitespace-nowrap text-white hover:animation-pause text-sm lg:text-base">
                Dear valued customer, if you have trouble visiting bajilive.net,
                please visit 112233bj.com, 2211133bj.com, which is our backup
                URL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
