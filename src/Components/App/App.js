import styles from './App.module.scss'
import Header from "../Layout/Header/Header";
import Banner from "../Layout/Banner/Banner";
import PromoText from "../Layout/PromoText/PromoText";
import MealList from "../Layout/MealList/MealList";

function App(props) {
  return (
    <div className="App">
      <Header />
        <Banner />
        <PromoText />
      <MealList />
    </div>
  );
}

export default App;
