// Timer function
function countdown() {
    var seconds = document.getElementById('seconds').value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert('Time\'s up!');
            clearTimeout(time);
            timer.InnerHTML = "";
        } 
    }
    tick();
}
 
// Slideshow
let slideIndex = 1; /* Sets variable slideIndex to 1 */
showSlides(slideIndex); /* creates function and passes slideIndex through the function */

// Next/previous controls
function plusSlides(n) { 
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function that runs
function showSlides(n) {
  let i; /* Create variable i */
  let slides = document.getElementsByClassName("mySlides"); /* make the value of the variable slides equal to the element with the class name 'mySlides' */
  let dots = document.getElementsByClassName("dot"); /* make the value of the variable slides equal to the element with the class name 'mySlides' */
  if (n > slides.length) {slideIndex = 1} /* conditional statement - if n is larger than the length of the slides variable then the slideIndex variable = 1 */
  if (n < 1) {slideIndex = slides.length} /* conditional statement - if n is larger than smaller than 1 then the slideIndex variable = the length of the slides variable */
  for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none";
  } /* for loop - if i = 0 then change slide 0 to hidden, then the same for if i is smaller than the length of slides and then finally increase the value of i by 1 */
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } /* for loop - if i = 0 then change the class of dot 0 to active, then the same if i is smaller than dots length,a nd finally add 1 to the i value */
  slides[slideIndex-1].style.display = "block"; /* Sets the display of the slide at slideIndex-1 to block*/
  dots[slideIndex-1].className += " active"; /* Sets the display of the slide at slideIndex+1 to active*/
}