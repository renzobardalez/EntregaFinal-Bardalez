import "./ItemListContainer.css";
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from "../api/productsAPI";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () =>{
            try {
                const products = await getProducts();
                setItems(products);
            } catch(error){
                console.error('Error al cargar productos',error);
            } finally{
                setLoading(false);
            }
        };
        fetchItems()
    },[]);
return (
    <div className="ItemListContainer">
        <h2>JOIN THE CLUB</h2>
        {loading ? (
            <p> Cargando... </p>) : (<ItemList items={items} />)
        }
    </div>
    );
};

export default ItemListContainer;