import React from 'react'
import Recipe from './Recipe'

function Content() {
  return (
    <div className='flex-fill container'>
      <h1 className='my-30'>Découvez nos nouvelles recettes</h1>
      <div className="card p-20 content-card">
        <div className="grid">
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
          <Recipe/>
        </div>
      </div>
    </div>
  )
}

export default Content