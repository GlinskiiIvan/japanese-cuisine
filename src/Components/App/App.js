import styles from './App.module.scss'
import Header from "../Layout/Header/Header";
import Banner from "../Layout/Banner/Banner";
import PromoText from "../Layout/PromoText/PromoText";

function App(props) {
  return (
    <div className="App">
      <Header />
        <Banner />
        <PromoText />
    </div>
  );
}

export default App;
