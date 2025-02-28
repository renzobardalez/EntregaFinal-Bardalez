import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
function Cart () {

    const {cartItems, clearCart, finalizePurchase } =useContext(CartContext);
    return (
        <div className="cart-container">
            <h2> Shopping cart </h2>
            {cartItems.length === 0 ? (
                <p> The cart is empty </p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <p className="purchase-list">
                            Item: {item.name} - Quantity: {item.quantity} - Price: ${item.currency}
                            {item.price}.00
                        </p>
                        {/* <button onClick={()=> removeItem(item.id)}> Eliminar </button> */}
                    </div>
                ))
            )}
            <button className="finalize-purchase" onClick={finalizePurchase}> Purchase </button>
            <button className="clear-cart" onClick={clearCart}> Clear cart </button>
        </div>
    );
}

export default Cart;