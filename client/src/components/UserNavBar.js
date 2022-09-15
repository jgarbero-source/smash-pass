import React from "react";
import { NavLink } from "react-router-dom";

function UserNavBar( { doLogout, currentUser }) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => doLogout());
    }

    return(
        <nav className="user-nav-bar">
            {currentUser ? <h2>Welcome, {currentUser.name}!</h2> : null}
            <NavLink className="link" end to="/">User</NavLink>
            <NavLink className="link" to="/swiper">Swiper</NavLink>
            <NavLink className="link" to="/matches">Matches</NavLink>
            <button className="link" id="logout-button" onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default UserNavBar;