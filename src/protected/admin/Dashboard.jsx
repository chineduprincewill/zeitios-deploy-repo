import Sidebar from "../../common/Sidebar";
import PageHeader from "../../common/PageHeader";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ClientDashboard from '../client/pages/ClientDashboard'
import FreelancerDashboard from '../freelancing/pages/FreelancerDashboard'

const Dashboard = () => {

    const { user_role } = useContext(AuthContext);

    let dashboardComponent;

    if(user_role && user_role !== null){

        if(user_role === 'client'){
            dashboardComponent = <ClientDashboard />     
        }
        else if(user_role === 'freelancer'){
            dashboardComponent = <FreelancerDashboard /> 
        }
        else{  
        }  
    }
    else{
      dashboardComponent = <div className="w-full flex justify-center items-center my-12">
        <span className="text-xl">Loading...</span>
      </div>
    }

    return (
      <div>
        <Sidebar />
        <div className="flex">
          <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
          <div className="grow md:ml-[80px] lg:ml-[250px] bg-gray-100 px-3 lg:px-12">
            <PageHeader />
            {
              dashboardComponent 
            }
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
