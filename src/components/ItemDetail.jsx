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
        <div className="Item">
            <div className="ImageContainer">
                <img src={imagePath} alt={item.alt} />
            </div>
            <h2>{item.name}</h2>
            <p> Price: $ {item.price}.00</p>
            <ItemCount className="ItemCount"/>
        </div>
        </>
    );
};

export default ItemDetail;