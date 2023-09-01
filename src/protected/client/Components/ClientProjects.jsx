import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../../common/Sidebar";
import { HiOutlinePlusCircle } from "react-icons/hi";
import filter from "../../../assets/icons/filter_icon.png";

const ClientProjects = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className=" grow md:ml-[80px] lg:ml-[250px]  px-3 lg:px-12 pt-20 bg-[#F1F2F4]">
          <div className=" flex items-center justify-between">
            <div className="">
              <p className=" text-[#323232] font-[600] text-[40px]">
                My Project
              </p>
              <p className="text-[#323232] font-[400] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
            </div>

            <div className="">
              <Link to="/create-project">
                <button className=" bg-[#0259DB] rounded px-5 gap-3 py-3 flex items-center text-white">
                  <span>
                    <HiOutlinePlusCircle />
                  </span>
                  Create Project
                </button>
              </Link>
            </div>
          </div>

          <div className=" flex items-end justify-between my-5">
            <div className=" ">
              <ul className="flex items-center gap-5">
                <li>
                  <NavLink
                    to="/active-projects"
                    className={({ isActive }) =>
                      isActive
                        ? " font-[600] text-[#0259DB] border-b-2 border-b-[#0259DB]"
                        : ""
                    }
                  >
                    Active Projects
                  </NavLink>
                </li>
                <li className=" text-[#323232]">
                  <NavLink
                    exact
                    to="/other-route"
                    className={({ isActive }) =>
                      isActive
                        ? " font-[600] text-[#0259DB] border-b-2 border-b-[#0259DB]"
                        : ""
                    }
                  >
                    Pending Projects
                  </NavLink>
                </li>
                <li className=" text-[#323232]">
                  <NavLink
                    exact
                    to="/another-route"
                    className={({ isActive }) =>
                      isActive
                        ? " font-[600] text-[#0259DB] border-b-2  border-b-[#0259DB]"
                        : ""
                    }
                  >
                    Completed Projects
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="  ">
              <Link to="/create-project">
                <button className=" rounded px-5 gap-3 py-3 border border-black flex items-center text-[#323232]">
                  <span>
                    <img src={filter} alt="" />
                  </span>
                  Filter Here
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white my-3 py-3 rounded shadow">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ClientProjects;
