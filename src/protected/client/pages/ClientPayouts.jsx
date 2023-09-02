import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../common/Sidebar";
import PageHeader from "../../../common/PageHeader";
import filter from "../../../assets/icons/filter_icon.png";
import CustomRadio from "../Components/CustomRadio";

const ClientPayouts = ({ children }) => {
  // const [selectedOption, setSelectedOption] = useState("option1");

  // const handleRadioChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className=" grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12 ">
          <PageHeader />

          <div className=" flex items-center justify-end my-5">
            <Link to="/create-project">
              <button className=" rounded px-5 gap-3 py-3 border border-black flex items-center text-[#323232]">
                <span>
                  <img src={filter} alt="" />
                </span>
                Filter Here
              </button>
            </Link>
          </div>

          <div className=" bg-white px-5 py-3 rounded-md">
            <div className=" rounded flex justify-between items-center text-[#332233] bg-[#0259DB]  bg-opacity-30 px-3 py-3">
              <p>Amount</p>
              <p>Purchase Date</p>
              <p>Payment Method</p>
              <p>Payment Status</p>
            </div>

            <div className=" font-[400] flex justify-between items-center text-[#332233]  border-b-2 px-3 py-2 mt-5">
              <p>$1,500</p>
              <p>January 15, 2023 </p>
              <p> Paypal</p>
              <p className=" rounded-lg px-4 font-[500] py-2 border-2 border-[#FFD447] text-[#FFD447]">
                Pending
              </p>
            </div>

            <div className=" font-[400] flex justify-between items-center text-[#332233]  border-b-2 px-3 py-2 mt-5">
              <p>$1,500</p>
              <p>January 15, 2023 </p>
              <p> Paypal</p>
              <p className=" rounded-lg px-4 font-[500] py-2 border-2 border-[#3BB001] text-[#3BB001]">
                Completed
              </p>
            </div>

            <div className=" font-[400] flex justify-between items-center text-[#332233]  border-b-2 px-3 py-2 mt-5">
              <p>$1,500</p>
              <p>January 15, 2023 </p>
              <p> Bank Transfer</p>
              <p className=" rounded-lg px-4 font-[500] py-2 border-2 border-[#EE4F1D] text-[#EE4F1D]">
                Cancel
              </p>
            </div>
          </div>

          <div className=" bg-white px-5 max-w-full mt-10  py-5">
            <p>Payment Methods</p>

            <div className=" max-w-2xl">
              <form action="">
                <div className=" bg-white px-10 py-5 mt-5">
                  <p className=" font-[600] text-[14px]">Basic Information</p>

                  <div className=" py-5">
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
                      className=" border w-full h-[42px] bg-white rounded px-2"
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className=" text-[#343F42] text-[14px]"
                      >
                        Paypal
                      </option>
                      <option value="" className=" text-[#343f42]">
                        Bank Transfer
                      </option>
                      <option value="" className=" text-[#343f42]">
                        Option2
                      </option>
                      <option value="" className=" text-[#343f42]">
                        Option3
                      </option>
                    </select>
                  </div>

                  <div className=" my-5">
                    <label htmlFor="">Payout Details</label>
                    <div className="flex justify-between items-center border w-[300px] h-[42px] rounded py-6 px-2 bg-[#0259DB] bg-opacity-20">
                      <p
                        className={`cursor-pointer ${
                          activeItem === "Paypal"
                            ? "text-[#19212C] bg-[#FFFFFF] rounded px-2 py-2"
                            : "text-[#343F42]"
                        }`}
                        onClick={() => handleItemClick("Paypal")}
                      >
                        Paypal
                      </p>
                      <p
                        className={`cursor-pointer ${
                          activeItem === "Bank Transfer"
                            ? "text-[#19212C] bg-[#FFFFFF] rounded px-2 py-2"
                            : "text-[#343F42]"
                        }  `}
                        onClick={() => handleItemClick("Bank Transfer")}
                      >
                        Bank Transfer
                      </p>
                      <p
                        className={`cursor-pointer ${
                          activeItem === "Payoneer"
                            ? "text-[#19212C] bg-[#FFFFFF] rounded px-2 py-2"
                            : " text-[#343F42]"
                        }`}
                        onClick={() => handleItemClick("Payoneer")}
                      >
                        Payoneer
                      </p>
                    </div>
                  </div>
                  <div className=" py-5 grid md:flex gap-5 items-center">
                    <div className=" w-full">
                      <label
                        htmlFor=""
                        className=" font-[400] text-[14px] text-[#19212C]"
                      >
                        Bank Name
                      </label>
                      <br />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="First Bank"
                        className=" border w-full h-[42px] rounded px-2"
                      />
                    </div>
                    <div className=" w-full">
                      <label
                        htmlFor=""
                        className=" font-[400] text-[14px] text-[#19212C] mb-2"
                      >
                        Bank Account Number
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
                  </div>

                  <div className=" py-5 grid md:flex gap-5 items-center">
                    <div className=" w-full">
                      <label
                        htmlFor=""
                        className=" font-[400] text-[14px] text-[#19212C]"
                      >
                        Bank Account Holder’s Name
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
                        Bank Routing Number
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
                  </div>

                  <div className=" py-5 grid md:flex gap-5 items-center">
                    <div className=" w-full">
                      <label
                        htmlFor=""
                        className=" font-[400] text-[14px] text-[#19212C]"
                      >
                        Bank IBAN
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
                    <div className=" w-full">
                      <label
                        htmlFor=""
                        className=" font-[400] text-[14px] text-[#19212C] mb-2"
                      >
                        Swift Code
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
                  </div>

                  <div className=" mt-4">
                    <Link to="/my-projects">
                      <button className=" text-white bg-[#0259DB] px-10 py-3 rounded mr-3">
                        Save Details
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPayouts;
