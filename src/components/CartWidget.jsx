import "./CartWidget.css";
import cartIcon from "/assets/icons/cart-icon.svg";
import { CartContext} from '../context/CartContext';
import { useContext } from "react";

const CartWidget = () => {
    const { itemCount } = useContext(CartContext)
return (
        <div className="cartWidget">
            <div className="cartImage">
                <img src ={cartIcon} alt="Ícono del carrito de compras"/>
            </div>
            <div className="cartCount">
                <span> {itemCount} </span>
            </div>
        </div>
);
};

export default CartWidget;