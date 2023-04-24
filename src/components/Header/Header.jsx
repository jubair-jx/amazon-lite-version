import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/Ema-John.png";
import { AuthContext } from "../../ContextProvider/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="text-white flex justify-end gap-6">
        <Link to="/">Shop</Link>
        <Link to="/Orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {user && (
          <span>
            {user.email}{" "}
            <button
              onClick={handleSignOut}
              className="btn btn-sm ml-3 text-black bg-slate-300"
            >
              Sign Out
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
