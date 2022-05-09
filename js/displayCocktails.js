import getElement from './getElement.js'

const displayCocktails = ({ drinks }) => {
    const section = getElement('.section-body');
    const titleCocktail = getElement('.title-cocktail');
    if(!drinks) {
        titleCocktail.textContent = 'Lo siento, no se encontraron coincidencias';
        section.innerHTML = null;
        return;
    }

    const newCocktail = drinks.map((cocktail) => {
        //Cocktail object
        const {idDrink: id, strDrink: name, strDrinkThumb: image} = cocktail;

        return `<a href="#">
                    <article class="cocktails" data-id="${id}">
                        <img src="${image}" alt="${name}">
                        <h3>${name}</h3>
                    </article>
                </a>`
    }).join('');

    titleCocktail.textContent = '';
    section.innerHTML = newCocktail;
    return section;
}

export { displayCocktails }