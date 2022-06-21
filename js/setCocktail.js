const setCocktail = (section) => {
    section.addEventListener('click', function (e) {
        e.preventDefault();
        //Obtener id del coctel
        const id = e.target.parentElement.dataset.id;
        
        //JSON
        localStorage.setItem('cocktail', id);
    });
}

export default setCocktail;