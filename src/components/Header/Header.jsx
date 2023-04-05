import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/Ema-John.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="menu">
        <Link to="/">Shop</Link>
        <Link to="/Orders">Order</Link>
        <Link to="/inventory">Inventory</Link>

        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
