import React, {useContext} from 'react';
import styles from './Cart.module.scss'
import {CartContext} from "../../store/Cart/CartContext";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.items;
    const totalPrice = cartContext.totalPrice;
    const hasItems = cartContext.items.length > 0;

    const addItemToCartHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }
    const removeItemToCartHandler = (id) => {
        cartContext.removeItem(id);
    }

    return (
        <div>
            {cartItems.map((item) =>
                <CartItem
                    key={item.id}
                    meal={item}
                    onAdd={addItemToCartHandler.bind(null, item)}
                    onRemove={removeItemToCartHandler.bind(null, item.id)}
                />)}
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