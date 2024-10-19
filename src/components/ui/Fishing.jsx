import { useNavigate } from "react-router-dom";

const Fishing = () => {
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

export default Fishing;

const elements = [
  {
    id: 0,
    title: "All",
    path: "/mfishing?cat=All",
    img: "/all-icon.svg",
  },
  {
    id: 1,
    title: "Jilli",
    path: "/mfishing?cat=Jilli",
    img: "/slot-provider-awcmjili.png",
  },
  {
    id: 2,
    title: "Fa Chai",
    path: "/mfishing?cat=Fa Chai",
    img: "/slot-provider-awcmfc.png",
  },
  {
    id: 3,
    title: "JDB",
    path: "/mfishing?cat=JDB",
    img: "/slot-provider-jdb.png",
  },
  {
    id: 4,
    title: "KA Gaming",
    path: "/mfishing?cat=KA Gaming",
    img: "/slot-provider-ka.png",
  },
  {
    id: 5,
    title: "CQ9",
    path: "/mfishing?cat=CQ9",
    img: "/slot-provider-cq9.png",
  },
  {
    id: 6,
    title: "Joker",
    path: "/mfishing?cat=Joker",
    img: "/slot-provider-joker.png",
  },
  {
    id: 7,
    title: "Yellow Bat",
    path: "/mfishing?cat=Yellow Bat",
    img: "/slot-provider-awcmyesbingo.png",
  },
];
