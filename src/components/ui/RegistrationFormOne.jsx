import { HiArrowSmRight } from "react-icons/hi";
import useStore from "../../Zustand/store/useStore";

const RegistrationFormOne = () => {
  const { setCurrentRegistrationStep } = useStore();
  return (
    <div>
      <div className="flex flex-col gap-y-5">
        {/* username */}
        <div className="flex flex-col gap-1">
          <p className="text-white">Username</p>
          <input
            type="text"
            name=""
            id=""
            className="bg-[#454545] py-3 px-4 text-white outline-none focus:border-2 focus:border-green-400 rounded-sm"
            placeholder="4-5 char, allow number"
          />
        </div>
        {/* password */}
        <div className="flex flex-col gap-1">
          <p className="text-white">Password</p>
          <input
            type="text"
            name=""
            id=""
            className="bg-[#454545] py-3 px-4 text-white outline-none focus:border-2 focus:border-green-400 rounded-sm"
            placeholder="6-20 char, allow number"
          />
        </div>
        {/* confirm password */}
        <div className="flex flex-col gap-1">
          <p className="text-white">Confirm Password</p>
          <input
            type="text"
            name=""
            id=""
            className="bg-[#454545] py-3 px-4 text-white outline-none focus:border-2 focus:border-green-400 rounded-sm"
            placeholder="confirm password"
          />
        </div>
        {/* choose currency */}
        <div className="flex flex-col gap-1">
          <p className="text-white">Choose Currency</p>
          <select
            name=""
            id=""
            className="bg-[#454545] py-3 px-4 text-white outline-none focus:border-2 focus:border-green-400 rounded-sm"
          >
            <option value="">BDT</option>
            <option value="">INR</option>
            <option value="">PKR</option>
          </select>
        </div>
        {/* refer code */}

        <div className="flex flex-col gap-1">
          <p className="text-white">Refer Code</p>
          <input
            type="text"
            name=""
            id=""
            className="bg-[#454545] py-3 px-4 text-white outline-none focus:border-2 focus:border-green-400 rounded-sm"
            placeholder="Enter If you have one"
          />
        </div>
      </div>
      <div className="flex justify-end mt-3">
        <HiArrowSmRight
          onClick={() => setCurrentRegistrationStep(2)}
          className="text-white font-bold text-4xl bg-green-500 rounded-full p-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RegistrationFormOne;
