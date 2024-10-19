import { useNavigate } from "react-router-dom";

const Crash = () => {
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

export default Crash;

const elements = [
  {
    id: 0,
    title: "All",
    path: "/mcrash?cat=All",
    img: "/all-icon.svg",
  },
  {
    id: 1,
    title: "Spribe",
    path: "/mcrash?cat=Spribe",
    img: "/table-provider-jdbaspribe.png",
  },
  {
    id: 2,
    title: "Rich88",
    path: "/mcrash?cat=Rich88",
    img: "/slot-provider-rich88.png",
  },
  {
    id: 3,
    title: "Jilli",
    path: "/mcrash?cat=Jilli",
    img: "/slot-provider-awcmjili.png",
  },
  {
    id: 4,
    title: "Pragmatic Play",
    path: "/mcrash?cat=Pragmatic Play",
    img: "/provider-awcmpp.png",
  },
  {
    id: 5,
    title: "Fa Chai",
    path: "/mcrash?cat=Fa Chai",
    img: "/slot-provider-awcmfc.png",
  },
  {
    id: 6,
    title: "KingMaker",
    path: "/mcrash?cat=KingMaker",
    img: "/table-provider-awcmkm.png",
  },
  {
    id: 7,
    title: "KA Gaming",
    path: "/mcrash?cat=KA Gaming",
    img: "/slot-provider-ka.png",
  },
];
