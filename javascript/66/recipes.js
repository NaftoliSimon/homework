(function () {
    'use strict';

    const pizza = $('#pizza');
    const smores = $('#smores');
    const ccPretzels = $('#ccPretzels');
    const recipeDisplay = $('#recipeDisplay');
    const recipeName = $('#recipeName');
    const recipePhoto = $('#recipePhoto');
    const ingredientsTitle = $('#ingredientsTitle');
    let oldArraylength;

    function fetchData(elem, file) {
        elem.change(() => {
            fetch(file)
                .then(r => {
                    if (!r.ok) {
                        throw new Error(`${r.status} ${r.statusText}`);
                    }
                    return r.json();
                })
                .then(r => displayRecipe(r.name, r.photo, r.ingredients))
                .catch(err => console.error(err));
        });

        function displayRecipe(name, photo, ingredients) {
            clearIngredients();
            ingredientsTitle.text('Ingredients');
            recipeName.text(name);
            recipePhoto.show();
            recipePhoto.attr('src', photo);
            for (let i = 0; i < ingredients.length; i++) {
                recipeDisplay.append(`<p id="ingredient${i}">${ingredients[i]}</p>`);
            }
            oldArraylength = ingredients.length;
        }
        function clearIngredients() {
            for (let i = 0; i < oldArraylength; i++) {
                $(`#ingredient${i}`).remove();
            }
        }
    }
    fetchData(pizza, 'json/pizza.json');
    fetchData(smores, 'json/smores.json');
    fetchData(ccPretzels, 'json/ChocolateCoverdPretezels.json');

}());