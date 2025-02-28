import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [item, setItem] = useState(null);
    const db = getFirestore();

    useEffect(()=>{
        const getItem = async ()=>{
            const docRef = doc(db, "items", id);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setItem({id: docSnap.id, ...docSnap.data()});
            } else {
                console.log("Nose encontró el documento.");
            }
        };
        getItem()
    },[id, db]);

    return (
    <div className="itemDetailContainer">
        {item ? <ItemDetail item={item} /> : 
        <p> Cargando detalles del producto... </p>}
    </div>
    );
};

export default ItemDetailContainer;