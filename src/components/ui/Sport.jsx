const Sport = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {elements.map((element) => (
        <div
          className="bg-[#333333] rounded p-2 flex justify-center items-center"
          key={element.id}
        >
          <div>
            <span className="w-11 h-11">
              <img
                className="w-full h-full object-cover"
                src={element.img}
                alt=""
              />
            </span>
            <span className="flex justify-center">
              <p className="text-white text-sm">{element.title}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sport;

const elements = [
  {
    id: 1,
    title: "এক্সচেঞ্জ",
    img: "/icon-exchange.svg",
  },
  {
    id: 2,
    title: "I-Sports",
    img: "/icon-sportbook.svg",
  },
  {
    id: 3,
    title: "SBO Sports",
    img: "/icon-sbov2.svg",
  },
  {
    id: 4,
    title: "E1Sport",
    img: "/icon-awcme1sport.svg",
  },
  {
    id: 5,
    title: "ঘোড়া বই",
    img: "/icon-horsebook.svg",
  },
  {
    id: 2,
    title: "ভার্চুয়াল",
    img: "/icon-virtual.svg",
  },
  {
    id: 3,
    title: "কাবাডি",
    img: "/icon-kabaddi.svg",
  },
  {
    id: 4,
    title: "Fantasy",
    img: "/icon-powerelevenv2.svg",
  },
];
