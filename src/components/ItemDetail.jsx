import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({item}) => {
    const {addItemToCart } = useContext(CartContext);

    const handleAddToCart = (quantity) => {
        addItemToCart(item, quantity);
    }

    return (
        <div className="item-detail">
            <div className="image-container">
                <img 
                    src={`/assets/images/${item.image}`}
                    alt={item.alt} 
                />
            </div>
            <h2 className="item">{item.name}</h2>
            <p className="price"> Price: $ {item.price}.00</p>
            <p className="description"> Description: $ {item.description}</p>
            <div className="item-count">
                <ItemCount stock={item.stock} onAdd={handleAddToCart} />
            </div>
        </div>
    );
}

export default ItemDetail;