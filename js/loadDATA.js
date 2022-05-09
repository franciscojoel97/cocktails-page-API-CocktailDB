import { displayCocktails } from "./displayCocktails.js";

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=d';

//Cargar datos de la API
const getData = async () => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);

        //Mostrar cocteles
        const section = await displayCocktails(data);
        console.log(section);
    } catch (error) {
        console.log(error);
    }
}

export { getData }