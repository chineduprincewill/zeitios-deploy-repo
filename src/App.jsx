import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./public/landing/Pages/Home";
import Login from "./public/authentication/Login";
import Register from "./public/authentication/Register";
import Error from "./public/landing/Pages/Error";
import RegisterOptions from "./public/authentication/RegisterOptions";
import ResendCode from "./public/authentication/ResendCode";
import Header from "./common/Header";
import Dashboard from "./protected/admin/Dashboard";
import PrivateRoute from "./common/PrivateRoute";
import AuthContextProvider from "./context/AuthContext";
import FreelancerPayouts from "./protected/freelancing/pages/FreelancerPayouts";
import FreelancerReviews from "./protected/freelancing/pages/FreelancerReviews";
import FreelancerStatment from "./protected/freelancing/pages/FreelancerStatment";
import Jobs from "./protected/freelancing/pages/Jobs";
import ManageProjects from "./protected/freelancing/pages/ManageProjects";
import ManageServices from "./protected/freelancing/pages/ManageServices";
import ClientPayouts from "./protected/client/pages/ClientPayouts";
import ClientReviews from "./protected/client/pages/ClientReviews";
import ClientStatement from "./protected/client/pages/ClientStatement";
import ClientMessages from "./protected/client/pages/ClientMessages";
import MyProject from "./protected/client/pages/MyProject";
import ManageJobs from "./protected/freelancing/pages/ManageJobs";
import FreelancerMessages from "./protected/freelancing/pages/FreelancerMessages";
import FreelancerProjects from "./protected/freelancing/pages/FreelancerProjects";
import Projects from "./protected/admin/pages/Projects";
import Payouts from "./protected/admin/pages/Payouts";
import Statement from "./protected/admin/pages/Statement";
import CreateProject from "./protected/client/Components/CreateProject";
import ClientProjects from "./protected/client/Components/ClientProjects";
import ActiveProject from "./protected/client/Components/ActiveProject";
import ClientSaved from "./protected/client/pages/ClientSaved";
import ActiveJobs from "./protected/client/Components/ActiveJobs";
import ActiveReviews from "./protected/client/Components/ActiveReviews";
import AddService from "./protected/freelancing/pages/AddService";
import FreelancerProposal from "./protected/freelancing/pages/FreelancerProposal";
import ManageServices3 from "./protected/freelancing/pages/ManageServices3";
import Freelancerprofile from "./protected/freelancing/pages/Freelancerprofile";
import ManageServices2 from "./protected/freelancing/pages/ManageServices2";
import ClientProfile from "./protected/client/pages/ClientProfile";

function App() {
  return (
    <>
      <div className="">
        <AuthContextProvider>
          <Router>
            {localStorage.getItem("logged_in") !== null && <Header />}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<Login />} />
              <Route
                path="/register-options"
                exact
                element={<RegisterOptions />}
              />
              <Route path="/register" exact element={<Register />} />

              <Route path="/resend-code" exact element={<ResendCode />} />
              <Route
                path="/dashboard"
                exact
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-projects"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerProjects />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-payouts"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerPayouts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-reviews"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerReviews />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-profile"
                exact
                element={
                  <PrivateRoute>
                    <Freelancerprofile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-create-services"
                exact
                element={
                  <PrivateRoute>
                    <AddService />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-ongoing-services"
                exact
                element={
                  <PrivateRoute>
                    <ManageServices2 />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-completed-services"
                exact
                element={
                  <PrivateRoute>
                    <ManageServices3 />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-proposal"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerProposal />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-statement"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerStatment />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-messages"
                exact
                element={
                  <PrivateRoute>
                    <FreelancerMessages />
                  </PrivateRoute>
                }
              />
              <Route
                path="/jobs"
                exact
                element={
                  <PrivateRoute>
                    <Jobs />
                  </PrivateRoute>
                }
              />
              <Route
                path="/jobs/all"
                exact
                element={
                  <PrivateRoute>
                    <ManageJobs />
                  </PrivateRoute>
                }
              />
              <Route
                path="/manage-projects"
                exact
                element={
                  <PrivateRoute>
                    <ManageProjects />
                  </PrivateRoute>
                }
              />
              <Route
                path="/freelancer-services"
                exact
                element={
                  <PrivateRoute>
                    <ManageServices />
                  </PrivateRoute>
                }
              />
              <Route
                path="/client-payouts"
                exact
                element={
                  <PrivateRoute>
                    <ClientPayouts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/client-reviews"
                exact
                element={
                  <PrivateRoute>
                    <ClientReviews />
                  </PrivateRoute>
                }
              />

              <Route
                path="/active-reviews"
                exact
                element={
                  <PrivateRoute>
                    <ActiveReviews />
                  </PrivateRoute>
                }
              />
              <Route
                path="/client-statement"
                exact
                element={
                  <PrivateRoute>
                    <ClientStatement />
                  </PrivateRoute>
                }
              />
              <Route
                path="/client-messages"
                exact
                element={
                  <PrivateRoute>
                    <ClientMessages />
                  </PrivateRoute>
                }
              />
              <Route
                path="/saved"
                exact
                element={
                  <PrivateRoute>
                    <ClientSaved />
                  </PrivateRoute>
                }
              />

              <Route
                path="/active-jobs"
                exact
                element={
                  <PrivateRoute>
                    <ActiveJobs />
                  </PrivateRoute>
                }
              />

              <Route
                path="/my-project"
                exact
                element={
                  <PrivateRoute>
                    <MyProject />
                  </PrivateRoute>
                }
              />
              <Route
                path="/active-projects"
                exact
                element={
                  <PrivateRoute>
                    <ActiveProject />
                  </PrivateRoute>
                }
              />
              <Route
                path="create-project"
                exact
                element={
                  <PrivateRoute>
                    <CreateProject />
                  </PrivateRoute>
                }
              />

              <Route
                path="my-projects"
                exact
                element={
                  <PrivateRoute>
                    <ClientProjects />
                  </PrivateRoute>
                }
              />
              <Route
                path="/projects"
                exact
                element={
                  <PrivateRoute>
                    <Projects />
                  </PrivateRoute>
                }
              />
              <Route
                path="/payouts"
                exact
                element={
                  <PrivateRoute>
                    <Payouts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/statement"
                exact
                element={
                  <PrivateRoute>
                    <Statement />
                  </PrivateRoute>
                }
              />

              <Route
                path="/profile"
                exact
                element={
                  <PrivateRoute>
                    <ClientProfile />
                  </PrivateRoute>
                }
              />
              <Route path="*" exact element={<Error />} />

              {/* <ProtectedRoute path='/' exact>

              </ProtectedRoute> */}
            </Routes>
          </Router>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
