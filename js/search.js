import { getElement } from './getElement.js';
import { getData  } from './loadDATA.js';

//Busqueda por URL
const URL = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = getData('.form-search'); //Guardar variable de formulario
const input = getData('[name="cocktail"]'); //Guardar variable del input del form

form.addEventListener('keyup', (e) => {
    e.preventDefault();
});