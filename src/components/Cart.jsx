// Usar contexts para este componente
// import {useCart} from "../contexts/CartContext";
// import CheckOut from "./Checkout"; 

// const Cart = () => {
//     const {cart, removeItem, clear } = useCart;

//     const total = cart.reduce((acc, item)=> acc + item.price * item.quantity,0);

//     return (
//         <div>
//             <h2> Carrito de compras </h2>
//             {cart.lenght === 0 ? (
//                 <p> El carrito esá vacío </p>
//             ) : (
//                 cart.map((item) => (
//                     <div key={item.id}>
//                         <p>
//                             {item.name} - Cantidad: {item.quantity} - Precio: {item.currency}
//                             {item.price}
//                         </p>
//                         <button onClick={()=> removeItem(item.id)}> Eliminar </button>
//                     </div>
//                 ))
//             )}

//         {cart.lenght > 0 && (
//             <>
//                 <h3> Total: USD{total.toFixed(2)}</h3>{" "}

//                 <div>
//                     <button onClick={clear}> Vaciar carrito </button>
//                 </div>
//                 {/* <CheckOut/> */}
//             </>
//         );
//         };

//         </div>
//     )
// }

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