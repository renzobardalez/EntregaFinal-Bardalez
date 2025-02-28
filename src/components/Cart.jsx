import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart () {

    const {cartItems, clearCart, finalizePurchase } =useContext(CartContext);
    return (
        <div>
            <h2> Carrito de compras </h2>
            {cartItems.length === 0 ? (
                <p> El carrito esá vacío </p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <p>
                            {item.name} - Cantidad: {item.quantity} - Precio: {item.currency}
                            {item.price}
                        </p>
                        {/* <button onClick={()=> removeItem(item.id)}> Eliminar </button> */}
                    </div>
                ))
            )}
            <button onClick={finalizePurchase}> Finalizar compra </button>
            <button onClick={clearCart}> Limpiar carrito </button>
        </div>
    );
}

export default Cart;