
const scrollUp = document.querySelector(".backtop");
const nextBtn = document.querySelector(".right-btn");
const prevBtn = document.querySelector(".left-btn");
const  slideImg = document.querySelectorAll(".img");
let selectedImg = 0;

const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navmenu")[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleBtn.classList.toggle('active');

    
})

document.querySelectorAll(".navbmenu").forEach(n => n.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}));



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

