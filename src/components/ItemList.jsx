import Item from './Item';
import "./ItemList.css";
import {useEffect, useState} from 'react';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemList = ({ category }) => {
    const [items, setItems] = useState([]);
    //const [loading, setLoading] = useState(true);
    const db= getFirestore(); 
    useEffect(() => {
        const fetchItems = async () =>{
            let q;
            if(category){
                q = query(collection(db,"items"), where("category", "==", parseInt(category))); // Para que filtre el number id de Firestore
            } else{
                q = collection(db,'items');
            }
            const querySnapshot = await getDocs(q);
            const fetchedItems = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems(fetchedItems);
        };
        fetchItems();
    },[category, db]);

    return (
        <div className="ItemList">
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};
export default ItemList;