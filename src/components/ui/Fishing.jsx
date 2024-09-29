const Fishing = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {elements.map((element) => (
        <div
          className="bg-[#333333] rounded p-2 flex justify-center items-center"
          key={element.id}
        >
          <div className="flex flex-col items-center">
            <span className="w-10 h-14">
              <img
                className="w-10 h-10 object-cover"
                src={element.img}
                alt=""
              />
            </span>
            <span className="flex justify-center">
              <p className="text-white text-xs">{element.title}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fishing;

const elements = [
  {
    id: 1,
    title: "Jilli",
    img: "/slot-provider-awcmjili.png",
  },
  {
    id: 2,
    title: "Fa Chai",
    img: "/slot-provider-awcmfc.png",
  },
  {
    id: 3,
    title: "JDB",
    img: "/slot-provider-jdb.png",
  },
  {
    id: 4,
    title: "KA Gaming",
    img: "/slot-provider-ka.png",
  },
  {
    id: 5,
    title: "CQ9",
    img: "/slot-provider-cq9.png",
  },
  {
    id: 6,
    title: "Joker",
    img: "/slot-provider-joker.png",
  },
  {
    id: 7,
    title: "Yellow Bat",
    img: "/slot-provider-awcmyesbingo.png",
  },
];
