import { HiOutlineCamera } from "react-icons/hi";
import Sidebar from "../../../common/Sidebar";
import { Link } from "react-router-dom";

const CreateProject = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className=" grow md:ml-[80px] lg:ml-[250px]  px-3 lg:px-12 pt-20 bg-[#F1F2F4]">
          <p className=" text-[#323232] font-[600] text-[40px]">
            Create Project
          </p>
          <p className="text-[#323232] font-[400] text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>

          <form>
            <div className=" bg-white shadow px-10 py-5 mt-5">
              <p className=" font-[600] text-[14px]">Basic Information</p>

              <div className="grid md:flex items-center gap-10 mt-5">
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    Project Title
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Answer here"
                    className=" border w-[300px] h-[42px] rounded px-2"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    Freelancer Type
                  </label>{" "}
                  <br />
                  <select
                    name=""
                    id=""
                    className=" border w-[300px] h-[42px] bg-white rounded px-2"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className=" text-[#343F42] text-[14px]"
                    >
                      Select
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option1
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option2
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option3
                    </option>
                  </select>
                </div>
              </div>

              <div className=" grid md:flex items-center gap-10 mt-5">
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    Category
                  </label>
                  <br />
                  <select
                    name=""
                    id=""
                    className=" border w-[300px] h-[42px] bg-white rounded px-2"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className=" text-[#343F42] text-[14px]"
                    >
                      Select
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option1
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option2
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option3
                    </option>
                  </select>
                </div>
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    Cost
                  </label>
                  <br />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="$"
                    className=" border w-[300px] h-[42px] rounded px-2"
                  />
                </div>
              </div>

              <div className=" grid md:flex items-center gap-10 mt-5">
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    Price Type
                  </label>
                  <br />
                  <select
                    name=""
                    id=""
                    className=" border w-[300px] h-[42px] bg-white rounded px-2"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className=" text-[#343F42] text-[14px]"
                    >
                      Select
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option1
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option2
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option3
                    </option>
                  </select>
                </div>
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    Level
                  </label>{" "}
                  <br />
                  <select
                    name=""
                    id=""
                    className=" border w-[300px] h-[42px] bg-white rounded px-2"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className=" text-[#343F42] text-[14px]"
                    >
                      Select
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option1
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option2
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option3
                    </option>
                  </select>
                </div>
              </div>

              <div className=" grid md:flex items-center gap-10 mt-5">
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    Project Duration
                  </label>
                  <br />
                  <select
                    name=""
                    id=""
                    className=" border w-[300px] h-[42px] bg-white rounded px-2"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className=" text-[#343F42] text-[14px]"
                    >
                      Select
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option1
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option2
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option3
                    </option>
                  </select>
                </div>
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    City
                  </label>{" "}
                  <br />
                  <select
                    name=""
                    id=""
                    className=" border w-[300px] h-[42px] bg-white rounded px-2"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className=" text-[#343F42] text-[14px]"
                    >
                      Select
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option1
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option2
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option3
                    </option>
                  </select>
                </div>
              </div>

              <div className=" grid md:flex items-center gap-10 mt-5">
                <div className="">
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
                    className=" border w-[300px] h-[42px] bg-white rounded px-2"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className=" text-[#343F42] text-[14px]"
                    >
                      Select
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option1
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option2
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option3
                    </option>
                  </select>
                </div>
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    Language
                  </label>{" "}
                  <br />
                  <select
                    name=""
                    id=""
                    className=" border w-[300px] h-[42px] bg-white rounded px-2"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className=" text-[#343F42] text-[14px]"
                    >
                      Select
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option1
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option2
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option3
                    </option>
                  </select>
                </div>
              </div>

              <div className=" grid md:flex items-center gap-10 mt-5">
                <div className="">
                  <label
                    htmlFor=""
                    className=" font-[400] text-[14px] text-[#19212C]"
                  >
                    Skills
                  </label>
                  <br />
                  <select
                    name=""
                    id=""
                    className=" border w-[300px] h-[42px] bg-white rounded px-2"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className=" text-[#343F42] text-[14px]"
                    >
                      Select
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option1
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option2
                    </option>
                    <option value="" className=" text-[#343f42]">
                      Option3
                    </option>
                  </select>
                </div>
                <div className="relative w-[300px]">
                  <label
                    htmlFor="fileInput"
                    className="absolute inset-0 cursor-pointer"
                  >
                    <span className="block bg-white border border-gray-300 rounded py-2 px-8 text-gray-700">
                      Upload Attachments
                    </span>
                    <input
                      type="file"
                      id="fileInput"
                      className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    />
                  </label>
                  <HiOutlineCamera className="absolute left-1 top-1 mt-2 mr-2 text-gray-500" />
                </div>
              </div>

              <div className=" w-full mt-5">
                <label htmlFor="" className=" text-[#19212C] text-[14px]">
                  Project Detail
                </label>
                <br />
                <textarea
                  name=""
                  id=""
                  cols="58"
                  rows="5"
                  placeholder="Description"
                  className=" border"
                ></textarea>
              </div>

              <div className=" mt-4">
                <Link to="/my-projects">
                  <button className=" text-white bg-[#0259DB] px-10 py-3 rounded mr-3">
                    Save & Publish
                  </button>
                </Link>
                <button className=" text-[#0259DB]">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
