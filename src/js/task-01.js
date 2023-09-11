/* 1 Cuente y muestre en la consola el número de categorías en ul#categories, es decir. los artículos li.item. */

const ulCategories = document.querySelector("#categories");
const liItem = ulCategories.querySelectorAll(".item");
const amountOfCategories = liItem.length;

console.log(`Number of categories: ${amountOfCategories}`)

/* 2 Para cada elemento li.item en la lista ul#categories, encuentre y envíe a la consola el texto del título del artículo (tag <h2>) y el número de artículos en la categoría (todo anidado <li>). */

liItem.forEach((category) => {
    const h2Category = category.querySelector("h2").textContent;
    const ulArticles = category.querySelector("ul");
    const liArticles = ulArticles.querySelectorAll("li");
    const amountOfArticles = liArticles.length;

    console.log(`Category: ${h2Category}`);
    console.log(`Elements: ${amountOfArticles}`);
});
