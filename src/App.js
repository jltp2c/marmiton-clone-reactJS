import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from './App.module.css';

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
