import React from 'react';
import styles from './HeaderCartButton.module.scss'
import CartIcon from "../../../Cart/CartIcon";

const HeaderCartButton = (props) => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Корзина</span>
            <span className={styles.badge}>4</span>
        </button>
    );
};

export default HeaderCartButton;