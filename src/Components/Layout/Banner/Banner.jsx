import React from 'react';
import styles from './Banner.module.scss'
import sushiImg from '../../../assets/sushi.jpg'

const Banner = (props) => {
    return (
        <section>
            <div className={styles['main-image']}>
                <img src={sushiImg} alt="Изображение суши"/>
            </div>
        </section>
    );
};

export default Banner;