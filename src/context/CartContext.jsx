import { createContext, useState } from "react";
// como usar children
import {getFirestore, collection, addDoc} from "firebase/firestore"

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const db = getFirestore();

    const addItemToCart = (item, quantity) =>{
        setCartItems([...cartItems, {...item, quantity}]);
        setItemCount(itemCount + quantity);
    };
    
    const clearCart = () => {
        setCartItems([]);
        setItemCount(0);
    };

    const finalizePurchase = async() =>{
        const order ={
            items: cartItems,
            total: cartItems.reduce((total, item) => total + item.price * item.quantity,0),
        };
        //Grabamos a Firebase
        try {
            // Guarda la orden en Firestore
            await addDoc(collection(db, 'orders'), order);
            alert('Compra registrada correctamente');
            clearCart();
        } catch (error) {
            console.error('Error al grabar la compra: ', error);
        }
    };
    return(
        <CartContext.Provider value={{ cartItems, itemCount, addItemToCart, clearCart, finalizePurchase  }}>
            {children}
        </CartContext.Provider>
    )
}