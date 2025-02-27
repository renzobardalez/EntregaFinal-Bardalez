import { Children, createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({Children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) =>{
        setCart((prevCart) =>{
            const existsItem = prevCart.findIndex(
                (cartItem) => cartItem.id === item.id
            );
            if (existsItem >= 0){
                // si existe el item actualizo la cantidad
            } else {
                return [...prevCart, { ...item, quantity}];
            }
        });
    };
}