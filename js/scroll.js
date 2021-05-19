/********* Smooth scroll arrow section AND Nav Bar Stick *********/

scroll = document.getElementById("scroll");
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {

    let currentScrollPos = window.pageYOffset ;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  if (prevScrollpos > currentScrollPos) {
      
    document.getElementById("navbarSticky").style.top = "0px";
  } else {
    document.getElementById("navbarSticky").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
    scrollDisplay()
    ScrollReveal().reveal('.headline');

};

function scrollDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
}

scroll.addEventListener("click", scrollToTop);


function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
     document.getElementById("navbarSticky").style.top = "0px"
}



// modal
const element1 = document.querySelector('#popOpAni');
// element1.classList.add('animate__animated', 'animate__zoomInUp');
// element1.style.setProperty('--animate-duration', '2s');
const element2 = document.querySelector('.back-to-top2 ');
element2.classList.add('animate__animated', 'animate__lightSpeedInRight');
element2.style.setProperty('--animate-duration', '2s');


const modalClose = document.querySelector("#modalClose")
const btn = document.querySelector("#modal-btn");
const modal =document.querySelector("#modal2");
const modalUl = document.querySelector("#modal2 > div");
window.onload = function() {
    setTimeout(function() {
       btn.classList.remove("hide");
    }, 5000);
}



btn.addEventListener("click",()=>{
    modal.classList.add("showModal"); 
    modal.classList.remove("hideModal"); 
  
     modalUl.classList.remove("hide"); 
     element1.classList.add('animate__animated', 'animate__zoomInUp');
element1.style.setProperty('--animate-duration', '1.5s');
    
   
})

modalClose.addEventListener("click", () => {
    modal.classList.add("hideModal"); 
    modal.classList.remove("showModal")
    element1.classList.remove('animate__animated', 'animate__zoomInUp');
});


// burger menu issue with transistion solved
const sideNav = document.querySelector(".sidenav");
const menuBurger = document.querySelector("#menu");

menuBurger.addEventListener("click", openMenu);
function openMenu(){
   sideNav.classList.remove("hide")
     console.log("clicked")
};














