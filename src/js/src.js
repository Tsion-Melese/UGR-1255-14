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

//print cv
document.getElementById("printbtn").onclick = function () {
  printCV();
};

function printCV() {
  var printWindow = window.open("/images/Cv.html.png", "_blank");

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
