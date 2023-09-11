const counter = document.getElementById("counter");
const spanValue = document.getElementById("value");
const incrementButton = counter.querySelector("[data-action='increment']");
const descrementButton = counter.querySelector("[data-action='decrement']");

/* Cree una variable counterValue para almacenar el valor actual e inicializarlo con el valor 0.*/
let counterValue = 0;

function newValue() {
    spanValue.textContent = counterValue;
}
/* Añada escuchas de clic a los botones, dentro de los cuales aumenta o disminuye el valor del contador. */
incrementButton.addEventListener("click", () => {
    counterValue += 1;
    newValue();
});

descrementButton.addEventListener("click", () => {
    counterValue -= 1;
    newValue();
});
/*Actualice la interfaz con el nuevo valor de la variable counterValue.*/
newValue();