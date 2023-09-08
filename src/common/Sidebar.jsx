import { Fragment, useContext, useEffect, useState } from "react";
import Logo from "../assets/logo/Logo.png";
import { AuthContext } from "../context/AuthContext";
import NavDB from "./NavDB";
import { getUserDetail } from "../public/authentication/actions/authActions";

const Sidebar = () => {
  const { token, shownav } = useContext(AuthContext);

  const [userdetail, setUserdetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    token && getUserDetail(token, setUserdetail, setError);
  }, [token])

  if(userdetail !== null && token){
    localStorage.setItem('userInfo', JSON.stringify(userdetail?.data));
  }

  return (
    <Fragment>
      <div
        className={
          shownav
            ? "fixed inset-0 z-20 mt-0 bg-black bg-opacity-50 transition-opacity md:hidden"
            : ""
        }
      ></div>
      <div
        className={`${
          shownav ? "block w-[250px] border-r border-gray-500" : "hidden"
        } md:block md:w-[80px] lg:w-[250px] col-span-1 h-screen z-40 fixed top-0 bg-[#0259dc]`}
      >
        <div className="w-full flex justify-center items-center h-[50px]">
          <img
            src={Logo}
            alt="logo"
            className={`${shownav ? "block" : "hidden"} lg:block`}
          />
          <img
            src={Logo}
            alt="logo"
            width="50px"
            className={`${shownav ? "hidden" : "block"} lg:hidden`}
          />
        </div>
        <div className="my-16 flex justify-center">
          {userdetail === null ? <span className="text-white my-12">Loading...</span> : <NavDB />}
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
