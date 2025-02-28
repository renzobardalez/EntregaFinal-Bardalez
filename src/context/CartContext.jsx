import { createContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const db = getFirestore(); // Crea la instancia de Firestore

    const addItemToCart = (item, quantity) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + quantity }
                    : cartItem
            ));
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }

        setItemCount(itemCount + quantity);
    };

    const clearCart = () => {
        setCartItems([]);
        setItemCount(0);
    };

    const finalizePurchase = async () => {
        const order = {
            items: cartItems,
            total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        };

        try {
            // Guarda la orden en Firestore
            await addDoc(collection(db, 'orders'), order);
            alert('Compra registrada correctamente');
            clearCart();
        } catch (error) {
            console.error('Error al grabar la compra: ', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, itemCount, addItemToCart, clearCart, finalizePurchase }}>
            {children}
        </CartContext.Provider>
    );
};