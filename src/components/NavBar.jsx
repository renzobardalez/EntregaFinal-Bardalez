//import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Nav () {
return (
<nav className="navBar">
    <ul>
        <li>
            <Link to={"/"}> Home </Link>
        </li>
        <li>
            <Link to={"/categories"}>  Categories </Link>
        </li>
    </ul>
    <CartWidget />
</nav>
);
};

export default Nav;