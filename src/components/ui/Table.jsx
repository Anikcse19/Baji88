import { useNavigate } from "react-router-dom";

const Table = () => {
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

export default Table;

const elements = [
  {
    id: 0,
    title: "All",
    path: "/mtable?cat=All",
    img: "/all-icon.svg",
  },
  {
    id: 1,
    title: "Jilli",
    path: "/mtable?cat=Jilli",
    img: "/slot-provider-awcmjili.png",
  },
  {
    id: 2,
    title: "KingMaker",
    path: "/mtable?cat=KingMaker",
    img: "/table-provider-awcmkm.png",
  },
  {
    id: 3,
    title: "Spribe",
    path: "/mtable?cat=Spribe",
    img: "/table-provider-jdbaspribe.png",
  },
  {
    id: 4,
    title: "Rich88",
    path: "/mtable?cat=Rich88",
    img: "/slot-provider-rich88.png",
  },
  {
    id: 5,
    title: "PG Soft",
    path: "/mtable?cat=PG Soft",
    img: "/slot-provider-pg.png",
  },
  {
    id: 6,
    title: "WorldMatch",
    path: "/mtable?cat=WorldMatch",
    img: "/slot-provider-worldmatch.png",
  },
  {
    id: 7,
    title: "KA Gaming",
    path: "/mtable?cat=KA Gaming",
    img: "/slot-provider-ka.png",
  },
  {
    id: 8,
    title: "CQ9",
    path: "/mtable?cat=CQ9",
    img: "/slot-provider-cq9.png",
  },
  {
    id: 9,
    title: "PLAY'N GO",
    path: "/mtable?cat=PLAY'N GO",
    img: "/slot-provider-playngo.png",
  },
  {
    id: 10,
    title: "Bpoker",
    path: "/mtable?cat=Bpoker",
    img: "/table-provider-bpoker.png",
  },
  {
    id: 11,
    title: "Ludo",
    path: "/mtable?cat=Ludo",
    img: "/table-provider-ludo.png",
  },
];
