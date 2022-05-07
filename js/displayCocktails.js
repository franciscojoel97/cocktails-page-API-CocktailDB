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
        return `<a href="#">
                    <article class="cocktails">
                        <img src="" alt="cocktails">
                        <h3></h3>
                    </article>
                </a>`
    }).join('');
}

export { displayCocktails }