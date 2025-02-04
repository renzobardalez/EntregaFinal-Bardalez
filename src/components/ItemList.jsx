import { Link } from 'react-router-dom';
import Item from './Item';
import "./ItemList.css";

const ItemList = ({ items }) => {
    return (
        <>
        <div className='ItemList'>
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
        </>
    );
};
export default ItemList;