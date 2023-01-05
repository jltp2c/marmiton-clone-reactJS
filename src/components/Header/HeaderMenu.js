
function HeaderMenu({setPage}) {
  return (
    <div>
        <ul className="menuContainer card p-20">
          <li onClick={()=>setPage('admin')}>Ajouter une recette</li>
            <li>Wishlist</li>
            <li>Connexion</li>
        </ul>
    </div>
  )
}

export default HeaderMenu