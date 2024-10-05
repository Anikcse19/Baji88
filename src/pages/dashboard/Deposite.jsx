import MemberCenter from "../MemberCenter";

const Deposite = () => {
  return (
    <MemberCenter>
      <div className="w-full flex gap-2">
        <div className="w-[80%] bg-[#313131] rounded-md p-5">

          <div className="flex items-center justify-between border-b border-dashed border-[#26ffbc] pb-4">
            <div className="flex items-center gap-2 ">
              <div className="bg-[#26ffbc] rounded-full w-[4px] h-[20px]"></div>
              <h1 className="text-[#26ffbc] text-lg">Funds</h1>
            </div>

            <div>
              <button
                className="px-12 py-1.5 rounded-md text-white font-semibold"
                style={{
                  background:
                    "linear-gradient(to right,#e4c400 0,#f7a204 100%)",
                }}
              >
                Deposite
              </button>
              <button className="text-white px-10 bg-[#4e4e4e] font-semibold">
                Withdraw
              </button>
            </div>
          </div>

        </div>
        <div className="w-[20%] bg-[#313131] rounded-md">k</div>
      </div>
    </MemberCenter>
  );
};

export default Deposite;
