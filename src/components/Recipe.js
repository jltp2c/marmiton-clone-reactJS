import React from 'react';
import {useState} from 'react'
 
function Recipe({title, image}) {

  const [liked,setLiked] = useState(false)

  function handleClick(){
    setLiked(!liked)
  }


  return (
    <div onClick={handleClick} className='recipe'>
        <div className='image-container'>
            <img src={image} alt="recipe" />
        </div>
        <div className='recipe-title d-flex flex-column justify-content-center align-items-center'>
            <h3 className='mb-10'>{title}</h3>
            <i className={`fa-solid fa-heart ${liked? "text-primary": ""}`}></i>
        </div>
    </div>
  )
}

export default Recipe