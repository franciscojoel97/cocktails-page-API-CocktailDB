import getElement from './getElement.js';

const loading = getElement('.spinner'); //guardar clase del loading spinner

//Mostrar loading spinner
export const showLoading = () => {
    loading.classList.remove('hide-spinner');
}

//Ocultar loading spinner
export const hideLoading = () => {
    loading.classList.add('hide-spinner');
}