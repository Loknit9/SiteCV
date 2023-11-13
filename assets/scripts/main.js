const center_btn = document.getElementById("home");
const left_btn = document.getElementById("orange");
const left_btn2 = document.getElementById("form");
const right_btn = document.getElementById("rose");
const right_btn2 = document.getElementById("rouge");
const bottom_btn = document.getElementById("bleu");

const movable = document.querySelector(".movable");

center_btn.addEventListener("click", function(){
    movable.style.transform="translate=(0vw, 0vh)";
    console.log(movable.style.transform);
});

left_btn.addEventListener("click", function(){
    movable.style.transform="translateX(100vw)";
    console.log(movable.style.transform);
});

left_btn2.addEventListener("click", function(){
    movable.style.transform="translate(100vw, -100vh)";
    console.log(movable.style.transform);
});

right_btn.addEventListener("click", function(){
    movable.style.transform="translateX(-100vw)";
    console.log(movable.style.transform);
});

right_btn2.addEventListener("click", function(){
    movable.style.transform="translate(-100vw, -100vh)";
    console.log(movable.style.transform);
});

bottom_btn.addEventListener("click", function(){
    movable.style.transform="translateY(-100vh)";
    console.log(movable.style.transform);
});