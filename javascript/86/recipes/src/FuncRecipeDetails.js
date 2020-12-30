import React from 'react';
import './RecipeDetails.css';
import BulletLessList from './BulletLessList';

export default function FuncRecipeDetails(props) {
  const { name, ingredients, directions, picture } = props.selectedRecipe;
  return (
    <div>
      <h2>{name}</h2>
      {/*{this.getPictureElem(picture, name)} <------TODO: make picture and button work with func as well
      <br/>
      <button onClick={this.togglePicture}>
        {/*text* /} picture
      </button>*/}
      <h3>ingredients</h3>
      <BulletLessList list={ingredients} />
      <h3>directions</h3>
      <BulletLessList list={directions} />
    </div>
  )
}