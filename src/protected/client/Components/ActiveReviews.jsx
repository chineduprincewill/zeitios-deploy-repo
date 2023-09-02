import star from "../../../assets/icons/star_icon.png";
import microsoft from "../../../assets/icons/Microsoft.png";
import ClientReviews from "../pages/ClientReviews";

const ActiveReviews = () => {
  return (
    <div>
      <ClientReviews>
        <div className="bg-white border-b-2 my-2">
          <div className=" grid grid-cols-12 px-5 items-start py-5">
            <div className="flex py-2 px-2 md:py-4 md:px-4 rounded-full bg-[#032B68] items-center justify-center">
              <img src={microsoft} alt="" className="" />
            </div>
            <div className=" col-span-12 md:col-span-11">
              <div className=" flex justify-between font-[500]">
                <p>Osaze Abu</p>
                <p className=" text-[#0259DB]">View Details</p>
              </div>

              <div className=" flex gap-3">
                <img src={star} alt="" />
                <p className=" text-[14px]">
                  4.51{" "}
                  <span className=" ml-3 text-[#989797]">
                    Published 2 weeks ago
                  </span>
                </p>
              </div>
              <p className=" text-[#323232] text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to m
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-b-2 my-2">
          <div className=" grid grid-cols-12 px-5 items-start py-5">
            <div className="flex py-2 px-2 md:py-4 md:px-4 rounded-full bg-[#032B68] items-center justify-center">
              <img src={microsoft} alt="" className="" />
            </div>
            <div className=" col-span-12 md:col-span-11">
              <div className=" flex justify-between font-[500]">
                <p>Osaze Abu</p>
                <p className=" text-[#0259DB]">View Details</p>
              </div>

              <div className=" flex gap-3">
                <img src={star} alt="" />
                <p className=" text-[14px]">
                  4.51{" "}
                  <span className=" ml-3 text-[#989797]">
                    Published 2 weeks ago
                  </span>
                </p>
              </div>
              <p className=" text-[#323232] text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to m
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-b-2 my-2">
          <div className=" grid grid-cols-12 px-5 items-start py-5">
            <div className="flex py-2 px-2 md:py-4 md:px-4 rounded-full bg-[#032B68] items-center justify-center">
              <img src={microsoft} alt="" className="" />
            </div>
            <div className=" col-span-12 md:col-span-11">
              <div className=" flex justify-between font-[500]">
                <p>Osaze Abu</p>
                <p className=" text-[#0259DB]">View Details</p>
              </div>

              <div className=" flex gap-3">
                <img src={star} alt="" />
                <p className=" text-[14px]">
                  4.51{" "}
                  <span className=" ml-3 text-[#989797]">
                    Published 2 weeks ago
                  </span>
                </p>
              </div>
              <p className=" text-[#323232] text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to m
              </p>
            </div>
          </div>
        </div>
      </ClientReviews>
    </div>
  );
};

export default ActiveReviews;
