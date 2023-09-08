import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Sidebar from "../../../common/Sidebar";
import PageHeader from "../../../common/PageHeader";
import profile from "../../../assets/icons/third_profile_icon.png";
import { HiOutlineCamera } from "react-icons/hi";

const ClientProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user, "profile");

  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className=" grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12 ">
          <PageHeader />
          <div className=" flex justify-end">
            <Link to="/create-project">
              <button className=" rounded px-10 gap-3 py-3 bg-[#0259DB] flex items-center text-[white]">
                Edit Profile
              </button>
            </Link>
          </div>

          <div className=" bg-white px-5 py-3 rounded-md mt-5">
            <p className=" font-[600] text-[14px]">Profile Details</p>

            <div className=" flex items-center gap-3 mt-10">
              <img src={profile} alt="" />
              <div className="">
                <p className=" font-[600] text-[14px] text-[#323232]">
                  {user?.first_name}-{user?.last_name}
                </p>
                <p className=" text-[12px]">{user?.skills} </p>
                <p className=" text-[12px] text-[#323232] capitalize">
                  {user?.category}
                </p>
              </div>
            </div>

            <div className=" bg-white px-5 max-w-full mt-10  py-5">
              <div className=" max-w-2xl">
                <form action="">
                  <div className=" bg-white px-10 py-5 mt-5">
                    <div className=" grid md:flex gap-5 items-center">
                      <div className=" w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Name
                        </label>
                        <br />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Osaze Abu"
                          className=" border w-full h-[42px] rounded px-2"
                        />
                      </div>
                      <div className=" w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C] mb-2"
                        >
                          Email Address
                        </label>
                        <br />
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="zeitious@gmail.com"
                          className=" border w-full h-[42px] rounded px-2"
                        />
                      </div>
                    </div>

                    <div className=" grid md:flex gap-5 items-center">
                      <div className=" w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Phone Number
                        </label>
                        <br />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="0123456789"
                          className=" border w-full h-[42px] rounded px-2"
                        />
                      </div>

                      <div className=" py-5 w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Tagline
                        </label>
                        <br />
                        <select
                          name=""
                          id=""
                          className=" border w-full h-[42px] bg-white rounded px-2"
                        >
                          <option
                            value=""
                            disabled
                            selected
                            className=" text-[#343F42] text-[14px]"
                          >
                            Tagline
                          </option>
                          <option value="" className=" text-[#343f42]">
                            Tagline1
                          </option>
                          <option value="" className=" text-[#343f42]">
                            Tagline2
                          </option>
                          <option value="" className=" text-[#343f42]">
                            Tagline3
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className=" grid md:flex gap-5 items-center">
                      <div className=" w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Hourly Rate
                        </label>
                        <br />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="$100"
                          className=" border w-full h-[42px] rounded px-2"
                        />
                      </div>

                      <div className=" py-5 w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Gender
                        </label>
                        <br />
                        <select
                          name=""
                          id=""
                          className=" border w-full h-[42px] bg-white rounded px-2"
                        >
                          <option
                            value=""
                            className=" text-[#343F42] text-[14px]"
                          >
                            Male
                          </option>
                          <option
                            value=""
                            className=" text-[#343f42] text-[14px]"
                          >
                            Female
                          </option>
                          <option
                            value=""
                            className=" text-[#343f42] text-[14px]"
                          >
                            Non Binary
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className=" grid md:flex gap-5 items-center">
                      <div className=" w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Specialization
                        </label>
                        <br />
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="UI/UX Design"
                          className=" border w-full h-[42px] rounded px-2"
                        />
                      </div>

                      <div className=" py-5 w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Type
                        </label>
                        <br />
                        <select
                          name=""
                          id=""
                          className=" border w-full h-[42px] bg-white rounded px-2"
                        >
                          <option
                            value=""
                            className=" text-[#343F42] text-[14px]"
                          >
                            Freelancer
                          </option>
                          <option
                            value=""
                            className=" text-[#343f42] text-[14px]"
                          >
                            Client
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className=" grid md:flex gap-5 items-center">
                      <div className=" w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Country
                        </label>
                        <br />
                        <select
                          name=""
                          id=""
                          className=" border w-full h-[42px] bg-white rounded px-2"
                        >
                          <option
                            value=""
                            className=" text-[#343F42] text-[14px]"
                          >
                            Nigeria
                          </option>
                          <option
                            value=""
                            className=" text-[#343f42] text-[14px]"
                          >
                            USA
                          </option>
                        </select>
                      </div>

                      <div className=" py-5 w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          City
                        </label>
                        <br />
                        <select
                          name=""
                          id=""
                          className=" border w-full h-[42px] bg-white rounded px-2"
                        >
                          <option
                            value=""
                            className=" text-[#343F42] text-[14px]"
                          >
                            Lagos
                          </option>
                          <option
                            value=""
                            className=" text-[#343f42] text-[14px]"
                          >
                            Imo
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className=" grid md:flex gap-5 items-center">
                      <div className=" w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Language
                        </label>
                        <br />
                        <select
                          name=""
                          id=""
                          className=" border w-full h-[42px] bg-white rounded px-2"
                        >
                          <option
                            value=""
                            className=" text-[#343F42] text-[14px]"
                          >
                            English
                          </option>
                          <option
                            value=""
                            className=" text-[#343f42] text-[14px]"
                          >
                            Spanish
                          </option>
                        </select>
                      </div>

                      <div className=" py-5 w-full">
                        <label
                          htmlFor=""
                          className=" font-[400] text-[14px] text-[#19212C]"
                        >
                          Languages Level
                        </label>
                        <br />
                        <select
                          name=""
                          id=""
                          className=" border w-full h-[42px] bg-white rounded px-2"
                        >
                          <option
                            value=""
                            className=" text-[#343F42] text-[14px]"
                          >
                            Intermediate
                          </option>
                          <option
                            value=""
                            className=" text-[#343f42] text-[14px]"
                          >
                            Professional
                          </option>

                          <option
                            value=""
                            className=" text-[#343f42] text-[14px]"
                          >
                            Novice
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className=" mt-3">
                      <label htmlFor="">Tell us more about you</label>
                      <div className="">
                        <textarea
                          name=""
                          id=""
                          cols=""
                          rows="10"
                          className=" border w-full rounded text-[#343F42] capitalize px-2 py-1 mt-1"
                        ></textarea>
                      </div>
                    </div>

                    <div className=" inline-flex py-2 px-8 gap-3 border border-[#323232] rounded mt-5">
                      <HiOutlineCamera size={25} />
                      <p>Upload Photo</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
