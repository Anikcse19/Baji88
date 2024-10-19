import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import CommonNav from "../../utils/CommonNav";
import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import UserPanelLayout from "../../components/Layout/UserPanelLayout";

const DBChangePassword = () => {
  const [currentPass, setCurrentPass] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [conFirmNewPass, setConfirmNewPass] = useState(false);

  return (
    <UserPanelLayout>
      <div>
        <CommonNav>Reset Password</CommonNav>

        <div className="px-2 mt-2">
          <form className="bg-[#333] py-3 px-1 rounded-sm">
            {/* Current Password */}
            <div className="flex items-center px-3 justify-between gap-2 border-b pb-2 border-gray-500">
              <label className="text-white text-[13px] w-[100px] leading-4">
                Current password
              </label>
              <input
                type={currentPass ? "password" : "text"}
                placeholder="Current password"
                className="w-full py-1 text-primary placeholder:text-[13px] px-4 bg-transparent focus:outline-none"
              />

              <div
                onClick={() => setCurrentPass((prev) => !prev)}
                className="flex text-lg text-gray-500"
              >
                {currentPass ? <IoEyeOffSharp /> : <IoEyeSharp />}
              </div>
            </div>

            {/* Current Password */}
            <div className="flex items- mt-3 px-3 justify-between gap-2 border-b pb-2 border-gray-500">
              <label className="text-white text-[13px] w-[100px] leading-4">
                New password
              </label>
              <input
                type={newPass ? "password" : "text"}
                placeholder="New password"
                className="w-full py-1 text-primary placeholder:text-[13px] px-4 bg-transparent focus:outline-none"
              />

              <div
                onClick={() => setNewPass((prev) => !prev)}
                className="flex text-lg text-gray-500"
              >
                {newPass ? <IoEyeOffSharp /> : <IoEyeSharp />}
              </div>
            </div>

            {/* Copnfirm New  Password */}
            <div className="flex items- mt-3 px-3 justify-between gap-2 border-b pb-2 border-gray-500">
              <label className="text-white text-[13px] w-100px] leading-4">
                Confirm new password
              </label>
              <input
                type={conFirmNewPass ? "password" : "text"}
                placeholder="Confirm new password"
                className="w-full py-1 text-primary placeholder:text-[13px] px-4 bg-transparent focus:outline-none"
              />

              <div
                onClick={() => setConfirmNewPass((prev) => !prev)}
                className="flex text-lg text-gray-500"
              >
                {conFirmNewPass ? <IoEyeOffSharp /> : <IoEyeSharp />}
              </div>
            </div>
          </form>

          {/* Notice */}
          <div className="bg-[#06281d] border border-[#14805e] p-3 flex gap-1 text-white rounded-md overflow-hidden mt-3">
            <div className="mt-1 text-lg">
              <RiErrorWarningFill />
            </div>

            <div className=" text-xs">
              <p className="font-semibold text-base mb-2">
                Password requirements:
              </p>
              <p>1. Must be between 6 to 20 characters.</p>
              <p>2. Must contain 1 uppercase alphabet(A-Z) at least </p>
              <p>3. Must contain 1 lowercase alphabet(a-z) at least </p>
              <p>4. Must contain at least 1 number (0-9).</p>
              <p>4. Must contain special characters (@$%¨!%*#). </p>
            </div>
          </div>

          <div className="bg-primary text-white mt-4 w-full py-2.5 rounded-md">
            <button className=" w-full">Confirm</button>
          </div>
        </div>
      </div>
    </UserPanelLayout>
  );
};

export default DBChangePassword;
