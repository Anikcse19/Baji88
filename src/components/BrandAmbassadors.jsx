const BrandAmbassadors = () => {
  const brandAmbassadors = [
    {
      img: "/mia-k.png",
      name: "Mia Khalifa",
    },
    {
      img: "/kevin-pietersen-signature.png",
      name: "Kavin Pietersen",
    },
    {
      img: "/amy-jacson.png",
      name: "Amy Jackson",
    },
    {
      img: "/hansika-signature.png",
      name: "Hansika Motwani",
    },
  ];

  return (
    <div className="mt-10 flex items-center justify-between">
      <div className="">
        <p className="text-[13px] font-bold md:font-normal text-[#14805e] md:text-white">
          Brand Ambassadors
        </p>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
          {brandAmbassadors.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <img src={item.img} alt="" className="h-[30px] md:h-[40px]" />
              <p className="text-gray-400 hover:text-[#189b71] text-sm">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <p className="text-[13px] font-bold md:font-normal text-[#14805e] md:text-white">
          Gamming Licence
        </p>

        <div className="mt-3">
          <img src="/public/gaming_license.png" alt="" className="h-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default BrandAmbassadors;
