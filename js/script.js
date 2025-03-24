

 // --------------typed js---------------
var typed = new Typed("#animation-text", {
    strings: [ " Larry Daniels", " Developer", " Designer"],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    cursorChar: "|",
  });

//------------------NavBar Chang When Scroll Change Color------------------
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 700) { 
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


//--------------------Slider------------------

var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  speed: 500,
  grabCursor: 'true',
  autoplay: {
      delay: 9000,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
},

});





//--------------------loading------------------



window.addEventListener("load", () => {
    const loader = document.querySelector(".loader") ;
    loader.classList.add("loader--hidden");
    loader.addEventListener( "transitionend",() => {
        document.body.removeChild("loader");
    }

    )
}
)



// -------------- progress---------------

let aboutSec = document.getElementById("about");
let progresBars = document.querySelectorAll('.progress-bar')
window.addEventListener('scroll', () => {
    if (window.scrollY >= aboutSec.offsetTop - 150) {
        progresBars.forEach((prog) => {
            prog.style.width = prog.dataset.width;
        })
    }
})





// --------------counter ---------------


let nums = document.querySelectorAll(".num");
let section = document.querySelector(".row");
let started = false; 

window.onscroll = function () {

    // Counter Animation
    if (window.scrollY >= section.offsetTop+2430 && !started) {
        nums.forEach((num) => startCount(num));
        started = true;
    }
};

function startCount(el) {
    let goal = parseInt(el.dataset.goal, 10);
    let count = 0;
    let increment = Math.ceil(goal / 100); 
    let counting = setInterval(() => {
        count += increment;
        if (count >= goal) {
            el.textContent = goal; 
            clearInterval(counting);
        } else {
            el.textContent = count; 
        }
    }, 50); 
}






//------------------ Portfolio Slider------------------

const gallery = document.querySelectorAll('.gallery');
const portfolioModal = document.getElementById('portfolioModal');
const carouselPortfolio = document.getElementById('carouselPortfolio');


const modal = new bootstrap.Modal(portfolioModal);
const carousel = new bootstrap.Carousel(carouselPortfolio);

gallery.forEach((item, index) => {
    item.addEventListener('click', () => {
        modal.show();
        // Set the carousel to start from the clicked item
        carousel.to(index);
    });
});





