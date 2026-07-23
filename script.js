const themeBtn = document.getElementById("themeBtn");

console.log(themeBtn);

themeBtn.addEventListener("click", function () {
    alert("Button Clicked!");
    document.body.classList.toggle("dark-mode");
});