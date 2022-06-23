import fetchCocktail from './js/fetchCocktails.js';
import displayCocktail from './js/displaySingleCocktail.js';

const presentCocktail = async () => {
    const id = localStorage.getItem('cocktail');

    if(!id) {
        //redirige a la página principal
        window.location.replace('index.html');
    } else {
        //Consulta a la API por medio del id
        const cocktail = await fetchCocktail(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

        displayCocktail(cocktail);
    }
    
}

window.addEventListener('DOMContentLoaded', presentCocktail);