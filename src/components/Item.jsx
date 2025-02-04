import "./Item.css";
import { useState, useEffect } from "react";

const Item = ({item}) => {
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
        <div className="Item">
            <div className="ImageContainer">
                <img src={imagePath} alt={item.alt} />
            </div>
            <h2>{item.name}</h2>
            <p> Price: $ {item.price}.00</p>
            <button> See detail </button>
        </div>
    );
};

export default Item;