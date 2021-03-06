import getElement from './getElement.js';
import getData from './loadDATA.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; //Busqueda por URL de API

const form = getElement('.form'); //Guardar variable de formulario
const input = getElement('[name="cocktail"]'); //Guardar variable del input del form

form.addEventListener('keyup', function (e) {
    e.preventDefault();
    const value = input.value; //Guardar valor del input
    
    if(!value) return;
    getData(`${URL}${value}`);
});