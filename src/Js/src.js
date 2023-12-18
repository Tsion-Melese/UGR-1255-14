


// Hamburger menu
function menu() {
    const menu = document.querySelector(".menu-bar__links");
    const icon = document.querySelector(".menu-bar__icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}



//time difference finder
function timeDifference(year, containerId) {
    var currentYear = new Date().getFullYear();
    var time = currentYear - year;
    var container = document.getElementById(containerId);
    container.innerHTML += "<br><strong>Time Difference:</strong> " + time + " years";
}
function calculateTimeDifferences() {
    var years = [2017, 2021, 2023, 2022, 2021, 2019, 2015, 2018, 2022, 2023, 2025];
    var graduationDate = new Date().getFullYear(); 

    for (var num = 0; num < years.length; num++) {
        if (num === years.length - 1) {
            timeDifference(graduationDate, "Year" + (num + 1));
        } else {
            timeDifference(years[num], "Year" + (num + 1));
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    calculateTimeDifferences();
   
});


//quote slider
document.addEventListener("DOMContentLoaded", () => {
    const textSliders = document.querySelectorAll(".blog__text-slider");

    textSliders.forEach((textSlider) => {
      let Slide = 0;
      const slides = textSlider.querySelectorAll(".blog__text-item");
      const totalSlides = slides.length;
      const prevButton = textSlider.querySelector(".text-prev");
      const nextButton = textSlider.querySelector(".text-next");

      const showSlide = (index) => {
        slides.forEach((slide) => {
          slide.style.display = "none";
        });
        slides[index].style.display = "block";
      };

      const nextSlide = () => {
        Slide = (Slide + 1) % totalSlides;
        showSlide(Slide);
      };

      const prevSlide = () => {
        Slide = (Slide - 1 + totalSlides) % totalSlides;
        showSlide(Slide);
      };

      showSlide(Slide);
      nextButton.addEventListener("click", nextSlide);
      prevButton.addEventListener("click", prevSlide);

      setInterval(() => {
        nextSlide();
      }, 5000);
    });
  });


  // Load more facts
  document.addEventListener('DOMContentLoaded', function () {
    const factsContainer = document.querySelector('.facts__ordered-list');
    const loadButton = document.querySelector('.blog__loadFactsButton');
    const factsToShow = 5; 
    showNextFacts(factsToShow);
    loadButton.addEventListener('click', function () {
      showNextFacts(factsToShow);
    });
    function showNextFacts(count) {
      const hiddenFacts = factsContainer.querySelectorAll('li:not([style*="display: list-item"])');
      for (let i = 0; i < count && i < hiddenFacts.length; i++) {
        hiddenFacts[i].style.display = 'list-item';
      }
      if (hiddenFacts.length <= count) {
        loadButton.style.display = 'none';
      }
    }
  });


//Add to favortites
  function addToFavorites(podcast) {
  alert(`${podcast} added to favorites!`);
  }


// Image slider
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



// Text color changer
let i = 0;

function colorChange() {
    let x = ["abt-text1", "abt-text2", "abt-text3"];
    let txtcolor = ["red", "yellow", "lightblue", "brown"];

    for (let j = 0; j < x.length; j++) {
        let divtag = document.getElementById(x[j]);
        divtag.style.color = txtcolor[i];
    }

    i = (i + 1) % txtcolor.length;
}

setInterval(colorChange, 1000);


// Video fullscreen display
function fullView(Link) {
    document.getElementById("mediaView").src = Link;
    document.getElementById("fullScreen").style.display = "flex";
    document.getElementById("mediaView").play(); 
}

document.getElementById("fullScreen").addEventListener("click", () => {
    document.getElementById("mediaView").pause();
    document.getElementById("fullScreen").style.display = "none";
});

document.getElementById("printbtn").onclick = function() {
    printCV();
};


//email sender
(function(){
    emailjs.init("Rk2cnDOB7JgXtPIMD");
  })();
  function sendMail(){
  let parms ={
    name: document.getElementById("Contact__name").value,
    email: document.getElementById("Contact__email").value,
    message: document.getElementById("Contact__message"),
  
  }
  emailjs.send("service_e9wzwyv", "template_pk8b61g", "service_e9wzwyv", parms.then(alert("Email sent!")) )
  }
  //read more
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


  //print cv
  
document.getElementById("printbtn").onclick = function () {
  printCV();
};

function printCV() {
  var printWindow = window.open('../images/img.html', '_blank');

  printWindow.onload = function () {
    printWindow.print();
  };
}

//circular skill bar
document.querySelectorAll(".cv__circular-progress").forEach((circular) => {
    let progressValue = circular.querySelector(".cv__progress-value");

    let progressStart = 0,
        progressEnd = parseInt(progressValue.textContent),
        speed = 20;

    let progress = setInterval(() => {
        progressStart++;
        progressValue.textContent = `${progressStart}%`;

        circular.style.background = `conic-gradient(purple ${progressStart * 3.6}deg, #ededed 0deg)`;

        if (progressStart == progressEnd) {
            clearInterval(progress);
        }
    }, speed);
});

 

