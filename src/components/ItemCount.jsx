import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
    if (quantity < stock) {
        setQuantity(quantity + 1);
    }
    };
    const handleDecrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };
    return(
            <div className="ItemCountContainer">
                <div>
                    <button onClick={handleDecrement} disabled = {quantity=== 1} > - </button>
                    <span> {quantity} </span>
                    <button onClick={handleIncrement} disabled = {quantity=== stock}> + </button>
                </div>
                <div>
                    <button onClick={() => onAdd(quantity)}> Add to cart </button>
                </div>
            </div>

    )
}
export default ItemCount;
