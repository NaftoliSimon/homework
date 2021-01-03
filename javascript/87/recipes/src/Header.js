import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>PCS Recipes</h1>
      <NavLink to='/recipes'>recipe list</NavLink> | <NavLink to='addRecipe'>Add A Recipe</NavLink>
      <hr />
    </header>
  )
}
