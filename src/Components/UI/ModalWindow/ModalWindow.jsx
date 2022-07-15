import React from 'react';
import react_dom from 'react-dom'
import styles from './ModalWindow.module.scss'

const ModalWindow = (props) => {
    return (
        <React.Fragment>
            {
                react_dom.createPortal(
                    (<div className={styles.wrapper}>
                        <div className={styles.content}>
                            {props.children}
                        </div>
                    </div>),
                    document.getElementById('modal'))
            }
        </React.Fragment>
    );
};

export default ModalWindow; 