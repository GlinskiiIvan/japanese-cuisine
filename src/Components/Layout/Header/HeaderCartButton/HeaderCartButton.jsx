import React, {useContext, useState} from 'react';
import styles from './HeaderCartButton.module.scss'
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import Cart from "../../../Cart/Cart";
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";
import {CartContext} from "../../../../store/Cart/CartContext";

const HeaderCartButton = (props) => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    };

    const cartContext = useContext(CartContext);
    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0)

    return (
        <React.Fragment>
            <button className={styles.button} onClick={() => setShowModal(true)}>
                <span className={styles.icon}><CartIcon /></span>
                <span>Корзина</span>
                <span className={styles.badge}>{cartItemsNumber}</span>
            </button>
            {showModal && <ModalWindow><Cart closeModal={closeModal} /></ModalWindow>}
        </React.Fragment>
    );
};

export default HeaderCartButton;