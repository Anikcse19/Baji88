/* eslint-disable react/prop-types */

import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

import useStore from "../../Zustand/store/useStore";
import LoginModal from "../Modal/Login";
import DBMobileBottomMenu from "../DBMobileBottomMenu";

const Layout = ({ children }) => {
  const { isLoginModalopen } = useStore();

  console.log("s", isLoginModalopen);

  return (
    <div className="flex flex-col justify-between ">
      <Header />
      <Navbar />
      <div className="relative">
        {children}
        {/* login modal */}
        {isLoginModalopen && (
          <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[20000000] w-full min-h-screen">
            <LoginModal />
          </div>
        )}
      </div>
      <Footer />
      {/* Bottom menu */}
      <div className="fixed bottom-0 left-0 w-full border-t border-gray-700">
        <DBMobileBottomMenu />
      </div>
    </div>
  );
};

export default Layout;
