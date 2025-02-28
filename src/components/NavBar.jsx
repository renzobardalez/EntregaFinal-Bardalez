import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Navbar= () => {
    const [categories, setCategories] = useState([]);
    const db = getFirestore();

    useEffect (()=>{
        const fetchCategories = async () =>{
            const querySnapshot = await getDocs(collection(db, "categories"));
            const fetchedCategories = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCategories(fetchedCategories);
        };
        fetchCategories();
    },[db]);

return (
<nav className="navbar">
    <ul>
        <li>
            <Link to={"/"}> Home </Link>
        </li>
        {categories.map((category) => (
            <li key={category.id}>
                <Link to={`/category/${category.id}`}> {category.name} </Link>
            </li>
        ))}
        <CartWidget />
    </ul>

</nav>
);
};

export default Navbar;