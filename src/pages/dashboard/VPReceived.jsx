import VipPointsRecords from "./VipPointsRecords";

const VPReceived = () => {
  const tableItems = [
    {
      id: 1,
      points: 333,
      source: "Auto",
      date: "2024-08-19",
      time: "22:55:58",
    },
    {
      id: 2,
      points: 606,
      source: "Auto",
      date: "2024-08-19",
      time: "22:55:58",
    },
    {
      id: 3,
      points: 174,
      source: "Auto",
      date: "2024-08-19",
      time: "22:55:58",
    },
    {
      id: 4,
      points: 606,
      source: "Auto",
      date: "2024-08-19",
      time: "22:55:58",
    },
    {
      id: 5,
      points: 20,
      source: "Auto",
      date: "2024-08-19",
      time: "22:55:58",
    },
    {
      id: 6,
      points: 10,
      source: "Auto",
      date: "2024-08-19",
      time: "22:55:58",
    },
  ];

  return (
    <VipPointsRecords>
      <div>
        <div className="m-3 rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left text-white">
            <thead className="bg-[#333] text-[11px] font-[400]">
              <tr className="">
                <th className="py-2 px-3">No</th>
                <th className="py-2 px-2">VIP Points (VP)</th>
                <th className="py-2 px-3">Source</th>
                <th className="py-2 px-3">Time GMT+6</th>
              </tr>
            </thead>
            <tbody className="odd:bg-red-500 text-white text-[11px] text-center">
              {tableItems.map((item, idx) => (
                <tr key={idx} className="odd:bg-[#262626] even:bg-[#333]">
                  <td className="px-3 py-1">{item.id}</td>
                  <td className="px-3 py-1">{item.points}</td>
                  <td className="px-3 py-1">{item.source}</td>
                  <td className="px-3 py-1">
                    <div className="flex flex-col">
                      <span>{item.date}</span>
                      <span>{item.time}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-5"><p className="text-xs text-gray-500">-end of page-</p></div>
      </div>
    </VipPointsRecords>
  );
};

export default VPReceived;
