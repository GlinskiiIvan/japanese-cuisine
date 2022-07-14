import React from 'react';
import styles from './Header.module.scss'
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import Cart from "../../Cart/Cart";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.headerWrapper}>
                <div className={`container ${styles.headerContent}`}>
                    <h1>Япона кухня</h1>
                    <HeaderCartButton />
                    <ModalWindow><Cart /></ModalWindow>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;