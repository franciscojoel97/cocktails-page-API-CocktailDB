# COCTELIER PUB - CONSUMO DE API

## DESCRIPCIÓN

Proyecto elaborado en HTML, CSS y JAVASCRIPT, muestra datos (nombre, categoría, ingredientes e imagen) mediante el consumo de la API TheCocktailDB. También incorpora un formulario de búsqueda para encontrar tus bebidas favoritas.
Se aplica el uso de módulos en el código JAVASCRIPT.

## MAQUETACIÓN HTML
Se aplica el uso de las etiquetas semánticas de HTML5.

```html
<section>
    <article class="cocktail-info">
        <h2>Introduce tu título</h2>
    </article>
</section>
```

## DISEÑO CSS
Se emplea el uso de CSS Flexbox para el diseño y ajuste del contenido principal de la web, aquí se puede observar un ejemplo del código utilizado. 

```css
.section-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
```

## TheCocktailDB API

Consumo de la API TheCocktailDB con fetch.

```js 
const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=?';

const dataJSON = async(API) {
    try {
        const res = await fetch(API);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
```

## Author

- Frontend Mentor - [@franciscojoel97](https://www.frontendmentor.io/profile/franciscojoel97)
- Twitter - [@FranciscoJoelC4](https://twitter.com/FranciscoJoelC4)
