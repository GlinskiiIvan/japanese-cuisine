import React from 'react';
import styles from './MealItem.module.scss'
import MealItemForm from "../MealItemForm/MealItemForm";

const MealItem = (props) => {
    return (
        <div className={styles.meal}>
            <div>
                <h3 className={styles.title}>{props.meal.name}</h3>
                <p className={styles.description}>{props.meal.description}</p>
                <span className={styles.price}>{props.meal.price} Тг.</span>
            </div>
            <div>
                <MealItemForm />
            </div>
        </div>
    );
};

export default MealItem;