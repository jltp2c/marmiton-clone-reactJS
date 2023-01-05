import Content from "./pages/Homepage/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from './App.module.css';
import Admin from "./pages/Homepage/Admin";
import { useState } from "react";

// import {Seed} from './data/Seed'

// Seed()

function App() {

  const [page,setPage] = useState('homepage')
  return (
   <div className={`d-flex flex-column ${styles.appContainer}`}>
     <Header setPage={setPage}/>
     {page === 'content' && <Content/>}
     {page === 'admin' && <Admin/>}
     <Footer/> 
   </div>
  );
}

export default App;
