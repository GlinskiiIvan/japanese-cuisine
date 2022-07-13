import React from 'react';
import styles from './Header.module.scss'

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.headerWrapper}>
                <div className={`container ${styles.headerContent}`}>
                    <h1>Япона кухня</h1>
                    <button>Корзина</button>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;