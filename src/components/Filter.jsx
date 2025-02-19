import { useState } from "react";

function Filter(){
    const [count, setCount] = useState(0);
    const [query, setQuery] =  useState("");
    const items = [
        "Renzo",
        "Andrea",
        "Nala",
        "Spot",
        "Bosh",
        "Lolo"
    ];
const filteredItems =() => {
    console.log("Filtrando elementos...");

    return items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );
};
    return (
        <div>
            <input
                placeholder="Filtrar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filteredItems().map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default Filter;