
const scrollUp = document.querySelector(".backtop");
const nextBtn = document.querySelector(".rightBtn");
const prevBtn = document.querySelector(".leftBtn");
const  slideImg = document.querySelectorAll(".img");
let selectedImg = 0;

prevBtn.addEventListener("click", () => {
    slideImg[selectedImg].classList.remove("active");
    selectedImg --;

    slideImg[selectedImg].classList.add("active");
    nextBtn.disabled = false;

    if(selectedImg === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener("click", () => {
    slideImg[selectedImg].classList.remove("active");
    selectedImg++;

    slideImg[selectedImg].classList.add("active");
    prevBtn.disabled = false;
    
    if(slideImg.length -1 === selectedImg) {
        nextBtn.disabled = true;
    }
 })

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200){
        scrollUp.classList.add("active");
    }else {
        scrollUp.classList.remove("active");
    }
})

const toggleBtn = document.getElementsByClassName("toggle")[0];
const navLinks = document.getElementsByClassName("navmenu");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggleBtn.classList.toggle("active");
});

document.querySelectorAll(".navmenu").forEach(n = n.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggleBtn.classList.toggle("active");
}))


