import displayCocktails from "./displayCocktails.js";
import fetchCocktail from "./fetch.js";

//Cargar datos de la API
const getData = async (API) => {
    
    const data = await fetchCocktail(API);

    //Mostrar cocteles
    const section = await displayCocktails(data);
    console.log(section);
    
}

export default getData;