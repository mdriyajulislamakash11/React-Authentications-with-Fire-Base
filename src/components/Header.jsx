import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center m-24">
      <div>
        <NavLink className="mr-4" to="/">Home</NavLink>

        <NavLink to="login">Login</NavLink>
      </div>
    </div>
  );
};

export default Header;
