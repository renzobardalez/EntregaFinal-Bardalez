import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) =>{
    
    return(
        <div className="Item">
            <div className="ImageContainer">
                <img 
                    src={`/assets/images/${item.image}`}
                    alt={item.alt} 
                />
            </div>
            <h2>{item.name}</h2>
            <p> Price: $ {item.price}.00</p>
            <Link to={`/item/${item.id}`}> Ver detalle </Link>
        </div>
    )
}
export default Item;