// Responsive Nav
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Smooth Scroll
let anchorSelector = '.nav-menu a[href^="#"]';
let anchorList = document.querySelectorAll(anchorSelector);
    
    anchorList.forEach(link => {
    link.onclick = function (e) {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
        e.preventDefault();

        let destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// Scroll to top
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

  backToTopButton.addEventListener("click", goToTop)

// Contact Form Tabs
document.addEventListener('DOMContentLoaded', function(){
  const tabs = document.getElementsByClassName('tab');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
  }

  function tabSwitch(){
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);

    document.getElementsByClassName('contact-form')[index].classList.add('is-show');
  };
}, false);

// AOS Animations
AOS.init({
  //offset: 400, 
  delay: 0, 
  duration: 1000 
});



  

  

          