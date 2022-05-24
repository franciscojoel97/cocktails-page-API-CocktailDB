import fetchCocktail from "./fetchCocktails.js";
import displayCocktails from "./displayCocktails.js";

//Cargar datos de la API
const getData = async (api) => {
    
    const data = await fetchCocktail(api);

    //Mostrar cocteles
    const section = await displayCocktails(data);
    console.log(section);
    
}

export default getData;