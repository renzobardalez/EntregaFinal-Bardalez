import "./CartWidget.css";
import cartIcon from "../assets/icons/cart-icon.svg";

const CartWidget = () => {
return (
    <>
        <div className="cartWidget">
            <div className="cartImage">
                <img src ={cartIcon} alt="Ícono del carrito de compras"/>
            </div>
            <div className="cartBadge">
            <span> 3 </span>
        </div>
        </div>
    </>
);
};

export default CartWidget;