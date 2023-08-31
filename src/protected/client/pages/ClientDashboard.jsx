import Sidebar from "../../../common/Sidebar";
import PageHeader from "../../../common/PageHeader";

const ClientDashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className="grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12">
          <PageHeader />
        </div>
        <div className="grow md:ml-[80px] lg:ml-[250px] px-3 lg:px-12">
          <p className="">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
