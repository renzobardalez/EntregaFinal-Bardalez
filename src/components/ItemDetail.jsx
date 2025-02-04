import "./ItemDetail.css";
import "./ItemCount"
import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const [imagePath, setImagePath] = useState('');

    useEffect(() => {
        const loadImage = async ()=>{
            try{
                const image = await import(`../assets/images/${item.image}`);
                setImagePath(image.default);
            } catch(error){
                console.error('Error al cargar imágenes:', error);
            }
        };
        loadImage();
    }, [item.image]);

    return (
        <>
        <div className="item-detail">
            <div className="image-container">
                <img src={imagePath} alt={item.alt} />
            </div>
            <h2 className="item">{item.name}</h2>
            <p className="price"> Price: $ {item.price}.00</p>
            <p className="description"> Description: $ {item.description}</p>
            <div className="item-count">
                <ItemCount />
            </div>
        </div>
        </>
    );
};

export default ItemDetail;