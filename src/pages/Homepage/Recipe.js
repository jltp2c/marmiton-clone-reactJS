import React, { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

function Recipe({recipe : {liked,title,image,_id}, toggleLikedRecipe, deleteRecipe}) {


  const BASE_API = useContext(ApiContext)


  async function handleClick(){
   try{
    const response = await fetch (`${BASE_API}/${_id}`,{
      method : 'PATCH',
      headers: {
       'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        liked : !liked,
      })
    })

    if (response.ok) {
      const updatedRecipe = await response.json();
      toggleLikedRecipe(updatedRecipe)
    }

   }catch(e){
     console.log('erreur',e)
   }
  }

  async function handlClickDelete(e){
    e.stopPropagation();
    try{
      const response = await fetch(`${BASE_API}/${_id}`, {method:'DELETE'});
      if(response.ok){
        deleteRecipe(_id)
      }
    }catch(e){
      console.log('error')
    }
  }

  return (
    <div onClick={handleClick} className='recipe'>
      <i onClick={handlClickDelete} class="fa-sharp fa-solid fa-xmark"></i>
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