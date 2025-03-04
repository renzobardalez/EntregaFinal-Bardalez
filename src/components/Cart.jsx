import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {
    const { cartItems, clearCart, finalizePurchase, removeItem } = useContext(CartContext);
    const [buyerInfo, setBuyerInfo] = useState({ name: '', surname: '', phone: '', email: '' });
    const [formError, setFormError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyerInfo({ ...buyerInfo, [name]: value });
    };

    const handleFinalizePurchase = () => {
        const { name, surname, phone, email } = buyerInfo;
        if (!name || !surname || !phone || !email) {
            setFormError('Please fill in all the fields');
            return;
        }
        setFormError('');
        finalizePurchase(buyerInfo);
    };

    return (
        <div className="cart-container">
            <h2>Shopping cart</h2>
            {cartItems.length === 0 ? (
                <p>The cart is empty</p>
            ) : (
                cartItems.map((item) => (
                    <div className="cart-item-container" key={item.id}>
                        <p className="purchase-list">
                            Item: {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}.00
                        </p>
                        <button className="remove-item" onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                ))
            )}
            <div className="buyer-info-form">
                <h3>Buyer Information</h3>
                <input name="name" placeholder="Name" value={buyerInfo.name} onChange={handleInputChange} />
                <input name="surname" placeholder="Surname" value={buyerInfo.surname} onChange={handleInputChange} />
                <input name="phone" placeholder="Phone" value={buyerInfo.phone} onChange={handleInputChange} />
                <input name="email" placeholder="Email" value={buyerInfo.email} onChange={handleInputChange} />
                {formError && <p className="form-error">{formError}</p>}
            </div>
            <button className="finalize-purchase" onClick={handleFinalizePurchase}>Purchase</button>
            <button className="clear-cart" onClick={clearCart}>Clear cart</button>
        </div>
    );
}

export default Cart;