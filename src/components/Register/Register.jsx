import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleImg from "../../images/google.svg";
import { AuthContext } from "../../ContextProvider/AuthProviders";

const Register = () => {
  const { name } = useContext(AuthContext);
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;
    const confirmPass = form.confirmPass.value;
    setError("");
    if (pass !== confirmPass) {
      setError("Your Password did not match");
      return;
    } else if (pass.length < 6) {
      setError("Please Enter a at least 6 Charcters Password");
      return;
    }
    createUser(email, pass)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 border-[2px] ">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-4xl mt-5 font-bold">Sign Up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-center text-2xl mt-5 font-medium">Sign up</h2>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-80"
                  name="name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-80"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-80"
                  name="confirmPass"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="bg-[#FF99004D] px-4 py-3 rounded-md">
                  Sign Up
                </button>
              </div>
              <small className="text-center">
                <h2>
                  Already Have a account
                  <Link to="/login" className=" ml-2 mt-3 text-[#ff9900d9]">
                    Login
                  </Link>{" "}
                </h2>
              </small>

              <div className="form-control mt-6">
                <button className=" bg-transparent border-[2px] px-4 py-2 rounded-md flex justify-center items-center">
                  <img src={GoogleImg} alt="" />
                  <h2 className="ml-3">Continue with Google</h2>
                </button>
              </div>

              <small className="text-center text-red-500 ">{error}</small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
