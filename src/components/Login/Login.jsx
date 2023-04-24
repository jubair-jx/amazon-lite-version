import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleImg from "../../images/google.svg";
import { AuthContext } from "../../ContextProvider/AuthProviders";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    console.log(email, pass);

    signInUser(email, pass)
      .then((result) => {
        const loggedUser = result;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200 border-[2px] ">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-6xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center text-2xl mt-5 font-medium">Login</h2>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder=" Enter Your email"
                className="input input-bordered w-80"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered w-80"
                name="password"
                required
              />
              <div>
                <button
                  className="text-sm px-2 py-2 bg-orange-300 mt-2 rounded-md"
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? (
                    <span>Hide Password</span>
                  ) : (
                    <span>Show Password</span>
                  )}
                </button>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="bg-[#FF99004D] px-4 py-3 rounded-md">
                Login
              </button>
            </div>
            <small className="text-center">
              <h2>
                New to Ema-john?{" "}
                <Link to="/register" className=" ml-2 mt-3 text-[#ff9900d9]">
                  Create New Account
                </Link>{" "}
              </h2>
            </small>

            <div className="form-control mt-6">
              <button className=" bg-transparent border-[2px] px-4 py-2 rounded-md flex justify-center items-center">
                <img src={GoogleImg} alt="" />
                <h2 className="ml-3">Continue with Google</h2>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
