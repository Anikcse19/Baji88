const FavouritesAndCharcteristics = () => {
  return (
    <div className="bg-[#333333] py-5 px-3 lg:hidden">
      <div className="flex flex-col gap-y-8">
        {/* প্রিয় */}
        <div>
          <h1 className="border-l-4 border-green-600 rounded-sm px-2 text-white font-bold text-xl">
            প্রিয়
          </h1>
          <div className="mt-6">
            <div className="w-full overflow-x-auto  ">
              <div className="w-full flex items-center gap-5">
                {favouritesMatches.map((f) => (
                  <div
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    }}
                    className="min-w-[300px] h-[170px] rounded-md"
                    key={f}
                  >
                    <img className="w-full h-full rounded-md" src={f} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* বৈশিষ্ট্যপূর্ণ  */}
        <div>
          <h1 className="border-l-4 border-green-600 rounded-sm px-2 text-white font-bold text-xl">
            বৈশিষ্ট্যযুক্ত গেম
          </h1>
          <div className="mt-6">
            <div className="w-full overflow-x-auto  ">
              <div className="w-full flex items-center gap-5">
                {characteristicsMatches.map((f) => (
                  <div
                    className="min-w-[200px] h-fit rounded-md flex flex-col gap-y-2"
                    key={f.img}
                  >
                    <img
                      className="w-full h-[120px] rounded-md"
                      src={f.img}
                      alt=""
                    />
                    <p className="text-white   text-lg">
                      {f.title.length > 15
                        ? `${f.title.slice(0, 15)}...`
                        : f.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritesAndCharcteristics;

const favouritesMatches = [
  "/priyoBanner1.jpg",
  "/priyoBanner2.jpg",
  "/priyoBanner3.jpg",
];

const characteristicsMatches = [
  { title: "Super Ace", img: "/charBanner1.png" },
  { title: "Money Comming", img: "/charBanner2.png" },
  { title: "CHILIHUAHUA", img: "/charBanner3.png" },
  { title: "Crazy Buffalo", img: "/charBanner4.png" },
  { title: "Fortune Gems 2", img: "/charBanner5.png" },
  { title: "Wild Bounty Showdown", img: "/charBanner6.png" },
];
