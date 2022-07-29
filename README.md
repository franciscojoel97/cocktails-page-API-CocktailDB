# COCTELIER PUB - CONSUMO DE API

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