import "./CartWidget.css";
import cartIcon from "/assets/icons/cart-icon.svg";
import { CartContext} from '../context/CartContext';
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { itemCount } = useContext(CartContext)
return (
    < Link to="/cart">
        <div className="cartWidget">
                <div className="cartImage">
                    <img src ={cartIcon} alt="Ícono del carrito de compras"/>
                </div>
                <div className="cartCount">
                    <span> {itemCount} </span>
                </div>
        </div>
    </Link>
);
};

export default CartWidget;