const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  const fontSizeValue = fontSizeControl.value + "px";
  textSpan.style.fontSize = fontSizeValue;
});