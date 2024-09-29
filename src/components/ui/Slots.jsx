const Slots = () => {
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

export default Slots;

const elements = [
  {
    id: 1,
    title: "Jilli",
    img: "/slot-provider-awcmjili.png",
  },
  {
    id: 2,
    title: "PG Soft",
    img: "/slot-provider-pg.png",
  },
  {
    id: 3,
    title: "Pragmatic Play",
    img: "/provider-awcmpp.png",
  },
  {
    id: 4,
    title: "JDB",
    img: "/slot-provider-jdb.png",
  },
  {
    id: 5,
    title: "Fa Chai",
    img: "/slot-provider-awcmfc.png",
  },
  {
    id: 6,
    title: "SpadeGaming",
    img: "/slot-provider-awcmsg.png",
  },
  {
    id: 7,
    title: "Red Tiger",
    img: "/slot-provider-awcmrt.png",
  },
  {
    id: 8,
    title: "FastSpin",
    img: "/slot-provider-awcmfastspin.png",
  },
  {
    id: 9,
    title: "Playtech",
    img: "/provider-awcmpt.png",
  },
  {
    id: 10,
    title: "Yellow Bat",
    img: "/slot-provider-awcmyesbingo.png",
  },
  {
    id: 11,
    title: "Rich88",
    img: "/slot-provider-rich88.png",
  },
  {
    id: 100,
    title: "KA Gaming",
    img: "/slot-provider-ka.png",
  },
  {
    id: 12,
    title: "WorldMatch",
    img: "/slot-provider-worldmatch.png",
  },
  {
    id: 13,
    title: "CQ9",
    img: "/slot-provider-cq9.png",
  },
  {
    id: 14,
    title: "Joker",
    img: "/slot-provider-joker.png",
  },
  {
    id: 15,
    title: "PLAY'N GO",
    img: "/slot-provider-playngo.png",
  },
  {
    id: 16,
    title: "Play8",
    img: "/slot-provider-awcmp8.png",
  },
  {
    id: 17,
    title: "Netent",
    img: "/slot-provider-netent.png",
  },
];
