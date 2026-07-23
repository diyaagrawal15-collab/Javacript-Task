const buttons = document.querySelectorAll("button");
const colorBox = document.getElementById("colorBox");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;
    colorBox.style.backgroundColor = color;
  });
});
