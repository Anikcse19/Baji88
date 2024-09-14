import Center from "./Center";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* uper header start */}
      <div className="bg-[#2D2D2D]">
        <Center>
          <div className="flex items-center justify-between text-white text-sm  px-2">
            {/* left part */}
            <div className="flex items-center gap-3">
              <span>(GMT+6) 21:07:12</span>
              <span className="flex items-center gap-1 bg-[#555555] py-1 px-4">
                <img
                  className="w-4 h-4 object-cover"
                  src="https://www.baji.live/images/web/flag/BD.png"
                  alt=""
                />
                <p className="text-base">&#2547; BDT বাংলা</p>
              </span>
            </div>
            {/* right part */}
            <div className="flex items-center gap-2 text-gray-300">
              <div className="flex items-center gap-1">
                <IoLogoWhatsapp className="text-lg" />
                <p>Whatsapp |</p>
              </div>
              <div className="flex items-center gap-1">
                <MdEmail className="text-lg" />
                <p>Email |</p>
              </div>
              <div className="flex items-center gap-1">
                <FaFacebookSquare className="text-lg" />
                <p>Facebook |</p>
              </div>
              <div className="flex items-center gap-1">
                <LuMessagesSquare className="text-lg" />
                <p>Forum </p>
              </div>
            </div>
          </div>
        </Center>
      </div>
      {/* uper header end */}

      {/* lower header start */}
      <div
        style={{
          background: "linear-gradient(to bottom,#1bac7e 0,#14805e 100%)",
        }}
        // className="bg-[#17966E]"
      >
        <Center>
          <div className="flex items-center justify-between py-2">
            {/* left */}
            <div className="flex items-center gap-5">
              <div onClick={() => navigate("/")}>
                <img
                  className="w-[120px] h-[50px] cursor-pointer"
                  src="/logo.png"
                  alt=""
                />
              </div>
              <div>|</div>
              <div className="flex items-center gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  src="/sunriser.png"
                  alt=""
                />
                <img className="w-8 h-8 object-cover" src="/csk.png" alt="" />
              </div>
            </div>
            {/* right */}
            <div className="flex items-center gap-3">
              <div className="px-8 py-1 rounded-md hover:border hover:border-yellow-300 transition-all duration-300 ease-in cursor-pointer">
                লগ ইন
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(to right, #fbc103 0, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103 100%)",
                }}
                className=" px-8 py-1 rounded-sm text-white"
              >
                সাইন আপ
              </div>
            </div>
          </div>
        </Center>
      </div>
      {/* lower header end */}
    </div>
  );
};

export default Header;
