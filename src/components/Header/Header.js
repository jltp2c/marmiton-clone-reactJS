import { useState } from "react";
import cookChef from "../../assets/img/cookchef.png" ;
import HeaderMenu from "./HeaderMenu";

function Header() {

const [showMenu,setShowMenu] = useState(false)

  return (
    <header className="header d-flex flex-row align-items-center">
        
        <div className="logo flex-fill">
            <img src={cookChef} alt="logo" />
        </div>
        <ul className="headerList">
            <button className="mr-5 btn btn-reverse-primary">
             <i className="fa-solid fa-heart mr-5"></i>
              <span>Wishlist</span>
            </button>
            <button className="btn btn-primary">Connexion</button>
        </ul>
        <i className={`fa-solid fa-bars headerXs`} onClick={() => setShowMenu(!showMenu)}/>
        {showMenu && 
        <>
        <div onClick={()=>setShowMenu(false)} className="calc">

        </div>
        <HeaderMenu/>
        </>
        }
    </header>
  )
}

export default Header