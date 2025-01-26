import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({initial = 1, stock = 10, onAdd, producto}){
    const [count, setCount] = useState(initial);

    function handleIncrement(){
        if (count < stock) setCount(count + 1);
    }
    function handleDecrement(){
        if (count > 1) setCount(count - 1);
    }
    return(
        <div className="itemCard">
            <h3>{producto}</h3>
            <div>
                <button onClick={handleDecrement} disabled = {count=== 1} > - </button>
                <span> {count} </span>
                <button onClick={handleIncrement} disabled = {count=== stock}> + </button>
                </div>
            <button onClick={() => onAdd(count, producto)}> Add to cart </button>
        </div>
    )
}