import React from 'react';
import styles from './ModalWindow.module.scss'

const ModalWindow = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
};

export default ModalWindow;