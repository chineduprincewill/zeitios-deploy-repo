import Sidebar from "../../../common/Sidebar";
import PageHeader from "../../../common/PageHeader";
import pic1 from "../../../assets/icons/payouts1_icon.png";
import pic2 from "../../../assets/icons/payouts2_icon.png";
import pic3 from "../../../assets/icons/payouts3_icon.png";
import pic4 from "../../../assets/icons/payouts4_icon.png";

const ClientStatement = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className=" grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12 ">
          <PageHeader />

          <div className=" grid md:grid-cols-4 gap-5 my-6">
            <div className=" px-3 py-5 rounded bg-white shadow">
              <p className=" text-[#939191] text-[12px]">New Income</p>
              <div className=" flex justify-between items-center mt-5">
                <p className=" text-[14px]">$1550</p>
                <img src={pic1} alt="" />
              </div>
            </div>
            <div className=" px-3 py-5 rounded bg-white shadow">
              <p className=" text-[#939191] text-[12px]">Withdrawn</p>
              <div className=" flex justify-between items-center mt-5">
                <p className=" text-[14px]">$1550</p>
                <img src={pic2} alt="" />
              </div>
            </div>
            <div className=" px-3 py-5 rounded bg-white shadow">
              <p className=" text-[#939191] text-[12px]">Pending Payment</p>
              <div className=" flex justify-between items-center mt-5">
                <p className=" text-[14px]">$1550</p>
                <img src={pic3} alt="" />
              </div>
            </div>
            <div className=" px-3 py-5 rounded bg-white shadow">
              <p className=" text-[#939191] text-[12px]">
                Available for Withdrawal
              </p>
              <div className=" flex justify-between items-center mt-5">
                <p className=" text-[14px]">$1550</p>
                <img src={pic4} alt="" />
              </div>
            </div>
          </div>

          <div className=" bg-white px-5 py-3 rounded-md">
            <div className=" rounded flex justify-between items-center text-[#332233] bg-[#0259DB]  bg-opacity-30 px-3 py-3">
              <p>Date</p>
              <p>Type </p>
              <p>Detail</p>
              <p>Amount</p>
            </div>

            <div className=" font-[400] flex justify-between items-center text-[#332233]  border-b-2 px-3 py-2 mt-5 text-[14px]">
              <p>January 15, 2023</p>
              <p>UI/UX </p>
              <p> I will design website UI UX in figma</p>
              <p className="">$1,500</p>
            </div>

            <div className=" font-[400] flex justify-between items-center text-[#332233]  border-b-2 px-3 py-2 mt-5 text-[14px]">
              <p>January 15, 2023</p>
              <p>UI/UX </p>
              <p> I will design website UI UX in figma</p>
              <p className="">$1,500</p>
            </div>

            <div className=" font-[400] flex justify-between items-center text-[#332233]  border-b-2 px-3 py-2 mt-5 text-[14px]">
              <p>January 15, 2023</p>
              <p>UI/UX </p>
              <p> I will design website UI UX in figma</p>
              <p className="">$1,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStatement;
