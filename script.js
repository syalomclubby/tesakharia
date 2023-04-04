setTimeout(function(){
  $('.bg-loader').fadeToggle();
}, 1500);

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
  dropdown.classList.toggle('activate');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Animation on scrolling
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function myDark() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}

function openLoginForm(){
  document.body.classList.add("showLoginForm");
}

function closeLoginForm(){
  document.body.classList.remove("showLoginForm");
}

function openSignUpForm(){
  document.body.classList.add("showSignUpForm");
}

function closeSignUpForm(){
  document.body.classList.remove("showSignUpForm");
}

function show(anything){
  document.querySelector('.textBox').value = anything;
}

function changeTitleColor(color){
  const filter = document.querySelector('.ttl-filter');
  filter.style.color = color;
}
function changeTitleColor2(color2){
  const filter2 = document.querySelector('.ttl-filter2');
  filter2.style.color = color2;
}
function changeTitleColor3(color3){
  const filter3 = document.querySelector('.ttl-filter3');
  filter3.style.color = color3;
}
function changeTitleColor4(color4){
  const filter4 = document.querySelector('.ttl-filter4');
  filter4.style.color = color4;
}
function changeTitleColor5(color5){
  const filter5 = document.querySelector('.ttl-filter5');
  filter5.style.color = color5;
}

let logoprofil = document.querySelector('.logoprofil');
logoprofil.onclick = function(){
  logoprofil.classList.toggle('activatee');
}