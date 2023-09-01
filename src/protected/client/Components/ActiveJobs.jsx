import ClientSaved from "../pages/ClientSaved";
import pic1 from "../../../assets/image/ninth_picture.png";
import pic2 from "../../../assets/image/second_picture.png";
import star from "../../../assets/icons/star_icon.png";

const ActiveJobs = () => {
  return (
    <div>
      <ClientSaved>
        <div className="  bg-white">
          <div className=" grid md:flex items-center justify-between gap-3 mx-5">
            <div className=" rounded mt-5 shadow">
              <img src={pic1} alt="" className=" h-[250px] w-full" />
              <div className=" mx-3">
                <p className=" text-[#989797] font-[400] text-[14px] py-5 ">
                  Web & App Design
                </p>
                <p className=" text-[#323232]">
                  I will design a creative modern websites in figma
                </p>
                <p className=" flex gap-2 pt-4">
                  <img src={star} alt="" />
                  <span className=" text-[#323232] ">4.51</span>
                  <span className=" text-[#989797]">42 reviews</span>
                </p>
                <div className=" flex items-center justify-between py-8">
                  <div className=" flex items-center">
                    <img src={pic2} alt="" className=" h-10 w-10" />
                    <span>Osas Abu</span>
                  </div>
                  <div className="">
                    <p className=" text-[#989797]">
                      Starting as <span className=" text-[#323232]">$123</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" rounded mt-5 shadow">
              <img src={pic1} alt="" className=" h-[250px] w-full" />
              <div className=" mx-3">
                <p className=" text-[#989797] font-[400] text-[14px] py-5 ">
                  Web & App Design
                </p>
                <p className=" text-[#323232]">
                  I will design a creative modern websites in figma
                </p>
                <p className=" flex gap-2 pt-4">
                  <img src={star} alt="" />
                  <span className=" text-[#323232] ">4.51</span>
                  <span className=" text-[#989797]">42 reviews</span>
                </p>
                <div className=" flex items-center justify-between py-8">
                  <div className=" flex items-center">
                    <img src={pic2} alt="" className=" h-10 w-10" />
                    <span>Osas Abu</span>
                  </div>
                  <div className="">
                    <p className=" text-[#989797]">
                      Starting as <span className=" text-[#323232]">$123</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" rounded mt-5 shadow">
              <img src={pic1} alt="" className=" h-[250px] w-full" />
              <div className=" mx-3">
                <p className=" text-[#989797] font-[400] text-[14px] py-5 ">
                  Web & App Design
                </p>
                <p className=" text-[#323232]">
                  I will design a creative modern websites in figma
                </p>
                <p className=" flex gap-2 pt-4">
                  <img src={star} alt="" />
                  <span className=" text-[#323232] ">4.51</span>
                  <span className=" text-[#989797]">42 reviews</span>
                </p>
                <div className=" flex items-center justify-between py-8">
                  <div className=" flex items-center">
                    <img src={pic2} alt="" className=" h-10 w-10" />
                    <span>Osas Abu</span>
                  </div>
                  <div className="">
                    <p className=" text-[#989797]">
                      Starting as <span className=" text-[#323232]">$123</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientSaved>
    </div>
  );
};

export default ActiveJobs;
