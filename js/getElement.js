const getElement = (select) => {
    const element = document.querySelector(select);
    if (element) return element;
    throw new Error("No ha seleccionado elemento");
}

export default getElement;