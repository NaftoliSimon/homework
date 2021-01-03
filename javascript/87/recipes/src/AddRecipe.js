import React, { useState } from 'react';
import useForm from './useForm';

let highestId = 2;
export default function AddRecipe() {
    const [values, handleValueChange] = useForm({ id: highestId + 1 });
    highestId = highestId + 1; //should really have database keep track of highest id. 

    return (
        <>
            <h6>As of now form only creates a state with an object that defaults with id, and updates the state every input</h6>
            <form>
                <input type='name' placeholder='name' name='name' value={values.name} onChange={handleValueChange} />
                <input type='ingredients' placeholder='ingredients' name='ingredients' value={values.ingredients} onChange={handleValueChange} />
                <input type='directions' placeholder='directions' name='directions' value={values.directions} onChange={handleValueChange} />
                <input type='picture' placeholder='picture url' name='picture' value={values.picture} onChange={handleValueChange} />
                <input type='submit' value='Add Recipe' />
            </form>
        </>
    )
}//ingredients and directions should are supposed to be an array
