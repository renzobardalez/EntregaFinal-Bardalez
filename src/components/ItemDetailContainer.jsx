import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../api/productsAPI";
import "./ItemDetailContainer.css"
import ItemDetail from "./ItemDetail";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
const { id } = useParams();
const [item, setItem] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchItem = async () => {
        try {
            const product = await getProductById(id);
            setItem(product);
        } catch (error) {
            console.error('Error al cargar el producto', error);
        } finally {
            setLoading(false);
        }
    };
    fetchItem();
}, [id]);


useEffect(()=>{
    const db = getFirestore()
    const itemRef = doc(db, 'items', id)
    getDoc(itemRef).then(snapshot =>{
        if(snapshot.exists()){
            setItem({id: snapshot.id, ...snapshot.data()})
        } else{
            console.log('No existe el producto')
        }
    }).finally(()=>setLoading(false))
},[])


    if (loading) {
    return <p>Cargando...</p>;
    }
    if (!item) {
    return <p>Ítem no encontrado</p>;
    }

    return (
    <div className="itemDetailContainer">
        <ItemDetail item={item} />
    </div>
    );
};

export default ItemDetailContainer;