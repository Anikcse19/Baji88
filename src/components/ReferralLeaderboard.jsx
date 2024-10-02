import { FaCrown } from "react-icons/fa";

function ReferralLeaderboard() {
  const leaders = [
    {
      position: "Second Place",
      userid: "bidd***sa",
      amount: "8,913.10",
      img: "/avatar2.png",
    },

    {
      position: "First Place",
      userid: "bidd***sa",
      amount: "11,913.11",
      img: "/avatar1.png",
    },

    {
      position: "THird Place",
      userid: "bidd***sa",
      amount: "5,913.09",
      img: "/avatar3.png",
    },
  ];

  const tableItems = [
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
    {
      name: "stack11",
      amount: "23.05",
      date: "2024/10/01",
      time: "20.05.35",
    },
  ];

  return (
    <div className="border border-gray-500 mx-3 rounded-md bg-[#333] px-2 py-5 mt-2">
      <h2 className="text-xl text-center font-bold text-white">
        Referral Leaderboard
      </h2>

      <div className="mt-16 flex gap-2">
        {leaders.map((leader, idx) => (
          <div
            key={idx}
            className={`${
              leader.position === "First Place" && "-mt-5"
            } w-[107px] h-[155px] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-2.5 relative`}
            style={{
              backgroundImage: "url(/referral-program-leaderboard-rank2.png)",
            }}
          >
            <FaCrown className="absolute -top-8 text-2xl text-yellow" />

            <div className="text-xs bg-yellow px-2 rounded-full py-1 font-bold absolute -top-2">
              {leader.position}
            </div>
            <img src={leader.img} alt="" className="w-[64px] h-[64px]" />
            <div>
              <p className="text-xs font-semibold text-white">
                {leader.userid}
              </p>
              <p className="text-xs font-bold text-yellow">{leader.amount}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center font-bold text-yellow mt-8">
        Who received the bonous?
      </h2>

      <div className="mt-6 shadow-sm overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <tbody className="text-gray-400">
            {tableItems.map((item, idx) => (
              <tr
                key={idx}
                className="divide-x divide-dashed divide-gray-500 odd:bg-[#262626] even:bg-transparent"
              >
                <td className="px-6 py-4">{item.name}</td>

                <td className="px-6 py-4">
                  <span className="text-yellow font-medium">{item.amount}</span>
                  <span> BDT </span>
                </td>

                <td className="px-6 py-4 flex flex-col items-end">
                  <span>{item.date}</span>
                  <span className="text-[10px]">{item.time}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReferralLeaderboard;
