const Card = () => {
  return (
    <div className="relative h-[150px] group overflow-hidden cursor-pointer">
      {" "}
      <div
        style={{
          backgroundImage: "url('/cardImg1.png')",
        }}
        className=" w-[180px] h-[150px]  bg-cover bg-center bg-no-repeat relative "
      >
        <p className="absolute bottom-3 left-2 text-white text-sm  z-50">
          Evalution crazy time
        </p>
        <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-gray-900 to-transparent "></div>
      </div>
      <div className="w-[180px] flex justify-center items-center h-[150px] z-[1000] bg-black bg-opacity-70 absolute -bottom-full group-hover:bottom-0 transition-all duration-200 ease-in">
        <span
          style={{
            background:
              "linear-gradient(to right, #fbc103 0, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103 100%)",
          }}
          className="px-5 py-1 rounded-md opacity-100"
        >
          প্লে গেইম
        </span>
      </div>
    </div>
  );
};

export default Card;
