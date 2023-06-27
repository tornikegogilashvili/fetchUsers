import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className="navbar_logo">React App</h3>
            <ul className="navbar_linksContainer">
                <li>
                    <NavLink to="/" >HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/users" >USERS</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;