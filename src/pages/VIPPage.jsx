import Layout from "../components/Layout/Layout";

const VIPPage = () => {
  return (
    <Layout>
      <div>
        <img className="w-full h-full" src="/vipBanner.jpg" alt="" />
      </div>

      <div className="flex justify-center -mt-36 ">
        <img src="/joinNowImg.png" alt="" />
      </div>

      {/* vip cards */}
      <div className="w-full h-fit py-20 bg-black ">
        <div className="w-[60%] mx-auto h-full flex flex-col justify-center items-center">
          <p style={{}} className="vip-text ">
            VIP PRIVILEGES
          </p>
          {/* cards */}
          <div className="grid grid-cols-2 gap-6 place-items-center mt-10">
            {vipPrivilegesInfos?.map((info) => (
              <div key={info}>
                <img src={info} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VIPPage;
const vipPrivilegesInfos = [
  "/vipCardImg1.png",
  "/vipCardImg2.png",
  "/vipCardImg3.png",
  "/vipCardImg4.png",
];
