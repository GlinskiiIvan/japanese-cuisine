import styles from './App.module.scss'
import Header from "../Layout/Header/Header";
import Banner from "../Layout/Banner/Banner";
import PromoText from "../Layout/PromoText/PromoText";
import MealList from "../Layout/MealList/MealList";
import React from "react";
import CartProvider from "../../store/Cart/CartProvider";

function App(props) {
  return (
    <CartProvider>
        <Header />
        <Banner />
        <PromoText />
        <MealList />
    </CartProvider>
  );
}

export default App;
