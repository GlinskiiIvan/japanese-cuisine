import React, {useContext} from 'react';
import styles from './Cart.module.scss'
import {CartContext} from "../../store/Cart/CartContext";

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.items;
    const totalPrice = cartContext.totalPrice;
    const hasItems = cartContext.items.length > 0;

    return (
        <div>
            {cartItems.map((item) => <span key={item.id}>{item.name}</span>)}
            <div className={styles.total}>
                <span>Итого: {totalPrice} Тг.</span>
            </div>
            <div className={styles.actions}>
                <button onClick={() => props.closeModal()}>Закрыть</button>
                {hasItems && <button>Заказать</button>}
            </div>
        </div>
    );
};

export default Cart;