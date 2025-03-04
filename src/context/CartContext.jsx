import { createContext, useState } from "react";
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const db = getFirestore();

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

    const removeItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        const removedItem = cartItems.find(item => item.id === itemId);
        setCartItems(updatedCart);
        setItemCount(itemCount - (removedItem ? removedItem.quantity : 0));
    };

    const clearCart = () => {
        setCartItems([]);
        setItemCount(0);
    };

    const finalizePurchase = async (buyerInfo) => {
        const order = {
            buyer: buyerInfo,
            items: cartItems,
            total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        };

        try {
            // Guarda la orden en Firestore
            await addDoc(collection(db, 'orders'), order);

            // Descuenta el stock de los productos
            for (const item of cartItems) {
                const productRef = doc(db, 'items', item.id);
                const productDoc = await getDoc(productRef);
                if (productDoc.exists()) {
                    await updateDoc(productRef, {
                        stock: productDoc.data().stock - item.quantity
                    });
                } else {
                    console.error(`No document to update: ${item.id}`);
                }
            }

            alert('Compra registrada correctamente');
            clearCart();
        } catch (error) {
            console.error('Error al grabar la compra: ', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, itemCount, addItemToCart, removeItem, clearCart, finalizePurchase }}>
            {children}
        </CartContext.Provider>
    );
};