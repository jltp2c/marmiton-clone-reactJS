import React, { useState } from 'react'
import Recipe from './Recipe';
import { data } from '../data/Recipes';


function Content() {

  const recipes = data;
  const [filter,setFilter] = useState("")

  function handleInput(e){
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase())
  }

  return (
    <div className='flex-fill container'>
      <h1 className='my-30'>Découvez nos nouvelles recettes</h1>
      <div className="card d-flex flex-column p-20 content-card">
        <div className="d-flex flex-row justify-content-center align-item-center my-30 searchBar">
          <i class="fa-solid fa-magnifying-glass mr-15"></i>
          <input onInput={handleInput} className='flex-fill' type="text" placeholder='rechercher' />
        </div>
        <div className="grid">
          {recipes.filter(r=> r.title.toLocaleLowerCase().startsWith(filter)).map(recette=> 
            (<Recipe  title={recette.title} image={recette.image}/>))}
        </div>
      </div>
    </div>
  ) 
}

export default Content