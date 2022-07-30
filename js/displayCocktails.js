import getElement from './getElement.js';
import { hideLoading } from './spinnerLoading.js';


const displayCocktails = ({ drinks }) => {
    const section = getElement('.section-body');
    const titleCocktail = getElement('.title-cocktail');
    if(!drinks) {
        //hide loading
        hideLoading();

        titleCocktail.textContent = 'Lo siento, no se encontraron coincidencias';
        section.innerHTML = null;
        return;
    }

    const newCocktail = drinks.map((cocktail) => {
        //Cocktail object
        const {idDrink: id, strDrink: name, strDrinkThumb: image, strCategory: category} = cocktail;

        const listIngredients = [
            cocktail.strIngredient1,
            cocktail.strIngredient2,
            cocktail.strIngredient3,
            cocktail.strIngredient4,
            cocktail.strIngredient5
        ];

        return `<a href="cocktail.html" class="a-cocktails">
                    <article class="ccocktails" data-id="${id}">
                        <img src="${image}" alt="${name}">
                        <h3>${name}</h3>
                        <p><span>Categoría:</span> ${category}</p>
                        <p class="cocktail-ingredients"><span>Ingredientes: </span>${listIngredients[0]}, ${listIngredients[1]}, ${listIngredients[2]}</p>
                    </article>
                </a>`
    }).join('');

    //hide loading
    hideLoading();
    
    titleCocktail.textContent = '';
    section.innerHTML = newCocktail;
    return section;
}

export default displayCocktails;