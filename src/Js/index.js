 //humberger menu
 const burgerIcon = document.querySelector("#menu");
 const navbar = document.querySelector('#navigations');
 burgerIcon.addEventListener('click', () =>{
  navbar.classList.toggle('is-active')})

//progress bar
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
  document.addEventListener('DOMContentLoaded', function () {
        const factsContainer = document.querySelector('.facts__ordered-list');
        const loadButton = document.querySelector('.blog__loadFactsButton');
        const factsToShow = 5; 
        showNextFacts(factsToShow);
        loadButton.addEventListener('click', function () {
            showNextFacts(factsToShow);
        });

        function showNextFacts(count) {
            const hiddenFacts = factsContainer.querySelectorAll('li.is-hidden');
            for (let i = 0; i < count && i < hiddenFacts.length; i++) {
                hiddenFacts[i].classList.remove('is-hidden');
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


//text color changer
let i = 0;
function colorChange() {
    let x = ["abt-text1", "abt-text2", "abt-text3"];
    let txtcolor = ["red", "yellow", "lightblue", "brown"];

    for (let j = 0; j < x.length; j++) {
        let divtag = document.getElementById(x[j]);
        divtag.style.color = txtcolor[i];
    }

    i = (i + 1) % txtcolor.length;
    setInterval(colorChange, 1000);
}

//js code
(function(){
  emailjs.init("Rk2cnDOB7JgXtPIMD");
})();

function sendMail() {
  let parms = {
    name: document.getElementById("Contact__name").value,
    email: document.getElementById("Contact__email").value,
    message: document.getElementById("Contact__message").value,
  };

  emailjs.send("service_e9wzwyv", "template_pk8b61g", parms)
    .then(function (response) {
      alert("Email sent!");
      clearForm(); 
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
    });
}

function clearForm() {
  document.getElementById("Contact__name").value = "";
  document.getElementById("Contact__email").value = "";
  document.getElementById("Contact__message").value = "";
}


 
//read more
function readFunction(index) {
  var dots = document.querySelector(".read-dots-" + index);
  var moreText = document.querySelector(".more-" + index);
  var btnText = document.querySelector(".readBtn-" + index);
  moreText.classList.toggle("is-hidden");
  if (moreText.classList.contains("is-hidden")) {
      dots.style.display = "inline";
      btnText.innerText = "Read More";
  } else {
      dots.style.display = "none";
      btnText.innerText = "Read Less";
  }
}



 






 //print cv
 document.getElementById("printbtn").onclick = function () {
  printCV();
};

function printCV() {
  var printWindow = window.open('images/img.html', '_blank');

  printWindow.onload = function () {
    printWindow.print();
  };
}


