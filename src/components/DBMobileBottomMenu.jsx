import { Link } from "react-router-dom";

const DBMobileBottomMenu = () => {

  const menus = [
    {
      name: "Home",
      path: "",
      icon: ""
    },
    {
      name: "Promotions",
      path: "",
      icon: ""
    },
    {
      name: "Deposite",
      path: "",
      icon: ""
    },
    {
      name: "My Account",
      path: "",
      icon: ""
    },

  ]

  return (
    <div className="w-full h-[50px]">

      {/* Login Signup Section */}
      <div className="flex items-center h-full">
        {/* Currency */}
        <div className="bg-white w-[30%] h-full flex justify-center items-center gap-1">
          <img src="/public/BD.png" alt="" className="w-[25px] h-[25px]" />
          <p className="text-sm flex flex-col lg:flex-row items-center font-medium">
            BDT <span className="leading-3 lg:leading-none">English</span>
          </p>
        </div>

        {/* Login Button */}
        <div className=" w-[35%] bg-[#46a35e] h-full flex justify-center items-center text-white text-[15px] font-medium">
          <Link to="">Login</Link>
        </div>

        {/* SignUp Button */}
         <div className=" w-[35%] bg-[#ffdf1a] h-full flex justify-center items-center text-[15px] font-medium">
          <Link to="">Sign Up</Link>
        </div>
      </div>

      {/* After Login/ Menu Section */}
      {/* <div>2</div> */}
    </div>
  );
};

export default DBMobileBottomMenu;
