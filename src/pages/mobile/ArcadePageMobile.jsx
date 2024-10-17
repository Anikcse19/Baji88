import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const ArcadePageMobile = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("cat");
  const [currentNav, setCurrentNav] = useState("");
  const [elements, setElements] = useState(elements1);

  useEffect(() => {
    const matchingElement = elements1.find((el) => el.title === category);
    if (matchingElement) {
      setElements((prevArray) => [
        prevArray[0], // First element stays fixed
        matchingElement,
        ...prevArray.filter(
          (el) => el.title !== matchingElement.title && el !== prevArray[0]
        ), // All other elements except the first and matched one
      ]);
    }

    // Update the current nav with the category
    setCurrentNav(category);
  }, [location.search]);

  return (
    <Layout>
      <div>
        {/* floating nav */}
        <div className="relative w-full py-3 flex mt-3 items-center">
          {/* navs (scrollable horizontally) */}
          <div className="mr-12 w-full h-12 overflow-x-auto flex items-center gap-x-3  px-3">
            <div
              onClick={() => {
                setCurrentNav(elements[0]?.title);
                // setElements((prevArray) => [
                //   prevArray[0],
                //   elements[0],
                //   ...prevArray.filter(
                //     (a) => a != elements[0] && a != prevArray[0]
                //   ),
                // ]);
              }}
              style={{
                border:
                  currentNav == elements[0]?.title &&
                  " #14805e .2666666667vw solid",
                background:
                  currentNav == elements[0]?.title &&
                  " linear-gradient(to top, #14805e4d, #2a2a2a00), #262626",
              }}
              className="bg-[#262626] h-12 w-12 rounded shrink-0 flex justify-center items-center"
              key={elements[0]?.id}
            >
              <img
                className="h-10 w-10"
                src={elements[0]?.img}
                alt={elements[0]?.title}
              />
            </div>
            {elements?.slice(1, elements?.length + 1)?.map((element) => (
              <div
                onClick={() => {
                  setCurrentNav(element?.title);
                  setElements((prevArray) => [
                    prevArray[0],
                    element,
                    ...prevArray.filter(
                      (a) => a != element && a != prevArray[0]
                    ),
                  ]);
                }}
                style={{
                  border:
                    currentNav == element?.title &&
                    " #14805e .2666666667vw solid",
                  background:
                    currentNav == element?.title &&
                    " linear-gradient(to top, #14805e4d, #2a2a2a00), #262626",
                }}
                className="bg-[#262626] h-12 w-12 rounded shrink-0 flex justify-center items-center"
                key={element?.id}
              >
                <img
                  className="h-10 w-10"
                  src={element?.img}
                  alt={element?.title}
                />
              </div>
            ))}
          </div>
          {/* search box (absolute positioned) */}
          <div className="absolute right-0 top-[50%] -translate-y-1/2 z-10 w-12 h-12">
            <div className="bg-[#14805E] w-full h-full flex justify-center items-center">
              <CiSearch className="text-white font-bold text-4xl" />
            </div>
          </div>
        </div>

        <div className="mt-10 px-2 flex justify-center w-full">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
              <div
                key={e}
                className="col-span-1 flex flex-col bg-[#333333] w-40 rounded overflow-hidden"
              >
                <div>
                  <img className="w-40" src="/evolutionCardImg1.png" alt="" />
                </div>
                <div className="px-2">
                  <p className="text-white py-1">Evolution Super...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArcadePageMobile;

const elements1 = [
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
