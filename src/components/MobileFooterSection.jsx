import BottomContent from "./BottomContent";
import BrandAmbassadors from "./BrandAmbassadors";
import CommunityWebsites from "./CommunityWebsites";
import PaymentMethodFooter from "./PaymentMethodFooter";
import ResponsibleGaming from "./ResponsibleGaming";
import Sponsorships from "./Sponsorships";

const MobileFooterSection = () => {
  return (
    <div className="md:hidden w-full md:w-[75%] mx-auto px-3 md:px-0">
      <Sponsorships />
      <BrandAmbassadors />
      <PaymentMethodFooter />
      <div className="flex">
        <ResponsibleGaming />
        <CommunityWebsites />
      </div>

      <hr className=" mt-10 opacity-10" />
      <div className="md: my-4">
        <p className="text-[13px]  font-bold md:font-normal text-[#14805e] md:text-white">
          Gamming Licence
        </p>
        <img src="/gaming_license.png" alt="" className="h-[25px] mt-3" />
      </div>
      <hr className="opacity-10" />

      <BottomContent />
    </div>
  );
};

export default MobileFooterSection;
