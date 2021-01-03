import './RecipeDetails.css';
import React, { useState, useEffect } from 'react'
import BulletLessList from './BulletLessList';
import { Link, useParams } from 'react-router-dom';

export default function RecipeDetails() {

  const [imageShowing, changeImageshowing] = useState(true); //TODO: picture and button
  const [name, setName] = useState();
  const [ingredients, setIngredients] = useState();
  const [directions, setDirections] = useState();
  let { recipeId } = useParams();

  useEffect(() => {
    (async () => {

      try {
        const response = await fetch(`/data/${recipeId}.json`);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const recipe = await response.json();
        setIngredients(recipe.ingredients)
        setName(recipe.name)
        setDirections(recipe.directions)
        //picture
      } catch (err) {
        console.error(err);
      }
    })();
  }, [recipeId]); 
  // togglePicture = () => {
  //   this.setState({
  //     imageShowing: !this.state.imageShowing
  //   });
  // }

  // getPictureElem(picture, name) {
  //   /*return this.state.imageShowing ?
  //     <img className="img-fluid img-thumbnail img" src={picture} alt={name} /> :
  //     null;*/
  //   if (this.state.imageShowing) {
  //     return <img className="img-fluid img-thumbnail img" src={picture} alt={name} />
  //   }
  //   return null;
  // }

if (!name || !ingredients || !directions) {
  if (!name) {
    return 'no name';
  }
  if (!ingredients) {
    return 'no ingrediants';
  }
  if (!directions) {
    return 'no directions';
  }
}
  

  //const { name, ingredients, directions, picture } = recipe;

  /*const pictureElem = this.state.imageShowing ?
    <img className="img-fluid img-thumbnail img" src={picture} alt={name} /> :
    null;*/

  //const text = imageShowing ? 'hide' : 'show';

  return (
    <div>
      <h2>{name}</h2>
      {/* {/*pictureElem* /this.getPictureElem(picture, name)}
      <br />
      <button onClick={this.togglePicture}>
        {text} picture
        </button> */}
      <h3>ingredients</h3>
      <BulletLessList list={ingredients} />
      <h3>directions</h3>
      <BulletLessList list={directions} />

      <Link to='/recipe/1'>Recipe 1</Link>
    </div>
  )
}

// TODO: Picture and button
