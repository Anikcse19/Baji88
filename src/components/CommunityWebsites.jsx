const CommunityWebsites = () => {
  const communityWebsites = [
    {
      icon: "/FaceBook.png",
    },
    {
      icon: "/Instagram.png",
    },
    {
      icon: "/Twitter.png",
    },
    {
      icon: "/Pinterest.png",
    },
    {
      icon: "/Youtube.png",
    },
    {
      icon: "/Telegram.png",
    },
  ];

  return (
    <div className="w-[50%] md:w-[86%] mt-10">
      <p className="text-[13px] font-bold md:font-normal text-[#14805e] md:text-white">
        Payment Methods
      </p>

      <div className="flex flex-wrap items-center mt-3  gap-4 md:gap-8">
        {communityWebsites.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.icon}
              alt=""
              className="h-6 filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityWebsites;
