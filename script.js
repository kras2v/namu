let menutoggle = document.querySelector('.menu_toggle');
let header = document.querySelector('header');

menutoggle.onclick = function(){
    header.classList.toggle('active');
}
// Get the button
let mybutton = document.getElementById("myBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
