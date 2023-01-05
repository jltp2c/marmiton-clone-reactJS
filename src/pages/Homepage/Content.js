import React, { useContext, useEffect, useState } from 'react'
import Recipe from './Recipe';
import Loading from '../../components/Loading/Loading';
import { ApiContext } from '../../context/ApiContext';
import Search from './Search';
import UseFetchData from '../../hooks/UseFetchData';

function Content() {

  const [filter,setFilter] = useState("")
  const [page,setPage] = useState(1)
  const BASE_API = useContext(ApiContext)
  const [[recipes, setRecipes], isLoading] =  UseFetchData(BASE_API, page) 

  function updateRecipe(updatedRecipe){
    setRecipes(recipes.map(r=>  (r._id === updatedRecipe._id ? updatedRecipe : r)))
  }

  function deleteRecipe(_id){
    setRecipes(recipes.filter(r=> r._id !== _id))
  }

  return (
    <div className='flex-fill d-flex flex-column container'>
      <h1 className='my-30'>Découvez nos nouvelles recettes <small className='small'>{recipes.length}</small></h1>
      <div className="card mb-20 d-flex flex-fill flex-column p-20 content-card">
        <Search setFilter={setFilter}/>
        {isLoading && !recipes.length ? <Loading/> : (
           <div className="grid">
           {
           recipes.filter(r=> r.title.toLocaleLowerCase().startsWith(filter)).map(recette=> 
             (<Recipe key={recette._id} recipe={recette} deleteRecipe={deleteRecipe} toggleLikedRecipe={updateRecipe}/>))}
         </div>
        ) }
       <div className='d-flex flex-row justify-content-center align-items-center p-20'>
         <button onClick={() =>setPage(page+1)} className='btn btn-primary p-20'>Voir plus...</button>
       </div>
      </div>
    </div>
  ) 
}

export default Content