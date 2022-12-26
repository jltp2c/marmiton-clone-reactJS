import Content from "./pages/Homepage/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from './App.module.css';
// import {Seed} from './data/Seed'

// Seed()

function App() {
  return (
   <div className={`d-flex flex-column ${styles.appContainer}`}>
     <Header/>
     <Content/>
     <Footer/> 
   </div>
  );
}

export default App;
