import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./actions/authActions";
import Navigate from "../../common/Navigate";
import Banner from "../../common/Banner";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loggingin, setLoggingin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);
    loginUser(data, setSuccess, setError, setLoggingin);
  };

  if (success !== null) {
    localStorage.setItem("logged_in", JSON.stringify(success));
    navigate("/dashboard");
    location.reload();
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("logged_in")) !== null) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="w-full flex justify-center items-center h-screen bg-[#c3d0c6]">
      <div className="w-full md:w-[70%] grid lg:grid-cols-2 px-4 md:px-0">
        <Banner />

        <div className="bg-white p-8 lg:p-12">
          <div className="mb-12">
            <div className="w-full flex justify-center text-3xl text-gray-800 font-medium">
              <span>Login</span>
            </div>
            <div className="w-full flex justify-center text-xs text-gray-600 my-1">
              Kindly fill in your details
            </div>
          </div>
          <span className="text-red-500 text-sm">
            {error !== null && error}
          </span>
          <form onSubmit={handleLogin}>
            <div className="space-y-1 my-4">
              <span className="text-gray-600 text-sm">Email</span>
              <input
                type="email"
                className="w-full border border-gray-400 rounded-sm p-1 text-gray-600"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1 my-4">
              <span className="text-gray-600 text-sm">Password</span>
              <input
                type="password"
                className="w-full border border-gray-400 rounded-sm p-1 text-gray-600"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-12">
              <button className="w-full p-3 rounded-sm bg-[#0259dc] text-white">
                {loggingin ? "Logging in..." : "Login"}
              </button>
              <Navigate />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
