import { useNavigate } from "react-router-dom";

const Arcade = () => {
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

export default Arcade;

const elements = [
  {
    id: 0,
    title: "All",
    path: "/marcade?cat=All",
    img: "/all-icon.svg",
  },
  {
    id: 1,
    title: "JDB",
    path: "/marcade?cat=JDB",
    img: "/slot-provider-jdb.png",
  },
  {
    id: 2,
    title: "Fa Chai",
    path: "/marcade?cat=Fa Chai",
    img: "/slot-provider-awcmfc.png",
  },
  {
    id: 3,
    title: "PG Soft",
    path: "/marcade?cat=PG Soft",
    img: "/slot-provider-pg.png",
  },
  {
    id: 4,
    title: "KA Gaming",
    path: "/marcade?cat=KA Gaming",
    img: "/slot-provider-ka.png",
  },
  {
    id: 5,
    title: "Rich88",
    path: "/marcade?cat=Rich88",
    img: "/slot-provider-rich88.png",
  },
  {
    id: 6,
    title: "CQ9",
    path: "/marcade?cat=CQ9",
    img: "/slot-provider-cq9.png",
  },
];
