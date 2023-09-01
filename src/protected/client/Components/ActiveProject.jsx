import microsoft from "../../../assets/icons/Microsoft.png";
import menu from "../../../assets/icons/threedot.png";
import ClientProjects from "./ClientProjects";

const ActiveProject = () => {
  return (
    <div>
      <ClientProjects>
        <div className="">
          <div className="flex justify-between items-center px-3  py-4 bg-[#0259DB] bg-opacity-20">
            <p className=" flex-1">Name</p>
            <p className="mr:3 md:mr-40">Cost</p>
            <p>Action</p>
          </div>
          <div className=" flex items-center justify-between px-3 my-4 ">
            <div className=" flex items-center gap-2">
              <div className=" py-5 px-5 rounded-full bg-[#F9BDAC]">
                <img src={microsoft} alt="" />
              </div>
              <div className="">
                <p className=" text-[#332233] text-[14px]">
                  Full-stack Developer to help us build our websites
                </p>
                <div className="grid md:flex justify-between items-center text-[12px]">
                  <p>London</p>
                  <p>Jan 14, 2022</p>
                  <p>2 Received</p>
                </div>
              </div>
            </div>
            <div className="text-[14px]">
              <p>$20k-$30k Hourly</p>
            </div>
            <div className="">
              <img src={menu} alt="" />
            </div>
          </div>
        </div>
      </ClientProjects>
    </div>
  );
};

export default ActiveProject;
