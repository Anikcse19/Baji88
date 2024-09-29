const Casino = () => {
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

export default Casino;

const elements = [
  {
    id: 1,
    title: "Evolution",
    img: "/provider-evo.png",
  },
  {
    id: 2,
    title: "Sexy",
    img: "/provider-awcmsexy.png",
  },
  {
    id: 3,
    title: "Pragmatic Play",
    img: "/provider-awcmpp.png",
  },
  {
    id: 4,
    title: "Playtech",
    img: "/provider-awcmpt.png",
  },
  {
    id: 5,
    title: "HotRoad",
    img: "/provider-awcmhotroad.png",
  },
];
