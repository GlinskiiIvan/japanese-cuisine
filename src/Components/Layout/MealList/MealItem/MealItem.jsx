import React, {useContext} from 'react';
import styles from './MealItem.module.scss'
import MealItemForm from "./MealItemForm/MealItemForm";
import {CartContext} from "../../../../store/Cart/CartContext";

const MealItem = (props) => {
    const cartContext = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.meal.id,
            name: props.meal.name,
            price: props.meal.price,
            amount: amount
        })
    }

    return (
        <div className={styles.meal}>
            <div>
                <h3 className={styles.title}>{props.meal.name}</h3>
                <p className={styles.description}>{props.meal.description}</p>
                <span className={styles.price}>{props.meal.price} Тг.</span>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </div>
    );
};

export default MealItem;