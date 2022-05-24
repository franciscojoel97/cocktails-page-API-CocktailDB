import getData from "./js/loadDATA.js";
import './js/search.js';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener("DOMContentLoaded", () => {
    getData(API_URL);
});
