import React from 'react';
import styles from './Cart.module.scss'

const Cart = (props) => {
    const cartItems = [
        {
            id: "m3",
            name: "Суши с угрем",
            amount: 2,
            price: 1400
        },
        {
            id: "m2",
            name: "Спайс в лососе",
            amount: 3,
            price: 3400
        },
        {
            id: "m4",
            name: 'Салат "Поке с лососем"',
            amount: 1,
            price: 800
        },];

    return (
        <div>
            {cartItems.map((item) => <span>{item.name}</span>)}
            <div className={styles.total}>
                <span>Итого: 4200 Тг.</span>
            </div>
            <div className={styles.actions}>
                <button>Закрыть</button>
                <button>Заказать</button>
            </div>
        </div>
    );
};

export default Cart;