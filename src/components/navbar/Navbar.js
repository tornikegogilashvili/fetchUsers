import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"
import routes from "../../conf/constants/routes";


const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className="navbar_logo">
                <NavLink to={routes.HOME_ROUTE} >React App</NavLink>
            </h3>
            <ul className="navbar_linksContainer">
                <li>
                    <NavLink to={routes.HOME_ROUTE} >HOME</NavLink>
                </li>
                <li>
                    <NavLink to={routes.USERS_ROUTE} >USERS</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;