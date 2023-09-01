import Sidebar from "../../../common/Sidebar";
import PageHeader from "../../../common/PageHeader";
import { HiSearch } from "react-icons/hi";
import chatImg from "../../../assets/icons/third_profile.png";
import profile from "../../../assets/icons/fourth_profile.png";
import file from "../../../assets/icons/file_attach_icon.png";
import smiley from "../../../assets/icons/smiley_icon.png";
import send from "../../../assets/icons/send_icon.png";

const ClientMessages = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className="grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12">
          <PageHeader />
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className=" bg-white px-2 py-2">
              <div className=" relative w-full">
                <input
                  type="text"
                  placeholder="search"
                  className=" border px-4 py-2 w-full rounded bg-[#E1EDFF]"
                />
                <HiSearch className=" absolute top-4" />
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="">
                  <img src={chatImg} alt="" />
                </div>
                <div className="">
                  <p className=" text-[#323232] text-[16px] font-[500]">
                    Team: Group Ferran
                  </p>
                  <p className=" text-[#323232] text-[11px] font-[400]">
                    Lorem Ipsum is simply kajns dskjas........
                  </p>
                </div>
                <div className="">
                  <p className=" text-[#323232] text-[12px] font-[400]">
                    12:05pm
                  </p>
                  <p className=" h-5 w-5 flex items-center justify-center text-[12px] text-white text-center bg-[#032B68] rounded-full">
                    12
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-white px-4 py-3 col-span-2">
              <div className=" flex items-center gap-2">
                <img src={profile} alt="" />
                <div className="">
                  <p>Client 1</p>
                  <p className=" text-[#323232] text-[12px]">Online</p>
                </div>
              </div>

              <div className=" relative">
                <div className=" sticky mb-20">
                  <div className="">
                    <div className=" bg-[#032B684D] rounded-tr-md rounded-bl-md rounded-br-md px-2 py-2 max-w-[350px] mt-5">
                      <p className=" text-[#323232]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to m
                      </p>
                    </div>
                    <p className=" text-[#343F42]">12:05pm</p>
                  </div>

                  <div className=" flex flex-col justify-end items-end">
                    <div className=" bg-[#032B684D] rounded-tl-md rounded-bl-md rounded-br-md px-2 py-2 max-w-[350px] mt-5">
                      <p className=" text-[#323232]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to m
                      </p>
                    </div>
                    <p className=" text-[#343F42]">12:05pm</p>
                  </div>
                </div>

                {/* <div className=" fixed bottom-0 w-full"> */}
                <div className=" relative">
                  <input
                    type="text"
                    placeholder="search"
                    className=" border w-full px-20 py-6 rounded bg-[#E1EDFF]"
                  />
                  <img src={smiley} alt="" className=" absolute top-5 left-2" />
                  <img src={file} alt="" className=" absolute top-5 left-12" />
                  <img src={send} alt="" className=" absolute top-5 right-4 " />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMessages;
