//import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const Nav = () => {
return (
<nav>
    <ul>
        <li>New</li>
        <li>Men</li>
        <li>Women</li>
        <li>Sale</li>
    </ul>

    <CartWidget />
</nav>
);
};

export default Nav;