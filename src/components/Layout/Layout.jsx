/* eslint-disable react/prop-types */

import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

import useStore from "../../Zustand/store/useStore";
import LoginModal from "../Modal/Login";
import DBMobileBottomMenu from "../DBMobileBottomMenu";
import { useState } from "react";
import DBMyAccount from "../../pages/dashboard/DBMyAccount";

const Layout = ({ children }) => {
  const { isLoginModalopen } = useStore();
  const [myAccount, setMyAccount] = useState(false);
  
    // Effect to control body scroll based on myAccount state
    // useEffect(() => {
    //   if (myAccount) {
    //     // Disable scrolling on the body when the "My Account" menu is open
    //     document.body.style.overflow = "hidden";
    //   } else {
    //     // Re-enable scrolling when the "My Account" menu is closed
    //     document.body.style.overflow = "auto";
    //   }
  
    //   return () => {
    //     document.body.style.overflow = "auto";
    //   };
    // }, [myAccount]);
  

  console.log("s", isLoginModalopen);

  return (
    <div className="flex flex-col justify-between relative">

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
      <div className="fixed bottom-0 left-0 w-full border-t border-gray-700 lg:hidden">
        <DBMobileBottomMenu setMyAccount={setMyAccount} />
      </div>

      {/* My Account Menu */}
      <div className={`bg-red-500 w-full absolute bottom-0 z-[9999] transition-all ease-in-out duration-300 
      ${ myAccount ? "h-full" : "h-0"} overflow-y-auto`}>
        {
          myAccount &&
          <DBMyAccount setMyAccount={setMyAccount} /> 
        }
      </div>
      
    </div>
  );
};

export default Layout;
