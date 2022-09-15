import React from "react";
import { NavLink } from "react-router-dom";

function NavBar( {currentUser} ) {

  return (
    <nav className="nav-bar">
        <img className="logo" alt="logo" src="https://cdn.discordapp.com/attachments/976145903788371988/997151217270661140/smashorpass.png"/>
        <div className="nav-link">
        <NavLink className="link" to="/home">Home</NavLink>
        <NavLink className="link" to="/newUser">Create Account</NavLink>
        <NavLink className="link" to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
