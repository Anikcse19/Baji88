import { useNavigate } from "react-router-dom";

const Lottery = () => {
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

export default Lottery;

const elements = [
  {
    id: 0,
    title: "All",
    path: "/mlottey?cat=All",
    img: "/all-icon.svg",
  },
  {
    id: 1,
    title: "Jilli",
    path: "/mlottery?cat=Jilli",
    img: "/slot-provider-awcmjili.png",
  },
  {
    id: 2,
    title: "KingMaker",
    path: "/mlottery?cat=KingMaker",
    img: "/table-provider-awcmkm.png",
  },
  {
    id: 3,
    title: "Yellow Bat",
    path: "/mlottery?cat=Yellow Bat",
    img: "/slot-provider-awcmyesbingo.png",
  },
  {
    id: 4,
    title: "Number",
    path: "/mlottery?cat=Number",
    img: "/provider-number.png",
  },
  {
    id: 5,
    title: "Joker",
    path: "/mlottery?cat=Joker",
    img: "/slot-provider-joker.png",
  },
];
