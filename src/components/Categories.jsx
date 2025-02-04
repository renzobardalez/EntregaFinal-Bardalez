import "./Categories.css";
import Title from "./Title";
import { Link } from "react-router-dom";


export const cat = [
    {id:1, category: "Men"},
    {id:2, category:"Women"}
];

function Categories () {
    return (
        <>
        <Title text="Categories"/>
        <div>
            <ul >
                {cat.map((item) => (
                    <li key={item.id}>
                        <Link to ={`/category/${item.id}`}>{item.category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
    );
};
export default Categories;
