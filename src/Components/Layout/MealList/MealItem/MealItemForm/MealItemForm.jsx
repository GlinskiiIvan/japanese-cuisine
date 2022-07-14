import React from 'react';
import styles from './MealItemForm.module.scss'
import Input from "../../../../UI/Input/Input";

const MealItemForm = (props) => {
    return (
        <form className={styles.form}>
            <Input label='Количество:' input={{
                id: Math.random(),
                type: 'number',
                min: 1,
                step: 1,
                defaultValue: 1
            }} />
            <button>Добавить</button>
        </form>
    );
};

export default MealItemForm;