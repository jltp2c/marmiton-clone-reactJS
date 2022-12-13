import React from 'react'
import Recipe from './Recipe';
import { data } from '../data/Recipes';


function Content() {

  const recipes = data;

  return (
    <div className='flex-fill container'>
      <h1 className='my-30'>Découvez nos nouvelles recettes</h1>
      <div className="card p-20 content-card">
        <div className="grid">
          {recipes.map(recette=> 
            (<Recipe  title={recette.title} image={recette.image}/>))}
        </div>
      </div>
    </div>
  ) 
}

export default Content