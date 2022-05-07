import getElement from './getElement.js'

const displayCocktails = ({ drinks }) => {
    const section = getElement('.section-body');
    const titleCocktail = getElement('.title-cocktail');
    if(!drinks) {
        titleCocktail.textContent = 'Lo siento, no se encontraron coincidencias';
        section.innerHTML = null;
        return;
    }
}

export { displayCocktails }