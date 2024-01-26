const center_btn = document.getElementById("home");
const left_btn = document.getElementById("orange_bio");
const left_btn2 = document.getElementById("form");
const right_btn = document.getElementById("rose_web");
const right_btn2 = document.getElementById("rouge_grafic");
const bottom_btn = document.querySelector("#bleu_projet");
const menu_burger = document.querySelector(".menu_burger");

const movable = document.querySelector(".movable");

// navigation vers les autres pages du site
// changement de couleur des picto git, in, mail et cv lorsqu'on navigue sur les différentes pages
const htmls_chg_color = document.querySelectorAll('.change_color');
let colors = ["orange", "rose", "vert", "bleu", "rouge"];
const remove_colors = function(){
    for (const html of htmls_chg_color) {
        for (const color of colors) {
            html.classList.remove(color);
        }
    }
};

const add_color = function (color) {
    for (const html of htmls_chg_color) {
        html.classList.add(color);
    }
}

center_btn.addEventListener("click", function(){
    movable.style.transform="";
    remove_colors();
    add_color("vert");
    menu_burger.style.visibility = "hidden";
    console.log(movable.style.transform);
});

left_btn.addEventListener("click", function(){
    movable.style.transform="translateX(100vw)";
    remove_colors();
    add_color("orange");
    menu_burger.style.visibility = "visible";
    console.log(movable.style.transform);
});

left_btn2.addEventListener("click", function(){
    movable.style.transform="translate(100vw, -100vh)";
    remove_colors();
    add_color("vert");
    menu_burger.style.visibility = "visible";
    console.log(movable.style.transform);
});

right_btn.addEventListener("click", function(){
    movable.style.transform="translateX(-100vw)";
    remove_colors();
    add_color("rose");
    menu_burger.style.visibility = "visible";
    console.log(movable.style.transform);
});

right_btn2.addEventListener("click", function(){
    movable.style.transform="translate(-100vw, -100vh)";
    remove_colors();
    add_color("rouge");
    menu_burger.style.visibility = "visible";
    console.log(movable.style.transform);
});

bottom_btn.addEventListener("click", function(){
    movable.style.transform="translateY(-100vh)";
    remove_colors();
    add_color("bleu");
    menu_burger.style.visibility = "visible";
    console.log(movable.style.transform);
});


// texte stage tourne autour cercle
const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
	)
	.join("");

