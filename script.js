// Animation d’apparition des éléments au chargement
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hero h1, .hero h2, .hero p");
  elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(-20px)";
      setTimeout(() => {
          el.style.transition = "opacity 1s ease, transform 1s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
      }, (index + 1) * 500);
  });
});

const texts = [
  "Bienvenue sur mon portfolio !",
  
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
  if (charcterIndex < texts[textIndex].length){
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed);
  }
  else{
      setTimeout(eraseText, 1000)
  }
}
function eraseText(){
  if(textElements.innerHTML.length > 0){
      textElements.innerHTML = textElements.innerHTML.slice(0,-1);
      setTimeout(eraseText, 50)
  }
  else{
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500)
  }
}
window.onload = typeWriter



document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".sidebar nav ul li a");

  function changeActiveLink() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);
});


document.addEventListener("DOMContentLoaded", function() {
const timelineItems = document.querySelectorAll(".timeline-item");

function checkScroll() {
const triggerBottom = window.innerHeight * 0.85;

timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
        item.classList.add("visible");
    }
});
}

window.addEventListener("scroll", checkScroll);
checkScroll();
});


  document.addEventListener("DOMContentLoaded", function () {
      const dropBtn = document.querySelector(".drop-btn");
      const dropdown = document.querySelector(".dropdown");
  
      dropBtn.addEventListener("click", function (e) {
          e.preventDefault(); // Empêche le rechargement de la page
          dropdown.classList.toggle("active"); // Active/Désactive le menu déroulant
      });
  });
  
