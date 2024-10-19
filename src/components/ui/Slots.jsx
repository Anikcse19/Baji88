import { useNavigate } from "react-router-dom";

const Slots = () => {
  const router = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-2">
      {elements.map((element) => (
        <div
          className="bg-[#333333] rounded p-2 flex justify-center items-center"
          key={element.id}
        >
          <div
            onClick={() => router(element?.path)}
            className="flex flex-col items-center"
          >
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
    id: 0,
    title: "All",
    path: "/mslots?cat=All",
    img: "/all-icon.svg",
  },
  {
    id: 1,
    title: "Jilli",
    path: "/mslots?cat=Jilli",
    img: "/slot-provider-awcmjili.png",
  },
  {
    id: 2,
    title: "PG Soft",
    path: "/mslots?cat=PG Soft",
    img: "/slot-provider-pg.png",
  },
  {
    id: 3,
    title: "Pragmatic Play",
    path: "/mslots?cat=Pragmatic Play",
    img: "/provider-awcmpp.png",
  },
  {
    id: 4,
    title: "JDB",
    path: "/mslots?cat=JDB",
    img: "/slot-provider-jdb.png",
  },
  {
    id: 5,
    title: "Fa Chai",
    path: "/mslots?cat=Fa Chai",
    img: "/slot-provider-awcmfc.png",
  },
  {
    id: 6,
    title: "SpadeGaming",
    path: "/mslots?cat=SpadeGaming",
    img: "/slot-provider-awcmsg.png",
  },
  {
    id: 7,
    title: "Red Tiger",
    path: "/mslots?cat=Red Tiger",
    img: "/slot-provider-awcmrt.png",
  },
  {
    id: 8,
    title: "FastSpin",
    path: "/mslots?cat=FastSpin",
    img: "/slot-provider-awcmfastspin.png",
  },
  {
    id: 9,
    title: "Playtech",
    path: "/mslots?cat=Playtech",
    img: "/provider-awcmpt.png",
  },
  {
    id: 10,
    title: "Yellow Bat",
    path: "/mslots?cat=Yellow Bat",
    img: "/slot-provider-awcmyesbingo.png",
  },
  {
    id: 11,
    title: "Rich88",
    path: "/mslots?cat=Rich88",
    img: "/slot-provider-rich88.png",
  },
  {
    id: 100,
    title: "KA Gaming",
    path: "/mslots?cat=KA Gaming",
    img: "/slot-provider-ka.png",
  },
  {
    id: 12,
    title: "WorldMatch",
    path: "/mslots?cat=WorldMatch",
    img: "/slot-provider-worldmatch.png",
  },
  {
    id: 13,
    title: "CQ9",
    path: "/mslots?cat=CQ9",
    img: "/slot-provider-cq9.png",
  },
  {
    id: 14,
    title: "Joker",
    path: "/mslots?cat=Joker",
    img: "/slot-provider-joker.png",
  },
  {
    id: 15,
    title: "PLAY'N GO",
    path: "/mslots?cat=PLAY'N GO",
    img: "/slot-provider-playngo.png",
  },
  {
    id: 16,
    title: "Play8",
    path: "/mslots?cat=Play8",
    img: "/slot-provider-awcmp8.png",
  },
  {
    id: 17,
    title: "Netent",
    path: "/mslots?cat=Netent",
    img: "/slot-provider-netent.png",
  },
];
