import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/simple/states">With States</NavLink>
      <br />
      <NavLink to="/simple/redux">With Redux</NavLink>
    </div>
  );
};

export default Navbar;
