import { hideLoading } from './spinnerLoading.js'; //importar ocultar loading
import getElement from './getElement.js';

const displayCocktail = (data) => {
    hideLoading();
    
    const drink = data.drinks[0];
    const {strDrinkThumb: image, strDrink: name, strInstructions: desc} = drink;
    //Listado de ingredientes
    const listIngredients = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5
    ];

    //Obtenemos la referencia de las clases del documento HTML
    const img = getElement('.cocktail-img');
    const cocktailName = getElement('.cocktail-name');
    const description = getElement('.cocktail-desc');
    const ingredientes = getElement('.cocktail-ingredients');

    console.log(drink, listIngredients);
}

export default displayCocktail;