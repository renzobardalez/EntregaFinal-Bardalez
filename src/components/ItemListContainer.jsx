import "./ItemListContainer.css";
import ItemList from './ItemList';

//import { useParams } from "react-router-dom";

const ItemListContainer = ({category}) => {

return (
    <div className="ItemListContainer">
        <h2>JOIN THE CLUB</h2>
        {/* {loading ? (
            <p> Cargando... </p>) : (<ItemList category={category} />)
        } */}
        <ItemList category={category} />
    </div>
    );
};

export default ItemListContainer;