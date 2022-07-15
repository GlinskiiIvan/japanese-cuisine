import React, {useRef, useState} from 'react';
import styles from './MealItemForm.module.scss'
import Input from "../../../../UI/Input/Input";

const MealItemForm = (props) => {
    const [isValidAmount, setIsValidAmount] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const inputAmount = amountInputRef.current.value;
        if(inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10){
            setIsValidAmount(false);
            return;
        }

        props.onAddToCart(+inputAmount);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Количество:'
                input={{
                    id: Math.random(),
                    type: 'number',
                    min: 1,
                    step: 1,
                    defaultValue: 1
                }}
            />
            <button>Добавить</button>
            {!isValidAmount && <p>Введите количество от 1 до 10</p>}
        </form>
    );
};

export default MealItemForm;