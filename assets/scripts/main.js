const center_btn = document.querySelector("footer li:first-child");
const left_btn = document.querySelector("footer li:nth-child(2)");
const right_btn = document.querySelector("footer li:nth-child(3)");
const bottom_btn = document.querySelector("footer li:last-child");

const movable = document.querySelector(".movable");

center_btn.addEventListener("click", function(){
    movable.style.transform="";
    console.log(movable.style.transform);
});


left_btn.addEventListener("click", function(){
    movable.style.transform="translateX(100vw)";
    console.log(movable.style.transform);
});

right_btn.addEventListener("click", function(){
    movable.style.transform="translateX(-100vw)";
    console.log(movable.style.transform);
});

bottom_btn.addEventListener("click", function(){
    movable.style.transform="translateY(-100vh)";
    console.log(movable.style.transform);
});