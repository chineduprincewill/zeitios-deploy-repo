import React from "react";
import Navbar from "../Components/Navbar";
import RegisterBox from "../Components/register/register-box";

const Register = () => {
  return (
    <div className="bg-pink-100 text-black pb-8">
      <Navbar />
      <div className="">
        <div className="text-2xl font-bold  w-[100%] flex flex-col items-center">
          Register
        </div>
        <div className="w-[100%] flex flex-col items-center">
          Give your visitor a smooth online experience wuth a solid UX design
        </div>
        <RegisterBox />
      </div>
    </div>
  );
};

export default Register;
