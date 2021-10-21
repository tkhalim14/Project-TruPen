var slideIndex = 1;
var val;
showDivs(slideIndex);

function plusDivs(n) {
    val = n;
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].classList.add("left");
    }
    if (val != 1) {
        x[slideIndex - 1].classList.remove("left");
        x[slideIndex - 1].classList.add("right");
    } else {
        x[slideIndex - 1].classList.remove("right");
        x[slideIndex - 1].classList.add("left");
    }
    x[slideIndex - 1].style.display = "block";
}