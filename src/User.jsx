import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/assets/logo.svg";

export const User = ({ name, age }) => {
  return (
    <React.Fragment>
      <h1>
        This is user component {name} {age}
        <NavLink to="/">Home</NavLink>
      </h1>
      <div> User Component </div>
      <img src={logo} />
    </React.Fragment>
  );
};

export const Home = () => {
  return (
    <h1>
      Home Component
      <NavLink to="/user">User</NavLink>
      <NavLink to="/profile"> Profile </NavLink>
    </h1>
  );
};
