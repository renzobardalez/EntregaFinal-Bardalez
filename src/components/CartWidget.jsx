import "./CartWidget.css";
import cartIcon from "../assets/icons/cart-icon.svg";

const CartWidget = () => {
return (
<div>
    <img
        src ={cartIcon}
        alt="Ícono del carrito de compras"
    />
</div>
);
};

export default CartWidget;