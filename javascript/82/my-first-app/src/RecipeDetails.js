import React from 'react';

export default function RecipeDetails(props) {
    console.log('detail', props);
    return (
        <>
            <h2>{props.RecipeDetails.name}</h2>
            <h4>Ingredients: {props.RecipeDetails.ingredients}</h4>
            <h4>Instructions: {props.RecipeDetails.instructions}</h4>
        </>
    );
}
