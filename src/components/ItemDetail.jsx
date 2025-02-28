import ItemCount from "./ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({item}) =>{

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
                <ItemCount stock={item.stock} onAdd={(quantity) => console.log(`Se agregaron ${quantity} items al carrito.`)} />
            </div>
        </div>
    );
}

export default ItemDetail;