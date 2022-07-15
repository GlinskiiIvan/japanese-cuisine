import React, {useContext} from 'react';
import styles from './CartItem.module.scss'

const CartItem = (props) => {
    return (
        <div className={styles['cart-item']}>
            <div>
                <h2>{props.meal.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{props.meal.price} Тг.</span>
                    <span className={styles.amount}>X {props.meal.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={() => props.onRemove()}>-</button>
                <button onClick={() => props.onAdd()}>+</button>
            </div>
        </div>
    );
};

export default CartItem;