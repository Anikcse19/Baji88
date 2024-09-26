import Layout from "../components/Layout/Layout";
import RegistrationFormOne from "../components/ui/RegistrationFormOne";
import RegistrationFormTwo from "../components/ui/RegistrationFormTwo";
import useStore from "../Zustand/store/useStore";

const RegistrationPage = () => {
  const { currentRegistrationStep } = useStore();

  return (
    <Layout>
      <div className="my-16 w-[80%]  mx-auto">
        <p className="text-right mb-2 text-gray-300">
          If you encounter issues, please contact{" "}
          <p className="text-red-600 font-bold inline">Online CS</p>
        </p>
        <div className="h-fit border-4 border-green-600 py-8 px-6 flex  items-center gap-10">
          {/* left side */}
          <div className="w-[35%] self-start">
            <div className="flex justify-center border-b border-yellow-300 pb-2">
              <h1 className="text-yellow-300">Sign Up</h1>
            </div>
            <div className="my-10">
              {currentRegistrationStep == 1 ? (
                <RegistrationFormOne />
              ) : (
                <RegistrationFormTwo />
              )}
            </div>
          </div>
          {/* right side */}
          <div className="w-[65%] h-full self-start">
            <img className="h-full" src="/registrationBanner.jpg" alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegistrationPage;
