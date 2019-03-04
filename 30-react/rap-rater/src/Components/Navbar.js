import React from "react";
import { Link, Redirect } from "react-router-dom";

const Navbar = props => {
  return (
    <ul className="navbar">
      <Link to="/rappers">
        <li className="navitem">Rappers</li>
      </Link>
      <Link to="/home">
        <li className="navitem">Home</li>
      </Link>
      <Link to="/login">
        <li className="navitem">Log In</li>
      </Link>
      <Link to="/signup">
        <li className="navitem">Sign Up</li>
      </Link>
      <li onClick={props.clickHandler}>Log Out</li>
    </ul>
  );
};

export default Navbar;
