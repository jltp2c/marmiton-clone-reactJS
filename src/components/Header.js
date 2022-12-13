import cookChef from "../assets/img/cookchef.png" ;

function Header() {
  return (
    <header className="header d-flex flex-row align-items-center">
        <i className="fa-solid fa-bars mr-15"/>
        <div className="logo flex-fill">
            <img src={cookChef} alt="logo" />
        </div>
        <ul>
            <button className="mr-5 btn btn-reverse-primary">
             <i className="fa-solid fa-basket-shopping mr-5"></i>
              <span>Panier</span>
            </button>
            <button className="btn btn-primary">Connexion</button>
        </ul>
    </header>
  )
}

export default Header