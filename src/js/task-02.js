/* 4 Después, inserte todos los <li> en una sola operación en la lista ul#ingredients.*/
document.addEventListener("DOMContentLoaded",() =>{
  /* 1 Cree un elemento separado <li>. Asegúrese de usar el método document.createElement(). */
const liIngredients = document.querySelector("#ingredients")
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/* 2 Añada el nombre de un ingrediente como contenido de texto.*/

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
/* 3 Añada una clase item al elemento.*/
  liElement.classList.add("item");
  liIngredients.appendChild(liElement);
});
});



