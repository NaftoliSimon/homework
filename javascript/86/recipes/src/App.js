import './App.css';
import React, { useState } from 'react';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';
import FuncRecipeDetails from './FuncRecipeDetails';

export default function App() {
    const recipesData = [
        {
            id: 1,
            name: 'hard boiled eggs',
            ingredients: ['eggs', 'water', 'salt'],
            directions: ['boil water', 'add eggs', 'salt to taste'],
            picture: 'https://hips.hearstapps.com/delish/assets/18/08/1519321899-hard-boiled-eggs-horizontal.jpg'
        },
        {
            id: 2,
            name: 'steak',
            ingredients: ['steak', 'barbeque sauce'],
            directions: ['marinate steak', 'grill for 8 minutes'],
            picture: 'https://www.omahasteaks.com/gifs/990x594/prfm7a.jpg'
        }
    ];

    const [recipesArray, recipeHandle] = useState(recipesData);
    const [selectedRecipe, selectedRecipeHandle] = useState(recipesData[0]);

    function handleRecipeSelected(recipe) {
        console.log('recipe selected', recipe);
        selectedRecipeHandle(selectedRecipe);
    }

    return (
        <div >
            <h1>PCS Recipes</h1>
            <hr />
            <RecipeList recipes={recipesArray} handleRecipeSelected={() => handleRecipeSelected} />
            <hr />
            <FuncRecipeDetails selectedRecipe={selectedRecipe} />
            <hr />
            <ClickCounter />
        </div>
    );
}
