// import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const PageHeader = () => {
  const { userid } = useContext(AuthContext);
  // const location = useLocation();
  //const useremail = JSON.parse(localStorage.getItem('auth'));
  // const pagetitle = location.pathname
  //   .replace("/", "")
  //   .replace("-", " ")
  //   .replace("freelancer", "")
  //   .replace("client", "");

  return (
    <div className="w-full  pb-6 pt-12 mt-12 ">
      <span className="text-[#0259dc] text-3xl font-[500]">Welcome Back,</span>
      <span className="text-3xl capitalize font-[500]">{userid}</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
    </div>
  );
};

export default PageHeader;
