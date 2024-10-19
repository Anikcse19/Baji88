/* eslint-disable react/prop-types */
import { useState } from "react";
import DBMobileBottomMenu from "../DBMobileBottomMenu";
import DBMyAccount from "../../pages/dashboard/DBMyAccount";

const UserPanelLayout = ({ children }) => {
  const [myAccount, setMyAccount] = useState(false);
  return (
    <div className="relative">
      <div className="min-h-[100vh]">{children}</div>
      {/* Bottom menu */}
      <div className="fixed bottom-0 left-0 w-full border-t border-gray-700 lg:hidden">
        <DBMobileBottomMenu setMyAccount={setMyAccount} />
      </div>

      {/* My Account Menu */}
      <div
        className={`bg-black w-full h-full fixed top-0 left-0 z-[999] transition-transform duration-300 ${
          myAccount ? "translate-y-0" : "translate-y-full"
        } overflow-y-auto`} // Allows scrolling inside My Account
      >
        <DBMyAccount setMyAccount={setMyAccount} />
      </div>
    </div>
  );
};

export default UserPanelLayout;
