// import { Link } from 'react-router-dom';
import Item from './Item';
import "./ItemList.css";
import {useEffect, useState} from 'react';
import { getFirestore, collection, getDocs, query, where, getDoc } from 'firebase/firestore';

const ItemList = ({ category }) => {
    const [items, setItems] = useState([]);
    //const [loading, setLoading] = useState(true);
    const db= getFirestore(); 
    useEffect(() => {
        const getItems = async () =>{
            let q;
            if(category){
                q = query(collection(db,'items'), where('category', '==', category));
            } else{
                q = collection(db,'items');
            }
            const querySnapshot = await getDocs(q);
            setItems(querySnapshot.docs.map(doc=>({id: doc.id, ...doc.data()})));
        };
        getItems()
    },[category, db]);

    return (
        <div className='ItemList'>
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};
export default ItemList;