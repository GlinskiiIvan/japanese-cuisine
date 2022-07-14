import React, {useState} from 'react';
import styles from './HeaderCartButton.module.scss'
import CartIcon from "../../../Cart/CartIcon/CartIcon";
import Cart from "../../../Cart/Cart";
import ModalWindow from "../../../UI/ModalWindow/ModalWindow";

const HeaderCartButton = (props) => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <React.Fragment>
            <button className={styles.button} onClick={() => setShowModal(true)}>
                <span className={styles.icon}><CartIcon /></span>
                <span>Корзина</span>
                <span className={styles.badge}>4</span>
            </button>
            {showModal && <ModalWindow><Cart closeModal={closeModal} /></ModalWindow>}
        </React.Fragment>
    );
};

export default HeaderCartButton;