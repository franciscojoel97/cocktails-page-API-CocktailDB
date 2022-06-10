/**
**Fetch para traer datos de la API 
*/
import { showLoading } from "./spinnerLoading.js";

const fetchCocktail = async (url) => {
    //Show Loading spinner
    showLoading();
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchCocktail;