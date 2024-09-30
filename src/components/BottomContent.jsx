import { Link } from "react-router-dom";

const BottomContent = () => {
  return (
    <div className="mt-10 flex gap-5 md:justify-between items-center">
      <div className="border-r border-gray-500 w-max">
        <img
          src="/public/logo.png"
          alt=""
          className="w-[70px] md:w-[100px] h-[40px] md:h-[50px] borde"
        />
      </div>

      <div className="hidden md:block">
        <div className="flex items-center gap-5 text-white">
          <Link to="" className=" hover:text-[#189b71] text-sm">
            Affiliate
          </Link>
          |
          <Link to="" className=" hover:text-[#189b71] text-sm">
            Responsible Gaming
          </Link>
          |
          <Link to="" className=" hover:text-[#189b71] text-sm">
            About Us
          </Link>
        </div>

        <div className="flex justify-end mt-1">
          <p className="text-xs text-gray-400">
            © 2024 Baji Copyrights. All Rights Reserved
          </p>
        </div>
      </div>

      <div className="flex flex-col md:hidden">
        <p className="text-[13px] font-bold text-[#14805e] md:text-white">
          Win Like A King
        </p>
        <p className="text-xs text-gray-400">
          © 2024 Baji Copyrights. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default BottomContent;
