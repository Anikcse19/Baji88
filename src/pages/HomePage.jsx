import { HiOutlineSpeakerphone } from "react-icons/hi";
import FloatingNav from "../components/FloatingNav";
import HomeBanner from "../components/HomeBanner";
import Layout from "../components/Layout/Layout";
import FavouritesAndCharcteristics from "../components/ui/FavouritesAndCharcteristics";
import HomePageSlider from "../components/Slider/HomePageSlider";

const HomePage = () => {
  return (
    <Layout>
      <div className="hidde lg:block">
        <HomeBanner />
      </div>
      <div className="block lg:hidden  py-3 mb-6">
        <HomePageSlider />

        <div className="w-full h-8">
          <div className="w-[95%] lg:w-[85%] mx-auto flex items-center justify-center gap-1 ">
            <HiOutlineSpeakerphone className="lg:hidden text-green-500 text-6xl" />

            <div className="relative  overflow-hidden  px-2">
              <div className="flex items-center gap-1">
                <p className="text-move whitespace-nowrap text-white hover:animation-pause text-sm lg:text-base">
                  Dear valued customer, if you have trouble visiting
                  bajilive.net, please visit 112233bj.com, 2211133bj.com, which
                  is our backup URL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* floating nav for mobiles version */}
      <FloatingNav />
      {/* favourites and characteristics games for moile version */}
      <FavouritesAndCharcteristics />
    </Layout>
  );
};

export default HomePage;
