import { data } from "./Recipes";


export async function Seed() {
  await fetch('https://restapi.fr/api/recipes',{
      method : "POST",
      headers : {
          'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data)
  })
}

