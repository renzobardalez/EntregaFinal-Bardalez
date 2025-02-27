
import { getFirestore, collection, addDoc } from "firebase/firestore";

function CheckOut(){
    const {cart} = useCart();
    const comprador ={
        name: "Richard",
        phone: "123456789",
        email: "richard.bardalez@gmail.com"
    };
    const order ={
        comprador,
        items: cart.map(item =>({
            id: item.id,
            title: item.name,
            price: item.price
        })),
    //    total:
    }

    const handlePurchase = async()=>{
        try {
            const db = getFirestore();
            const orders = collection(db, 'orders');
            const orderRef= await addDoc(orders, order)
            alert(`Compra realizada con éxito. Orden número: ${orderRef}`)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <h2> Finalizar compra </h2>
            <button onClick={handlePurchase}> Comprar </button>
        </div>
    );
}

export default CheckOut;