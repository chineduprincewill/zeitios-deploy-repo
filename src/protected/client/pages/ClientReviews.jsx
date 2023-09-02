import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../../common/Sidebar";
import PageHeader from "../../../common/PageHeader";
import filter from "../../../assets/icons/filter_icon.png";

const ClientReviews = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className=" grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12 ">
          <PageHeader />

          <div className=" flex items-end justify-between my-5">
            <div className=" ">
              <ul className="flex items-center gap-5">
                <li>
                  <NavLink
                    to="/active-reviews"
                    className={({ isActive }) =>
                      isActive
                        ? " font-[600] text-[#0259DB] border-b-2 border-b-[#0259DB]"
                        : ""
                    }
                  >
                    Jobs
                  </NavLink>
                </li>
                <li className=" text-[#323232]">
                  <NavLink
                    exact
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? " font-[600] text-[#0259DB] border-b-2 border-b-[#0259DB]"
                        : ""
                    }
                  >
                    Projects
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
