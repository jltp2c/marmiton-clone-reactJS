import React, { useContext, useEffect, useState } from 'react'
import Recipe from './Recipe';
import { data } from '../../data/Recipes';
import Loading from '../../components/Loading/Loading';
import { ApiContext } from '../../context/ApiContext';


function Content() {

  const [recipes,setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter,setFilter] = useState("")
  const [page,setPage] = useState(1)
  const BASE_API = useContext(ApiContext)

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes (){
      try{
        setIsLoading(true)
        const response = await fetch(`${BASE_API}?skip=${(page-1)*6}&limit=6`);
        if (response.ok && !cancel){
          const newRecipes = await response.json();
          setRecipes(r => Array.isArray(newRecipes) ? [...r, ...newRecipes ]: [...r, newRecipes])
        }
      }catch(e){
        console.log('Ooops, erreur !')
      }finally{
        if(!cancel){
          setIsLoading(false)
        }
      }
    }
    fetchRecipes()
    return () => (cancel = true)
  },[BASE_API, page])

  function updateRecipe(updatedRecipe){
    setRecipes(recipes.map(r=>  (r._id === updatedRecipe._id ? updatedRecipe : r)))
  }

  function handleInput(e){
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase())
  }
  


  return (
    <div className='flex-fill d-flex flex-column container'>
      <h1 className='my-30'>Découvez nos nouvelles recettes <small className='small'>{recipes.length}</small></h1>
      <div className="card mb-20 d-flex flex-fill flex-column p-20 content-card">
        <div className="d-flex flex-row justify-content-center align-item-center my-30 searchBar">
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input onInput={handleInput} className='flex-fill' type="text" placeholder='rechercher' />
        </div>
        {isLoading && !recipes.length ? <Loading/> : (
           <div className="grid">
           {
           recipes.filter(r=> r.title.toLocaleLowerCase().startsWith(filter)).map(recette=> 
             (<Recipe key={recette._id} recipe={recette} toggleLikedRecipe={updateRecipe}/>))}
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