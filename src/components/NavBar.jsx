import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";


const Navbar= () => {
return (
<nav className="navbar">
    <ul>
        <li>
            <Link to={"/"}> Home </Link>
        </li>
        <li>
            <Link to={"/category/Men"}> Men </Link>
        </li>
        <li>
            <Link to={"/category/Women"}> Women </Link>
        </li>
        <CartWidget />
    </ul>

</nav>
);
};

export default Navbar;