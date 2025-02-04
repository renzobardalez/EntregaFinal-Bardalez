

const ItemCount = ({ items }) => {

    function handleCart(cantidad, producto){
        console.log(`Agregaste ${cantidad} ${producto}(s) al carrito.`)
    }
        return (
            <div>
                <ItemCount stock={5} onAdd={handleCart} producto={"Tanks"}/> 
            </div>
        );
    };
    export default ItemCount;