let menutoggle = document.querySelector('.menu_toggle');
let header = document.querySelector('header');

menutoggle.onclick = function () {
  header.classList.toggle('active');
}
// Get the button
let mybutton = document.getElementById("TopBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const toggle = document.getElementById('toggle1');
const header2 = document.getElementById('header2');
toggle.addEventListener("click", () => {
  header2.classList.toggle("close");
})
var modal = document.getElementById("myModal");
var btn = document.getElementById("modal-btn");
var span = document.getElementById("close-modal");

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var count = 0;
function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);

  s2.innerHTML = "";
  if (s1.value == "Харків") {
    var optionArray = ['першаХа|ПершаХа|', 'другаХа|ДругаХа|', 'третяХа|ТретяХа|'];
  }
  else if (s1.value == "Київ") {
    var optionArray = ['першаКиїв|ПершаКиїв|', 'другаКиїв|ДругаКиїв|', 'третяКиїв|ТретяКиїв|'];
  }
  else if (s1.value == "Львів") {
    var optionArray = ['першаЛьвів|ПершаЛьвів|', 'другаЛьвів|ДругаЛьвів|', 'третяЛьвів|ТретяЛьвів|'];
  }

  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");

    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }

  if (count == 0) {
    remove();
  }
  count++;
}

function remove() {
  var x = document.getElementById("cities");
  var y = document.getElementById("city");
  x.remove(x.y);
}

function formValidate(form) {
  let msg = '';
  msg += nameValidate();
  msg += cityValidate();
  msg += emailValidate();
  msg += phoneValidate();
  msg += checkboxValidate();

  if (msg === '') {
    return true;
  } else {
    const form_msg = document.querySelector(`.error_msg[data-form="${form.name}"]`);
    form_msg.innerHTML = msg;
    form_msg.style.display = 'block';

    if (msg >= 50) {
      input.style.height = 10;
    }
    return false;
  }
}

function nameValidate() {
  var first_name = document.getElementById('first_name').value.trim();
  var second_name = document.getElementById('second_name').value.trim();
  const Name = /^[A-Za-zА-ЯЇІа-яїі]+$/;

  if (!Name.test(first_name) || !Name.test(second_name)) {
        return "Перевірте правільність вводу імені<br>";
    }
  
  return "";
}

function cityValidate() {
  var event = document.getElementById('Events').value.trim();
  const Event = /^[А-ЯЇІа-яїі]+$/;

  if (!Event.test(event)) {
        return "Будь ласка оберіть місто та виставу<br>";
    }
  return "";
}

function emailValidate() {
  var email = document.getElementById('Email').value.trim();
  const Email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]/;

  if (!Email.test(email)) {
        return "Будь ласка введіть дійсний адрес пошти<br>";
    }
  
  return "";
}

function phoneValidate(){
  var email = document.getElementById('Phone').value.trim();
  const Email = /^\+38\(\d{3}\)\d{3}\-\d{2}\-\d{2}/;
  if (!Email.test(email)) {
        return "Будь ласка введіть номер телефона<br>";
    }
  return "";
}

function checkboxValidate(){
  var checkbox = document.getElementById('formAgreement');
  if (!checkbox.checked) {
    return "Будь ласка підтвердіть згоду з умовами<br>";
}
return "";
}


//phone mask//
const element = document.getElementById('Phone');
const maskOptions = {
  mask: '+{38}(000)000-00-00'
};
const mask = IMask(element, maskOptions);


/* Встановлюємо стартовий індекс слайду за замовчуванням: */
let slideIndex = 1;
var BTN = document.querySelector(".check-btn");

BTN.onclick = function () {
  BTN.classList.toggle('checked');
}

var currentBTN = document.getElementsByClassName("checked");

showSlides(slideIndex);
function nextSlide(currentBTN) {
    showSlides(slideIndex += 1);
}
function previousSlide(currentBTN) {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функція перегортання: */
function showSlides(n) {
/* Звертаємось до елементів з назвою класу "item", тобто до картинок: */
    let slides = document.getElementsByClassName("MyItem");
    
/* Перевіряємо кількість слайдів: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
/* Проходимо по кожному слайду в циклі for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Робимо елемент блоковим: */
    slides[slideIndex - 1].style.display = "block";    
}
