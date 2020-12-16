import './App.css';
import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeDetails from './RecipeDetails';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Pizza',
        ingredients: 'Pizza Crust, Tomato Sauce, Cheese',
        instructions: 'Spread the sause on the pizza crust. Lay the cheese on top. Cook until you burn the Pizza and have to order from a resaurant instead.'
      },
      {
        id: 2,
        name: 'Salad',
        ingredients: 'Lettuce, Tomato, Cucumber, Pepper, Salad Dressing',
        instructions: 'Mix any amount of all or most of the ingrediants together. Do not cook salad and do not ask why.'
      },
      {
        id: 3,
        name: 'Salt Water',
        ingredients: 'Salt, Water',
        instructions: 'Mix 1 cup of salt with 1 tbs of salt with only a spork. Drink it all. Much healthier than Soda.'
      }
    ]
  }
  render() {
    const theRecipes = this.state.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id} />);
    return (
      <div className="App">

        <h1>Recipes</h1>
        {theRecipes}
        <br />
        <h2>Currently selected Recipe:</h2>
        <RecipeDetails RecipeDetails={this.state.recipes[0]} />

      </div>
    );
  }
}

export default App;
