import "./Item.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Item = ({item}) => {
    const [imagePath, setImagePath] = useState('');
    const navigate = useNavigate();

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

    const handleDetailClick = () => {
        navigate(`/item/${item.id}`);
    };

    return (
        <div className="Item">
            <div className="ImageContainer">
                <img src={imagePath} alt={item.alt} />
            </div>
            <h2>{item.name}</h2>
            <p> Price: $ {item.price}.00</p>
            <button onClick={handleDetailClick}> See detail </button>
        </div>
    );
};

export default Item;