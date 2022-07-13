import React from 'react';
import styles from './PromoText.module.scss'

const PromoText = (props) => {
    return (
        <section className={styles['promo-text']}>
            <h1>Онлайн Ресторан Суши - Япона Кухня!</h1>
            <p>
                Япона Кухня - это онлайн суши-ресторан, в котором любимые суши и сашими,
                роллы и другие блюда национальной японской кухни делает команда
                профессиональных поваров.
            </p>
            <p>
                Быстрая работа и качественная продукция, а также самые настоящие
                компоненты придают хороший вкус блюдам, дарят наслаждение от трапезы.
            </p>
        </section>
    );
};

export default PromoText;