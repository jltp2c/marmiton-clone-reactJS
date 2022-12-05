import React from 'react';
import recipe from "../assets/img/recette.png"

function Recipe() {
  return (
    <div className='recipe'>
        <div className='image-container'>
            <img src={recipe} alt="recipe" />
        </div>
        <div className='recipe-title d-flex flex-row justify-content-center align-items-center'>
            <h3>Poulet Champignon</h3>
        </div>
    </div>
  )
}

export default Recipe