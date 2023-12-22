
 // Hamburger menu
 function menu() {
  const menu = document.querySelector(".md\\:opacity-100");
  menu.classList.toggle("opacity-0");
  menu.classList.toggle("opacity-100");
}


//circular skill bar
document.querySelectorAll(".progress").forEach((progressContainer) => {
let progressBar = progressContainer;
let progressValue = progressContainer.nextElementSibling.nextElementSibling;

let progressStart = 0;
let progressEnd = parseInt(progressValue.textContent);
let speed = 20;

let progress = setInterval(() => {
progressStart++;
progressBar.value = progressStart;
progressValue.textContent = `${progressStart}%`;

if (progressStart > progressEnd) {
  clearInterval(progress);
}
}, speed);
});

//image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const init = (n) => {
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        dots.forEach((dot, index) => {
            dot.classList.remove("active");
        });
    });
    slides[n].style.display = "block";
    dots[n].classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => {
    init(currentSlide);
});

const next = () => {
    currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
    init(currentSlide);
    event.preventDefault(); 
};

const prev = () => {
    currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
    init(currentSlide);
    event.preventDefault();
};

document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);

setInterval(() => {
    next();
}, 4000);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        console.log(currentSlide);
        init(i);
        currentSlide = i;
    });
});

//print cv
document.getElementById("printbtn").onclick = function () {
  printCV();
};

function printCV() {
  var printWindow = window.open('tai.html', '_blank');

  printWindow.onload = function () {
    printWindow.print();
  };
}


//readmore
function readFunction(index) {
  var dots = document.querySelector(".read-dots-" + index);
  var moreText = document.querySelector(".more-" + index);
  var btnText = document.querySelector(".readBtn-" + index);

  if (dots.style.display === "none" || dots.style.display === "") {
    dots.style.display = "inline";
    btnText.innerText = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerText = "Read Less";
    moreText.style.display = "inline";
  }
}
