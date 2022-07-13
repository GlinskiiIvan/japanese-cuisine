import styles from './App.module.scss'
import Header from "../Layout/Header/Header";
import Banner from "../Layout/Banner/Banner";

function App(props) {
  return (
    <div className="App">
      <Header />
        <Banner />
    </div>
  );
}

export default App;
