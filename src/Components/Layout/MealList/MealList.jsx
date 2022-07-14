import React from 'react';
import styles from './MealList.module.scss'
import Card from "../../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import Cart from "../../Cart/Cart";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Ролл "Наоми"',
        description:
            "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
        price: 600,
    },
    {
        id: "m2",
        name: "Спайс в лососе",
        description: "Рис, лосось, соус спайс",
        price: 1200,
    },
    {
        id: "m3",
        name: "Суши с угрем",
        description: "Угорь копченый, соус унаги, кунжут",
        price: 1000,
    },
    {
        id: "m4",
        name: 'Салат "Поке с лососем"',
        description:
            "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
        price: 800,
    },
];


const MealList = (props) => {
    return (
        <section className='container'>
            <Card>
                {
                    DUMMY_MEALS.map((meal) => <MealItem meal={meal} />)
                }
            </Card>
        </section>
    );
};

export default MealList;