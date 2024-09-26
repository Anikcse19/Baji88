/* eslint-disable react/prop-types */
import { useState } from "react";
import DBMobileBottomMenu from "../DBMobileBottomMenu";
import DBMobileNavbar from "../DBMobileNavbar";
import DBMobileSideMenu from "../DBMobileSideMenu";

const DashboardLayout = ({ children }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <main className="flex flex-col justify-between min-h-screen h-full relative">
      {/* Top Navbar */}
      <DBMobileNavbar setSideMenuOpen={setSideMenuOpen} />

      {/* Overlay for when side menu is open */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-[998] transition-opacity duration-300 ${
          sideMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSideMenuOpen(false)} // Close menu on clicking outside
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[190px] bg-gray-800 z-[999] transition-transform duration-300 transform ${
          sideMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent click inside menu from closing it
      >
        <DBMobileSideMenu/>
      </div>

      {/* Page content */}
      <div className="flex-1">{children}</div>

      {/* Bottom menu */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-800">
        <DBMobileBottomMenu />
      </div>
    </main>
  );
};

export default DashboardLayout;
