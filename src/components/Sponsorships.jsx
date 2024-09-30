const Sponsorships = () => {
  const sponsorships = [
    {
      title: "Bologna FC 1909",
      des: "Betting Partner",
      img: "/public/bologna-fc-1909.png",
    },
    {
      title: "Quetta Gladiators",
      des: "Titanium Sponsor",
      img: "/public/quetta-gladiators.png",
    },
    {
      title: "Sunrisers Eastern Cape",
      des: "Titanium Sponsor",
      img: "/public/sunrisers-eastern-cape.png",
    },
    {
      title: "Deccan Gladiators",
      des: "Titanium Sponsor",
      img: "/public/deccan-gladiators.png",
    },
  ];
  return (
    <div className="mt-10">
      <p className="text-[13px] font-bold md:font-normal text-[#14805e] md:text-white">
        Sponsorships
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-20 mt-3">
        {sponsorships.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <img
              src={item.img}
              alt=""
              className=" w-[40px] md:w-[50px] h-[40px] md:h-[50px] object-cover"
            />

            <div>
              <p className="text-white text-[11px] font-bold md:font-normal md:text-sm">
                {item.title}
              </p>
              <p className="text-[10px] text-gray-400">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsorships;
