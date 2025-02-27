import { useState, useMemo } from "react";

function FilterUseMemo(){
    const [query, setQuery] =  useState("");
    const items = [
        "Renzo",
        "Andrea",
        "Nala",
        "Spot",
        "Bosh",
        "Lolo"
    ];

const filteredItems = useMemo(() => {
        console.log("Filtrando elementos...");
    
        return items.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
    },[query])

    return (
        <div>
            <input
                placeholder="Filtrar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul> 
                {filteredItems.map((item, index) => ( /* filteredItems ya no se llama coo función ya que es un hook */
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default FilterUseMemo;  