import useStore from "../../Zustand/store/useStore";
import { RxCross1 } from "react-icons/rx";
import { LuUser2 } from "react-icons/lu";
import { FiLock } from "react-icons/fi";

const Login = () => {
  const { isLoginModalopen, setIsLoginModalOpen } = useStore();

  // Function to close the modal by clicking on the background
  const handleCloseModal = (e) => {
    // Close modal only if the click is on the outer div (background)

    if (e.target === e.currentTarget) {
      setIsLoginModalOpen(false);
    }
  };
  return (
    <div
      onClick={handleCloseModal}
      className="w-full min-h-screen bg-black bg-opacity-70 flex justify-center items-center"
    >
      {/* login form */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[400px] h-fit bg-white rounded-md"
      >
        <div className="bg-[#14805E] flex items-center justify-between p-5 rounded-tr-md rounded-tl-md">
          <p className="text-white font-bold text-lg">Welcome to baji</p>
          <RxCross1
            onClick={() => setIsLoginModalOpen(!isLoginModalopen)}
            className="text-xl text-white cursor-pointer"
          />
        </div>

        <div className="py-10 px-10">
          <div className="flex flex-col gap-y-4">
            {/* username */}
            <div className="flex flex-col gap-y-1">
              <p className="text-gray-500 text-lg">Username</p>
              <div className="flex items-center gap-3 border border-gray-500 rounded px-3 py-2">
                <LuUser2 />
                <input
                  type="text"
                  className="outline-none text-green-600 font-bold text-lg"
                />
              </div>
            </div>
            {/* password */}
            <div className="flex flex-col gap-y-1">
              <p className="text-gray-500 text-lg">Password</p>
              <div className="flex items-center gap-3 border border-gray-500 rounded px-3 py-2">
                <FiLock />
                <input
                  type="password"
                  className="outline-none text-green-600 font-bold text-lg"
                />
              </div>
            </div>
            <p className="text-right text-sm hover:text-green-700 underline cursor-pointer">
              Forgot password?
            </p>
            <div className="bg-[#F8A104] rounded-sm flex justify-center items-center py-2 shadow hover:shadow-black cursor-pointer">
              <button className="text-white">Login Now</button>
            </div>

            <div>
              <p className="text-sm">
                Do not have an account?{" "}
                <p className="inline cursor-pointer underline hover:text-green-700">
                  Sign Up now!
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
