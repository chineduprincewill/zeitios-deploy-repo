import Sidebar from "../../../common/Sidebar";
import projectImg from "../../../assets/icons/projectImg.png";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const MyProject = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className=" grow md:ml-[80px] lg:ml-[250px]  px-3 lg:px-12 mt-20">
          <p className=" text-[#323232] font-[600] text-[40px]">My Project</p>
          <p className="text-[#323232] font-[400] text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>

          <div className=" flex flex-col items-center justify-center">
            <img src={projectImg} alt="" className=" h-[270px] mt-20" />
            <p className="text-[#323232] font-[400] text-[11px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            </p>
            <Link to="/create-project">
              <button className=" bg-[#0259DB] rounded px-5 py-3 flex items-center text-white mt-10">
                <span>
                  <HiOutlinePlusCircle />
                </span>
                Create Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
