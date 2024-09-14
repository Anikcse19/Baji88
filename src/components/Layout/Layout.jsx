/* eslint-disable react/prop-types */

import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between gap-y-5">
      <Header />
      <Navbar />
      <div className="min-h-[100vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
