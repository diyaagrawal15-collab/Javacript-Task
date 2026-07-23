const page = document.getElementById("page");
const heading = document.getElementById("heading");
const redbtn = document.getElementById("redbtn");
const bluebtn = document.getElementById("bluebtn");
const greenbtn = document.getElementById("greenbtn");
const purplebtn = document.getElementById("purplebtn");

function changecolor(color, message,){
    page.style.backgroundColor = color;
    heading.innerHTML = message;
}

redbtn.addEventListener('click', function(){
    changecolor('red', 'Red selected!');
})

greenbtn.addEventListener('click', function(){
    changecolor('green', 'Green selected!');
})

bluebtn.addEventListener('click', function(){
    changecolor('blue', 'Blue selected!');
})

purplebtn.addEventListener('click', function(){
    changecolor('purple', 'purple selected!');
})

const resetbtn = document.getElementById('resetbtn');

resetbtn.addEventListener('click', function(){
    changecolor('white', 'color-palette!',);
})
