import fetchCocktail from "./fetchCocktails.js";
import displayCocktails from "./displayCocktails.js";
import setCocktail from "./setCocktail.js";

//Cargar datos de la API
const getData = async (api) => {
    
    const data = await fetchCocktail(api);
    console.log(data);
    //Mostrar cocteles
    const section = await displayCocktails(data);
    /* console.log(section); */
    if (section) {
        setCocktail(section);
    }
    
}

export default getData;