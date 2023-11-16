const cloud=document.getElementById ("cloud")
const barra=document.querySelector(".barra-lateral")
const spans=document.querySelectorAll("span")
const menu=document.querySelector(".menu-barra")
const main=document.querySelector("main")
const footer=document.querySelector("footer")




menu.addEventListener("click",()=>{
    barra.classList.toggle("max-barra-lateral")
    if(window.innerWidth<=320){
        barra.classList.add("mini-barra-lateral")
        main.classList.add("min-main")
        spans.forEach((span)=>{
            span.classList.add("oculto")
        })
    
    }
})


cloud.addEventListener("click",()=>{
    barra.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    footer.classList.toggle("min-footer")
spans.forEach((span)=>{
    span.classList.toggle("oculto") 
})
})

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide active';
}


